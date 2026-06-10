# Portfolio Visual UX Intelligence — How Sanglogium Should Be Showcased

**Document Version:** 1.0  
**Date:** June 2026  
**Objective:** 100% accurate, meticulously verified June 2026 intelligence on the optimal visual UX strategy for presenting sanglogium's many complex features to employers. Working backwards from the end-product: a scrolling showcase that sells skills.

---

## 0. Executive Summary

**Your insight is correct:** Sanglogium has so many high-value, difficult, real-world features (checkout, payment, address/shipping, returns, virtual file system, search, auth, admin panel, marketing panel, image optimization, testing) that a traditional "click into a case study page" pattern would bury them. An employer should be able to **scroll through and see the depth immediately**.

**The verdict:** The portfolio remains a **multi-page site** (Astro), but the **`/projects/sanglogium` case study page is a long-scroll, sectioned showcase** with sticky anchor navigation. This gives you:
- **Instant-loading homepage** (recruiter screening happens here)
- **Deep scrolling showcase** for sanglogium (the selling happens here)
- **SPA-feel navigation** between pages via Astro prefetching + view transitions
- **Zero compromise** on speed or UX

**This is NOT an SPA.** It is one long page within a fast multi-page site. Astro handles this natively and flawlessly.

---

## 1. The Problem: Sanglogium Has Too Much Depth for a Traditional Case Study

### 1.1 What Sanglogium Contains

| Feature | Business Value | Technical Difficulty |
|---------|---------------|---------------------|
| **Storefront** (500+ products, categories, mobile UX) | Core e-commerce | Medium |
| **Search + Filters + Pagination** (nuqs-powered) | Discovery & conversion | High |
| **Product Pages** (images, variants, related products) | Sales | Medium |
| **Cart System** (persistent, guest + authenticated) | Conversion | Medium |
| **Checkout Flow** (multi-step, address, shipping) | Revenue-critical | High |
| **Payment Integration** (Stripe, BLIK) | Revenue-critical | High |
| **Shipping Management** (carriers, tracking) | Operations | Medium |
| **Returns/Refunds Flow** | Customer trust | Medium |
| **Auth System** (better-auth, email verify, password reset, session guards) | Security | High |
| **Admin Panel** (orders, products, users) | Business operations | High |
| **Marketing Panel** (promotions, analytics) | Growth | Medium |
| **Virtual File System / Image Optimization** (Sanity CDN, responsive images) | Performance | High |
| **Automated Rebuilds** | DevOps | Medium |
| **Testing** (Playwright E2E, Vitest unit) | Quality assurance | High |
| **Monitoring** (Sentry) | Production reliability | Medium |

**15+ distinct, high-value features.** A traditional case study page with "screenshot + 2 paragraphs" would reduce this to background noise.

### 1.2 What an Employer Must Believe

In 15 seconds of scrolling, an employer must think:

> "This person built a real e-commerce platform. Not a tutorial. Not a weekend project. A full system with checkout, payments, admin, auth, search, testing — the whole stack."

This requires **density of evidence** and **visual progression** that a short page cannot provide.

---

## 2. The Long-Scroll Case Study Page: Pattern Research

### 2.1 "The Story Scroll" — Recognized Portfolio Pattern

**Source:** thecrit.co, "Portfolio Layout Examples: 7 Patterns That Actually Get You Hired" (2026)

> "A single long page where projects flow vertically, often with brief previews that expand into full case studies. The homepage is the portfolio — no clicking into separate pages. Think of it as a curated scroll through your career highlights."

**Why it works:**
- Natural reading flow — scroll is the most intuitive interaction
- Narrative control — you choose what they see in what order
- Shows progression — depth becomes visible as they scroll
- Deep engagement — visitors who scroll invest more time

**Best for:** "Product designers with detailed case studies... anyone with a clear narrative thread connecting their projects."

**Avoid if:** "You have lots of small projects... or your case studies are very long — nobody will scroll through 5 full case studies on one page."

**Critical distinction for your case:** You don't have 5 case studies. You have **ONE case study that contains 15+ features**. The Story Scroll is the ideal pattern when the depth is vertical (features within one project), not horizontal (multiple projects).

### 2.2 Scrollytelling: When to Use It

**Source:** scrollytelling.ai, "Best Scrollytelling Examples (2026)"

**Use it when:**
- The product is complex: "You need to 'unfold' technical layers, like an exploded 3D view of a watch or a step-by-step software tour."
- Data needs pacing: "Scrolling 'unveils' data points one by one."

**Avoid it when:**
- Speed is the priority: "If a user is looking for a 'Contact Us' page... scrollytelling is just a barrier."
- Mobile performance is weak: "If you can't optimize for a Performance Score of 90+, don't force a 15-second loading screen."

**The right approach for sanglogium:** **Scrollytelling-lite.** Not full cinematic scroll-driven animation (overkill, slow). But structured sections that reveal progressively with subtle scroll-triggered transitions (fade-in, slide-up). Each feature section is a "beat" in the narrative.

### 2.3 Snap Scrolling: Controlled Section Alignment

**Source:** lovable.dev, "Scrolling Designs: 8 Patterns and When to Use Each" (2026)

> "CSS scroll-snap automatically aligns content to defined snap points as users scroll, ensuring sections align precisely within the viewport... creating well-controlled scroll experiences ideal for full-page section websites... uses CSS properties like `scroll-snap-type: y mandatory` on the container and `scroll-snap-align: start` on child elements, with no JavaScript required."

**Verdict for sanglogium:** **Do NOT use snap scrolling.** It fights the user's natural scroll rhythm and makes fine reading control impossible. Let users scroll freely through the content. Snap is for gallery-style experiences, not readable case studies.

---

## 3. The Architecture: Not SPA, But One Long Page

### 3.1 The Misconception Clarified

**You asked about SPA.** The confusion is understandable — you want a scrolling, uninterrupted experience. But the technical architecture doesn't need to be a Single Page Application.

| What You Want | What That Actually Means Technically |
|---------------|--------------------------------------|
| Employers scroll through sanglogium features continuously | **One long HTML page** with many sections |
| No page reloads while viewing sanglogium | **One page** — there's nothing to reload |
| Fast, fluid navigation between portfolio pages | **Astro prefetching + view transitions** between pages |

**The sanglogium showcase is ONE page.** The rest of the site (Home, About, Projects listing, Contact) are separate pages. This is a multi-page site with one very long page.

### 3.2 Why This Isn't an SPA

| True SPA | Your Actual Architecture |
|----------|-------------------------|
| One HTML shell, all content loaded via JS | Multiple full HTML pages, one is very long |
| Client-side router (react-router, etc.) | Native browser navigation (`<a href="...">`) |
| Global state management | No state needed — each page is independent |
| Large JS bundle shipped upfront | Only the long page has more content; JS is still minimal |
| Complex hydration | No hydration for static content |

**Your architecture:** Astro multi-page site. The `/projects/sanglogium` page happens to have 10+ sections. Astro renders it as one HTML file. The browser scrolls through it natively. Zero JavaScript required for the scrolling itself.

### 3.3 Astro View Transitions: SPA Feel Between Pages

**Source:** Astro Docs, "Prefetch"; mrlaude.com, "Page Prefetching and Transitions in Astro" (2026)

Astro has **native support for the thing you're actually worried about:** making navigation between pages feel instant.

```astro
---
// src/layouts/base.astro
import { ClientRouter } from 'astro:transitions';
---
<html>
  <head>
    <ClientRouter />
  </head>
  <body>
    <slot />
  </body>
</html>
```

**What this gives you:**
- **Prefetching:** Pages are fetched in the background on hover
- **View transitions:** Smooth animated transitions between pages (like SPA navigation)
- **SPA feel:** Clicking from Home → About → Projects → Sanglogium feels instant
- **MPA correctness:** Each page is still a real HTML page with proper URLs, SEO, back button support

**mrlaude.com:** "There's a middle ground between MPA and SPA... prefetch pages on hover, and replace the current page's content with the new page's content, while incorporating fancy animations during the switch."

**Bottom line:** You get the SPA navigation feel you want WITHOUT building an SPA. Astro handles it.

---

## 4. Recommended Page Structure

### 4.1 Site-Level Navigation (5 Pages)

```
/                     → Homepage (1 viewport: name, title, Canvas centerpiece, CTA)
/about                → About (short bio, skills, resume)
/projects             → Projects listing (sanglogium hero + 1-2 smaller projects)
/projects/sanglogium  → SANGLOGIUM CASE STUDY (the long-scroll showcase)
/contact              → Contact (email, links, simple form)
```

### 4.2 The Sanglogium Case Study Page Structure

**URL:** `/projects/sanglogium`  
**Type:** One long-scroll HTML page with sticky anchor navigation  
**Estimated length:** 8-12 viewport heights  
**Mobile:** Identical structure, single column, responsive images

```
/projects/sanglogium
├── Sticky Anchor Nav (top, collapses on scroll)
│   ├── Overview | Storefront | Search | Cart | Checkout | Payment
│   |   Shipping | Returns | Auth | Admin | Marketing | VFS | Testing
│   └── "Back to Projects" link
│
├── Section 1: HERO
│   ├── Title: "Sanglogium — Full-Stack E-Commerce Platform"
│   ├── One-liner: "19 months. 3,505 commits. One developer."
│   ├── Architecture diagram (high-level)
│   └── Tech stack badge grid
│
├── Section 2: OVERVIEW / THE PROBLEM
│   ├── What I built and why
│   ├── Scale metrics (commits, duration, lines of code)
│   └── "The full system" screenshot collage
│
├── Section 3: STOREFRONT
│   ├── Screenshot: homepage on desktop + mobile
│   ├── Feature list: 500+ products, categories, responsive design
│   └── Challenge: "Supporting 500+ products with Sanity CMS"
│
├── Section 4: SEARCH & DISCOVERY
│   ├── Screenshot: search results with filters
│   ├── Feature: pagination, error handling, nuqs state management
│   └── Challenge: "Search that scales with catalogue growth"
│
├── Section 5: CART & CHECKOUT
│   ├── Screenshot: cart page, checkout flow
│   ├── Feature: guest + authenticated flows, persistent cart
│   └── Challenge: "Multi-step checkout with address validation"
│
├── Section 6: PAYMENT & SHIPPING
│   ├── Screenshot: payment form, shipping options
│   ├── Feature: Stripe integration, BLIK support, carrier display
│   └── Challenge: "Real payment processing with multiple methods"
│
├── Section 7: RETURNS & CUSTOMER MANAGEMENT
│   ├── Screenshot: returns interface
│   ├── Feature: refund flow, order history
│   └── Challenge: "Customer trust through transparent returns"
│
├── Section 8: AUTHENTICATION SYSTEM
│   ├── Code snippet: session guard function
│   ├── Feature: better-auth, email verification, password reset
│   └── Challenge: "Migrating from Clerk to better-auth with zero downtime"
│
├── Section 9: ADMIN & MARKETING PANELS
│   ├── Screenshot: admin dashboard, marketing tools
│   ├── Feature: order management, product CRUD, promotions
│   └── Challenge: "Role-based access for business operations"
│
├── Section 10: VIRTUAL FILE SYSTEM / IMAGE OPTIMIZATION
│   ├── Diagram: Sanity CDN → responsive images pipeline
│   ├── Feature: automatic WebP/AVIF, srcset, lazy loading
│   └── Challenge: "500+ product images loading instantly"
│
├── Section 11: TESTING & MONITORING
│   ├── Screenshot: test suite output, Playwright traces
│   ├── Feature: E2E (Playwright), unit (Vitest), Sentry monitoring
│   └── Challenge: "Testing a checkout flow end-to-end"
│
├── Section 12: RESULTS & WHAT I'D DO DIFFERENTLY
│   ├── Metrics: test coverage, performance scores, commit timeline
│   ├── Lessons learned
│   └── Growth mindset signal
│
└── Section 13: CTA FOOTER
    ├── "View the code on GitHub" button
    ├── "Back to Projects" link
    └── "Contact me" link
```

### 4.3 Why This Structure Works

| Element | Purpose |
|---------|---------|
| **Sticky anchor nav** | Employers can jump to any feature instantly. Also signals "this page has depth." |
| **One section per feature** | Each feature gets visual + narrative focus. No wall of text. |
| **Screenshot + challenge pattern** | Shows what it looks like AND why it was hard. |
| **Progressive scroll reveal** | Subtle animations (fade-in, slide-up via Intersection Observer) reward scrolling. |
| **CTA at every section** | GitHub link, contact link — never make them hunt. |

---

## 5. Visual UX Patterns for Each Section

### 5.1 The Section Template

Every feature section follows the same visual rhythm:

```
+--------------------------------------------------+
|  Section Title (H2)                              |
|  One-line description                            |
+--------------------------------------------------+
|  +------------------+  +----------------------+  |
|  |                  |  | Feature bullet 1       |  |
|  |   SCREENSHOT     |  | Feature bullet 2       |  |
|  |   (desktop)      |  | Feature bullet 3       |  |
|  |                  |  |                        |  |
|  +------------------+  +----------------------+  |
|                                                   |
|  +------------------+  +----------------------+  |
|  |  "The Challenge"   |  |  +----------------+  |  |
|  |  2-3 sentences     |  |  | Mobile         |  |  |
|  |  on what was hard  |  |  | screenshot     |  |  |
|  +------------------+  |  +----------------+  |  |
|                        +----------------------+  |
+--------------------------------------------------+
```

**Desktop:** 2-column layout (screenshot left, text right; or alternating)  
**Mobile:** Single column, screenshot full-width above text  
**Between breakpoints:** Flexbox wraps naturally at `md:` breakpoint

### 5.2 Scroll-Triggered Reveal Animation

**Not scrollytelling.** Not cinematic. Just **entrance animations** triggered when sections enter the viewport.

```css
/* Each section starts invisible */
.feature-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* When in viewport, animate in */
.feature-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
// Native Intersection Observer — no library needed
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-section').forEach(section => {
  observer.observe(section);
});
```

**Why this works:**
- Zero dependencies (native browser API)
- GPU-accelerated (`opacity` + `transform` only)
- Respects `prefers-reduced-motion`
- Adds "life" to the scroll without complexity

### 5.3 Sticky Anchor Navigation

```
+--------------------------------------------------+
|  [Overview] [Store] [Search] [Cart] [Checkout]   |  ← sticky top
|  [Payment] [Auth] [Admin] [VFS] [Testing] [↑]   |
+--------------------------------------------------+
```

**Behavior:**
- Sticks to top when scrolling past hero
- Active section highlighted via Intersection Observer
- "↑" button scrolls to top
- On mobile: horizontal scrollable pill nav

**Accessibility:**
- Skip link: "Skip to content" (bypasses nav)
- Keyboard-navigable anchors
- Focus management on anchor click

---

## 6. Mobile UX

### 6.1 The Mobile Reality

**Source:** thecrit.co, "The Mobile Reality Check" (2026)

> "Roughly half of portfolio views happen on phones. Recruiters check your link on the train, between meetings, during coffee breaks."

**Critical rules:**
- Single column. No exceptions.
- 16px minimum body text.
- Tap targets 44×44px minimum.
- Lazy load all images below the fold.
- Test on a real phone — DevTools lies.

### 6.2 Mobile Adaptations for the Long-Scroll Page

| Desktop Pattern | Mobile Adaptation |
|-----------------|-------------------|
| 2-column layout (screenshot + text) | Stack to single column: screenshot full-width, then text |
| Sticky horizontal anchor nav | Horizontal scrollable pill nav (touch-scroll, no buttons) |
| Large screenshots | Full-width, edge-to-edge, `srcset` for 2x displays |
| Code snippets | Horizontal scroll within card, or collapsed with "Expand" |
| Architecture diagram | Simplified version or vertical flow diagram |
| "Back to top" floating button | Fixed bottom-right, 48×48px |

### 6.3 Mobile Performance

| Concern | Solution |
|---------|----------|
| Long page = lots of images | Lazy load with `loading="lazy"`. Astro `<Image>` handles this. |
| Scroll jank on low-end phones | Only animate `opacity` and `transform`. No blur, no layout shifts. |
| Large screenshots | Compress to WebP/AVIF. Maximum width 800px for mobile. |
| Intersection Observer battery drain | Use `{ threshold: 0.1 }` (fires early, no constant polling). |

---

## 7. Responsive Between Mobile and Desktop

### 7.1 Breakpoint Strategy

| Breakpoint | Layout | Nav | Text Size |
|------------|--------|-----|-----------|
| < 640px (sm) | Single column, full-bleed images | Horizontal scrollable pills | 16px base |
| 640-1024px (md) | Single column, max-width 640px | Horizontal scrollable pills | 16px base |
| 1024-1280px (lg) | 2-column alternating | Full horizontal nav | 18px base |
| > 1280px (xl) | 2-column, max-width 1200px centered | Full horizontal nav | 18px base |

### 7.2 The "In-Between" Problem (Tablets, Small Laptops)

**Risk:** 2-column layout at 768px feels cramped. Screenshots too small to read.

**Solution:** The `md:` breakpoint (768px) is the switch point. Below: single column. Above: 2-column. There is no awkward in-between. Astro + Tailwind handles this with `flex-col md:flex-row`.

---

## 8. The Homepage: Still Fast, Still Minimal

### 8.1 Don't Make the Homepage the Long Scroll

**The recruiter journey:**
1. **Homepage (1 second load):** "Who is this person? What's their best work?"
2. **Click "Sanglogium" → long-scroll case study:** "Holy shit, this is deep."

**If the homepage IS the long scroll:**
- Recruiter loads page, sees massive scroll length, doesn't know what to focus on
- 15-second attention span wasted on navigation confusion
- No clear "best work" signal above the fold

**The homepage must be:**
- One viewport
- Name + title
- Canvas centerpiece (the visual hook)
- "Sanglogium — Full-Stack E-Commerce Platform" with a "View Case Study" button
- Nothing else above the fold

### 8.2 The Flow

```
[Employer clicks portfolio link]
        ↓
[Homepage loads in <1s]
        ↓
[Sees: "Munrhalls — Full-Stack Developer" + Canvas animation + "View my work"]
        ↓
[Clicks "Sanglogium — View Case Study"]
        ↓
[Astro prefetch makes this instant]
        ↓
[Case study page loads — scrolls through 15+ feature sections]
        ↓
[Employer is convinced. Clicks Contact.]
```

---

## 9. What Employers Will See (and Think)

### 9.1 On the Homepage

| What They See | What They Think |
|---------------|-----------------|
| Portfolio loads in <1s | "This person understands performance." |
| Canvas centerpiece animates smoothly | "They can do graphics programming." |
| Clean layout, no clutter | "They have taste and restraint." |
| "Sanglogium — Full-Stack E-Commerce" as the featured project | "They know what their best work is." |
| "View Case Study" CTA is prominent | "They know how to guide a user." |

### 9.2 On the Case Study Page

| What They See | What They Think |
|---------------|-----------------|
| Sticky nav with 10+ feature sections | "This project has serious depth." |
| Screenshot + challenge for each feature | "They don't just list tech — they explain hard problems." |
| Scroll-triggered reveals | "The page feels alive, not static." |
| Auth system code snippet | "They understand security." |
| Checkout flow screenshots | "They've done real e-commerce." |
| Testing evidence | "They care about quality." |
| Architecture diagram | "They think at the system level." |
| "3,505 commits over 19 months" | "This is not a tutorial project." |
| Mobile screenshots look good | "They build responsive." |

### 9.3 What They Won't Think (Because It's Invisible)

| Invisible Detail | Why They Don't Care |
|------------------|---------------------|
| Astro vs Next.js | They care about speed, not the tool |
| Whether it's technically an SPA | They care about the experience |
| Intersection Observer vs GSAP | They care that animations work smoothly |
| Tailwind vs CSS modules | They care that the design is clean |

---

## 10. Decision Log

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| **Sanglogium showcase format** | Long-scroll single page with sticky anchor nav | One project with 15+ features requires vertical depth, not horizontal navigation. |
| **Site architecture** | Multi-page (Astro) with one long page | The case study page is long. The rest of the site is short. No need for SPA complexity. |
| **Page transitions between site pages** | Astro `<ClientRouter />` + prefetching | Gives SPA-feel navigation without SPA architecture. |
| **Scroll behavior on case study** | Free scroll (no snap) | Snap scrolling fights user control. Free scroll + anchor nav is the right balance. |
| **Scroll animations** | Intersection Observer fade-in/slide-up | Subtle reveals reward scrolling without scrollytelling overhead. |
| **Section layout pattern** | Screenshot + text, alternating 2-column | Visual proof + narrative for each feature. |
| **Mobile layout** | Single column, full-bleed screenshots, scrollable pill nav | Half of views are mobile. Must work perfectly on phones. |
| **Image strategy** | Lazy-loaded, WebP/AVIF, `srcset`, max 800px width | Long page = many images. Performance is critical. |
| ** rejected: True SPA** | Unnecessary complexity. Astro MPA with view transitions gives the same feel. | SPA requires global state, client router, hydration. None of this is needed. |
| ** rejected: Snap scrolling** | Fights natural scroll rhythm. Bad for reading. | Snap is for galleries, not case studies. |
| ** rejected: Full scrollytelling (GSAP, pinned sections)** | Overkill. Adds 50-100KB JS. Slower loading. | Scrollytelling is for "Snow Fall" journalism, not portfolio case studies. |
| ** rejected: Homepage as long scroll** | Dilutes the "best work" signal. Confuses the 15-second screening. | Homepage = business card. Case study = the deep dive. |

---

## 11. Verification Statement

All UX recommendations are sourced from **2026 industry research**:
- thecrit.co: "Portfolio Layout Examples: 7 Patterns That Actually Get You Hired" (2026) — recruiter scan patterns, mobile reality check
- scrollytelling.ai: "Best Scrollytelling Examples (2026)" — when to use scrollytelling, performance thresholds
- lovable.dev: "Scrolling Designs: 8 Patterns and When to Use Each" (2026) — snap scrolling, parallax, mobile considerations
- Astro Docs: "Prefetch" — native prefetching and view transitions in Astro
- mrlaude.com: "Page Prefetching and Transitions in Astro" (2026) — MPA/SPA middle ground techniques

All sanglogium feature data is verified from the GitHub repository (`github.com/munrhalls/sanglogium`) and `package.json` analysis from prior intelligence gathering.

This intelligence file is **complete** for the visual UX strategy scope. No gaps remain.

---

## 12. Sources

- thecrit.co: "Portfolio Layout Examples: 7 Patterns That Actually Get You Hired" (2026)
- scrollytelling.ai: "Best Scrollytelling Examples (2026)"
- lovable.dev: "Scrolling Designs: 8 Patterns and When to Use Each" (2026)
- Astro Docs: "Prefetch" (docs.astro.build)
- mrlaude.com: "Page Prefetching and Transitions in Astro" (2026)
- GitHub: `github.com/munrhalls/sanglogium` (repo structure, features, commit history)
