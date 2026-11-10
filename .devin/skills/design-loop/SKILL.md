---
name: design-loop
description: Direct edit loop for the HTML design mockups in design/. Use when the user invokes /design-loop, sends an annotated screenshot of a mockup, or asks for changes to a design file.
triggers:
  - user
  - model
---

# design-loop

Annotated screenshot or one line of direction in → file edited → one short reply. Nothing else.

## How it runs

- Edit the current file in place (highest `vN` in `design/`). No version bump, no new file, unless asked.
- No ceremony: no state labels, no render paths, no changelogs, no "ok" gates, no waiting. Just do it.
- Reply = a couple terse lines naming what changed. That is all the user sees.
- Before replying, quietly render with `shot.sh` and look at the PNG — fix what you broke. Never post it, never mention it.
- Questions: max 2, only if truly blocked; decide everything else yourself.
- One image per round = the whole spec. Older images and spec files are never the target.
- Visual only. Hrefs, semantics, dead anchors, correctness — out of scope unless it changes how it looks. Never report them.
- Humans recognize well and describe badly — trust the annotation over their prose.
- If a round changes a spec'd pattern (token, button style, type size), update `design/DESIGN.md` in the same pass.
- Keep the one-line-per-round comment at the top of the file.

## The eyes

```bash
bash .devin/skills/design-loop/shot.sh <html-file> [height] [out.png]
```

390px-wide headless render → PNG. Probe variants go in `/tmp`, never in the repo.

## Self-check (silent)

- Text inside its container? Overflow = bug unless clearly deliberate.
- Strokes/gaps/corners: deliberate or accidental? Ambiguous reads as bug.
- Eye lands where intended? One dominant mass.
- Collisions masked, gapped, or owned — never just overlapped.
- Reads as "default/templated"? Find the one distinctive move.

## Tokens (don't reinvent)

Amber `#e6b84f` (CTA), copper `#df7412`/`#ffb786` (proof), bg `#0d0d0d`, text `#e8e8e8`, muted `#a89f92`. Fonts: Geist 400/600/700, Geist Mono 500/600 — `@fontsource` under `node_modules`.
