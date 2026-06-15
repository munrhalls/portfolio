# Gap Analysis: Homepage Diamond Swap vs Design Files
## Generated: 2026-06-13

---

## DEFINITE GAPS

### GAP 1: Missing horizontal gap between text and image columns on desktop
**File:** `src/pages/index.astro` line 11  
**Current:** `<section class="... flex flex-col lg:flex-row ...">` has NO `gap-*` class between flex children.  
**Design:** `homepage-design-desktop.png` shows clear whitespace between the left text column and the right diamond image.  
**Fix:** Add `lg:gap-12` or `lg:gap-16` to the section element to create separation between `flex-1` text column and the fixed-size image wrapper.

### GAP 2: Mobile diamond positioned flush to corner instead of offset
**File:** `src/pages/index.astro` line 56  
**Current:** `absolute top-0 right-0 w-72 h-72` — diamond is flush against the top-right corner of the section.  
**Design:** `homepage-design-mobile.png` shows the diamond as a watermark that appears partially off-screen / more "behind" the content. The original mobile spec (`03-mobile-homepage.md`) used `right-[-8%]` for this effect.  
**Fix:** Change mobile positioning to `top-0 right-[-8%]` (or similar negative offset) so the diamond extends partially beyond the viewport edge, matching the watermark effect in the design.

---

## POTENTIAL GAPS (need visual confirmation)

### GAP 3: Desktop diamond size may not match design proportion
**File:** `src/pages/index.astro` line 56  
**Current:** `lg:w-[28rem] lg:h-[28rem]` = 448px square.  
**Design:** `homepage-design-desktop.png` shows the diamond as a prominent right-column element. 448px may be too small or too large relative to the text column.  
**Verify:** Compare rendered size against design image proportion. May need adjustment to `lg:w-[32rem]` or `lg:w-[24rem]`.

### GAP 4: Hero section min-height on desktop
**File:** `src/pages/index.astro` line 11  
**Current:** `lg:min-h-screen` with `lg:items-center` vertically centers everything.  
**Design:** The desktop hero may have a specific top padding rather than strict vertical centering.  
**Verify:** Check if the text block sits at a specific vertical position in the design rather than being perfectly centered.

---

## CONFIRMED CORRECT (no gap)

- `code-diamond.png` is 1024x1024 RGB square — `object-contain` in square container will fill without distortion.
- Image wrapper classes: `opacity-30 lg:opacity-100` correctly matches mobile watermark / desktop prominent.
- `pointer-events-none lg:pointer-events-auto` correctly prevents mobile interference / allows desktop interaction.
- `aria-hidden="true"` + `alt=""` correctly marks decorative image.
- Header uses design system tokens (`bg-surface`, `border-outline-variant`, `tracking-widest`).
- Footer matches spec from `03-mobile-homepage.md`.
- Text content (label, H1, body, CTAs, tags) matches design copy and typography scale.

---

## SUMMARY

Priority fixes for 100% fidelity:
1. **Add `lg:gap-*` to hero section** for desktop column spacing
2. **Adjust mobile diamond position** from `right-0` to negative offset (`right-[-8%]`)
3. Verify desktop diamond size against design proportion
