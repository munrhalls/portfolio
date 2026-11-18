---
name: design-loop
description: Direct edit loop for the portfolio landing mockup. On every call it builds and prints the canvas: pre-space over the live 280 x 380 floor. Use when the user invokes /design-loop, says "Done" after annotating the canvas, pastes an annotated screenshot of the mockup, or asks for a visual change.
triggers:
  - user
  - model
---

# design-loop

The user's annotation in → site edited → one short reply ending with the canvas link. Nothing else.

**Default on every call:** if there is no annotation yet, build the canvas (step 5) and reply with the link. The canvas is always the pre-space stack, never the bare floor.

## The loop (same in every repo)

1. **Spec.** On "Done", the whole spec for the round is `annotated.png` (their drawing over the image) plus `notes.txt` (exact text of every note, with x,y in page px), read only from the data folder `annotate.sh` printed in step 5, never from `~/work/global/annotate/data/` directly. Read both. Prefer `notes.txt` for wording and the PNG for what each mark points at. If `annotated.png` is missing or stale, say "not saved" and re-print the link; never act on an older image. A pasted screenshot or one line of direction is also a full spec.
2. **Edit** in place. Marks on the pre-space (top half) edit `prespace.html` (slot sizes, `tf`, `HS`/`BS`); marks on the floor (bottom half) edit the real site. No changelog, no status labels, no "ok" gates. Trust the annotation over the prose. Visual only.
3. **Look** (silent): render, view the PNG, fix what you broke. Never post it or mention it.
4. **Gate** (silent): run the proofs that cover what you touched; fix red before replying.
5. **Canvas:** copy `.claude/skills/design-loop/prespace.html` to `public/wireframe.html`, run `node .claude/skills/design-loop/shot.mjs /wireframe.html 280 760 <out.png> 2`, view the PNG and fix it, then `rm -f public/wireframe.html dist/wireframe.html` (`rm` is granted for this) and run `~/work/global/annotate/annotate.sh <out.png>`. It prints the link and this repo's data folder; keep both (step 1 reads from that folder). Never set `ANNOTATE_PORT` by hand. Put `out.png` in the scratchpad, never in the repo.
6. **Reply:** a couple of terse lines naming what changed (slot shares that moved, what broke a minimum), then the link as the last line and the only link. Questions: max 2, only if truly blocked.

The user opens the link, draws and dictates, presses Ctrl+S and says "Done". The canvas is one 280 x 760 image at 100% zoom (one image px per screen px), pinned top-left like a sidebar, the rest of the canvas empty for drawing. Top: the pre-space. Bottom: the live 280 x 380 floor (the smallest screen the site supports; solve it and every larger size gets easier); check desktop with `shot.mjs / 1280 800`. If the tool is broken, say so and expect a pasted screenshot.

Canvas port and data: `annotate.sh` keys one server, one port (47000 to 47999) and one data folder to this repo's git toplevel. Two sessions in the same repo still share them: read `annotated.png` right after "Done" and check its time.

## Pre-space

The floor divided between the components of distinct visual identity. Components never change identity; only slot sizes and ratios do. The owner judges proportions by eye, the design is iterated here first, then the real render is fitted to it.

- **Draw.** Each slot is the component's real shape in a flat colour with a dark 1px edge. Inside it only a percent (share of the whole floor, pixels counted in DOM order, in the slot's widest part). A leader line runs right to the slot's name. Unclaimed floor stays white. No table, legend, bar or ratio text.
- **Underneath.** The unchanged live floor with the slot edges in magenta: an edge that does not trace a real shape means the slot is wrong.
- **Needs, then the whole.** First give every slot its own `need` in `prespace.html` (least width to look good alone, from its own constraint: stair step rise 4px, three star halos across the window, the moon's ring, text that fits without clipping). Then reconcile against the floor's budget (width: strip + 12px gap + text column + 16px margin; height: text block + gap): every slot gets at least its need, slack goes where the owner marks, and no slot is grown by taking another below its need. The report flags any slot under its need as "too small". Foreground slots sit 1.3x or more apart, or tie.
- **Cramp report (the gate).** `prespace.html` measures every slot on its own, before any single-owner resolve, and draws red rings plus a numbered list for: overlap of unrelated slots; a clear gap under `GAP` (12px: unrelated things must sit farther apart than the lines inside a text block); text slots against the ground (Sweep, Moon support) the same way; and the river-label lane (the drift path from 8% to 58% of its length, the part the floor CSS keeps visible, widest label) crossing a text slot or a cave. Moon and Title may touch. Green "0 cramped" is the only pass. Fix red by slot size and position first; if only the structure can fix it (the label lane), say so and name it as the one decision. Never hide or drop the report to simplify the picture. Shares alone never prove a layout: area says nothing about the room around a slot.
- **State.** `prespace.html` holds everything (slots, scales, `HS`/`BS`). Edit it, never rebuild it from scratch. Heading and body slots are measured on the text itself at `HS`/`BS` px.
- **Free.** Pre-space is an image: resize or move any slot, ignoring `REFINED` and D1. D1 applies only when fitting the real art; then STOP and ask the owner to add the layer to `REFINED`.
- **Fit.** When the owner approves the slots, fit the real design in one round, sizes as fractions of width and height so 280 x 380 carries to every size; then gate.
- **Taste.** A slot that breaks a rigid rule (labels 12px, body 16px, glyph widths) is flagged with the rule and the owner decides. Split, lines shown and balance are theirs; do not present them as forced.

## Project binding (rewrite this block when copying to another repo)

**Slots** are the `CH` list at the top of `prespace.html`: Diamond and Strip are ground; Hand, Streams, Movie, Intro, Skills, Contact, Live, Features, Case studies, Learning, Story are foreground. `TOUCH` pairs may overlap (streams leave the hand and end on the four chips). There is no scene-layer SVG list, no `/css/site.css`, and no `/fonts`: the floor is one file. Slots are measured from the DOM (image pixels for Hand and Diamond, glyph boxes for Streams, layout boxes for the chips). Heading is Intro, body is Skills.

**Eyes.** `node .claude/skills/design-loop/shot.mjs [path=/] [width=280] [height=380] [out.png] [scale=1]` serves the mockup on a throwaway port and renders it in headless Chrome with device-metrics emulation (the window itself cannot go under ~500px, so the viewport is emulated like DevTools does: width x height, mobile, scale as DPR) and prints the PNG path (default in the system temp dir, never in the repo). `/` is `design/landing-mobile/landing-mobile-v1.78.html` with `../assets/` rewritten to `design/assets/`. It does not run `astro build` and does not write `dist/` (this repo forbids that self-check). The canvas needs `scale` 2 (the annotate tool divides the image by 2 to get page px). Run the eyes command before `annotate.sh`.

**Where a look lives.** One file: `design/landing-mobile/landing-mobile-v1.78.html`. Edit it in place. No version bump, no new file, unless asked. Pre-space edits stay in `prespace.html` until the owner approves a fit.

**Gate.** This repo declares no proofs. The cramp report on the canvas is the gate. A label under 12px or Intro under 16px is flagged with the rule; the owner decides. Do not restyle the mockup to clear a flag unless the mark asked for it.

**Self-check.**
- Text inside its container? Labels fully inside the screen when opaque, at least 12px; body at least 16px.
- Eye lands where intended: one dominant mass.
- Collisions masked, gapped, or owned, never just overlapped.
- Reads as default or templated? Find the one distinctive move.

**Look.** Amber `#e6b84f` (CTA), copper `#df7412` / `#ffb786` (proof), bg `#14120f`, text `#ece6da`, muted `#a89f92`. Fonts: Geist, Geist Mono. Do not invent tokens.

## Canvas tool (already on this machine)

`~/work/global/annotate/annotate.sh <png>` prints `data: <folder>` then the link. In `src/main.jsx` `loadBackdrop` the image is shown at `naturalWidth / 2` by `naturalHeight / 2`, then `editor.setCamera({ x: 16, y: 56, z: 1 }, { immediate: true })`. Never `zoomToFit`. The canvas PNG must be 560 x 1520. On the link it sits top-left at 280 x 760 screen px. The floor half matches DevTools responsive mode at 280 x 380 with DPR 2.
