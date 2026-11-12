# CLAUDE.md — portfolio

# Cost minimization
Topmost rule is to minimize any unnecessary calls, edits, reads - any unnecessary steps. Minimizing tokens cost is topmost priority. 


# Personal portfolio — Astro 5, static output → munrhalls.com.
Live source is only the mobile landing page (design/landing-mobile/landing-mobile-v1.78.html); the old site is in archived/.

**Process rules live in `AGENTS.md` — read it first.** It is the single source of truth
for commands, verification policy, campaign process, and git policy. This file only adds
what Claude Code needs on top.

## Repo specifics

- Dev server: `npm run dev` → **http://localhost:4321** (sanglogium owns :3000).

## Layout

- `src/pages/index.astro` — the one page (route `/`)
- `public/images/` — the two images the page uses
- `archived/` — old site source, untouched, not built
- `design/` — mockups + `DESIGN.md` (spec for UI work)
- `assets/` — raw image sources (`code-diamond/`, `checkout-system/slices/`)
- `_project/` — campaign docs; `working-memory/` is transient and gitignored
