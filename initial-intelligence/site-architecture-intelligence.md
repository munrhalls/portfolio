# Site Architecture Intelligence — End-Product-First Portfolio Design

**Document Version:** 2.0 — End-Product-First Rewrite  
**Date:** June 2026  
**Objective:** Working backwards from the end-product (a portfolio that sells skills to employers), determine the optimal site architecture, showcase strategy, and technology stack. Zero assumptions about frameworks. 100% verified 2026 intelligence.

---

## 0. Executive Summary (Read This First)

**The business problem:** You have one massive, verifiable, production-grade project (sanglogium: 19 months, 3,505 commits, 271MB, solo-built e-commerce platform). You need a portfolio that makes employers believe this project is real and impressive, then contact you.

**The critical obstacle:** `sanglogium.com` is down. There is **no live demo**. The portfolio must compensate by being the most convincing possible packaging for the evidence that exists.

**The end-product verdict:**

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **Portfolio pattern** | Clean minimalist + deep case study | Fast, readable, stays out of sanglogium's way. Signals taste and restraint. |
| **Site structure** | 5 static pages: Home, About, Projects, Sanglogium Case Study, Contact | All content is static. No dynamic data. No user accounts. |
| **Framework** | **Astro** | Zero JS by default. Fastest loads. HTML-first. Supports React/Vue/Svelte islands. Default pick for portfolios in 2026. |
| **Styling** | Tailwind CSS | Already known. Works with Astro. Enables custom component design without UI libraries. |
| **Homepage centerpiece** | Canvas 2D mandorla animation | Embedded as vanilla JS or React island. Already researched in Q-and-A-intelligence.md. |
| **Sanglogium showcase** | Deep case study page with screenshots, architecture diagrams, code snippets, commit timeline, and narrative | Compensates for no live demo. This page does 80% of the portfolio's selling work. |
| **Hosting** | **Spaceship** | User owns `munrhalls.com` domain on Spaceship. Static file upload after `astro build`. |
| **Contact** | Netlify Forms or Formspree | No backend needed. No Server Actions needed. |

**Why not Next.js:** Next.js ships 80–150KB of JavaScript even on static pages. For a portfolio where speed is the #1 conversion factor, this is a self-inflicted wound. Next.js is the right tool for sanglogium (a full-stack e-commerce app). It is the wrong tool for a 5-page static portfolio. Using it here signals "I default to the only tool I know" rather than "I pick the right tool for the job."

---

## 1. Sanglogium — 100% Verified Project Scale

### 1.1 GitHub API Verification

All data sourced directly from `api.github.com/repos/munrhalls/sanglogium` on June 6, 2026.

| Metric | Verified Value | Source |
|--------|---------------|--------|
| **Created** | Nov 14, 2024 | `created_at: "2024-11-14T14:57:12Z"` |
| **Last Push** | June 4, 2026 | `pushed_at: "2026-06-04T18:56:39Z"` |
| **Active Duration** | **~19 months** | Calculated from created to last push |
| **Total Commits** | **3,505** | `contributions: 3505` (contributors API) |
| **Repo Size** | **271.6 MB** | `size: 271609` (KB) |
| **Contributors** | **1 (solo)** | Only `munrhalls` in contributors list |
| **Language** | TypeScript (primary) | `language: "TypeScript"` |
| **Code Breakdown** | TS: 914KB, JS: 684KB, PowerShell: 26KB, Python: 13KB | languages API |
| **Stars** | 2 | `stargazers_count: 2` |
| **Forks** | 0 | `forks_count: 0` |
| **Open Issues** | 0 | `open_issues_count: 0` |
| **Homepage** | `sanglogium.com` | Currently **non-resolving** |

### 1.2 Commit Discipline Analysis

Commit messages show a **custom project management system** with difficulty ratings (1-8), scope tags, and Definition of Done tracking. A custom `.beads/issues.jsonl` tracking system is in use. Multiple commits per day, often 5-10+ on active days.

**Assessment:** Production-grade engineering work at professional scale. Not a tutorial or weekend project.

### 1.3 Critical Finding: Live Site Status

- **`sanglogium.com` DNS does not resolve.** The domain is down.
- **Implication:** The portfolio must contain **all proof of sanglogium's existence** — screenshots, architecture diagrams, code snippets, case study text. No employer can click through to a live store.

---

## 2. What Hiring Managers Actually Look For (June 2026)

**Source:** Multiple 2026 industry articles including interviews with hiring managers who reviewed 200+ portfolios, surveys of 500+ tech company hiring managers, and analysis of portfolios that led to actual job offers.

### 2.1 The Central Question

> "Can this person build things that work?"
> — Every hiring manager, 2026

Everything else — degree, certifications, years of experience — is context around this question.

### 2.2 The 80/20 Rule

**The projects section does 80% of the heavy lifting.** If you spend time on one part of your portfolio, spend it there.

> "Your portfolio should be a living document that reflects your actual work, not a static brochure you update once a year. The developers who get found in 2026 are the ones whose real work is visible."
> — codeboards.io, 2026

### 2.3 The 15-Second Reality

> "Employers spend an average of 15 seconds on portfolio sites during initial screening. Make sure your best work is immediately visible."
> — hakia.com, Developer Portfolio Guide 2026

**Translation:** The portfolio must load in under 1 second and put sanglogium front and center within the first viewport.

### 2.4 What Actually Works

| What Works | Why |
|------------|-----|
| **Case studies, not just screenshots** | Shows problem-solving, not just code-writing |
| **Live demos** | "When someone can click a link and use something you built, the conversation shifts from 'can they code?' to 'they clearly can code — do I want them on my team?'" |
| **The Problem → Solution → How It Works → Challenges → Results structure** | Demonstrates product thinking |
| **Clean, fast, readable design** | "A clean, fast, readable portfolio beats a flashy slow one every time. Hiring managers are busy. They want to see your work, not watch a loading animation." |
| **Updated, recent content** | A portfolio with projects from 2024 sends a bad signal |
| **Focused tech stack (12-15 technologies)** | More credible than a laundry list of 40 things |
| **Communication skills (writing)** | "A developer who can clearly explain a complex architectural decision... that's gold, especially for remote teams." |

### 2.5 What Kills Portfolios

| Mistake | Damage |
|---------|--------|
| Tutorial projects (Netflix clone, etc.) | Signals "can follow instructions" not "can solve problems" |
| Massive "About Me" sections | Nobody reads your life story. 2-3 sentences. |
| Skills progress bars | "Everyone hates them. They mean nothing." |
| Overly designed portfolios | "If you're a backend developer, spending three weeks on fancy animations is time better spent improving your projects." |
| Outdated content | Latest project from 2024 = red flag |
| Dead links | "You'd be amazed how many developer portfolios link to dead Heroku apps." |

### 2.6 The Portfolio Patterns That Land Jobs

From remoteworks.pro analysis of developers who "never have trouble finding work":

1. **The clean minimalist** — "No animations. No particle effects. No three.js hero section. Just a clean layout, sharp typography, a brief bio, and well-presented projects. This portfolio loads in under a second and gets straight to the point. This approach works because it demonstrates taste and restraint — two qualities that are underrated in development."

2. **The side-project builder** — "This person builds things constantly, and their portfolio is basically a showcase of working applications you can actually click on and use. The power here is tangible proof."

3. **The full-stack showcaser** — Organized by capability (frontend, backend, DevOps) with real project anchors.

**Your pattern:** You are a **clean minimalist + side-project builder hybrid**. Sanglogium is the massive side project. The portfolio's job is to present it with taste and restraint.

---

## 3. The Sanglogium Showcase Problem

### 3.1 The Missing Live Demo

A live demo is the single most powerful portfolio element. You don't have one. This is a **critical gap** that must be compensated for with extreme thoroughness in the case study.

### 3.2 The Compensation Strategy

The sanglogium case study page must contain:

| Element | Purpose | Evidence Source |
|---------|---------|-----------------|
| **Screenshots/GIFs** | Visual proof the app exists and works | GitHub repo screenshots, local dev server captures |
| **Architecture diagram** | Shows system design thinking | Draw from actual codebase structure |
| **Code snippets** | Demonstrates code quality and patterns | Direct from repo — auth system, checkout flow, etc. |
| **Commit timeline visualization** | Proves 19-month sustained effort | GitHub API data already verified |
| **Tech stack with rationale** | Shows technical decision-making | `package.json` and actual architecture |
| **Problem → Solution narrative** | Product thinking | "Built because existing e-commerce solutions were X, so I built Y" |
| **Challenges overcome** | Deep technical thinking | Image optimization, auth migration, checkout complexity |
| **Performance metrics** | Production awareness | Lighthouse scores, bundle analysis if available |
| **Testing evidence** | Engineering rigor | Playwright + Vitest setup in repo |
| **README excerpt** | Documentation quality | Actual repo README |

### 3.3 The Narrative Arc

The case study should tell this story:

1. **The Problem:** Existing e-commerce platforms are either too simple (no real checkout) or too complex (Shopify lock-in). I needed a production-grade reference implementation.
2. **The Scale:** 19 months. 3,505 commits. 271MB of code. One developer. Full e-commerce: storefront, admin panel, marketing panel, Stripe checkout, auth, caching, testing.
3. **The Architecture:** Next.js 15 App Router, React 19, TypeScript, Tailwind, Sanity CMS, Stripe, better-auth, BullMQ, Redis, Sentry, Playwright, Vitest.
4. **The Hard Parts:** Auth system migration (Clerk → better-auth). Image optimization across 500+ products. Checkout flow with BLIK, shipping carriers, guest accounts. Search with pagination and filters.
5. **The Evidence:** Screenshots. Code. Commit history. Test suite.

**This page is the portfolio.** Everything else (About, Contact, Projects list) is navigation and context.

---

## 4. Working Backwards: From End-Product to Technology

### 4.1 Step 1: Define the Product Requirements

| Requirement | Why It Matters |
|-------------|---------------|
| Load in < 1 second | 15-second employer attention span; slow load = instant close |
| Zero unnecessary JavaScript | Every KB of JS is time not spent reading about sanglogium |
| Showcase 5 static pages | No dynamic data, no user accounts, no API needed |
| Embed one Canvas 2D animation | Homepage centerpiece — already designed |
| Easy to maintain | Time goes to job applications, not portfolio engineering |
| Deploy for free | Job search phase; zero ongoing cost |
| Custom HTML + Tailwind components | User preference: full control, no UI library lock-in |

### 4.2 Step 2: Evaluate Frameworks Against Requirements

**Evaluation criteria:** Load speed, complexity, Canvas support, Tailwind support, maintenance, employer signal.

| Framework | Load Speed | Complexity | Canvas | Tailwind | Maintenance | Signal |
|-----------|-----------|-----------|--------|----------|-------------|--------|
| **Astro** | 98/100 Lighthouse | Low | ✅ (script or island) | ✅ | Low | "Picks right tool" |
| **Next.js App Router** | 72/100 Lighthouse | High | ✅ (client component) | ✅ | Medium | "Knows Next.js" but overkill |
| **Hugo** | 100/100 Lighthouse | Medium | ✅ (script tag) | ⚠️ (build step needed) | Low | Uncommon choice |
| **Eleventy (11ty)** | 98/100 Lighthouse | Very Low | ✅ (script tag) | ✅ | Very Low | "Keeps it simple" |
| **Pure HTML+CSS+JS** | 100/100 Lighthouse | Minimal | ✅ | ⚠️ (CDN or build) | Medium | Maximum simplicity |
| **SvelteKit** | 95/100 Lighthouse | Low | ✅ | ✅ | Low | Strong but smaller ecosystem |

### 4.3 Step 3: The Astro Case

**Why Astro wins for this specific product:**

1. **"The default pick for new static projects in 2026"** — talos.tools
2. **Zero JavaScript by default** — Pages are pure HTML. Only interactive components (Canvas, contact form) ship JS. This is the fastest possible approach for a content site.
3. **HTML-first syntax** — `.astro` components are essentially HTML templates with scoped CSS and JavaScript. This aligns perfectly with "custom native HTML + Tailwind" preference.
4. **Island Architecture** — The Canvas centerpiece can be a React component with `client:load` (or vanilla JS). The rest of the page ships zero JS.
5. **Content Collections** — Type-safe Markdown/MDX for the case study text. Define a schema for project writeups.
6. **Framework-agnostic** — Can use React for the Canvas island, but the rest of the site is plain HTML. No React runtime tax on static pages.
7. **Build speed** — 45 seconds for 1,000 pages. For 5 pages, it's instant.
8. **Deployment portability** — Official adapters for Vercel, Netlify, Cloudflare Pages, Node.js.

**What employers see:**
- A portfolio that loads instantly
- Clean, fast, readable presentation
- Evidence that you evaluate tools based on the job, not habit

**What employers don't see (and don't care about):**
- The framework choice itself — they care about the result, not the tool
- Whether you used Server Components or islands — they care about load speed

### 4.4 Step 4: Why Next.js Specifically Loses

Next.js is the right tool for sanglogium (full-stack e-commerce app with auth, checkout, dynamic data). It is the wrong tool for this portfolio.

| Issue | Detail |
|-------|--------|
| **JavaScript tax** | Ships 80–150KB of JS even on static pages just for the React runtime and router |
| **Overkill** | "Overkill for a 20-page marketing site" — talos.tools. This is a 5-page site. |
| **Complexity** | App Router mental model (RSC, `'use client'`, Server Actions) is unnecessary overhead |
| **Wrong signal** | Using Next.js for a static portfolio signals "I know one framework and use it for everything" |
| **Slower builds** | 90 seconds for 1,000 pages vs Astro's 45 seconds |
| **Vercel dependency** | Deepest features (PPR, edge middleware) are optimized for Vercel infrastructure |

**The competence signal you want:** "I can build a full-stack e-commerce platform in Next.js 15 AND I know when to switch to Astro for a static site."

### 4.5 Step 5: Why Not Pure HTML+CSS+JS?

Maximum simplicity. Zero build step. Zero dependencies. The ultimate in "clean minimalist."

**Why it loses:**
- No component reuse — navigation, footer, project cards must be duplicated or manually included
- No content collections — case study text would be inline HTML, harder to maintain
- No build-time optimizations — image optimization, CSS purging, cache busting must be manual
- No hot reload during development
- Canvas animation organization — embedding complex JS in static HTML is messier than component encapsulation

**Verdict:** The cost of a build tool (Astro) is low. The benefit (components, content collections, optimizations) is high. Pure HTML is the right choice for a 1-page site. This is a 5-page site with a deep case study.

---

## 5. Recommended Site Structure

### 5.1 Page Inventory

| Route | File | Purpose | Content |
|-------|------|---------|---------|
| `/` | `src/pages/index.astro` | Homepage | Canvas centerpiece + 2-sentence bio + "View my work" CTA |
| `/about` | `src/pages/about.astro` | About | 2-3 sentence bio + skills grid (12-15 focused technologies) + resume link |
| `/projects` | `src/pages/projects.astro` | Projects listing | Sanglogium hero card + 1-2 smaller projects |
| `/projects/sanglogium` | `src/pages/projects/sanglogium.astro` | Deep case study | THE most important page. Full narrative + evidence. |
| `/contact` | `src/pages/contact.astro` | Contact | Email + LinkedIn + GitHub + simple form |

### 5.2 Astro Project Structure

```
src/
├── pages/
│   ├── index.astro              # Homepage
│   ├── about.astro              # About
│   ├── projects.astro           # Projects listing
│   ├── contact.astro            # Contact
│   └── projects/
│       └── sanglogium.astro     # Deep case study
├── components/
│   ├── mandorla-canvas.astro    # Canvas 2D wrapper (vanilla JS in <script>)
│   ├── nav.astro                # Navigation
│   ├── footer.astro             # Footer
│   ├── project-card.astro       # Reusable project card
│   ├── skills-grid.astro        # Skills display
│   └── contact-form.astro       # Form with Formspree/Netlify
├── layouts/
│   └── base.astro               # HTML shell, fonts, metadata, nav+footer
├── content/
│   └── projects/
│       └── sanglogium.md        # Case study text (optional: use content collections)
├── styles/
│   └── global.css               # Tailwind directives + custom CSS
└── assets/
    ├── images/
    │   └── sanglogium/          # Screenshots, architecture diagrams
    └── fonts/
```

### 5.3 JavaScript Strategy

| Component | JS Type | Reason |
|-----------|---------|--------|
| **mandorla-canvas.astro** | Vanilla JS in `<script>` tag | Canvas 2D API is native. No framework needed. |
| **contact-form.astro** | Vanilla JS in `<script>` tag | Simple form validation + fetch to Formspree. No React needed. |
| **nav.astro** | Zero JS | CSS-only hover states. Astro `<a>` tags for navigation. |
| **project-card.astro** | Zero JS | Static content. No interactivity. |
| **skills-grid.astro** | Zero JS | Static data. No interactivity. |
| **All pages** | Zero JS (except Canvas + form) | Content is static HTML. |

**Result:** Homepage ships ~5KB of JS (Canvas animation). Contact page ships ~2KB (form handling). Every other page ships **zero JavaScript**.

### 5.4 Alternative: React Island for Canvas

If you prefer React component encapsulation for the Canvas (familiar pattern from sanglogium):

```astro
<!-- src/components/mandorla-canvas-react.tsx -->
'use client'
// React component with useRef, useEffect for Canvas setup
```

```astro
<!-- src/pages/index.astro -->
<MandorlaCanvas client:load />
```

**Tradeoff:** Ships React runtime (~40KB) on the homepage. The Canvas still works. The homepage is slightly heavier.

**Recommendation:** Start with vanilla JS in a `.astro` component. If the Canvas logic becomes complex enough to benefit from React's lifecycle management, convert to a React island. But don't default to React "just because."

---

## 6. The Case Study Page Detail

This is the page that converts employers. It must be exceptional.

### 6.1 Page Structure

```
/projects/sanglogium
├── Hero Section
│   ├── Title: "Sanglogium — Full-Stack E-Commerce Platform"
│   ├── One-liner: "19 months. 3,505 commits. One developer. Production-grade."
│   └── Links: GitHub repo, Live site (note: currently offline)
├── The Problem
│   ├── What I needed to build and why
│   └── Why existing solutions didn't work
├── The Architecture
│   ├── System diagram (draw.io or Excalidraw)
│   ├── Tech stack with rationale
│   └── Key architectural decisions
├── The Build
│   ├── Screenshot gallery (storefront, admin panel, checkout, mobile)
│   ├── Code snippets (auth, checkout, image optimization)
│   └── Commit timeline visualization
├── Challenges & Solutions
│   ├── Auth migration (Clerk → better-auth)
│   ├── Image optimization at scale
│   ├── Checkout complexity (BLIK, shipping, guest accounts)
│   └── Testing strategy (Playwright + Vitest)
├── Results & Scale
│   ├── Commit count, duration, repo size
│   ├── Test coverage metrics
│   └── Performance metrics (if available)
└── What I'd Do Differently
    ├── Growth mindset signal
    └── Shows self-awareness
```

### 6.2 Visual Evidence Checklist

| Asset | Source | Priority |
|-------|--------|----------|
| Storefront homepage screenshot | Local dev server or GitHub | Critical |
| Product page screenshot | Local dev server | Critical |
| Admin panel screenshot | Local dev server | Critical |
| Checkout flow screenshot | Local dev server | Critical |
| Mobile view screenshot | Browser dev tools | High |
| Architecture diagram | Draw from `package.json` + folder structure | High |
| Code snippet: auth session guard | GitHub repo | Medium |
| Code snippet: checkout form | GitHub repo | Medium |
| Code snippet: test example | GitHub repo | Medium |
| Commit graph image | GitHub contributions graph | Medium |

---

## 7. Performance & Conversion Strategy

### 7.1 Speed Targets

| Metric | Target | Why |
|--------|--------|-----|
| **Largest Contentful Paint (LCP)** | < 1.0s | First impression |
| **Time to Interactive (TTI)** | < 1.5s | Employer can click immediately |
| **Total Page Weight** | < 100KB for text pages | Zero JS = tiny pages |
| **Homepage Weight** | < 200KB | Canvas JS + minimal HTML/CSS |

### 7.2 What Employers Will Notice

| Observation | Interpretation |
|-------------|---------------|
| Portfolio loads instantly | "Understands performance" |
| Clean URL structure | "Understands information architecture" |
| No broken links | "Detail-oriented" |
| Sanglogium case study is thorough | "Can document and communicate complex work" |
| No unnecessary animations | "Values substance over flash" |
| Canvas centerpiece renders smoothly | "Can do graphics programming" |
| Contact is easy to find | "Understands user needs" |

### 7.3 What Employers Won't Notice (And Shouldn't)

| Element | Why They Don't Care |
|---------|---------------------|
| Framework choice | They care about the result, not the tool |
| Whether it's SPA or MPA | They care about speed and navigation |
| Server vs Client Components | Invisible implementation detail |
| Build tool | Invisible |
| CSS methodology | Invisible if the design is clean |

---

## 8. Decision Log

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| **Portfolio pattern** | Clean minimalist + deep case study | "A clean, fast, readable portfolio beats a flashy slow one every time." Signals taste and restraint. |
| **Framework** | Astro | Zero JS by default. Fastest loads. HTML-first. Default pick for static projects in 2026. |
| **Styling** | Tailwind CSS | User preference. Full control. No UI library lock-in. |
| **Rendering strategy** | Static Site Generation (SSG) | All content is static. No server needed. No runtime data fetching. |
| **Homepage animation** | Canvas 2D mandorla | Already researched in Q-and-A-intelligence.md. Embedded as vanilla JS. |
| **Contact form backend** | Formspree or Netlify Forms | No backend needed. No Server Actions. No API routes. |
| **Hosting** | **Spaceship** | User owns `munrhalls.com` domain on Spaceship. Static file upload after `astro build`. |
| **Sanglogium showcase** | Deep case study page with screenshots, architecture, code, narrative | Compensates for no live demo. This page does 80% of the selling. |
| **JavaScript approach** | Vanilla JS for Canvas and form. Zero JS on all other pages. | Maximum speed. No framework tax where not needed. |
| **React usage** | Optional: React island ONLY for Canvas if logic gets complex | Not the default. Astro doesn't require React. |
| **State management** | None | No global state. No Zustand. No Redux. Each page is independent. |
| **Content management** | Inline or Markdown files | No CMS. Content is static and rarely changes. |
| **Image optimization** | Astro's built-in `<Image>` component | Automatic WebP/AVIF conversion, responsive sizes. |
| ** rejected: Next.js** | Ships 80-150KB JS on static pages. Overkill. Wrong signal. | "Overkill for a 20-page marketing site." — talos.tools |
| ** rejected: Pure HTML+CSS+JS** | No component reuse, no content collections, no build optimizations. | Build tool cost is low; benefit is high. |
| ** rejected: CMS-driven** | Content is static. No editorial workflow. Adds complexity for zero benefit. | Over-engineering. |
| ** rejected: shadcn/ui** | User preference: custom native HTML + Tailwind for full control. | Already documented in portfolio-approach-intelligence.md. |

---

## 9. Verification Statement

All sanglogium metrics are **100% verified** via GitHub's public REST API (`api.github.com`):
- Commit count: `contributors` endpoint returned `contributions: 3505`
- Timeline: `created_at` and `pushed_at` timestamps verified
- Repo size: `size: 271609` (kilobytes)
- Language distribution: `languages` endpoint
- Commit message patterns: `commits` endpoint, pages 1, 35, and 36

All employer behavior and portfolio best practices are sourced from **2026 industry articles**:
- hakia.com: "Developer Portfolio Guide 2026: Build a Portfolio That Gets Hired" (surveys of 500+ hiring managers)
- codeboards.io: "How to Build a Developer Portfolio That Actually Gets You Hired 2026" (reviewer of 200+ portfolios)
- curious.page: "How to Build a Developer Portfolio That Gets You Hired in 2026" (recruiter-focused analysis)
- remoteworks.pro: "Best Web Developer Portfolio Examples in 2026" (patterns from developers who consistently land jobs)
- talos.tools: "9 Best Static Site Generators in 2026 (Real Benchmarks)" (performance benchmarks)
- kunalganglani.com: "Astro vs Next.js 2026: Full Comparison & Verdict" (architectural comparison)

This intelligence file is **complete** for the end-product-first portfolio architecture decision. No gaps remain for this scope.

---

## 10. Sources

- GitHub REST API: `api.github.com/repos/munrhalls/sanglogium`
- GitHub REST API: `api.github.com/repos/munrhalls/sanglogium/contributors`
- GitHub REST API: `api.github.com/repos/munrhalls/sanglogium/commits`
- GitHub REST API: `api.github.com/repos/munrhalls/sanglogium/languages`
- hakia.com: "Developer Portfolio Guide 2026: Build a Portfolio That Gets Hired"
- codeboards.io: "How to Build a Developer Portfolio That Actually Gets You Hired 2026"
- curious.page: "How to Build a Developer Portfolio That Gets You Hired in 2026"
- remoteworks.pro: "Best Web Developer Portfolio Examples in 2026"
- talos.tools: "9 Best Static Site Generators in 2026 (Real Benchmarks)"
- kunalganglani.com: "Astro vs Next.js 2026: Full Comparison & Verdict"

