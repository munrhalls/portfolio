# Site Architecture

**Version:** 1.0 | **Date:** June 2026

---

## Framework: Astro 5 (Static Site Generation)

All 5 pages render as static HTML at build time. Zero server required. Zero runtime data fetching.

**Why Astro, not Next.js:** Next.js ships 80–150KB of JS even on static pages. For a portfolio where speed is the primary conversion factor, that is self-inflicted damage. Next.js is correct for Sanglogium (full-stack e-commerce). It is wrong for a 5-page static portfolio. Using Astro signals the ability to pick the right tool per job — itself a hiring signal.

**Why not pure HTML/CSS/JS:** No component reuse, no content collections, no build-time image optimization, no hot reload. The overhead of Astro is low. The benefit is high for a 5-page site with a deep case study.

---

## Project File Structure

```
src/
├── pages/
│   ├── index.astro                  # Homepage: diamond canvas + 4 HomeBlock components
│   ├── about.astro                  # About
│   ├── projects.astro               # Projects listing
│   ├── contact.astro                # Contact
│   └── projects/
│       └── sanglogium.astro         # Sanglogium case study (long-scroll)
├── components/
│   ├── MandorlaCanvas.astro         # Canvas centerpiece (vanilla JS in <script>)
│   ├── HomeBlock.astro              # Homepage content block: title + preview + link (zero JS)
│   ├── Nav.astro                    # Navigation (zero JS — CSS hover only)
│   ├── Footer.astro                 # Footer
│   ├── ProjectCard.astro            # Reusable project card (zero JS)
│   ├── SkillsGrid.astro             # Skills display (zero JS)
│   ├── FeatureSection.astro         # Reusable case study feature section (standard template)
│   └── ContactForm.astro            # Formspree form (minimal vanilla JS)
├── layouts/
│   └── Base.astro                   # HTML shell: fonts, meta, nav, footer, ClientRouter
├── styles/
│   └── global.css                   # Tailwind directives + global resets
├── assets/
│   └── images/
│       └── sanglogium/              # [PREREQUISITE — PNG screenshots captured from local dev server]
│           ├── storefront.png
│           ├── product.png
│           ├── cart.png
│           ├── checkout.png
│           ├── payment.png
│           ├── shipping.png
│           ├── returns.png
│           ├── search.png
│           ├── admin.png
│           ├── marketing.png
│           ├── mobile.png
│           ├── tests.png
│           ├── architecture-diagram.svg
│           └── images-pipeline-diagram.svg
└── public/
    └── resume.pdf                    # [PREREQUISITE — must be prepared]
```

---

## Homepage Layout

The homepage is a 2×2 grid of content blocks with the diamond canvas dead center:

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  [Top-Left]          │  [Top-Right]         │
│  Munrhalls / About   │  Sanglogium          │
│                      │                      │
│         ┌────────────────────┐              │
│         │                    │              │
│         │   [Diamond Canvas] │              │
│         │                    │              │
│         └────────────────────┘              │
│                      │                      │
│  [Bottom-Left]       │  [Bottom-Right]      │
│  Contact / Resume    │  Skills              │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

**Desktop (≥ 1024px):**
- **Center:** `MandorlaCanvas.astro` (400×400px), dead center of the viewport, overlapping the 2×2 grid
- **Top-left:** Brief introduction on who Munrhalls is and what he does. Links to `/about` ("more").
- **Top-right:** Sanglogium preview block. Links to `/projects/sanglogium` ("more" — full project breakdown).
- **Bottom-left:** Contact info + resume download link. Links to `/contact`.
- **Bottom-right:** Skills overview. Links to fuller skills breakdown (`/about`).
- Each zone is an `<a>` element with CSS hover state (border color change, subtle background shift)
- No animations, no shadows, no gradients. Tailwind only.

**Mobile (< 640px):**
- Diamond canvas centered at top (smaller: 70% viewport width, max 300px)
- Developer name + title below canvas (small, minimal)
- 4 content zones stacked vertically below, full-width cards
- Same content previews and destinations as desktop

**The 4 zones link to:**
| Zone | Position | Title | Preview | Destination |
|------|----------|-------|---------|-------------|
| Top-left | Above-left of diamond | Munrhalls | "Full-stack developer. Brief introduction on who I am and what I do." | `/about` |
| Top-right | Above-right of diamond | Sanglogium | "3,505 commits. Full-stack e-commerce platform built solo." | `/projects/sanglogium` |
| Bottom-left | Below-left of diamond | Contact | "Get in touch. Resume download." | `/contact` |
| Bottom-right | Below-right of diamond | Skills | "Technologies and capabilities." | `/about` |

---

## JavaScript Strategy

| Component | JS Shipped | Reason |
|-----------|-----------|--------|
| `MandorlaCanvas.astro` | ~5KB vanilla JS | Canvas 2D animation — unavoidably requires JS |
| `ContactForm.astro` | ~2KB vanilla JS | Formspree fetch + basic validation |
| `HomeBlock.astro` | **Zero** | Static `<a>` element with CSS hover state |
| `Nav.astro` | **Zero** | CSS-only hover states |
| `ProjectCard.astro` | **Zero** | Static content |
| `SkillsGrid.astro` | **Zero** | Static content |
| `FeatureSection.astro` | **Zero** | Scroll reveal handled by a single shared observer |
| Scroll reveal (case study) | ~1KB vanilla JS | Native Intersection Observer — no library |
| `<ClientRouter />` | ~10KB (Astro built-in) | Page transitions — shared across all pages, loaded once |

**Total JS shipped:** Homepage ~15KB (canvas + ClientRouter). Every other page ~13KB (no canvas). Case study page ~14KB (observer + ClientRouter).

**Homepage layout:** The diamond canvas sits dead center of `index.astro`, surrounded by 4 `HomeBlock` components in a 2×2 grid (top-left: Munrhalls/About, top-right: Sanglogium, bottom-left: Contact/Resume, bottom-right: Skills on desktop; stacked vertically below canvas on mobile). Each zone is an `<a>` tag wrapping a preview title and one-line description. Zero JavaScript. CSS hover states only.

---

## Page Transition Setup

Astro's `<ClientRouter />` in `Base.astro` provides:
- Prefetching on hover (pages load before click) — requires `prefetch` config in `astro.config.mjs` or `data-astro-prefetch` attributes on links
- Smooth animated transitions between pages
- SPA-feel navigation with correct URLs, SEO, and back-button support

This is not an SPA. It is an MPA with SPA-feel transitions. No client-side router. No global state.

---

## Hosting: Spaceship

- User owns `munrhalls.com` domain on Spaceship
- Static file upload: run `astro build` locally, upload `dist/` contents to Spaceship web root
- No build service integration (manual upload after local build)
- SSL certificate provided by Spaceship

**Deploy command:** `astro build` — output to `dist/`. Upload `dist/` contents (not the folder itself) to Spaceship hosting file manager or FTP.

---

## Contact Form: Formspree

- Free tier: 50 submissions/month (sufficient for a portfolio)
- No backend, no server functions, no environment variables in the build
- HTML form with `action="https://formspree.io/f/[FORM_ID]"` and `method="POST"`
- Works with Astro SSG out of the box
- AJAX submission optional (vanilla JS fetch) for better UX — no page reload on submit

---

## Image Optimization

Astro's built-in `<Image>` component handles:
- Automatic WebP/AVIF conversion
- Responsive `srcset` generation
- `loading="lazy"` by default
- Correct `width`/`height` to prevent layout shift

All Sanglogium screenshots go in `src/assets/images/sanglogium/` (PNG source format). Astro's `<Image>` component converts them to WebP/AVIF at build time and generates responsive `srcset`. Use `<Image>` component everywhere on the case study page. Do not put optimized images in `public/` — files there are served raw without any build-time processing.

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 1.0s |
| Time to Interactive (TTI) | < 1.5s |
| Total JS (all pages) | < 20KB |
| Total page weight (text pages) | < 100KB |
| Total page weight (homepage) | < 200KB |
| Lighthouse Performance score | ≥ 95 |

---

## Browser Support

Canvas 2D API, Intersection Observer, `requestAnimationFrame`, Astro ClientRouter, CSS custom properties, WebP images — all supported in 100% of browsers in active use as of 2026. No polyfills needed.

---

## Accessibility Baseline

- Semantic HTML throughout (headings hierarchy, landmark regions)
- `alt` text on all images
- `aria-label` on Canvas element with static description fallback
- Keyboard-navigable navigation
- Focus styles visible (not removed)
- `prefers-reduced-motion` respected: canvas draws one static frame then stops; scroll reveals render at full opacity immediately
- Color contrast ratio ≥ 4.5:1 for body text

---

## What to Avoid

| Pattern | Why Rejected |
|---------|-------------|
| React islands for static content | Ships React runtime (~40KB) for no benefit |
| shadcn/ui or any component library | Adds weight and lock-in; custom Tailwind components give full control |
| Next.js | 80–150KB JS tax on static pages; wrong signal for a static portfolio |
| CMS (Contentful, Strapi) | Static content. No editorial workflow. Over-engineering. |
| State management (Zustand, Redux) | No global state needed. Each page is independent. |
| GSAP / ScrollMagic / locomotive-scroll | Adds 50–100KB JS. Intersection Observer is sufficient. |
