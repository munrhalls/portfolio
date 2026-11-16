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
- `archived/` — old site source + `design-legacy/` (old mockups v0.x–v1.77, unused assets, raw sources); untouched, not built, reuse parts from here
- `design/` — only `landing-mobile/landing-mobile-v1.78.html` (source of truth for the design system) + the two images it uses in `design/assets/`. `DESIGN.md` was deleted; to be rewritten from v1.78
- `_project/` — campaign docs; `working-memory/` is transient and gitignored
