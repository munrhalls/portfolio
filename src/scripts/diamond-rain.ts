/**
 * Diamond katakana rain. The 11 glyph columns of the diamond's inner pane (public/images/diamond-rain/col-*.png)
 * fall straight down on a canvas that sits over the static frame image.
 *
 * Why canvas: at ambient speeds a CSS-animated layer moves < 1 device pixel per frame and browsers snap it to whole
 * pixels (visible stepping). Drawing each frame at a fractional offset makes the browser interpolate, so motion is smooth.
 *
 * Coordinates are in the 1024-px space of the art. One constant speed for every column; each column loops on its own tile.
 */
import columns from '../data/diamond-rain.json';

/** Seconds for the art to scroll one 532-px period (the pane's original sprite period). The only speed knob. */
export const RAIN_PERIOD_S = 45;
const ART_PERIOD_PX = 532;
const SPEED = ART_PERIOD_PX / RAIN_PERIOD_S; // art px per second
const WINDOW_TOP = 247; // pane rows (alpha bbox of the pane mask)
const WINDOW_BOTTOM = 779;

type Col = { file: string; x: number; y: number; h: number; img: HTMLImageElement };

export async function startDiamondRain(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const cols: Col[] = await Promise.all(
    columns.map(
      (c) =>
        new Promise<Col>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ ...c, img });
          img.onerror = reject;
          img.src = `/images/diamond-rain/${c.file}`;
        }),
    ),
  );
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const draw = (seconds: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter'; // glyph light is additive on black
    for (const c of cols) {
      let y = c.y + ((seconds * SPEED) % c.h); // fractional → interpolated
      y -= Math.ceil((y - WINDOW_TOP) / c.h) * c.h; // first tile that reaches the pane top
      for (; y < WINDOW_BOTTOM; y += c.h) ctx.drawImage(c.img, c.x, y);
    }
  };

  draw(0);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; // rest at the original arrangement
  const t0 = performance.now();
  const tick = (now: number) => {
    draw((now - t0) / 1000);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
