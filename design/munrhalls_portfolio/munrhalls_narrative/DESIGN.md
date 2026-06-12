---
name: Munrhalls Narrative
colors:
  surface: '#131411'
  surface-dim: '#131411'
  surface-bright: '#393936'
  surface-container-lowest: '#0e0e0c'
  surface-container-low: '#1b1c19'
  surface-container: '#1f201d'
  surface-container-high: '#2a2a27'
  surface-container-highest: '#353532'
  on-surface: '#e4e2dd'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e4e2dd'
  inverse-on-surface: '#30312d'
  outline: '#988e8f'
  outline-variant: '#4d4546'
  surface-tint: '#cac5c5'
  primary: '#cac5c5'
  on-primary: '#323030'
  primary-container: '#111010'
  on-primary-container: '#7f7c7b'
  inverse-primary: '#605e5e'
  secondary: '#ffb95d'
  on-secondary: '#462a00'
  secondary-container: '#9f6500'
  on-secondary-container: '#fff7f1'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#101010'
  on-tertiary-container: '#7d7c7b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6e1e1'
  primary-fixed-dim: '#cac5c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#484646'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#ffb95d'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131411'
  on-background: '#e4e2dd'
  surface-variant: '#353532'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.08em
spacing:
  max-width: 1140px
  section-v: 120px
  gutter: 24px
  margin-sm: 16px
---

## Brand & Style

This design system embodies a "Dark Industrial Editorial" aesthetic. It is tailored for high-end architecture, bespoke craftsmanship, or niche technology sectors where authority is conveyed through restraint and precision rather than flash. The brand personality is stoic, deliberate, and premium.

The style is a hybrid of **Minimalism** and **Modern Industrial**. It rejects the common trends of soft blurs and vibrant gradients in favor of structural integrity, sharp hairlines, and asymmetric balance. The emotional response is one of grounded confidence and quiet exclusivity. By limiting the use of the amber accent, the system ensures that user attention is treated as a finite resource, directed only toward the most critical actions or information.

## Colors

The palette is rooted in a deep, warm-toned obsidian. Unlike standard digital blacks, `#111010` provides a charcoal-like depth that feels more physical than synthetic.

- **Primary Background:** `#111010` serves as the canvas for all views.
- **Surface Tiers:** Containers use `#1A1918` to create subtle separation, while `#222120` is reserved for interactive states (hovers) and structural dividers.
- **Typography:** Primary text is off-white (`#E8E6E1`) to reduce visual vibration. Secondary and tertiary tones provide a clear hierarchy for metadata and captions.
- **Amber Accent:** `#C9882A` is the high-voltage focal point. It must be used sparingly—never for decorative purposes, only for functional emphasis.

## Typography

The typography system relies on the tension between the expressive, geometric curves of **Syne** and the utilitarian precision of **Inter** and **JetBrains Mono**.

- **Display:** Used for large, impactful statements. The negative letter-spacing creates a "locked-in" editorial feel.
- **Headings:** **Plus Jakarta Sans** provides a modern, clean bridge between the display and body fonts.
- **Body:** Set with a generous `1.7` line-height to ensure maximum readability against the dark background.
- **Monospace:** Reserved for labels, tags, and technical metadata. Always uppercase with increased tracking to evoke a "technical blueprint" aesthetic.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model. The layout is strictly left-aligned to reinforce the industrial, structured feel; centered hero sections are prohibited.

- **The Grid:** A 12-column layout with a 1140px maximum width. Elements should snap to these columns to maintain a vertical rhythm.
- **Verticality:** Aggressive white space (120px section padding) is used to separate narrative beats. This "breathable" layout forces the user to focus on one idea at a time.
- **Alignment:** All text, imagery, and component clusters must be left-aligned. Asymmetry is encouraged by leaving the right-hand side of the grid empty in specific sections.

## Elevation & Depth

Depth in this system is achieved through **low-contrast outlines** and tonal layering, not shadows. 

- **Structural Outlines:** Use `0.5px` borders in `rgba(255,255,255,0.07)` for all container boundaries. This creates a "blueprint" effect where surfaces appear to be etched rather than floating.
- **Accent Elevation:** Visual priority is indicated by the "Amber Edge"—a 3px solid left-border using the accent color. This replaces traditional drop shadows for indicating active states or highlighted cards.
- **Interaction:** Hover states are indicated by shifting the background color from `#1A1918` to `#222120`. No "lifting" or "glowing" effects are permitted.

## Shapes

The shape language is strictly **Sharp (0)**. All buttons, cards, input fields, and images must use 0px border-radius. This angularity reinforces the industrial and architectural narrative. Any rounded element would conflict with the precision established by the thin hairlines and monospaced labels.

## Components

- **Buttons:** Rectangular with no radius. Primary buttons use a `#222120` background with the 3px Amber left-edge. Text is `label-mono`.
- **Cards:** Defined by the `0.5px` border. For featured content, apply the 3px Amber left-edge. Content inside cards must maintain a minimum of 32px internal padding.
- **Input Fields:** Bottom-border only (`0.5px`). On focus, the bottom border changes to Amber. Labels use `label-mono` and sit above the input.
- **Lists:** Separated by `0.5px` horizontal dividers. Hovering over a list item changes the background to `#222120`.
- **Amber Constraint:** No more than 3 amber elements (borders, icons, or text links) may appear in a single viewport. This ensures the accent remains a powerful tool for guidance.
- **Navigation:** Top-aligned, left-justified. Links use `label-mono`. No sticky headers; the navigation should feel like a part of the document flow.