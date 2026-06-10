import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://munrhalls.com',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
