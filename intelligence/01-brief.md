# Portfolio — Master Brief

**Version:** 1.0 | **Date:** June 2026

---

## Purpose

Build a professional, minimal portfolio site to secure a web development job. The site has one job: make employers believe the Sanglogium project is real, impressive, and the work of a skilled engineer.

---

## Core Constraint

`sanglogium.com` is offline. **No live demo exists.** The portfolio must serve as the sole evidence of the project's existence and quality. This constraint drives every major decision below.

---

## Portfolio Pattern

**Clean minimalist + deep case study.**

- Homepage = Canvas diamond centerpiece dead center, surrounded by 4 content zones in a 2×2 grid (top-left: Munrhalls/About, top-right: Sanglogium, bottom-left: Contact/Resume, bottom-right: Skills). Each zone previews a major area and links to it. Loads in under 1 second.
- Sanglogium case study page = the portfolio. Every major feature gets its own section with visual evidence.
- Taste and restraint throughout. No gratuitous animations. No loading screens. No skills progress bars.

---

## Decided Stack

| Layer | Decision | Rationale |
|-------|----------|-----------|
| Framework | **Astro 5** (SSG) | Zero JS by default. Fastest loads for static content. Right tool for this job. |
| Styling | **Tailwind CSS** | Full control. No UI library lock-in. Already known. |
| Canvas graphic | **Vanilla JS + HTML5 Canvas 2D API** | Native API. Zero dependencies. Handles this workload at 60fps. |
| Contact form | **Formspree** (free tier) | No backend needed. Works with Astro SSG. 50 submissions/month free. |
| Hosting | **Spaceship** | User owns `munrhalls.com` domain on Spaceship. Static file upload after `astro build`. |
| Images | **Astro `<Image>` component** | Automatic WebP/AVIF conversion, responsive srcset, lazy loading. |
| Page transitions | **Astro `<ClientRouter />`** | SPA-feel navigation between pages. Built into Astro 5. Zero extra dependencies. |

---

## Pages (5)

| Route | Purpose |
|-------|---------|
| `/` | Homepage: Canvas diamond centerpiece dead center + 4 content zones in a 2×2 grid around it (Munrhalls/About · Sanglogium · Contact/Resume · Skills). Each zone previews its destination and links to it. |
| `/about` | 2–3 sentence bio, focused skills grid (12–15 technologies), resume PDF download link |
| `/projects` | Sanglogium hero card + optional 1–2 smaller project cards |
| `/projects/sanglogium` | Long-scroll case study — the portfolio's primary selling page |
| `/contact` | Email, LinkedIn, GitHub, Formspree form |

---

## Verified Sanglogium Metrics

Source: GitHub REST API (`api.github.com/repos/munrhalls/sanglogium`), verified June 6, 2026.

| Metric | Verified Value |
|--------|---------------|
| Created | Nov 14, 2024 |
| Last push | June 4, 2026 |
| Active duration | ~19 months |
| Total commits | **3,505** |
| Repo size | **271.6 MB** |
| Primary language | TypeScript |
| Contributors | **1 (solo)** |
| Live site | **Offline** |

**Sanglogium tech stack** (from repo analysis):
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Sanity CMS, Stripe, BLIK, better-auth, BullMQ, Redis, Sentry, Playwright (E2E), Vitest (unit), nuqs (URL state)

---

## Prerequisites — Must Resolve Before Building Case Study Page

These are **blockers**. The case study page cannot be completed without them.

| Item | Action Required | Priority |
|------|----------------|----------|
| **Sanglogium screenshots** | Run local dev server; capture: storefront, product page, admin panel, checkout flow, mobile view, test suite output | Critical |
| **Architecture diagram** | Create in draw.io or Excalidraw; export as SVG/PNG for case study hero | High |
| **Resume PDF** | Prepare and place in `public/resume.pdf` | High |

---

## What Employers Will See (and Think)

| Observation | Signal |
|-------------|--------|
| Portfolio loads in under 1 second | "Understands performance" |
| Canvas centerpiece animates smoothly | "Can do graphics programming" |
| Sanglogium case study is deep and thorough | "Can build and communicate complex work" |
| No broken links, no dead demos (acknowledged) | "Detail-oriented" |
| Astro for portfolio, Next.js for the e-commerce app | "Picks the right tool for the job" |
| 4-block 2×2 grid homepage with clear destinations | "Can organize and communicate information clearly" |
