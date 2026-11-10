# Issues

## 1. Design spec for every viewport before further building

The site needs a proper design document first — drawn for every breakpoint,
in order: mobile → tablet → small desktop → large desktop, each in both
portrait and landscape.

**Design ≠ layout.** The design is the complete visual spec of how each
screen looks and moves:

- **Foundations:** colors, typography, spacing, borders/elevation, icon and
  image treatment
- **Layout & composition:** grid, content hierarchy, what shows, hides, or
  restacks — per breakpoint and orientation
- **Components & states:** every UI element shown, including hover/focus/
  active states (drawn or annotated — a static mock must not imply them)
- **Content as it actually looks:** all text is lorem ipsum, but styled
  realistically — real line lengths, real text density, real heading
  hierarchy, real image aspect ratios. No gray placeholder boxes.
- **Motion:** every animation/transition annotated — numbered callouts on
  the frame + a short motion spec: trigger, what moves, duration, easing,
  direction

Keep it as simple as possible — only what's necessary, nothing extra.

## 2. Simplest repeatable workflow for making Loom videos

**Why.** The portfolio's core job is to multiply the conversion rate between
sending CVs / recruiter outreach and landing interviews — everything else is
secondary to that. The mechanism is presenting the flagship project
(Sanglogium — 20+ months, 4,000+ commits, full-stack e-commerce store) in
movie format: truly simple, but high-quality and skillful.

**What.** Figure out the simplest possible, repeatable way to make Loom
videos — a reusable process, not a one-off:

- AI-facilitated to the maximum — ideally AI does everything end-to-end
- The human acts only where absolutely unavoidable
- Unavoidable human steps compressed to the fewest possible count

**Critical factor:** the video must look good on mobile, tablet, small
desktop, and large desktop — in both portrait and landscape.

**First deliverable:** one Loom video presenting the Sanglogium project as
a whole, roughly 15–30 seconds long.

## 3. Case studies & feature showcase content

**Why.** The movie is what the recruiter sees first. This issue covers
everything around the movie: the actual content — and the design work
(issue #1) depends on settling what content exists.

**What.** The core content is case studies and featured presentations of
Sanglogium's features:

- **Main page = feature showcase ordered by importance:** checkout system
  first, then filters & sorting, catalogue (virtual file system), search
  performance with metrics, admin panel, authentication & user accounts,
  and finally architecture & security (a quality, not a feature)
- **Format:** all features on a single page, with a table-of-contents-style
  menu — click an item, scroll to that section
- **Each section** presents that feature's biggest wins in the most
  concise, expressive way possible — yet still complete end-to-end, so it
  fully captures the win and impresses
- **Per-feature link to the full case study** — very prominent, clear in
  the visual hierarchy — so an interested recruiter can go deeper
- **Open question:** one case-studies page vs. a separate page per feature
  — undecided; issue #4 is a candidate answer

## 4. Grid + teleport navigation concept

The portfolio is conceptually an n×m grid — a map of destinations — plus a
navigation interface that lets the user see the entire grid at once and
teleport to any cell. Candidate answer to issue #3's open question.

- **First visit is normal.** Landing on the site = a normal page that
  scrolls normally. Nothing crazy, no forced gimmick.
- **The grid navigator is an interface the user opens** — and it must be
  immediately obvious what it is and how it works, on phone, tablet, or
  desktop.
- **Cells are conceptual, not literal.** A cell is a destination (a case
  study or feature section), not a tiny box. Navigating to a cell triggers
  a quick, slick, impressive teleport/portal-style animation — fast,
  simple, uncomplicated.
- **Landing on a cell = a normal page.** After the teleport, the
  destination renders like an ordinary page — coherent, fluid, as if no
  grid existed.

In short: ordinary browsing by default; an optional, instantly-legible
grid map for jumping anywhere; a brief teleport animation as connective
tissue — then straight back to a normal page.



