# Devin Task — Code Diamond Scroll Animation

## Context

Astro + Tailwind 3 portfolio project (`src/`, `public/`, `assets/` at project root).

**Target outcome:** The hero page looks exactly the same on both mobile and desktop — same position, same size, same overall opacity — except the code streams inside the diamond now animate, flowing top to bottom continuously. Nothing else changes.

**Current state:**  
A single static `<img src="/images/code-diamond.png">` renders the full diamond (outer ring + inner content) at `opacity-[0.2]`, absolutely positioned in the hero.

**New state:**  
A `<CodeDiamond />` component in the exact same position and with the exact same `opacity-[0.2]` wrapper, composed of two layers:
1. **Animated inner scroll** — `code-diamond-scroll-sprite.png` (1024×1064px, two seamless tiles stacked) scrolling top-to-bottom via CSS, clipped to diamond shape
2. **Static outer ring** — `code-diamond-outer-ring.png` (1024×1024px RGBA) overlaid on top; its transparent center naturally exposes the animated layer beneath

**Why the layers work together without blend modes:**  
`code-diamond-outer-ring.png` is RGBA with a fully transparent center hole (alpha=0 at the inner diamond area, verified). The ring's opaque pixels are only the frame/border elements. The scroll layer shows through the transparent center naturally.

**Why the animation loop is seamless:**  
`code-diamond-scroll-sprite.png` has the inner diamond content stacked twice (532px × 2 = 1064px). Both tile edges fade to near-zero alpha (verified: alpha mean ≈ 0.01 at both ends). `translateY(-50%)` scrolls exactly one tile, then snaps back invisibly.

---

## Assets

Both already exist in `assets/` at the project root:
- `assets/code-diamond-scroll-sprite.png` — animated content sprite
- `assets/code-diamond-outer-ring.png` — static outer frame

They need to be in `public/images/` to be served as static URLs.

---

## Phase 1 — Copy assets to `public/images/`

### Task 1.1
Copy `assets/code-diamond-scroll-sprite.png` → `public/images/code-diamond-scroll-sprite.png`

### Task 1.2
Copy `assets/code-diamond-outer-ring.png` → `public/images/code-diamond-outer-ring.png`

---

## Phase 2 — Create `src/components/CodeDiamond.astro`

Create this file with exactly the following content. Do not modify it:

```astro
---
// src/components/CodeDiamond.astro
---

<div
  class="absolute z-0 pointer-events-none opacity-[0.2] aspect-square w-[90vw] max-w-none right-[-15vw] top-1/2 -translate-y-1/2"
  aria-hidden="true"
>
  <!-- Animated scroll layer, clipped to outermost diamond boundary -->
  <div class="cd-clip">
    <div class="cd-scroll"></div>
  </div>

  <!-- Static outer ring on top. Transparent center exposes the scroll layer beneath. -->
  <img
    src="/images/code-diamond-outer-ring.png"
    alt=""
    class="absolute inset-0 w-full h-full object-contain"
  />
</div>

<style>
  .cd-clip {
    position: absolute;
    inset: 0;
    overflow: hidden;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  .cd-scroll {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 200%;
    background-image: url('/images/code-diamond-scroll-sprite.png');
    background-size: 100% 50%;
    background-repeat: repeat-y;
    animation: code-rain 8s linear infinite;
  }

  @keyframes code-rain {
    from { transform: translateY(0); }
    to   { transform: translateY(-50%); }
  }
</style>
```

**Notes on the component:**
- `opacity-[0.2]` is on the wrapper — identical to the original `<img>`. No opacity on child elements.
- `aspect-square` (Tailwind 3) gives the wrapper a 1:1 ratio, matching the original `<img>` natural ratio.
- All other positioning classes (`absolute z-0 pointer-events-none w-[90vw] max-w-none right-[-15vw] top-1/2 -translate-y-1/2`) are identical to the original `<img>`.
- `.cd-clip` applies the diamond `clip-path` to contain the scroll sprite within the diamond boundary.
- `.cd-scroll` is 200% tall. `background-size: 100% 50%` makes each tile exactly match the wrapper height. `translateY(-50%)` = one tile scroll = pixel-perfect loop.
- The outer ring `<img>` has no clip and no opacity — the wrapper's `opacity-[0.2]` covers both layers equally.

---

## Phase 3 — Update `src/pages/index.astro`

### Task 3.1 — Add import to frontmatter

Open `src/pages/index.astro`. In the frontmatter block (between the two `---` delimiters at the very top), add one import line after the existing imports:

```js
import CodeDiamond from '../components/CodeDiamond.astro';
```

The frontmatter should look like this after the change:

```
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { Image } from 'astro:assets';
import sanglogiumImg from '../assets/images/sanglogium/sanglogium-01.png';
import CodeDiamond from '../components/CodeDiamond.astro';
---
```

### Task 3.2 — Replace the static image element

In `src/pages/index.astro`, find this exact line (it is the only `<img>` with `code-diamond.png`):

```html
    <img src="/images/code-diamond.png" alt="" class="absolute z-0 pointer-events-none opacity-[0.2] w-[90vw] max-w-none right-[-15vw] top-1/2 -translate-y-1/2" />
```

Replace it with:

```html
    <CodeDiamond />
```

**Do not touch anything else in `index.astro`.** Specifically do not touch:
- The `<div class="hidden items-center justify-center" ...>` block — leave it exactly as-is
- The gradient scrim `<div>` below the diamond element
- Any other element

---

## Phase 4 — Verify

### Task 4.1 — Build check
Run from the project root:
```
npm run build
```
Must complete with zero errors. Fix any errors before proceeding.

### Task 4.2 — Visual check
Run `npm run dev` and open `http://localhost:4321` in a browser.

Confirm all of the following:
- [ ] The diamond graphic is visible in the hero section, positioned to the right, behind the text — same as before
- [ ] The overall diamond opacity is the same as before (faint, approximately 20%)
- [ ] The outer diamond frame (nested borders with formulas) is visible and static
- [ ] The code streams inside the diamond are visibly scrolling from top to bottom
- [ ] The scrolling loops smoothly with no visible jump or flash
- [ ] No layout shift — text and buttons are in the same position as before
- [ ] No browser console errors

---

## Do Not Touch

- `tailwind.config.mjs`
- `src/styles/global.css`
- Any page other than `src/pages/index.astro`
- Any existing component other than adding the new one
- The `assets/` folder contents
- The existing `public/images/code-diamond.png` (leave it — it is no longer referenced but can stay)
