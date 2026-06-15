/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        'surface':                   '#10131a',
        'surface-dim':               '#10131a',
        'surface-bright':            '#363941',
        'surface-container-lowest':  '#0b0e15',
        'surface-container-low':     '#191b23',
        'surface-container':         '#1d2027',
        'surface-container-high':    '#272a31',
        'surface-container-highest': '#32353c',
        // On-surface
        // WCAG AA contrast ratios on #10131a (surface):
        // on-surface (#e1e2ec)         → 14.42:1 ✓
        // on-surface-variant (#c2c6d6) → 10.92:1 ✓
        // primary (#adc6ff)            → 10.88:1 ✓
        // tertiary (#ffb786)           → 10.95:1 ✓
        // outline (#8c909f)            →  5.84:1 ✓
        'on-surface':         '#e1e2ec',
        'on-surface-variant': '#c2c6d6',
        'inverse-surface':    '#e1e2ec',
        'inverse-on-surface': '#2e3038',
        // Outline
        'outline':         '#8c909f',
        'outline-variant': '#424754',
        // Primary
        'surface-tint':         '#adc6ff',
        'primary':              '#adc6ff',
        'on-primary':           '#002e6a',
        'primary-container':    '#4d8eff',
        'on-primary-container': '#00285d',
        'inverse-primary':      '#005ac2',
        // Secondary
        'secondary':              '#c6c6c7',
        'on-secondary':           '#2f3131',
        'secondary-container':    '#454747',
        'on-secondary-container': '#b4b5b5',
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
        'background':    '#10131a',
        'on-background': '#e1e2ec',
        'surface-variant': '#32353c',
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
