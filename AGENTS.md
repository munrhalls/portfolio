# AGENTS.md — portfolio

Personal portfolio site. Astro 5 + Tailwind 3, static output, deploys to munrhalls.com.

## Commands

- `npm ci` — install (lockfile is authoritative)
- `npm run dev` — dev server on **http://localhost:4321** (sanglogium owns :3000; never collide)
- `npm run build` — `astro check` + static build to `dist/`
- `npm run preview` — serve the production build

## Non-negotiable

1. **No self-verification.** Never run `astro build`, `astro check`, `tsc`, lint, tests, or a dev
   server to check your own work. Verification = the human's live check on `localhost:4321` and
   their PR review on GitHub. The only designed exception: a repo-declared permitted check —
   **this repo declares none**.
2. **Resource discipline.** No `npm install` without asking (`npm ci` only if approved). Never run
   two CPU-heavy tools concurrently. End sessions with no leftover watch processes or browsers.
3. **Source of truth for styling**: `tailwind.config.mjs` holds the full custom color system —
   never regenerate or "clean up" config files; components depend on those tokens.
4. **File references**: print paths as `file://` URIs.

## Campaign process (architect → executor)

- Methodology: `_project/00-MOST-IMPORTANT-lean-tracer-bullet-methodology.md`.
- The Architect produces phase files under `_project/working-memory/<axis>/turn-<n>/phase-<n.m>.md`
  (transient, gitignored, deleted before commit — never let them land in a PR).
- One git branch per thematic axis; the Executor pastes in phases one at a time and ends each turn
  with a PR. Never merge your own PR — the human validates and merges.

## Git policy (conservative)

Do not commit or push unless explicitly asked. At handoff, report changed files and the suggested
commands. Never force-push or rewrite history.
