# Wireframes

Landing screen first. ASCII, block-level — where things go, not final pixels.
All copy = lorem ipsum. `░▒▓` = fade density of the code diamond.

---

## 1. Hero — desktop (landscape)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ◆ MUNRHALLS                                                        [ ≡ ]  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                          ░▒▓▓▓▓▓▓▓▒░      │
│                                                        ░▒▓ CODE     ▓▒░   │
│   LABEL · LOREM IPSUM                                 ░▒▓ DIAMOND    ▓▒░  │
│   ┌──────────────────────────────┐                    ░▓ ◊ math sym  ▓▒░ │
│   │                              │                    ▓ ◊ katakana    ▓▒░ │
│   │     MOVIE PLACEHOLDER        │  ①                 ▓ ◊ 3D streams  ▓░ │
│   │     (loom video, 15–30s)     │                    ░▓             ▓░  │
│   │                              │                     ░▒▓▓▓▓▓▓▓▓▓▓▓▒░    │
│   └──────────────────────────────┘                            fades ←── │
│   Headline lorem ipsum — two lines.                         [ ◆ cta ] ② │
│   Subhead lorem ipsum dolor sit amet.                                   │
├────────────────────────────────────────────────────────────────────────────┤
│ FEATURE MENU →  checkout · filters · catalogue · search · admin · auth ③  │
└────────────────────────────────────────────────────────────────────────────┘
```

1. Movie placeholder sits on top of the diamond's faded left edge. Diamond =
   secondary background: full on the right, dissolving left.
2. CTA bottom-right, amber, hairline border (per DESIGN.md buttons).
3. Menu row separating hero from showcase — click → scroll to feature.
   Open: sticky or scrolls away?

**Motion on this screen:** katakana streams flow inside the diamond (subtle
3D). Everything else still. Teleport = not on this screen, spec TBD.

## 2. Hero — mobile (portrait)

```
┌──────────────────────────┐
│ ◆ MUNRHALLS        [ ≡ ] │
├──────────────────────────┤
│            ░▒▓▓▓▓▒░     │
│   LABEL ·    ▒▓◊◊◊▓▒    │  diamond: top-right,
│   LOREM      ░▒▓▓▓▒░    │  fades down-left
│   ┌──────────────────┐  │
│   │ MOVIE            │  │  on top of fade
│   │ PLACEHOLDER      │  │
│   └──────────────────┘  │You know, it's hard to imagine for me how it looks like in your world. So, to me, in the human visual world, it's immediately obvious that the ratios are super way off. The movie is way too small. 
│   Headline lorem        │
│   ipsum — 2–3 lines.    │
│   Subhead lorem.        │
│   [ ◆ cta ]             │
├──────────────────────────┤
│ FEATURE MENU ≡▸ list     │  collapses to a tappable
└──────────────────────────┘  list, not a row
```

## 3. Below hero — scroll order

```
┌─ FEATURE 1 · checkout        pattern A ─┐
├─ FEATURE 2 · filters/sorting pattern B ─┤
├─ FEATURE 3 · catalogue       pattern C ─┤
├─ FEATURE 4 · search+metrics  pattern A′ ─┤  ′ = core + swapped blocks
├─ FEATURE 5 · admin           pattern B′ ─┤
├─ FEATURE 6 · auth/accounts   pattern C′ ─┤
├─ QUALITY · architecture+sec  pattern D ─┤  not a feature — its own pattern
└─ footer                                 ─┘
```

## 4. Feature section — shared core + Lego blocks

Every feature section = **one core** + **2–3 blocks** slotted in.

```
CORE (never changes):
┌──────────────────────────────────────────┐
│ FEATURE NAME · label                     │
│ biggest wins — 2–4 lines, lorem          │
│ [ READ CASE STUDY → ]  ← prominent, amber│
└──────────────────────────────────────────┘

BLOCKS (swap per feature, pick 2–3):
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ media slot  │ │ metrics     │ │ code block  │ │ mini-diagram│
│ screenshot/ │ │ strip       │ │ (#111 bg)   │ │ flow, boxes │
│ gif         │ │ 3 numbers   │ │             │ │ + arrows    │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

Pattern A/B/C = same core, different block arrangement
(e.g., A: media-left/wins-right · B: wins-left/media-right ·
C: wins-top/blocks-row-below). D = open, for the quality section.

---

## Open

- Feature menu: sticky vs scrolls away
- Teleport animation spec (grid navigator) — later, with issue #4
- Pattern D shape for architecture & security
- Math symbols on the diamond — user replaces with meaningful set
