---
name: Cyber-Luxe Obsidian
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c0c1ff'
  on-secondary: '#1100a9'
  secondary-container: '#261ce0'
  on-secondary-container: '#b0b1ff'
  tertiary: '#fff7fb'
  on-tertiary: '#520070'
  tertiary-container: '#f6d0ff'
  on-tertiary-container: '#9d00d2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2316de'
  tertiary-fixed: '#f9d8ff'
  tertiary-fixed-dim: '#ecb1ff'
  on-tertiary-fixed: '#320046'
  on-tertiary-fixed-variant: '#75009e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-code:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.2em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-mobile: 24px
  margin-desktop: 80px
  stack-lg: 64px
  stack-md: 32px
---

## Brand & Style

The design system is a "Cyber-Luxe" framework tailored for high-end full-stack development portfolios. It blends the raw technical energy of a hacker aesthetic with the polished, premium feel of a luxury brand. The visual identity is built on high-contrast surfaces, cinematic lighting, and a marriage of ancient "rune" mysticism with futuristic circuitry.

The style is primarily **Glassmorphism** combined with **Futuristic/Cinematic** elements. It utilizes deep layering, background blurs, and neon "inner-glow" strokes to create a sense of three-dimensional space within a digital terminal. The emotional response is one of precision, advanced capability, and elite technical craftsmanship.

**Key Aesthetic Pillars:**
- **Cinematic Depth:** Use of dark backgrounds with high-intensity light sources (glows) to create focus.
- **Technical Sophistication:** Subtle circuit patterns and monospaced accents to emphasize the "Full-Stack" expertise.
- **Premium Mystery:** The use of purple/blue "runes" suggests a deeper level of code "magic" and complexity.

## Colors

This design system utilizes an "Obsidian-Base" palette. The core is a deep, near-black charcoal that provides infinite depth, allowing neon accents to pop with maximum vibrance.

- **Background:** `#0a0a0a` is the foundational canvas.
- **Primary (Matrix Green):** Used for "active" code states, success indicators, and technical details. It represents the "engine" of the developer.
- **Secondary (Rune Blue):** A glowing electric blue used for primary navigation and interactive geometric borders.
- **Tertiary (Arcane Purple):** Used for highlighting specialized skills or "mythical" high-level architecture concepts.
- **System White:** Pure `#ffffff` is reserved strictly for high-readability body text and crucial headlines.

Gradients should be used sparingly, primarily as "outer glows" or "backlight" effects behind glass panels.

## Typography

Typography in this design system balances geometric modernity with technical precision. 

- **Headlines:** Use **Space Grotesk**. It provides a futuristic, wide-aperture feel. For Display levels, always apply wide letter-spacing (`0.1em` or more) to evoke a cinematic, high-end title card aesthetic.
- **Body:** Use **Inter**. It is selected for its supreme legibility against dark backgrounds. Ensure line height is generous (1.6x) to prevent "vibration" of white text on black.
- **Technical Labels:** Use **Space Mono** for all navigation items, small captions, and bulleted technical lists. This reinforces the "Developer" persona.

Text should be crisp white, but secondary labels can be dropped to 70% opacity to maintain hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with an emphasis on **Symmetry** and **Central Focal Points**. 

1. **Central Branding:** The geometric diamond motif is the "North Star" of the layout, positioned centrally to anchor the user's eye.
2. **Four-Corner Navigation:** Primary navigation links (About, Work, Skills, Contact) are pinned to the edges or corners of the viewport to maximize the cinematic "fullscreen" feel of the center content.
3. **Information Density:** Use a 12-column grid for desktop. Project details (like "SANG LOGIUM") should occupy a 5-column span, offset to the right or left of the central diamond to create a dynamic, unbalanced but intentional look.
4. **Vertical Rhythm:** Large vertical gaps (`stack-lg`) are used between sections to allow the background glows and circuit patterns to "breathe."

**Mobile Adaption:** On mobile, the diamond scales down by 40%, and the four-corner navigation collapses into a top-right glassmorphic menu button. All content reflows to a single-column stack.

## Elevation & Depth

Visual hierarchy is managed through **Luminous Layering** rather than traditional shadows.

- **Base Layer:** Deep charcoal (#0a0a0a) with a faint, low-opacity circuit pattern SVG overlay.
- **Mid Layer (Glows):** Large, blurred radial gradients of Rune Blue and Arcane Purple placed *behind* content panels to suggest backlighting.
- **Surface Layer:** Panels use a background of `rgba(255, 255, 255, 0.03)` with a `blur(12px)` backdrop filter. 
- **Edge Definition:** Instead of shadows, use a 1px solid border with a linear gradient (e.g., `transparent` to `Rune Blue` back to `transparent`) to create "shimmering" edges.
- **Interactions:** Elements should "brighten" rather than lift. Hovering over a card increases the backdrop-blur intensity and the opacity of the neon border.

## Shapes

The shape language is **Strictly Geometric and Angular**. 

- **Corners:** To maintain the "Cyber" and "Diamond" motif, all primary UI elements (buttons, cards, inputs) must have **0px (Sharp)** corners. 
- **The Diamond:** The core branding element is a nested diamond. This 45-degree angularity should be echoed in small details, such as the ends of progress bars or decorative "bracket" elements around labels.
- **Lines:** Use ultra-thin (0.5pt - 1pt) lines for borders and separators to imply technical precision.

## Components

- **Buttons:** Sharp-edged boxes with a 1px Rune Blue border. On hover, the box fills with a Matrix Green glow and the text shifts to Black.
- **Project Cards:** Large glassmorphic panels. The header uses "display-lg" typography. Features are listed using `label-code` styling with Matrix Green "check-bit" icons (e.g., `[x]`).
- **Input Fields:** Bottom-border only, using secondary color. Focus state triggers a vertical "scanning" light animation across the border.
- **The Diamond Motif:** A responsive SVG component. It should contain a "matrix-rain" video mask or CSS animation in its center, surrounded by rotating "Rune" rings.
- **Chips/Tags:** Small, monospaced text wrapped in `[]` brackets (e.g., `[ REACT ]`), utilizing the tertiary purple color for the text.
- **Navigation:** Corner-anchored links with a "glitch" hover effect where the text briefly shifts color.