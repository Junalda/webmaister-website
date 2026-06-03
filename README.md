# Webmaister — Website

A premium, fast, multi-page marketing site for **Webmaister**, a **Growth & AI
Infrastructure Partner** for ambitious businesses in Rotterdam.

> We don't just build websites — we build the digital foundation that helps
> businesses grow.

Built with [Astro](https://astro.build) for static, enterprise-grade speed.
Design language inspired by Apple, Stripe, Linear, Notion and Framer: premium,
minimal, elegant and spacious.

## Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Positioning, the modern business problem, the 3-pillar ecosystem, **Meet Brainy**, the growth framework, results & FAQ. |
| Solutions | `/solutions/` | Digital Presence, Growth Systems and Brainy AI Solutions — framed around business outcomes, not features. |
| Success Stories | `/success-stories/` | ROI-focused case studies (Industry · Challenge · Solution · Results). |
| Contact | `/contact/` | "Let's build your growth engine" — premium consultation form. |

## The three pillars

1. **Digital Presence** — premium websites that build trust and generate leads.
2. **Growth Systems** — SEO, conversion optimization and customer acquisition.
3. **Brainy AI & Automation** — *your digital employee*, working 24/7.

## Tech & performance

- **Astro 4** — zero JS by default; only a few KB of hand-written island JS
  (sticky header, mobile menu, scroll reveal, form handling).
- **Custom design system** — design tokens in `src/styles/global.css`; all
  brand color lives in CSS variables so it can be re-skinned in one place.
- **Scoped component styles** — no CSS framework, no bloat.
- HTML is minified and critical CSS is inlined at build time.

## AI search & SEO optimization

The site is structured so AI answer engines (ChatGPT, Gemini, Claude,
Perplexity) and traditional crawlers can understand and recommend Webmaister:

- **Semantic HTML** throughout.
- **Structured data (JSON-LD)** in `src/components/Schema.astro`:
  - `ProfessionalService` / LocalBusiness (NAP, areaServed, knowsAbout)
  - `Service` entities for every offering
  - `FAQPage`
  - `WebSite`
- Per-page canonical, Open Graph and Twitter meta (`src/layouts/Base.astro`).
- `robots.txt` explicitly welcomes AI crawlers; `sitemap-index.xml` is generated.
- Geo meta + Rotterdam keyword targeting (website laten maken, webdesign, SEO,
  AI automatisering, AI agent, website onderhoud).

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # build (static pages + the /api/contact function)
npm run preview  # preview the production build
```

## Customization points

All content lives in **`src/data/site.ts`** — NAP details, navigation,
pillars, solutions, case studies and FAQs (which also feed the JSON-LD, so
copy and structured data never drift apart).

- **Brand colors / logo:** update the CSS variables at the top of
  `src/styles/global.css` and the mark in `src/components/Logo.astro`
  (and `public/favicon.svg` / `public/og.png`) to the official logo colors.
- **Contact form (Resend):** the form posts to the server endpoint
  `src/pages/api/contact.ts`, which sends an email via [Resend](https://resend.com).
  See "Contact form / email" below.
- **Business details:** phone, email and KvK live in `site` in
  `src/data/site.ts`.

## Contact form / email (Resend)

The contact form is wired to Resend through an on-demand Astro endpoint
(`/api/contact`). The site uses `output: 'hybrid'` with the
`@astrojs/vercel` adapter: every page is still static, only this endpoint
runs server-side, so the API key never reaches the browser.

**Setup**

1. Create a Resend account and an API key, and verify your sending domain
   (e.g. `webmaister.io`) at https://resend.com.
2. Set these environment variables (locally in a `.env` file, and in the
   Vercel project → Settings → Environment Variables):

   | Variable | Purpose | Example |
   | --- | --- | --- |
   | `RESEND_API_KEY` | Resend API key (required) | `re_...` |
   | `RESEND_FROM` | Verified sender | `Webmaister <noreply@webmaister.io>` |
   | `RESEND_TO` | Where submissions land (defaults to the site email) | `hello@webmaister.io` |

   See `.env.example`. For a quick test you can send from
   `Webmaister <onboarding@resend.dev>` without verifying a domain.
3. Deploy to Vercel (the adapter is already configured). The endpoint
   validates input, blocks spam via a honeypot, and returns JSON the form
   uses to show an inline success or error state.

## Project structure

```
src/
├── components/   # Header, Footer, Logo, Button, Icon, Schema,
│                 # SectionHeading, BrainyDashboard, FaqAccordion, FinalCta
├── data/site.ts  # single source of content + metadata
├── layouts/      # Base.astro (head, SEO, schema, reveal script)
├── pages/        # index, solutions, success-stories, contact
└── styles/       # global.css (design tokens + utilities)
public/           # favicon.svg, og.png, robots.txt
```
