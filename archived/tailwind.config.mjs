/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        'surface':                   '#0d0d0d',
        'surface-dim':               '#0d0d0d',
        'surface-bright':            '#37312a',
        'surface-container-lowest':  '#12100e',
        'surface-container-low':     '#171512',
        'surface-container':         '#1c1915',
        'surface-container-high':    '#242018',
        'surface-container-highest': '#2c271e',
        // On-surface
        // WCAG AA contrast ratios on #0d0d0d (surface):
        // primary / bright amber (#e6b84f)  → ~10:1 ✓
        // primary-container / gold (#c8940a) →  ~7:1 ✓
        // on-surface-variant (#a89f92)      →  ~7:1 ✓
        'on-surface':         '#e8e8e8',
        'on-surface-variant': '#a89f92',
        'inverse-surface':    '#e8e8e8',
        'inverse-on-surface': '#262219',
        // Outline
        'outline':         '#8a8278',
        'outline-variant': '#403b31',
        // Primary
        'surface-tint':         '#e6b84f',
        'primary':              '#e6b84f',
        'on-primary':           '#3a2a00',
        'primary-container':    '#c8940a',
        'on-primary-container': '#241700',
        'inverse-primary':      '#c8940a',
        // Secondary
        'secondary':              '#c9c4ba',
        'on-secondary':           '#2e2b26',
        'secondary-container':    '#454037',
        'on-secondary-container': '#b8b2a6',
        // Tertiary
        'tertiary':              '#ffb786',
        'on-tertiary':           '#502400',
        'tertiary-container':    '#df7412',
        'on-tertiary-container': '#461f00',
        // Error
        'error':              '#ffb4ab',
        'on-error':           '#690005',
        'error-container':    '#93000a',
        'on-error-container': '#ffdad6',
        // Background
        'background':    '#0d0d0d',
        'on-background': '#e8e8e8',
        'surface-variant': '#2e2a22',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // fontWeight is silently ignored in Tailwind 3 fontSize tuples.
        // Apply font weight via utility classes at each use site.
        'display-hero':        ['clamp(38px, 4vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-hero-mobile': ['clamp(36px, 4.5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'headline-lg':         ['clamp(26px, 2.2vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline-sm':         ['clamp(17px, 1.4vw, 20px)', { lineHeight: '1.4' }],
        'body-md':             ['clamp(14px, calc(0.9vw + 0.25rem), 18px)', { lineHeight: '1.6' }],
        'label-mono':          ['clamp(11px, 0.85vw, 13px)', { lineHeight: '1.0', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        sm:      '0.125rem',
        DEFAULT: '0.25rem',
        md:      '0.375rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        full:    '9999px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
