# Frame — June 9, 2026

## Objective

Build a 5-page Astro 5 SSG portfolio site with a Canvas 2D diamond centerpiece, 2×2 grid homepage, and a 14-section Sanglogium case study page — all loading under 1 second with Lighthouse ≥ 95.

---

## Happy Path (implement THIS first)

### Tasks

0. **Prerequisites — placeholders (real assets added later)**
   - Add placeholder images for the 14 Sanglogium screenshots to `src/assets/images/sanglogium/` (e.g., CSS-generated or simple colored rectangles)
   - Add placeholder SVGs for the architecture and image pipeline diagrams to `src/assets/images/sanglogium/`
   - Add a placeholder resume file to `public/resume.pdf` (or a dummy PDF link)

1. **Project scaffold + Base layout + Nav/Footer**
   - `npm create astro@latest`, install Tailwind CSS
   - `src/layouts/Base.astro` — HTML shell: system font stack (`system-ui, -apple-system, sans-serif`), meta tags, `<ClientRouter />`, nav, footer slot
   - `src/components/Nav.astro` — zero-JS nav with CSS hover states, 3 links (About, Projects, Contact)
   - `src/components/Footer.astro` — static footer
   - `src/styles/global.css` — Tailwind directives + global resets

2. **Homepage — Canvas diamond centerpiece + 4 HomeBlock zones**
   - `src/pages/index.astro` — 2×2 grid: diamond dead center, 4 zones around it
   - `src/components/MandorlaCanvas.astro` — `<canvas>` element with vanilla JS implementing:
     - Canvas background: `#080808` (near-black) — dark element on light page; white strokes render against this
     - Two concentric nested diamonds (outer: `rgba(255,255,255,0.75)`, inner: `rgba(255,255,255,0.45)`)
     - Ring zone: 20–30 CJK/Hiragana/Katakana symbols rotating counter-clockwise (`-0.003 rad/frame`); font: `16px serif` (system fallback, no web font load)
     - Inner zone: Matrix-style code rain (green `#00c853` + blue `#2979ff` mixed streams), clipped to inner diamond; font: `14px monospace`
     - Per-frame order: trail fade → redraw borders → matrix rain (clipped) → ring symbols (rotated)
     - High-DPI via `devicePixelRatio`, responsive resize, `prefers-reduced-motion` pause, `visibilitychange` pause
     - Round all x/y positions to integers before `fillText` calls (prevents sub-pixel rendering, critical for 60fps on mobile)
   - `src/components/HomeBlock.astro` — `<a>` element wrapper: title + one-line preview + CSS hover state (border darkens, bg `#fafafa`). Zero JS.
   - 4 zone instances: Top-left→Munrhalls/About, Top-right→Sanglogium, Bottom-left→Contact/Resume, Bottom-right→Skills
   - Desktop: CSS Grid 2×2 layout. Mobile (< 640px): canvas top, zones stacked vertically.

3. **Sanglogium case study page (long-scroll, 14 sections)**
   - `src/pages/projects/sanglogium.astro` — single long-scroll HTML page
   - `src/components/FeatureSection.astro` — reusable template: H2 title, one-line description, two-column (desktop: screenshot left + features/challenge right, alternating per section; mobile: single column)
   - 14 sections: Hero → Overview → Storefront → Search → Cart → Checkout → Payment → Shipping → Returns → Auth → Admin → Marketing → Image Pipeline → Testing → Footer CTA
   - Sticky anchor nav: appears after hero scrolls past, horizontal pill row (mobile: scrollable), active section tracked via Intersection Observer, `aria-current="true"`
   - Scroll reveal: Intersection Observer at `threshold: 0.1`, `opacity 0→1` + `translateY(24px→0)`, `0.5s ease`, respects `prefers-reduced-motion`
   - All screenshots via Astro `<Image>` component (WebP/AVIF, responsive srcset, lazy loading)
   - Auth section (S10): code snippet instead of screenshot
   - Image Pipeline section (S13): flow diagram instead of screenshot
   - Footer CTA: GitHub link, metric callout, back to Projects, Contact link

4. **About, Projects listing, Contact pages**
   - `src/pages/about.astro` — 2–3 sentence bio, `src/components/SkillsGrid.astro` (12–15 technologies, CSS Grid tags), resume PDF download link (`public/resume.pdf`)
   - `src/pages/projects.astro` — Sanglogium hero card + optional 1–2 smaller cards via `src/components/ProjectCard.astro` (zero JS, static content)
   - `src/pages/contact.astro` — email, LinkedIn, GitHub links + `src/components/ContactForm.astro` (Formspree fetch, ~2KB vanilla JS, basic validation)

5. **Deploy**
   - Build static site: `astro build`, output dir `dist/`
   - Upload `dist/` to hosting for domain `munrhalls.com` via Spaceship

### Acceptance

- [ ] **Lighthouse Performance ≥ 95** — run Lighthouse on homepage and case study page; both score ≥ 95
- [ ] **LCP < 1.0s** — homepage Largest Contentful Paint measured via Lighthouse or Chrome DevTools
- [ ] **Total JS < 20KB per page** — verify via browser DevTools Network tab; homepage ~15KB (canvas + ClientRouter), other pages ~13KB
- [ ] **Canvas animates at 60fps** — open homepage, verify smooth animation via browser FPS meter; no frame drops on modern hardware
- [ ] **All 5 pages render correctly on desktop (≥1024px) and mobile (<640px)** — manual check: homepage 2×2 grid, case study two-column sections + sticky nav, about skills grid, projects cards, contact form
- [ ] **Case study has all 14 sections with sticky nav** — scroll through `/projects/sanglogium`, verify every section present, sticky nav appears after hero, active section highlights correctly
- [ ] **`prefers-reduced-motion` respected** — enable in OS settings; canvas pauses (static frame), scroll reveals render at full opacity immediately
- [ ] **Keyboard navigable** — Tab through all interactive elements; focus rings visible; all HomeBlock zones reachable; sticky nav links work
- [ ] **Contact form submits successfully** — fill form, submit; verify Formspree receives submission (check Formspree dashboard)
- [ ] **No broken links** — verify all internal links resolve; GitHub link points to correct repo; resume.pdf downloadable

---

## Edge Cases Path — LOCKED until happy path passes

**Do NOT implement these until happy path acceptance checks all pass.**

### Known concerns (placeholder list only)

- **Font rendering on canvas** — ring symbols use system `serif` fallback (no web font loaded). CJK characters render correctly via OS fonts on all platforms. Verify ring symbols are visible and legible on Windows, macOS, and mobile.
- **Canvas resize on orientation change** — mobile orientation switch triggers resize; stream positions must reinitialize without visual glitch.
- **Case study page length on mobile** — 14 sections may feel excessively long on mobile; verify scroll depth is acceptable.
- **Formspree rate limit** — 50 submissions/month free tier; unlikely to be hit for a portfolio, but confirm if traffic spikes.
- **Hosting build timeout** — Astro image optimization (14+ screenshots) may approach build time limits; verify build completes within hosting provider limits.

### How to unlock

1. Complete all happy path tasks
2. Run all happy path acceptance checks, mark ✓ with evidence
3. Update this document: "Happy path complete — unlocking edge cases"
4. Then frame edge cases into full tasks + acceptance checks