# Design system — Munrhalls mobile landing

**Source of truth:** the shipped page `src/pages/index.astro` (design loop v1.78 + the movie frame). Every value here is read from that page's CSS. **Implementation:** `tailwind.config.ts` (tokens + plugin). **Equivalence proof page:** `src/pages/test.astro` (route `/test`), same markup, styled only by the tokens.

Rule: a value not in this file or in `tailwind.config.ts` is not part of the system. Add it to both, or don't use it.

## 1. Principles (as practiced by the page)
1. **One unit.** The screen is a 300-unit-wide grid; `u = frame width / 300`. Every length is `N × u`, so the layout scales uniformly. Only borders (1px) and stroke widths are unit-less.
2. **Dark, warm, flat.** Warm near-blacks, cream text, one amber accent. Depth comes from luminance (muted → cream → amber), blend modes and masks, not from boxes, borders or shadows.
3. **Amber means "interactive or live".** Resting glyph tint is the dimmer *ambient* amber; hover/focus and LIVE use full amber.
4. **Mono for UI voice, sans for reading.** Geist Mono for labels, stats, controls, glyphs; Geist for greeting, headline, skills.
5. **12 px floor.** Smallest readable text is 10u (≥ 12 px on 360 px phones). Only the player timecode (8u) is below it; it is chrome, not content.
6. **Motion is decoration and degrades.** The only animation is the glyph pulse; `prefers-reduced-motion` turns it off and shows the progress bar static at 38%.

## 2. Frame and elasticity
| Var | Meaning | Value |
|---|---|---|
| `--u` | 1 unit | `100cqw / 300` (set by `.u-root` inside the size container `.frame`) |
| `--hu` | design height in u | fallback `481`; responsive `max(400, 300·100dvh/100vw)` (inside `@supports (z-index: calc(1px / 1px))`) |
| `--e` | elastic height above 400u | `min(max(hu,400),650) − 400` |
| `--x` | surplus the video cannot absorb | `max(0, e − 81.2)` |
| `--s` / `--g` | surplus above intro / per group gap | `.5·x` / `.25·x` |
| `--M` | video well height | `min(167, 85.8 + e − s − 2g)` (cap = 16:9) |

Frame width = `min(100vw, 75dvh)` (height ≥ 400u), height = `100dvh`; fallback 300 px × `hu` px. The **video well is the one elastic element**; nav, streams and hand are **bottom-anchored** (`400 + e − n`); content above is anchored from the top with `s` / `g` shares. Floor viewport: 280×380 = 407u.

Anchors (`top-anchor-*` / `h-anchor-*` utilities): wash-top height `150+s` · wash-bottom `250+e` · diamond `84+e` · contact glow `−17+s` · intro `10+s` · contact `4+s` · strip `97+s+g` · movie `158.2+s+g` · nav `400+e−150` · streams `400+e−170` · palm glow `400+e−90` · hand `400+e−79.1`.

## 3. Color
| Token (class suffix) | Hex | Role |
|---|---|---|
| `surface-base` | `#14120f` | frame background |
| `surface-sink` | `#0a0908` | page, strip (80%), player bar (85%), video well |
| `surface-wash-top` | `#27231c` | top gradient start (L→R to sink) |
| `surface-wash-bottom-from` / `-to` | `#030302` / `#130f0a` | bottom gradient (L→R) |
| `ink` | `#ece6da` | primary text, strokes, progress fill |
| `ink-soft` | `#c9c1b2` | stat numbers |
| `ink-muted` | `#a89f92` | secondary text, glyph streams, player chrome |
| `amber` | `#e6b84f` | hover/focus, LIVE |
| `amber-ambient` | `#ba943e` | resting CONTACT glyphs, ambient glows |
| `line` | `#6a6252` | hairline border (video well) |
| `line-track` | `#403b31` | progress track |

Translucent recipes: `bg-cloud` (white 10% → 0 radial, nav chips) · `bg-glow-contact` / `bg-glow-palm` (ambient radial glows) · `bg-wash-top` / `bg-wash-bottom` · `drop-shadow-glow-contact` (amber .95) / `drop-shadow-glow-cta` (amber .90).
Contrast claims in the source's own comments (muted ≈ 7.2:1 on base, from v1.55) are **not re-measured here**.

## 4. Typography
Families: `font-sans` Geist (400/500/600 imported) · `font-mono` Geist Mono (400/500/600 imported) · `font-glyph` mono + CJK fallbacks (katakana streams).
Scale (size in u): `2xs` 8 · `xs` 9 · `sm` 10 · `base` 11 · `md` 12 · `lg` 13 · `xl` 17. The main steps 10 : 13 : 17 are ≈ ×1.3 apart.
Line height: `solid` 1 · `tight` 1.1 · `heading` 1.18 · `body` 1.3 · `normal`. Tracking: `snug` −.01em · `none` 0 · `slight` .01em · `wide` .04em · `wider` .08em · `widest` .14em.

| Role | Font | Size | Weight | Leading | Tracking | Color |
|---|---|---|---|---|---|---|
| H1 | sans | xl 17 | 700 | heading | snug | ink |
| Greeting | sans | md 12 | 500 | body | – | ink |
| Skills line | sans | sm 10 | 400 | solid | slight | ink-muted (separators 55%) |
| Site name | mono | base 11 | 600 | tight | wide | ink |
| Kind / stat label | mono | sm 10 | 400 | normal | none | ink-muted |
| Stat number | mono | lg 13 | 600 | tight | – | ink-soft |
| CONTACT / LIVE | mono | xs 9 | 600 | solid | widest / wider | ink → amber / amber |
| Nav label | mono | sm 10 | 600 | solid | none | ink → amber |
| Player time | mono | 2xs 8 | 500 | solid | – | ink-muted, tabular |

## 5. Spacing, shape, stroke, opacity, layers
- **Spacing** is a *closed* unit scale (key = number of u): `0 1.5 2 2.5 3 4 4.5 5 6 7 7.5 8 9 10 14 15 16 16.9 18 20 28 36 42 49.6 55.2 70 74 77 84 98 124 170 196 232 233 240 264 300 380`. Small steps (≤ 10) are rhythm; the rest are component geometry. Page gutter = **18u**; content column = **264u**.
- **Radius:** `sm` 3u (video well only). Everything else is square. **Border:** 1px `line`.
- **Stroke:** `1` (rhombus, rails, arrows; always `vector-effect: non-scaling-stroke`, miter joins) · `1.4` (player icon, round caps).
- **Opacity:** 50 (diamond image) · 55 (knocked-out glyphs, separators) · 80 / 85 (sink overlays) · 92 (hand).
- **Layers (z):** 0 backdrop, washes, diamond · 1 glows, back streams, CONTACT text · 2 content, strip, video, hand · 3 CONTACT, front streams · 4 nav.
- **Blend / mask:** diamond uses `mix-blend-screen` (black adds no light) and the three-layer `mask-diamond`; washes use `mask-fade-down` / `mask-fade-up`.

## 6. Motion
Transition: **150 ms, `ease`**, on `color`, `fill`, `stroke` or `filter` only (`transition-color|fill|stroke|filter`). Animation: `glyph-pulse` (opacity `o → min(1, 2.1·o) @10% → .55·o @38–100%`), duration/delay per glyph (`--p`, `--d`), linear, infinite.

## 7. Components (token recipes live in `src/pages/test.astro`)
| Component | Anatomy | States |
|---|---|---|
| **CONTACT** | mono 9u label + 28u amber-ambient glyph rhombus (outline stroke ink), top-right at 18u, glyphs fade in left→right | hover/focus-visible: text, outline and glyphs → amber, amber glow; no outline ring |
| **Title strip** | full-width sink 80% band, 55.2u, 18u gutters; row 1 site name · kind · LIVE; row 2 four stats spread edge to edge (links to the repo) | – |
| **LIVE (CTA)** | amber 9u mono + 14u rhombus holding knocked-out glyphs; pushed to the right edge of row 1 | hover/focus-visible: amber glow |
| **Video well** | 264u wide, `--M` tall, 3u radius, 1px line border; muted looping video; 15u control bar (timecode, muted icon) over a 2.5u progress track | reduced motion: progress static 38% |
| **Nav chip** | 20u row: label (ink, mono 10u 600) + rail fading in from the left that becomes the arrow through a 16u glyph rhombus; faint white cloud behind; absolute-positioned (Features 124/8 · Case studies 8/4 · Learning 196/42 · Story 10/36) | hover/focus-visible: text + rhombus → amber |
| **Hand + streams** | engraved hand (232u wide, 92%), 117 katakana glyphs (muted, per-glyph size/opacity/phase) leaving each fingertip and arriving dead-vertical under each chip's rhombus | pulse; reduced motion: static |
| **Diamond + washes + glows** | ambient code diamond top-right (380u, screen blend, masked); top/bottom linear washes; two amber-ambient radial glows | – |

Assets: `/images/code-diamond-black-bg.amber.png`, `/images/hand-isolated-solid.webp`, `/movie.webm` (placeholder; size only matters).

## 8. Findings (decisions for the owner, nothing changed)
1. Two glow strengths (.95 CONTACT, .90 LIVE) are visually indistinguishable; kept exactly for pixel parity. Merge candidate.
2. Declared in the source but **never used**, so excluded: `--raise #1c1915`, `--line #2c271e`, keyframes `drift`.
3. Link targets `#contact #live #features #case-studies #lessons #story` do not exist yet (sections are future work).
4. Nav chip positions and the `anchor-*` formulas are composition geometry, not reusable scale; they are tokens only so the page contains no raw numbers.
5. The H1 asks for weight 700 but only Geist 400/500/600 are imported, so the browser falls back to the nearest face (expected: 600). Both pages behave identically; importing `@fontsource/geist/700.css` would make the stated 700 real (this would change the shipped look, so it is your call).
6. Not verified by me (no build allowed by `AGENTS.md`): pixel parity of `/test` vs `/`. Class → token resolution was checked mechanically; rendered output was not.
