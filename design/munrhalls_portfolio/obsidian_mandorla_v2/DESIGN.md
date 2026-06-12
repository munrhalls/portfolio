---
name: Obsidian Mandorla v2
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#39393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2f'
  surface-container-highest: '#343439'
  on-surface: '#e3e1e8'
  on-surface-variant: '#c6c5d2'
  inverse-surface: '#e3e1e8'
  inverse-on-surface: '#303035'
  outline: '#8f909c'
  outline-variant: '#454650'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#182a6e'
  primary-container: '#4b5ba1'
  on-primary-container: '#d2d8ff'
  inverse-primary: '#4a5aa0'
  secondary: '#c5c5d5'
  on-secondary: '#2e303c'
  secondary-container: '#444653'
  on-secondary-container: '#b3b4c3'
  tertiary: '#c7c5d0'
  on-tertiary: '#303038'
  tertiary-container: '#5f5e68'
  on-tertiary-container: '#dbd8e4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#314286'
  secondary-fixed: '#e1e1f1'
  secondary-fixed-dim: '#c5c5d5'
  on-secondary-fixed: '#191b26'
  on-secondary-fixed-variant: '#444653'
  tertiary-fixed: '#e4e1ed'
  tertiary-fixed-dim: '#c7c5d0'
  on-tertiary-fixed: '#1b1b23'
  on-tertiary-fixed-variant: '#46464f'
  background: '#121318'
  on-background: '#e3e1e8'
  surface-variant: '#343439'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-metric:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0em
spacing:
  gutter: 40px
  margin-desktop: 64px
  margin-mobile: 24px
  unit: 8px
  container-max: 1440px
---

## Brand & Style

The design system is a study in "Cyber-Luxe Ritualism"—a high-fidelity aesthetic that blends technical precision with a dark, atmospheric void. It is designed for elite developer tools, high-stakes finance, or advanced science platforms that require a sense of deep focus and intellectual gravity.

The visual direction moves away from standard neon-cyberpunk into a more refined, mathematical territory. It utilizes a **Minimalist-Modern** framework underpinned by architectural rigidity. The user experience should feel like operating an advanced monolith: silent, responsive, and profoundly stable. Every interaction is designed to feel like a "luminance shift," where data emerges from the dark as if stepping into a beam of cold light.

## Colors

The palette is restricted to a narrow, high-contrast spectrum to maintain an atmosphere of "Void and Light."

- **Void (Background):** A near-black indigo that provides infinite depth.
- **Surface (Level 1):** A subtle lift used for containerization, ensuring the UI feels structured without breaking the dark aesthetic.
- **Cold Indigo (Accent):** The primary interactive color, sampled from the Mandorla asset. It is used sparingly for highlights and active states.
- **Primary Text:** A soft, high-legibility off-white with a slight indigo tint to prevent optical vibration against the dark background.

## Typography

This design system employs a dual-type strategy:

1.  **Headlines (Space Grotesk):** Wide-tracking, geometric forms that command attention and feel technologically advanced. Use uppercase for "Display" styles to emphasize the architectural nature of the layout.
2.  **Data & Secondary Labels (JetBrains Mono):** A high-performance monospaced font used for all technical readouts, metadata, and labels. This mirrors the precision of Katakana stream aesthetics and ensures columnar data alignment.
3.  **Body Text (Hanken Grotesk):** A clean, contemporary sans-serif used for long-form reading to maintain high legibility amidst the high-contrast environment.

## Layout & Spacing

The layout is governed by a **Strict Modular Grid** that prioritizes negative space (the Void).

- **Desktop (12 Columns):** 40px gutters create significant breathing room between modules, emphasizing the "monolith" feel of UI components.
- **Tablet (8 Columns):** 32px gutters.
- **Mobile (4 Columns):** 16px gutters, with margins reduced to 24px.

Spacing follows an 8px linear scale. Alignment must be absolute; elements should snap to the grid edges to maintain the sense of mathematical perfection seen in the reference imagery.

## Elevation & Depth

This design system rejects traditional soft shadows in favor of **structural illumination**:

- **No Shadows:** Depth is not achieved through blur, but through tonal shifts and outlines.
- **Border-Highlights:** Surfaces are defined by 1px solid borders using the Cold Indigo accent at 20% opacity. These act as "rim lights" on a physical object.
- **Tonal Layering:** The hierarchy moves from Background (`#05050A`) to Surface Level 1 (`#12121A`). Higher levels should not get lighter backgrounds, but rather more vibrant border-highlights.
- **Luminance Transitions:** Hover states are characterized by an 8-10 point increase in background luminance or a 40% increase in border opacity, simulating the object being pulled forward into a light source.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

To maintain the "Luxe" and "Technical" narrative, every element—from buttons to cards to input fields—must feature 90-degree corners. This evokes industrial precision and architectural strength. Interaction feedback is provided through color and light rather than physical shape deformation.

## Components

### Buttons
- **Primary:** Background of Cold Indigo (`#4b5ba1`), text in Void (`#05050A`), sharp corners. Hover state increases luminance by 10%.
- **Ghost:** 1px border of Cold Indigo (20% opacity), Primary Text. Hover state increases border opacity to 100%.

### Input Fields
- Background is Void, defined by a bottom-only 1px highlight or a full 1px border at 20% opacity.
- Focus state: Border opacity increases to 80% with a subtle 1px "glow" (non-blurred stroke).
- Placeholder text: JetBrains Mono at 40% opacity.

### Chips & Tags
- Always monospaced (JetBrains Mono).
- Use small, sharp rectangular containers with 1px indigo borders.

### Cards & Modules
- Surface Level 1 (`#12121A`) backgrounds.
- Headers within cards should be separated by 1px horizontal dividers at 10% opacity.
- Wide internal padding (32px) to match the 40px external gutters.

### Data Streams
- For lists or data tables, use JetBrains Mono for all entries.
- Row hover: Subtle background shift to `#1A1A24`.