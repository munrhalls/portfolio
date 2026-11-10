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

## Process

PR checkboxes -> `/architect` -> runner -> human verify, all on the PR's own branch. The owner pastes a PR's unchecked
boxes to the architect, which writes one task file per executor into `_project/working-memory/` (gitignored, never
committed), named `<wave><letter>-<name>.md`: tasks of the same wave run in parallel, waves run in order. From a checkout
of the PR's branch the owner runs `node ~/work/global/workflow/run.mjs <PR>` (add `--dry` first to check the plan). For each
task the runner cuts a branch from the PR branch, runs a fresh executor on it (executors never commit, push or branch),
merges it back into the PR branch when there is no conflict, pushes, and adds a `human verify` checkbox under the matching
box in the PR body. The owner verifies, then merges the PR into `main`.

## Git policy (conservative)

Do not commit or push unless explicitly asked. At handoff, report changed files and the suggested
commands. Never force-push or rewrite history.
