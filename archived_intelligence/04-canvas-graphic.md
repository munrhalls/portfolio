# Canvas Graphic — Technical Specification

**Version:** 1.0 | **Date:** June 2026

---

## What This Is

The homepage centerpiece animation. Positioned dead center of the homepage, surrounded by 4 content zones in a 2×2 grid. A diamond-shaped graphic with two distinct animated zones: an outer ring where calligraphic AI-conversation symbols flow counter-clockwise, and an inner field of vertical Matrix-style code rain. Embeds as a `<canvas>` element in `MandorlaCanvas.astro`.

---

## Shape Geometry

**Structure: Two concentric nested diamonds.**

> ⚠️ Correction from initial intelligence: The original Q-and-A doc described "two overlapping diamonds creating an almond-like frame." This is wrong. The sketch shows two concentric nested diamonds — one inside the other — not two offset/intersecting diamonds. Building "overlapping" would produce a vesica piscis (almond) shape, which is not what is designed.

The two diamond outlines divide the canvas into three zones:

```
┌─────────────────────────────┐
│     Outer Diamond (frame)   │  ← rough/textured outer edge (embroidery reference)
│   ┌─────────────────────┐   │
│   │    RING ZONE        │   │  ← calligraphic AI symbols flow counter-clockwise
│   │  ┌───────────────┐  │   │
│   │  │  INNER ZONE   │  │   │  ← matrix code rain (clipped to inner diamond)
│   │  └───────────────┘  │   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```

| Zone | Boundary | Content |
|------|----------|---------|
| **Outer frame** | The outermost diamond outline | Bold stroke; rough/textured outer edge |
| **Ring zone** | Between outer diamond and inner diamond | AI calligraphy symbols, counter-clockwise flow |
| **Inner zone** | Inside the inner diamond | Matrix-style vertical code rain |

**Diamond construction:** Each diamond is a 4-point rhombus: top, right, bottom, left. Outer diamond is larger; inner diamond is centered and proportionally smaller — **84% of the outer diamond's width**.

**Outer edge texture:** The outer boundary of the outer diamond has a deliberately rough, hand-drawn quality approximating the sketch PNG. Compute perturbed path points once at initialization (not per frame — avoids flickering). Store the perturbed path and reuse it every frame. Do not use `setLineDash`.

---

## Canvas Sizing

| Context | Size |
|---------|------|
| Desktop (≥ 1024px) | 400px × 400px (CSS), dead center of the homepage |
| Tablet (640–1023px) | 320px × 320px |
| Mobile (< 640px) | 70% of viewport width, square, max 300px |

**Positioning:** The canvas sits dead center of the homepage, surrounded by 4 content zones in a 2×2 grid. It is the visual hook; the surrounding zones are the functional navigation.

**Size rationale:** 400px on desktop keeps the diamond prominent while leaving room for surrounding content zones. The canvas element must be responsive: sized via CSS, scaled internally via `devicePixelRatio` for sharpness on Retina/4K displays.

---

## Color Palette

| Element | Color | Notes |
|---------|-------|-------|
| Canvas background | `#080808` | Near-black |
| Outer diamond stroke | `rgba(255, 255, 255, 0.75)` | White, slightly transparent |
| Inner diamond stroke | `rgba(255, 255, 255, 0.45)` | White, softer than outer |
| Ring zone background | `#080808` (same as canvas) | Symbols appear over near-black |
| Ring symbols | `rgba(160, 170, 200, 0.5)` | Cool silver-gray, subtle |
| Matrix chars (main) | `#00c853` (green) + `#2979ff` (blue) mixed randomly | Matches sketch: blue+green+black mix |
| Matrix chars (leading) | `#ffffff` or `#b2ff59` | Brightest character at head of each stream |
| Matrix trail fade | `rgba(8, 8, 8, 0.06)` | Semi-transparent dark overlay for trail effect |

---

## Ring Animation Specification

**What it is:** Calligraphic symbols representing AI conversation, flowing counter-clockwise around the ring zone.

**Method: Context rotation (Method A).**
Rotate the entire canvas context by a small negative angle each frame. This is the simplest, most reliable approach. The symbols rotate with the ring, which is visually coherent for flowing calligraphy.

**Rotation:** A module-level `currentAngle` variable accumulates by `-0.003` radians per frame (counter-clockwise). At 60fps, one full rotation completes in approximately 35 seconds. The draw call uses `ctx.rotate(currentAngle)` — not `ctx.rotate(-0.003)` per frame. The variable is cumulative; the rotation angle grows indefinitely (no wraparound needed — floating point handles it).

**Symbol placement:** Distribute 20–30 symbols evenly around the ring zone. Each symbol has a fixed position within the rotating context. Symbols change character randomly at low frequency (~every 60–120 frames per symbol) to create the "living" calligraphy effect.

**Symbol source (preferred — zero network cost):**
- CJK Unified Ideographs: U+4E00 – U+9FFF
- Hiragana: U+3040 – U+309F
- Katakana: U+30A0 – U+30FF

**Font:** `16px serif` for ring symbols. System serif only — zero network cost. CJK glyphs are available on all modern OSes (Windows, macOS, iOS, Android). No Google Fonts CDN. No `document.fonts.ready` gate needed.

---

## Inner Zone — Matrix Rain Specification

**What it is:** Vertical streams of code-like characters raining from top to bottom, clipped to the inner diamond shape.

**Clipping:** Use Canvas 2D `clip()` to restrict all matrix rain drawing to the inner diamond path. Pixels outside the inner diamond are discarded at the GPU level — no manual coordinate filtering needed.

**Columns:** One stream per font-size-width column across the inner diamond. Number of columns = inner diamond width ÷ 14 (font size).

**Character set (per stream, randomly mixed):**
- CJK ideographs (U+4E00 – U+9FFF)
- Katakana (U+30A0 – U+30FF)
- Latin letters and numerals (for variety, minor proportion)

**Stream behavior:**
- Each stream has an independent speed (randomized, range: 0.5–1.5 font-sizes per frame)
- Each stream has an independent start delay (so streams don't all begin at the same time)
- When a stream exits the bottom of the inner diamond, it resets to a random y-position above the top, with a new random delay
- Characters change at random intervals for shimmer effect

**Trail effect:** Each frame, before drawing characters, fill the entire inner zone (clipped) with `rgba(8, 8, 8, 0.06)`. This fades previous frames without a full `clearRect`, creating the characteristic trailing effect.

**Leading character:** The bottom-most (newest) character in each stream is drawn in the leading color (`#ffffff`) to create a bright head.

**Font:** `14px monospace`. Monospace ensures consistent column widths. No external font needed.

**Color mixing:** Each stream is randomly assigned either green (`#00c853`) or blue (`#2979ff`) as its primary color. The mix across all streams produces the blue-green-black visual from the sketch.

---

## Canvas Setup Requirements

**High-DPI (Retina) rendering:**
- Read `window.devicePixelRatio` (commonly 2 on Retina, 3 on some phones)
- Set canvas internal resolution to `CSS size × devicePixelRatio`
- Scale the drawing context by `devicePixelRatio`
- Result: sharp text on all displays

**Responsive resize:**
- Listen for `window.resize` events
- On resize: recalculate canvas CSS size from parent element, reapply `devicePixelRatio` scaling via `ctx.setTransform(dpr, 0, 0, dpr, 0, 0)`. Use `setTransform` everywhere — init and resize. Never use `ctx.scale()` after context creation.
- Reinitialize stream positions after resize

**Animation loop:**
- Use `requestAnimationFrame` exclusively. Never `setInterval`.
- `requestAnimationFrame` syncs with the display refresh rate, pauses when tab is hidden (battery conservation), and avoids frame drops from timing drift.

---

## Accessibility Requirements

- Canvas element must have `role="img"` and `aria-label="Animated portfolio centerpiece: a diamond-shaped graphic with flowing AI symbols and matrix rain"` (or equivalent descriptive label).
- `prefers-reduced-motion: reduce` media query: draw one static frame (both diamond outlines with perturbed paths, no matrix rain, no ring symbols), then stop the animation loop entirely. The diamond shapes remain visible; the animation does not run.
- The canvas is purely decorative. It must not be the only way to understand any content on the page.

---

## Per-Frame Drawing Order

The order of operations within each `requestAnimationFrame` callback is not arbitrary. An incorrect order causes border strokes to fade, rain trails to be destroyed, or ring symbols to clip unexpectedly.

**Correct sequence every frame:**

1. **Global trail fade** — Fill the entire canvas with `rgba(8, 8, 8, 0.06)`. This darkens all previous frame data slightly, creating the fading trail for matrix rain AND a subtle trail behind ring symbols (intentional calligraphic effect).

2. **Redraw diamond borders** — Stroke both the outer and inner diamond outlines. This must happen AFTER the trail fade, or the trail fade will progressively darken and erase the border strokes over time.

3. **Matrix rain (clipped to inner zone)** — `ctx.save()` → define inner diamond path → `ctx.clip()` → draw rain characters at their current y-positions → `ctx.restore()`. The clip ensures rain stays inside the inner diamond.

4. **Ring symbols (rotated)** — `ctx.save()` → `ctx.translate(centerX, centerY)` → `ctx.rotate(currentAngle)` → draw symbols at their pre-rotation positions in the ring zone → `ctx.restore()`. The `save()`/`restore()` pair scopes the rotation; after `restore()`, the context returns to unrotated state. Without this scoping, `ctx.rotate` would accumulate across frames and compound the rotation angle.

**Why this order is correct:**
- Trail fade before borders: borders are always redrawn sharp.
- Rain after trail fade: old rain positions fade; new positions drawn bright.
- Ring after rain: ring symbols render on top of everything else (visually foreground).
- Each drawing block uses `save()`/`restore()` to prevent transform bleed between blocks.

**Note on ring symbol trailing:** Because the global trail fade applies to the ring zone too, ring symbols leave a very subtle ghost as they rotate (~2–3 degrees of arc before fully faded at 60fps). This is intentional — it adds a calligraphic flow quality to the symbols. It is not a bug.

---

## Performance Requirements

| Requirement | Specification |
|-------------|--------------|
| Frame rate target | 60fps on modern devices; ≥ 30fps on mid-tier mobile |
| Max character objects | Ring: 30 symbols. Rain: columns limited to inner diamond width ÷ 14 |
| No `shadowBlur` | Expensive canvas property — do not use on any animated element |
| No `clearRect` for trail | Use semi-transparent `fillRect` overlay instead |
| Integer coordinates | Round all x/y positions to integers before `fillText` calls |
| Tab visibility | Use `document.addEventListener('visibilitychange')` with an `isPaused` flag. When the tab is hidden, set `isPaused = true`; the rAF callback checks this flag and returns early without drawing. When the tab becomes visible, set `isPaused = false`. This is simpler than tracking and cancelling the rAF id — the loop idles harmlessly when paused. |

---

## Technology Decision

**HTML5 Canvas 2D API. Zero dependencies. Zero libraries.**

| Evaluated | Decision |
|-----------|----------|
| HTML5 Canvas 2D API | ✅ **Selected.** Sufficient for this workload. Universal support. Zero overhead. |
| WebGL | Rejected. Requires GLSL shaders and texture atlases for text rendering. Massive complexity increase for zero visual gain. |
| WebGPU | Rejected. ~70% browser support in 2026. 30% of users require fallback. Overkill for 2D text effects. |
| SVG | Rejected. 200+ dynamically updating text nodes thrash the DOM. Canvas is correct for procedural animation. |
| Three.js / PixiJS / p5.js | Rejected. Adds 100–600KB bundle for effects achievable in native Canvas 2D in <100 lines. |
