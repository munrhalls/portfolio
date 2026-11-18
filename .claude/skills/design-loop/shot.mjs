/** Renders a page to a PNG: node shot.mjs [path=/] [width=280] [height=380] [out.png] [scale=1]
 *  Serves the landing mockup. Does not run an Astro build and does not write repo dist/.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const landing = path.join(root, 'design/landing-mobile/landing-mobile-v1.78.html');
const assetsDir = path.join(root, 'design/assets');
const wire = path.join(root, 'public/wireframe.html');
const [pagePath = '/', width = '280', height = '380', outArg, scale = '1'] = process.argv.slice(2);
const out = path.resolve(outArg ?? path.join(os.tmpdir(), 'portfolio-shot.png'));
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.mjs': 'text/javascript', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2',
};

function resolve(rel) {
  if (rel === '/wireframe.html') return fs.existsSync(wire) ? wire : null;
  if (rel === '/' || rel === '/index.html') return landing;
  if (rel.startsWith('/assets/')) {
    const file = path.join(assetsDir, rel.slice('/assets/'.length));
    return file.startsWith(assetsDir + path.sep) ? file : null;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = resolve(rel);
  if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end('not found');
    return;
  }
  let body = fs.readFileSync(file);
  if (rel === '/' || rel === '/index.html') body = Buffer.from(body.toString('utf8').replaceAll('../assets/', 'assets/'));
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' }).end(body);
});
await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
const url = `http://127.0.0.1:${server.address().port}${pagePath}`;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-shot-'));

let chrome;
try {
  // Headless Chrome will not make a window narrower than ~500px, so size the page by emulation (what DevTools does).
  chrome = spawn('google-chrome', [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--remote-debugging-port=0',
    `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });
  const debugPort = await new Promise((resolvePort, reject) => {
    let buf = '';
    const timer = setTimeout(() => reject(new Error('chrome did not start in 10s')), 10000);
    chrome.stderr.on('data', (c) => {
      buf += c;
      const m = buf.match(/ws:\/\/127\.0\.0\.1:(\d+)\//);
      if (m) { clearTimeout(timer); resolvePort(Number(m[1])); }
    });
    chrome.once('exit', () => reject(new Error('chrome exited early')));
  });
  const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json();
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let nextId = 0;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    const p = pending.get(m.id);
    if (!p) return;
    pending.delete(m.id);
    if (m.error) p.rej(new Error(m.error.message)); else p.res(m.result);
  });
  const send = (method, params = {}) => new Promise((res, rej) => {
    const id = ++nextId;
    pending.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
  });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await send('Emulation.setDeviceMetricsOverride', { width: Number(width), height: Number(height), deviceScaleFactor: Number(scale), mobile: true });
  await send('Page.navigate', { url });
  for (let i = 0; i < 100; i++) {
    await sleep(50);
    const r = await send('Runtime.evaluate', { expression: "document.fonts.ready.then(() => document.readyState === 'complete')", awaitPromise: true, returnByValue: true }).catch(() => null);
    if (r?.result?.value) break;
  }
  if (pagePath.includes('wireframe')) {
    const titled = await send('Runtime.evaluate', {
      expression: "new Promise(res=>{const t=()=>{if(document.title.includes('cramped'))res(document.title);else setTimeout(t,50)};t();setTimeout(()=>res('timeout '+document.title),8000)})",
      awaitPromise: true, returnByValue: true,
    });
    console.error(titled.result?.value ?? '');
  }
  await sleep(200);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
  ws.close();
  console.log(out);
} finally {
  if (chrome && chrome.exitCode === null) {
    chrome.kill('SIGKILL');
    await new Promise((r) => chrome.once('exit', r));
  }
  server.close();
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch {}
}
