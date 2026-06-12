---
name: Master Watchmaker
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
  secondary: '#c8c6c2'
  on-secondary: '#30312d'
  secondary-container: '#474743'
  on-secondary-container: '#b6b5b0'
  tertiary: '#cac6bd'
  on-tertiary: '#31312a'
  tertiary-container: '#98958d'
  on-tertiary-container: '#2f2e28'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb7'
  primary-fixed-dim: '#ffb95d'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#e6e2d9'
  tertiary-fixed-dim: '#cac6bd'
  on-tertiary-fixed: '#1c1c16'
  on-tertiary-fixed-variant: '#484740'
  background: '#18120c'
  on-background: '#ede0d5'
  surface-variant: '#3b342c'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  metadata:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 40px
  margin-desktop: 64px
  margin-mobile: 24px
  unit: 8px
---

## Brand & Style
The design system embodies the "Master Watchmaker" aesthetic—a study in horological precision, muted luxury, and mechanical clarity. It targets a sophisticated audience that values craftsmanship over trend, evoking an emotional response of quiet confidence and enduring quality.

The style is a fusion of **Modern Minimalism** and **Technical Precision**. It rejects all forms of digital artifice like neon or glitch effects in favor of physical metaphors: micro-topography, 0.5px hairlines, and obsessive attention to alignment. The interface should feel like a high-end mechanical instrument: heavy, deliberate, and perfectly calibrated.

## Colors
The palette is rooted in a deep, "obsidian" dark mode that provides a high-contrast stage for metallic accents.

- **Background (#111010):** A near-black neutral that serves as the "dial" of the interface.
- **Amber Accent (#C9882A):** Used sparingly for critical focus points, reminiscent of brass gears or gold indices.
- **Primary Text (#E8E6E1):** A warm, parchment-tinted white to ensure legibility without the harshness of pure white.
- **Secondary Text (#7A7870):** A muted, metallic grey for metadata and deactivated states.
- **Borders:** Use a 15% opacity version of Primary Text for 0.5px hairlines.

## Typography
Typography is treated as an engineering specification. 

**Headlines** use **Plus Jakarta Sans** with tight tracking to create a "locked-in" geometric feel. **Body text** uses **Inter** with generous line-height (1.6–1.7x) to provide breathing room within the dark interface. **Technical labels** and metadata utilize **JetBrains Mono** to reinforce the precision-tooled aesthetic.

For mobile, `headline-lg` should scale down to 32px with `1.2` line-height to maintain structural integrity.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy. On desktop, content is constrained to a 1280px max-width container to maintain the "instrument cluster" feel.

The rhythm is governed by a **40px gutter** and an 8px base unit. 
- **Desktop:** 12-column grid, 40px gutters, 64px side margins.
- **Tablet:** 8-column grid, 24px gutters, 40px side margins.
- **Mobile:** 4-column grid, 16px gutters, 24px side margins.

Internal component spacing (padding) should be strictly proportional (e.g., 8px, 16px, 24px) to ensure mathematical harmony across the UI.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Muted Borders** rather than shadows. 

1. **Base:** Level 0 (#111010).
2. **Raised Surfaces:** Level 1 (#1A1919) with a 0.5px border of #E8E6E1 at 10% opacity.
3. **Interactive States:** Surface brightness increases slightly (+5%) rather than using heavy shadows.

Shadows, if used at all, must be "micro-shadows"—extremely tight, low-opacity (20%), and sharp, simulating the way a watch hand sits just above the dial.

## Shapes
Shapes are **Soft (0.25rem)**. This slight rounding suggests machined metal—edges that have been hand-finished rather than left raw. 

- Standard components (Buttons, Inputs): `0.25rem` (4px).
- Containers (Cards, Modals): `0.5rem` (8px).
- Accents (Status dots): Fully circular.

Avoid large radii or "pill" shapes, as they detract from the technical, professional tone of the design system.

## Components
- **Buttons:** Primary buttons use the Amber Accent (#C9882A) with black text. Secondary buttons use a transparent background with a 0.5px Primary Text border. Text must be `label-caps`.
- **Inputs:** Fields are dark (#1A1919) with a 0.5px bottom-border only, mimicking an etched line. Focus state transitions the border to Amber.
- **Cards:** No background fill by default; defined by a 0.5px border. If grouped, use a subtle #1A1919 background.
- **Data Tables:** High-density, using JetBrains Mono for all numeric values to ensure monospaced alignment of digits.
- **Status Indicators:** Small 6px solid circles. Use Amber for "active," Secondary Text for "idle," and a muted red for "error."
- **Separators:** 0.5px hairlines using Primary Text at 10% opacity.