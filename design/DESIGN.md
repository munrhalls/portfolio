---
name: Technical Precision
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353c'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is anchored in the concept of "Technical Craft"—a philosophy that celebrates code as an art form through precision, clarity, and restraint. It is designed for a high-level developer portfolio where the work speaks for itself, requiring an interface that feels like a high-end terminal or a premium code editor.

The aesthetic leans heavily into **Minimalism** with a **Technical** edge. By stripping away decorative elements like gradients and shadows, the focus shifts entirely to typography, alignment, and the rhythmic use of white space. The emotional response is one of absolute confidence and "quiet power"—a professional atmosphere that values functional efficiency over visual noise.

## Colors
This design system utilizes a high-contrast, dark-mode-first palette to emphasize legibility and technical rigor. 

- **Background:** A deep, near-black (#0a0a0a) provides a solid foundation that eliminates visual bleed.
- **Primary Text:** Off-white (#f0f0f0) ensures high readability without the harshness of pure #ffffff.
- **Muted Text:** At 45% opacity, this is used for non-essential metadata and secondary descriptions to establish a clear content hierarchy.
- **Accent:** Electric Blue (#3b82f6) is the surgical tool of the palette. It is reserved exclusively for interactive states (hovers, focus) and hairline borders of active elements. 

No gradients or glows are permitted; color is applied with flat, mathematical precision.

## Typography
Typography is the primary engine of this design system. We use **Geist**, a typeface designed for developers, to bridge the gap between technical utility and modern elegance.

- **Headlines:** Use heavy weights (700-800) with tight letter-spacing for high-impact hero sections. This creates a sense of structural density.
- **Body:** Set in Regular (400) weight with generous line heights to ensure long-form technical case studies are effortless to scan.
- **Labels:** Use the Monospace variant of Geist for UI elements, metadata, and tags. These should be set in uppercase with slight tracking to evoke a "system-level" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, architectural feel. 

- **Grid:** A 12-column grid with 24px gutters. Content should be centered with a maximum width of 1200px.
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of 8px. This creates a predictable, mathematical rhythm that reinforces the "precise" brand personality.
- **Negative Space:** Use generous vertical margins (80px to 160px) between major sections to allow the technical details of each project to breathe. 
- **Mobile Adaption:** On mobile devices, the layout collapses to a single column with 20px side margins, while maintaining the 8px spacing increments.

## Elevation & Depth
In keeping with the understated technical craft style, this design system avoids shadows and Z-axis depth entirely. Hierarchy is instead communicated through **Tonal Separation** and **Hairline Borders**.

- **Surfaces:** All surfaces are flat. If an element needs to be "raised" (like a card), use a slightly lighter background (e.g., #141414) or a 1px hairline border.
- **Borders:** Use 1px borders with low-opacity white (10%) for standard containers. For active or highlighted states, the border switches to the Accent Electric Blue.
- **Overlays:** Navigation or modals should use a solid #0a0a0a background with a mandatory 1px border. No backdrop blurs are used, keeping the interface sharp and clear.

## Shapes
Shapes are intentionally sharp to reflect technical precision. We use the **Soft** setting (0.25rem / 4px) for small interactive elements like buttons and input fields to prevent the UI from feeling aggressive, while maintaining a crisp, professional edge.

Larger containers (cards, code blocks) may use 0px (sharp) corners to reinforce the architectural grid.

## Components
- **Buttons:** Rectangular with 4px radius. Primary buttons use a 1px Electric Blue border with no fill; hover states trigger a subtle #f0f0f0 text color change. Secondary buttons use the muted text color.
- **Cards:** Defined by 1px hairline borders (#ffffff at 10% opacity). No background change unless hovered.
- **Code Blocks:** Use a slightly different background tint (#111111) with a 1px border. Use the label-mono typography for the code and metadata headers.
- **Chips/Tags:** Small, monospace labels enclosed in a 1px border. They should look like terminal metadata.
- **Input Fields:** Bottom-border only (1px hairline) to maintain a minimal, blueprint-like aesthetic. The border changes to Electric Blue on focus.
- **Project Lists:** Simple horizontal rows separated by 1px dividers, utilizing the display-hero-mobile font size for project titles to create a bold, editorial feel.