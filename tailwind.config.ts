/**
 * Design tokens — single source: the shipped mobile landing page (src/pages/index.astro,
 * design loop v1.78). Every value below is copied from that page's CSS; nothing is invented.
 * Narrative + rules: design/DESIGN.md.
 *
 * UNIT SYSTEM
 *   The whole screen is drawn on a 300-unit-wide grid. `--u` = frame width / 300 (1px at 300px wide),
 *   so every length is `N × u` and the layout scales uniformly with the frame. The spacing scale
 *   below therefore maps key N → `calc(N * var(--u))`: `left-77` = 77u, `gap-4.5` = 4.5u.
 *   Preflight is OFF; the page's own 3-line reset lives in the plugin's `addBase`.
 */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const u = (n: number | string) => `calc(${n} * var(--u))`;
/** Elastic anchor: position in u that depends on the frame's design height (see :root vars in the plugin). */
const anchor = (expr: string) => `calc((${expr}) * var(--u))`;

/* ── Palette ─────────────────────────────────────────────────────────────── */
const palette = {
  surface: {
    base: '#14120f', // --bg      frame background
    sink: '#0a0908', // --sink    page, strip, player, video well (also at 80% / 85% alpha)
    'wash-top': '#27231c', // top gradient start (L→R light → sink)
    'wash-bottom-from': '#030302', // bottom gradient start (L→R)
    'wash-bottom-to': '#130f0a', // bottom gradient end
  },
  ink: {
    DEFAULT: '#ece6da', // --text    primary text, strokes
    soft: '#c9c1b2', // stat numbers
    muted: '#a89f92', // --muted   secondary text, glyph streams, player chrome
  },
  amber: {
    DEFAULT: '#e6b84f', // --amber   interactive state (hover/focus), LIVE
    ambient: '#ba943e', // --ambient resting glyph tint + ambient glows
  },
  line: {
    DEFAULT: '#6a6252', // --rule    hairline border (video well)
    track: '#403b31', // --line2   progress track
  },
} as const;

const rgba = (rgb: string, a: number) => `rgba(${rgb},${a})`;
const AMBIENT_RGB = '186,148,62'; // palette.amber.ambient
const AMBER_RGB = '230,184,79'; // palette.amber.DEFAULT

/* ── Spacing: exactly the unit steps the page uses (closed scale) ────────── */
const STEPS = [
  1.5, 2, 2.5, 3, 4, 4.5, 5, 6, 7, 7.5, 8, 9, 10, 14, 15, 16, 16.9, 18, 20, 28, 36, 42, 49.6, 55.2, 70, 74, 77, 84,
  98, 124, 170, 196, 232, 233, 240, 264, 300, 380,
];
const spacing: Record<string, string> = { '0': '0px', px: '1px' };
for (const n of STEPS) spacing[String(n)] = u(n);

/* Elastic anchors (vertical positions that flex with frame height; --s/--g/--e defined by the plugin). */
Object.assign(spacing, {
  'anchor-wash-top': anchor('150 + var(--s)'), // height of top wash
  'anchor-wash-bottom': anchor('250 + var(--e)'),
  'anchor-diamond': anchor('84 + var(--e)'),
  'anchor-glow-contact': anchor('-17 + var(--s)'),
  'anchor-intro': anchor('10 + var(--s)'),
  'anchor-contact': anchor('4 + var(--s)'),
  'anchor-strip': anchor('97 + var(--s) + var(--g)'),
  'anchor-movie': anchor('158.2 + var(--s) + var(--g)'),
  'anchor-movie-h': 'calc(var(--M) * var(--u))', // the one elastic element: video well height
  'anchor-nav': anchor('400 + var(--e) - 150'), // bottom-anchored: H' = 400 + e
  'anchor-streams': anchor('400 + var(--e) - 170'),
  'anchor-glow-palm': anchor('400 + var(--e) - 90'),
  'anchor-hand': anchor('400 + var(--e) - 79.1'),
  'anchor-video': 'calc(100% - 17.5 * var(--u))', // video height inside the well (leaves room for controls)
});

/* ── Masks (no core Tailwind utility) ────────────────────────────────────── */
const MASK_FADE_DOWN = 'linear-gradient(#000 55%,transparent)';
const MASK_FADE_UP = 'linear-gradient(transparent,#000 30%)';
const MASK_DIAMOND =
  'linear-gradient(to bottom left,#000 35%,rgba(0,0,0,.45) 85%),' +
  'linear-gradient(to right,rgba(0,0,0,.2) 54.2%,#000 59.2%),' +
  'linear-gradient(to bottom,transparent 20%,rgba(0,0,0,.1) 28%,rgba(0,0,0,.35) 36%,rgba(0,0,0,.75) 44%,#000 51.6%)';

const system = plugin(({ addBase, addUtilities }) => {
  addBase({
    /* Frame-height system. --hu = design height in u (fallback 481 = typical phone; floor 400).
       --e = elastic extra above 400u (capped 650); --x = surplus beyond what the video can absorb;
       --s = 50% of surplus above the intro; --g = 25% into each group gap; --M = video height in u (≤ 16:9 = 167). */
    ':root': {
      '--hu': '481',
      '--e': 'calc(min(max(var(--hu), 400), 650) - 400)',
      '--x': 'calc(max(0, var(--e) - 81.2))',
      '--s': 'calc(var(--x) * .5)',
      '--g': 'calc(var(--x) * .25)',
      '--M': 'calc(min(167, 85.8 + var(--e) - var(--s) - 2 * var(--g)))',
      '--frame-w': '300px',
      '--frame-h': 'calc(var(--hu) * 1px)',
    },
    /* Responsive: frame fills the viewport (width capped so height ≥ 400u); --hu = 300·H/W. */
    '@supports (z-index: calc(1px / 1px))': {
      ':root': {
        '--hu': 'max(400, calc(300 * 100dvh / 100vw))',
        '--frame-w': 'min(100vw, 75dvh)',
        '--frame-h': '100dvh',
      },
    },
    '*': { boxSizing: 'border-box', margin: '0', padding: '0' },
    a: { color: 'inherit', textDecoration: 'none' },
  });

  addUtilities({
    '.u-root': { '--u': 'calc(100cqw / 300)' }, // 1u; put on the element inside the size container
    '.container-size': { 'container-type': 'size' },
    '.mask-fade-down': { '-webkit-mask-image': MASK_FADE_DOWN, 'mask-image': MASK_FADE_DOWN },
    '.mask-fade-up': { '-webkit-mask-image': MASK_FADE_UP, 'mask-image': MASK_FADE_UP },
    /* exact window of the diamond's katakana pane (alpha of the legacy inside.png layer) */
    '.mask-diamond-window': {
      '-webkit-mask-image': 'url(/images/diamond-rain/window.png)',
      '-webkit-mask-size': '100% 100%',
      '-webkit-mask-repeat': 'no-repeat',
      'mask-image': 'url(/images/diamond-rain/window.png)',
      'mask-size': '100% 100%',
      'mask-repeat': 'no-repeat',
    },
    '.mask-diamond': {
      '-webkit-mask-image': MASK_DIAMOND,
      '-webkit-mask-size': '100% 100%,100% 100%,100% 100%',
      '-webkit-mask-position': '0 0,0 0,0 0',
      '-webkit-mask-repeat': 'no-repeat',
      '-webkit-mask-composite': 'source-in,source-over',
      'mask-image': MASK_DIAMOND,
      'mask-size': '100% 100%,100% 100%,100% 100%',
      'mask-position': '0 0,0 0,0 0',
      'mask-repeat': 'no-repeat',
      'mask-composite': 'intersect,add',
    },
    /* SVG presentation properties Tailwind v3 lacks */
    '.stroke-join-miter': { 'stroke-linejoin': 'miter' },
    '.stroke-join-round': { 'stroke-linejoin': 'round' },
    '.stroke-cap-round': { 'stroke-linecap': 'round' },
    '.svg-vector-fixed': { 'vector-effect': 'non-scaling-stroke' },
    '.svg-anchor-middle': { 'text-anchor': 'middle' },
    '.svg-baseline-central': { 'dominant-baseline': 'central' },
  });
});

const config: Config = {
  content: ['./src/**/*.{astro,html,ts}'],
  corePlugins: { preflight: false },
  theme: {
    /* Closed scales: only what the page uses. Anything absent is not part of the system. */
    colors: { transparent: 'transparent', current: 'currentColor', ...palette },
    spacing,
    fontFamily: {
      sans: ["'Geist'", 'system-ui', '-apple-system', "'Segoe UI'", 'sans-serif'],
      mono: ["'Geist Mono'", 'ui-monospace', "'SF Mono'", 'Menlo', 'Consolas', 'monospace'],
      /* katakana streams: mono first, CJK fallbacks */
      glyph: [
        "'Geist Mono'", 'ui-monospace', "'SF Mono'", 'Menlo', 'Consolas', 'monospace',
        "'Noto Sans CJK JP'", "'Noto Sans JP'", "'Hiragino Sans'", "'Yu Gothic'", 'sans-serif',
      ],
    },
    /* Type scale in u. Steps 10 : 13 : 17 are ≈ ×1.3 apart (source note v1.78p); 10u is the 12px floor on 360px phones. */
    fontSize: {
      '2xs': u(8), // player time
      xs: u(9), // CONTACT, LIVE
      sm: u(10), // skills, kind, stat labels, nav labels
      base: u(11), // site name
      md: u(12), // greeting
      lg: u(13), // stat numbers
      xl: u(17), // H1
    },
    lineHeight: { solid: '1', tight: '1.1', heading: '1.18', body: '1.3', normal: 'normal' },
    letterSpacing: { snug: '-.01em', none: '0', slight: '.01em', wide: '.04em', wider: '.08em', widest: '.14em' },
    borderRadius: { none: '0', sm: u(3) },
    borderWidth: { '0': '0', DEFAULT: '1px' },
    strokeWidth: { '0': '0', '1': '1', '1.4': '1.4' },
    opacity: { '50': '0.5', '55': '0.55', '80': '0.8', '85': '0.85', '92': '0.92' },
    /* Layers: 0 backdrop/wash/diamond · 1 glows, back streams, CONTACT text · 2 content, hand · 3 CONTACT, front streams · 4 nav */
    zIndex: { '0': '0', '1': '1', '2': '2', '3': '3', '4': '4' },
    transitionDuration: { DEFAULT: '150ms' },
    transitionTimingFunction: { DEFAULT: 'ease' },
    transitionProperty: { color: 'color', fill: 'fill', stroke: 'stroke', filter: 'filter' },
    dropShadow: {
      'glow-contact': `0 0 ${u(2.5)} ${rgba(AMBER_RGB, 0.95)}`,
      'glow-cta': `0 0 ${u(2.5)} ${rgba(AMBER_RGB, 0.9)}`,
    },
    backgroundImage: {
      'wash-top': `linear-gradient(to right,${palette.surface['wash-top']},${palette.surface.sink})`,
      'wash-bottom': `linear-gradient(to right,${palette.surface['wash-bottom-from']},${palette.surface['wash-bottom-to']})`,
      'glow-contact': `radial-gradient(circle,${rgba(AMBIENT_RGB, 0.38)} 0,${rgba(AMBIENT_RGB, 0.15)} 42%,transparent 70%)`,
      'glow-palm': `radial-gradient(ellipse at 50% 55%,${rgba(AMBIENT_RGB, 0.2)},${rgba(AMBIENT_RGB, 0.07)} 45%,transparent 70%)`,
      cloud: 'radial-gradient(ellipse closest-side at 45% 55%,rgba(255,255,255,.10),rgba(255,255,255,0))',
    },
    gridTemplateColumns: { stats: 'repeat(4, auto)' },
    keyframes: {
      /* glyph brightness pulse travelling palm → label; --o base opacity is per glyph */
      'glyph-pulse': {
        '0%': { opacity: 'var(--o)' },
        '10%': { opacity: 'min(1, calc(var(--o) * 2.1))' },
        '38%, 100%': { opacity: 'calc(var(--o) * .55)' },
      },
    },
    animation: {
      none: 'none',
      'glyph-pulse': 'glyph-pulse var(--p) linear var(--d) infinite',
    },
    extend: {
      width: { frame: 'var(--frame-w)', 'progress-still': '38%' },
      height: { frame: 'var(--frame-h)' },
    },
  },
  plugins: [system],
};

export default config;
