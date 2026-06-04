import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build
export default defineConfig({
  site: 'https://www.webmaister.io',
  // Static by default; routes that opt out with `export const prerender = false`
  // (the contact API) are rendered on-demand as a serverless function.
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [sitemap()],
  compressHTML: true,
});
