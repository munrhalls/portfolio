# CLAUDE.md — portfolio

Personal portfolio — Astro 5 + Tailwind 3, static output → munrhalls.com.

**Process rules live in `AGENTS.md` — read it first.** It is the single source of truth
for commands, verification policy, campaign process, and git policy. This file only adds
what Claude Code needs on top.

## Repo specifics

- Dev server: `npm run dev` → **http://localhost:4321** (sanglogium owns :3000).
- `tailwind.config.mjs` holds the entire custom color/design-token system — never
  regenerate or "clean" it; every component depends on those tokens.
- `.claude/hooks/feedback-gate.sh` is wired as a PostToolUse hook — when it fires,
  emit one checkpoint line (done / next / blocker).

## Layout

- `src/pages/` — routes (`.astro`), `src/components/`, `src/layouts/`, `src/styles/`,
  `src/assets/images/` (bundled imports)
- `public/` — served as-is (favicon, images, `resume.pdf`)
- `design/` — mockups + `DESIGN.md` (spec for UI work)
- `assets/` — raw image sources (`code-diamond/`, `checkout-system/slices/`)
- `_project/` — campaign docs; `working-memory/` is transient and gitignored
