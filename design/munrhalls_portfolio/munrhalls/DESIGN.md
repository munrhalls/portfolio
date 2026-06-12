---
name: Munrhalls
colors:
  surface: '#18120c'
  surface-dim: '#18120c'
  surface-bright: '#3f3830'
  surface-container-lowest: '#130d07'
  surface-container-low: '#211b14'
  surface-container: '#251f18'
  surface-container-high: '#302922'
  surface-container-highest: '#3b342c'
  on-surface: '#ede0d5'
  on-surface-variant: '#d6c3b1'
  inverse-surface: '#ede0d5'
  inverse-on-surface: '#362f28'
  outline: '#9e8e7d'
  outline-variant: '#514536'
  surface-tint: '#ffb95d'
  primary: '#ffb95d'
  on-primary: '#462a00'
  primary-container: '#c9882a'
  on-primary-container: '#432800'
  inverse-primary: '#855400'
  secondary: '#e7c092'
  on-secondary: '#432b09'
  secondary-container: '#5d411e'
  on-secondary-container: '#d5af82'
  tertiary: '#85cfff'
  on-tertiary: '#00344c'
  tertiary-container: '#439ed1'
  on-tertiary-container: '#003249'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb7'
  primary-fixed-dim: '#ffb95d'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#e7c092'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#5d411e'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#18120c'
  on-background: '#ede0d5'
  surface-variant: '#3b342c'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.08em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 32px
  margin-mobile: 24px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style
The design system is built on the philosophy of "Precision Engineering at Midnight." It targets a high-end technical audience, evoking an emotional response of quiet confidence, austerity, and meticulous craftsmanship. The aesthetic avoids common developer tropes like neon or "glitch" effects in favor of a muted luxury that mirrors physical industrial design.

The style is a blend of **Minimalism** and **Modern Corporate**, executed with a dark, high-fidelity finish. Visual interest is generated through precise alignment, generous whitespace, and subtle luminance shifts rather than decorative flourishes. Every element must feel intentional, as if machined from solid stock.

## Colors
The palette is deeply anchored in warm-undertone charcoals and matte blacks, creating a sophisticated environment for technical content. 

- **Background & Surface:** Use the deep charcoal (#111010) for the primary canvas and the matte surface (#181717) for structural components like cards and sidebars.
- **Typography:** The off-white primary text provides high legibility without the harshness of pure white. The secondary text is a desaturated gold-grey, used to de-emphasize non-critical information.
- **Accent:** The deep amber-gold (#C9882A) is the "active" signal. Use it with extreme restraint—only for primary calls to action, active navigation states, or critical highlights.
- **Outline:** All structural separation is handled by the subtle warm border (#2A2826).

## Typography
The typographic scale is designed for maximum hierarchy. 

**Headlines** utilize Plus Jakarta Sans with tight tracking and heavy weights to create a sense of structural density. Large display sizes should be used sparingly for impact.

**Body copy** is set in Inter with a generous line-height of 1.6 to ensure long-form technical explanations remain readable and airy.

**Technical Metadata** uses JetBrains Mono. These should almost always be set in uppercase with increased letter-spacing to mimic the look of etched serial numbers on hardware. Use this for tags, version numbers, and table headers.

## Layout & Spacing
The layout follows a strict **Fixed Grid** model. On desktop, utilize a 12-column grid with wide 32px gutters to emphasize the "engineered" feel. 

Margins are generous, pushing content away from the edges to focus the eye. 
- **Desktop:** 64px outer margins, content capped at 1440px.
- **Tablet:** 40px margins, 8-column grid.
- **Mobile:** 24px margins, 4-column grid.

Spacing between components should be derived from the 4px base unit, favoring large gaps (32px, 48px, 64px) to maintain the minimalist aesthetic. Alignment is paramount; all elements must snap to the grid.

## Elevation & Depth
In this design system, shadows are strictly forbidden. Depth is communicated through a "Luminance Tier" system:

1.  **Level 0 (Floor):** The #111010 background.
2.  **Level 1 (Raised Surface):** The #181717 surface color.
3.  **Level 2 (Interaction):** A subtle 1px solid border using the Outline color (#2A2826).

To indicate a "hover" or "active" state on a surface, do not use a shadow. Instead, shift the border color to a slightly lighter grey or, for primary elements, use a 1px border of the Amber Accent. This creates a tactile, hardware-like feel.

## Shapes
Shapes are "Soft" but lean towards sharp. A consistent 0.25rem (4px) corner radius is applied to buttons, cards, and input fields. This provides just enough softness to feel modern without losing the precision-machined edge. Larger containers like sections or hero image blocks may use 0.5rem (rounded-lg) for structural balance.

## Components
- **Buttons:** Primary buttons use a solid #C9882A background with black text. Secondary buttons use a #181717 background with a 1px #2A2826 border and Primary Text. Use JetBrains Mono for button labels.
- **Inputs:** Text inputs are #111010 with a 1px #2A2826 border. On focus, the border changes to #C9882A. Labels should always be Mono-spaced and positioned above the field.
- **Cards:** Cards use the #181717 surface. They do not have shadows. They are defined solely by their 1px #2A2826 border.
- **Chips/Tags:** Small, rectangular, 4px radius. Background: #2A2826, Text: Secondary Text, Font: JetBrains Mono.
- **Code Blocks:** Use the #111010 background but with a slightly lighter 1px border than standard cards.
- **Lists:** Use subtle #2A2826 horizontal dividers between list items. No bullets; use Mono-spaced numbering (e.g., 01, 02, 03) in the Accent color for high-end lists.