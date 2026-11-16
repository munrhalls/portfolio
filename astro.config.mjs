import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://munrhalls.com',
  // Base styles come from src/styles/tailwind.css (preflight is off; see tailwind.config.ts).
  integrations: [tailwind({ applyBaseStyles: false })],
});
