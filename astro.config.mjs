import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build
export default defineConfig({
  site: 'https://webmaister.io',
  // Pages are prerendered (static) by default; only routes that opt out with
  // `export const prerender = false` (e.g. the contact API) run on-demand.
  output: 'hybrid',
  adapter: vercel(),
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
