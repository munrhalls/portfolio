# Sanglogium Showcase UX

**Version:** 1.0 | **Date:** June 2026

---

## The Problem This Page Solves

Sanglogium has 15+ distinct, high-value features. Its live site is offline. A traditional "screenshot + 2 paragraphs" case study page would bury the depth and fail to compensate for the missing demo. Employers must be able to scroll through and see the full scale of the work immediately.

**Solution:** The `/projects/sanglogium` page is a long-scroll, sectioned showcase. Each major feature gets its own section with a screenshot, feature summary, and technical challenge. This is one HTML page — not an SPA. Astro renders it as a single file. The browser scrolls through it natively.

---

## Homepage UX

**URL:** `/`  
**Type:** Static landing page with a 2×2 grid layout: diamond canvas dead center, 4 content zones around it

### Desktop (≥ 1024px)

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  [Munrhalls / About  │  [Sanglogium         │
│   — top-left]        │   — top-right]       │
│                      │                      │
│         ┌────────────────────┐              │
│         │                    │              │
│         │   [Diamond Canvas] │              │
│         │                    │              │
│         └────────────────────┘              │
│                      │                      │
│  [Contact / Resume   │  [Skills             │
│   — bottom-left]     │   — bottom-right]    │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

- **Center:** Diamond canvas animation (400×400px), dead center, overlapping the 2×2 grid.
- **Top-left:** Brief introduction on who Munrhalls is and what he does. Links to `/about` ("more").
- **Top-right:** Sanglogium preview block. Links to `/projects/sanglogium` ("more" — full project breakdown).
- **Bottom-left:** Contact info + resume download link. Links to `/contact`.
- **Bottom-right:** Skills overview. Links to fuller skills breakdown (`/about`).
- Each zone: entire area is an `<a>` element — keyboard navigable, screen-reader friendly
- Hover state: border color darkens, background shifts subtly (`#fafafa`)
- Focus state: visible outline (2px offset, `#222`)

### Mobile (< 640px)

- Diamond canvas centered at top (70% viewport width, max 300px)
- Developer name + title below canvas (small, minimal)
- 4 content zones stacked vertically below, full-width cards with 16px horizontal padding
- Same titles, previews, and destinations as desktop

### The 4 zones

| Zone | Position | Title | Preview | Destination |
|------|----------|-------|---------|-------------|
| Top-left | Above-left of diamond | Munrhalls | "Full-stack developer. Brief introduction on who I am and what I do." | `/about` |
| Top-right | Above-right of diamond | Sanglogium | "3,505 commits. Full-stack e-commerce platform built solo." | `/projects/sanglogium` |
| Bottom-left | Below-left of diamond | Contact | "Get in touch. Resume download." | `/contact` |
| Bottom-right | Below-right of diamond | Skills | "Technologies and capabilities." | `/about` |

### Accessibility

- Each zone uses semantic `<a>` tag, not a `<div>` with `onClick`
- Focus ring visible on keyboard navigation
- `aria-label` on each zone with full descriptive text (e.g., "About — Full-stack developer...")
- Canvas has `role="img"` and descriptive `aria-label`
- Color contrast ≥ 4.5:1 for all text within zones

### Mobile rules

- 44×44px minimum tap target for each zone (full-width cards satisfy this)
- 16px minimum body text
- `prefers-reduced-motion`: canvas draws one static frame (diamond outlines only, no rain, no ring symbols) then stops; zones render static

---

## Employer Journey

```
[Portfolio link opened]
        ↓
[Homepage loads in <1s]
        ↓
[Sees: Canvas diamond animation dead center + 4 content zones in a 2×2 grid]
        ↓
[Reads block previews; clicks "Sanglogium" block]
        ↓
[Case study page loads instantly (Astro prefetch + ClientRouter)]
        ↓
[Sticky nav shows 14 sections of depth]
        ↓
[Scrolls through feature sections: screenshots + challenges for each]
        ↓
[Convinced. Clicks "Contact" or GitHub link in footer CTA.]
```

---

## Case Study Page Structure

**URL:** `/projects/sanglogium`  
**Type:** Single long-scroll HTML page with sticky anchor navigation  
**Total sections:** 14 (Hero + Overview + 12 feature sections) + Footer CTA  
**Length:** ~12–16 viewport heights on desktop  
**Mobile:** Single column, identical section order

```
/projects/sanglogium
│
├── STICKY ANCHOR NAV (appears after hero; collapses into scrollable pills on mobile)
│   └── Overview · Storefront · Search · Cart · Checkout · Payment · Shipping
│       Returns · Auth · Admin · Marketing · Images · Testing  ↑
│
├── SECTION 1 — HERO
│   ├── Title: "Sanglogium — Full-Stack E-Commerce Platform"
│   ├── One-liner: "19 months. 3,505 commits. One developer."
│   ├── Architecture diagram (high-level system overview)
│   ├── Tech stack badge grid (Next.js · React · TypeScript · Tailwind · Sanity · Stripe · better-auth · Playwright · Redis · Sentry)
│   └── Links: [View on GitHub] [Live site: currently offline]
│
├── SECTION 2 — OVERVIEW
│   ├── What was built and why (2–3 sentences)
│   ├── Scale metrics: 3,505 commits · 271MB · 19 months · 1 developer
│   └── System screenshot collage (desktop + mobile side-by-side, composed in HTML/CSS — not a pre-built image)
│
├── SECTION 3 — STOREFRONT
│   ├── Screenshot: homepage (desktop)
│   ├── Features: 500+ products, categories, responsive design, Sanity CMS
│   └── Challenge: "Managing a 500+ product catalogue with live CMS sync"
│
├── SECTION 4 — SEARCH & DISCOVERY
│   ├── Screenshot: search results page with active filters
│   ├── Features: full-text search, filter/sort, pagination, nuqs URL state
│   └── Challenge: "Search that survives catalogue growth and complex filter combinations"
│
├── SECTION 5 — CART
│   ├── Screenshot: cart page (desktop + mobile side-by-side)
│   ├── Features: guest + authenticated carts, persistent cart state, cart sync on login
│   └── Challenge: "Keeping cart state consistent across guest and authenticated sessions"
│
├── SECTION 6 — CHECKOUT
│   ├── Screenshot: multi-step checkout flow (steps visible)
│   ├── Features: multi-step form, address validation, order summary, shipping selection step
│   └── Challenge: "Multi-step checkout with real address validation and order integrity"
│
├── SECTION 7 — PAYMENT
│   ├── Screenshot: payment step (Stripe form, BLIK option)
│   ├── Features: Stripe integration, BLIK payment method, order creation on success
│   └── Challenge: "Real payment processing with two distinct methods and failure recovery"
│
├── SECTION 8 — SHIPPING
│   ├── Screenshot: shipping options selection
│   ├── Features: carrier display, shipping cost calculation, tracking integration
│   └── Challenge: "Accurate shipping cost display before payment confirmation"
│
├── SECTION 9 — RETURNS & REFUNDS
│   ├── Screenshot: returns interface / order history
│   ├── Features: return request flow, refund tracking, order history
│   └── Challenge: "Customer trust through transparent post-purchase operations"
│
├── SECTION 10 — AUTHENTICATION
│   ├── Code snippet: session guard function (short, focused, shows security thinking)
│   ├── Features: better-auth, email verification, password reset, session protection
│   └── Challenge: "Migrating from Clerk to better-auth mid-project with zero user disruption"
│
├── SECTION 11 — ADMIN PANEL
│   ├── Screenshot: admin dashboard (orders, products, user management)
│   ├── Features: order management, product CRUD, user roles, role-based access control
│   └── Challenge: "Role-based access that keeps business operations separate from storefront"
│
├── SECTION 12 — MARKETING PANEL
│   ├── Screenshot: marketing tools / promotions interface
│   ├── Features: promotions management, analytics views, campaign tools
│   └── Challenge: "Business-facing tools built on the same codebase as the storefront"
│
├── SECTION 13 — IMAGE PIPELINE
│   ├── Diagram: Sanity CDN → srcset → WebP/AVIF → lazy load pipeline
│   ├── Features: automatic format conversion, responsive images, lazy loading
│   └── Challenge: "500+ product images loading instantly across all device sizes"
│
├── SECTION 14 — TESTING & MONITORING
│   ├── Screenshot: Playwright test output + Vitest results
│   ├── Features: Playwright E2E (checkout flow, auth), Vitest unit tests, Sentry error monitoring
│   └── Challenge: "End-to-end testing a real checkout flow including payment simulation"
│
└── FOOTER CTA
    ├── "View the full codebase on GitHub" [button]
    ├── "3,505 commits · 19 months · solo" [metric callout]
    ├── "← Back to Projects"
    └── "Contact me →"
```

---

## Section Template

Sections 3–9 and 11–14 follow this visual pattern. **Exceptions:** Section 1 (HERO) and Section 2 (OVERVIEW) have unique layouts. Section 10 (AUTH) substitutes a code snippet for the screenshot column.

Every standard section follows the same visual pattern for consistency and scannability.

**Desktop (≥ 1024px):** Two-column layout, alternating left/right alignment between sections.

```
┌────────────────────────────────────────────────────┐
│  Section Title (H2)                                │
│  One-line description                              │
├───────────────────────┬────────────────────────────┤
│                       │  • Feature bullet 1        │
│   SCREENSHOT          │  • Feature bullet 2        │
│   (desktop view)      │  • Feature bullet 3        │
│                       │                            │
├───────────────────────┤  ┌──────────────────────┐  │
│  "The Challenge"      │  │  Mobile screenshot   │  │
│  2–3 sentences on     │  │  (if applicable)     │  │
│  what made it hard    │  └──────────────────────┘  │
└───────────────────────┴────────────────────────────┘
```

**Mobile (< 1024px):** Single column — screenshot full-width, then features list, then challenge text.

---

## Scroll Reveal Animation

Sections enter the viewport with a subtle fade-in + slide-up. No scrollytelling. No pinned sections. No GSAP.

**Specification:**
- Each `.feature-section` starts at `opacity: 0`, `transform: translateY(24px)`
- Intersection Observer fires at `threshold: 0.1` (10% of section visible)
- On entry: transitions to `opacity: 1`, `transform: translateY(0)`
- Transition duration: `0.5s ease`
- `prefers-reduced-motion`: skip transitions entirely, render sections at full opacity immediately
- Once revealed, sections stay revealed (no exit animations)

**Implementation tool:** Native `IntersectionObserver` API. Zero dependencies. Zero libraries.

---

## Sticky Anchor Navigation

**Behavior:**
- Hidden above the hero section
- Appears and sticks to top when user scrolls past the hero
- Active section highlighted as user scrolls (tracked by Intersection Observer)
- "↑" at the right end scrolls to top of page
- On mobile: horizontal-scrollable pill row (overflow-x: auto, no scrollbar shown)

**Section anchors:**
`#overview` `#storefront` `#search` `#cart` `#checkout` `#payment` `#shipping` `#returns` `#auth` `#admin` `#marketing` `#images` `#testing`

**Accessibility:**
- Skip link: "Skip to main content" at top of page
- All anchor links keyboard-navigable
- Active state communicated via `aria-current="true"` on active nav item

---

## Mobile UX

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| Two-column sections | Single column: screenshot → features → challenge |
| Sticky horizontal anchor nav | Horizontal-scroll pill row (touch-friendly, no visible scrollbar) |
| Large screenshots (600px wide) | Full-width, edge-to-edge; max 800px; WebP via Astro `<Image>` |
| Code snippets (wide) | Horizontal scroll within card; `overflow-x: auto` |
| Architecture diagram | Full-width; simplified version if original is too dense |
| "Back to top" button | Fixed bottom-right, 48×48px tap target |

**Mobile rules (non-negotiable):**
- 16px minimum body text
- 44×44px minimum tap targets on all interactive elements
- `loading="lazy"` on all images below the fold
- Only `opacity` and `transform` animated (no layout shifts, no blur)

---

## Image Asset Requirements

These must exist in `src/assets/images/sanglogium/` before the case study page is built. Source format: PNG (captured from browser). Astro's `<Image>` component converts to WebP/AVIF at build time.

**Note:** All other pages (homepage, about, projects listing, contact) can be built and deployed without these assets. Only `/projects/sanglogium` is gated on screenshots. The case study page will fail at build time if `<Image>` components reference missing files.

| File | Section Used In | Priority |
|------|----------------|----------|
| `storefront.png` | S3 Storefront | Critical |
| `product.png` | S3 Storefront (product detail) | Critical |
| `admin.png` | S11 Admin Panel | Critical |
| `checkout.png` | S6 Checkout | Critical |
| `cart.png` | S5 Cart | Critical |
| `payment.png` | S7 Payment | Critical |
| `search.png` | S4 Search & Discovery | High |
| `mobile.png` | S2 Overview collage | High |
| `shipping.png` | S8 Shipping | High |
| `returns.png` | S9 Returns & Refunds | High |
| `marketing.png` | S12 Marketing Panel | High |
| `tests.png` | S14 Testing & Monitoring | High |
| `architecture-diagram.svg` | S1 Hero + S2 Overview | High |
| `images-pipeline-diagram.svg` | S13 Image Pipeline (flow diagram) | Medium |

**How to capture:** Run the Sanglogium local dev server. Take browser screenshots (PNG). Use browser DevTools device emulation for mobile screenshots. Place all files in `src/assets/images/sanglogium/`.

---

## What to Avoid

| Pattern | Why |
|---------|-----|
| CSS scroll-snap | Fights natural scroll rhythm; breaks fine reading control |
| Full scrollytelling (pinned sections, scroll-driven animation) | Adds 50–100KB JS; overkill for a case study |
| Homepage as the long scroll | Dilutes the "best work" signal; wastes the 15-second screening window |
| True SPA (react-router, client-side navigation) | Unnecessary. Astro MPA + ClientRouter gives the same feel. |
| Infinite scroll or dynamic content loading | All content is static. No API. No lazy-loaded sections. |
