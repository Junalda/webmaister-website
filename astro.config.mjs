import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const SITE = 'https://www.webmaister.io';

// Bilingual page pairs, kept in sync with src/i18n.ts. Pages not listed here
// (the /start EN page, the NL-only /nl/ service pages, and the /gids/ guide)
// have no translation and appear in the sitemap as standalone URLs without
// hreflang alternates. The config is plain JS and can't use the `@/` TS alias,
// so the pairs are inlined here rather than imported.
const pagePairs = [
  { nl: '/', en: '/en/' },
  { nl: '/diensten/', en: '/en/solutions/' },
  { nl: '/cases/', en: '/en/work/' },
  { nl: '/over-ons/', en: '/en/about/' },
  { nl: '/contact/', en: '/en/contact/' },
];
const absUrl = (p) => new URL(p, SITE).href;
// Map every paired URL to its full hreflang link set (nl, en, x-default→nl).
const hreflangByUrl = new Map();
for (const { nl, en } of pagePairs) {
  const links = [
    { lang: 'nl', url: absUrl(nl) },
    { lang: 'en', url: absUrl(en) },
    { lang: 'x-default', url: absUrl(nl) },
  ];
  hreflangByUrl.set(absUrl(nl), links);
  hreflangByUrl.set(absUrl(en), links);
}

// https://astro.build
export default defineConfig({
  site: SITE,
  // Static by default; routes that opt out with `export const prerender = false`
  // (the contact API) are rendered on-demand as a serverless function.
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    sitemap({
      // /start/growth/ is a permanent redirect to /start/upgrade/.
      filter: (page) =>
        !page.includes("/start/growth") &&
        !page.includes("/acquisitiesysteem") &&
        !page.includes("leadgeneratiesysteem"),
      // Stamp every URL. The integration writes this onto each <url> before
      // serialize runs; serialize keeps it and only adds hreflang where a
      // NL/EN pair exists.
      lastmod: new Date(),
      serialize(item) {
        const links = hreflangByUrl.get(item.url);
        if (links) item.links = links;
        if (!item.lastmod) item.lastmod = new Date();
        return item;
      },
    }),
  ],
  compressHTML: true,
});
