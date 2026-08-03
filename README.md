# HubIzi Schilderwerken — Website

Een premium, snelle website voor **HubIzi Schilderwerken**, een vakkundig
schildersbedrijf uit Waalwijk.

> Alles wat wij aanpakken, tillen we naar een hoger niveau.

Gebouwd met [Astro](https://astro.build) voor statische, razendsnelle pagina's.
De vormtaal is minimalistisch en rustig (in de geest van Apple), overzichtelijk
opgebouwd en met veel witruimte voor een premium gevoel. Baby blue voert de
boventoon, met de kleuren uit het logo als spaarzame accenten.

## Pagina's

| Pagina | Route | Doel |
| --- | --- | --- |
| Home | `/` | Positionering, diensten in het kort, werkwijze, waarden en FAQ. |
| Diensten | `/diensten/` | Overzicht van de drie diensten. |
| Schilderwerken | `/diensten/schilderwerken/` | Binnen- en buitenschilderwerk. |
| Spuiten van objecten | `/diensten/spuiten-van-objecten/` | Spuitwerk voor een naadloze afwerking. |
| Afwerken | `/diensten/afwerken/` | Wand- en sausklaar afwerken. |
| Over ons | `/over-ons/` | Het verhaal van oprichter Hubert Isidora. |
| Contact | `/contact/` | Offerte aanvragen via het contactformulier. |

## De diensten

1. **Schilderwerken** — binnen- en buitenschilderwerk met een strakke,
   duurzame afwerking.
2. **Spuiten van objecten** — spuitwerk voor een naadloos gladde uitstraling.
3. **Afwerken** — wand- en sausklaar afwerken voor een egaal eindresultaat.

## Techniek & performance

- **Astro** — standaard geen JavaScript; alleen enkele KB's handgeschreven
  island-JS (sticky header, mobiel menu, scroll-reveal, formulierafhandeling).
- **Eigen design system** — design tokens in `src/styles/global.css`; alle
  merkkleur staat in CSS-variabelen, zodat het in één plek te herstellen is.
- **Scoped component-styles** — geen CSS-framework, geen ballast.
- HTML wordt geminificeerd bij het bouwen.

## Vindbaarheid & SEO

De site is zo opgebouwd dat zoekmachines en AI-antwoordmachines HubIzi goed
begrijpen:

- **Semantische HTML** overal.
- **Gestructureerde data (JSON-LD)** in `src/components/Schema.astro`:
  - `PaintingContractor` / LocalBusiness (NAW-gegevens, areaServed)
  - `Service` voor elke dienst
  - `FAQPage` en `WebSite`
- Per pagina canonical, Open Graph en Twitter-meta (`src/layouts/Base.astro`).
- `robots.txt` verwelkomt crawlers; `sitemap-index.xml` wordt gegenereerd.
- Geo-meta gericht op Waalwijk en Noord-Brabant.

## Ontwikkelen

```bash
npm install      # dependencies installeren
npm run dev      # lokale dev-server op http://localhost:4321
npm run build    # bouwen (statische pagina's + de /api/contact-functie)
npm run preview  # de productie-build bekijken
```

## Aanpassen

Alle content staat in **`src/data/site.ts`** — NAW-gegevens, navigatie,
diensten, werkwijze, waarden en FAQ (die ook de JSON-LD voeden, zodat tekst en
gestructureerde data nooit uit elkaar lopen).

- **Merkkleuren:** pas de CSS-variabelen bovenaan `src/styles/global.css` aan.
- **Logo:** het merk staat als inline-SVG in `src/components/Logo.astro`
  (en `public/favicon.svg`).
- **Bedrijfsgegevens:** telefoon, e-mail, adres en KvK staan in `site` in
  `src/data/site.ts`.

## Contactformulier / e-mail (Resend)

Het contactformulier is gekoppeld aan Resend via een on-demand Astro-endpoint
(`/api/contact`). De site gebruikt `output: 'static'` met de
`@astrojs/vercel`-adapter: elke pagina blijft statisch, alleen dit endpoint
draait server-side, zodat de API-sleutel nooit in de browser komt.

**Instellen**

1. Maak een Resend-account en een API-sleutel aan en verifieer je
   verzenddomein (bijv. `hubizi-schilderwerken.nl`) op https://resend.com.
2. Stel deze omgevingsvariabelen in (lokaal in een `.env`-bestand en in het
   Vercel-project → Settings → Environment Variables):

   | Variabele | Doel | Voorbeeld |
   | --- | --- | --- |
   | `RESEND_API_KEY` | Resend API-sleutel (verplicht) | `re_...` |
   | `RESEND_FROM` | Geverifieerde afzender | `HubIzi Schilderwerken <noreply@hubizi-schilderwerken.nl>` |
   | `RESEND_TO` | Waar aanvragen binnenkomen (standaard het site-e-mailadres) | `info@hubizi-schilderwerken.nl` |

   Zie `.env.example`. Voor een snelle test kun je versturen vanaf
   `HubIzi <onboarding@resend.dev>` zonder een domein te verifiëren.

## Projectstructuur

```
src/
├── components/        # Header, Footer, Logo, Button, Icon, Schema,
│                      # SectionHeading, FaqAccordion, FinalCta
├── data/site.ts       # enige bron van content + metadata
├── layouts/           # Base.astro (head, SEO, schema, reveal-script)
├── pages/
│   ├── index, over-ons, contact
│   ├── diensten/      # overzicht + de drie dienstpagina's
│   └── api/           # contact.ts (Resend)
└── styles/            # global.css (design tokens + utilities)
public/                # favicon.svg, logo.svg, og.png, robots.txt
```
