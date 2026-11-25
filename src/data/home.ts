// Homepage content for both languages. Rendered by HomeView.astro, used by
// / (NL) and /en/ (EN). Package names and prices follow /start.
import { core, faqs, faqsNL } from "@/data/site";

const offersEN = [
  { name: "One-Pager", price: "€500", unit: "setup", recurring: "+ €150 / month", who: "A professional one-page site for entrepreneurs and SMEs, live within 7 days.", cta: "See the One-Pager" },
  { name: "Growth Essentials", price: "€2,700", unit: "setup", recurring: "+ €300 / month", who: "Get found on Google and AI and turn visitors into customers. The setup has a 6-month results guarantee.", cta: "See Growth Essentials" },
  { name: "Growth Partnership", price: "On request", unit: "", recurring: "Minimum 6 months", who: "A done-for-you partnership. The price is on request.", cta: "Ask about Partnership", flagship: true },
];
const offersNL = [
  { name: "One-Pager", price: "€500", unit: "setup", recurring: "+ €150 / maand", who: "Een professionele site van één pagina voor ondernemers en MKB, live binnen 7 dagen.", cta: "Bekijk de One-Pager" },
  { name: "Growth Essentials", price: "€2.700", unit: "setup", recurring: "+ €300 / maand", who: "Gevonden worden op Google en in AI, en bezoekers omzetten in klanten. Op de setup geldt een resultaten-garantie van 6 maanden.", cta: "Bekijk Growth Essentials" },
  { name: "Growth Partnership", price: "Op aanvraag", unit: "", recurring: "Minimaal 6 maanden", who: "Een done-for-you partnerschap. De prijs is op aanvraag.", cta: "Vraag naar Partnership", flagship: true },
];

export const homeEN = {
  meta: {
    title: "Websites that get found on Google & AI | Webmaister",
    description: core.en,
  },
  whatsapp: "WhatsApp us",
  clientsLabel: "Trusted by growing businesses",
  hero: {
    kicker: "Rotterdam web agency",
    h1: 'Your business grew.<br /><span class="muted-head">Your systems didn’t.</span>',
    sub: core.en,
    ctaPrimary: "Let's talk",
    ctaSecondary: "See packages and prices",
    ctaServices: "Explore our services",
  },
  marquee: ["Systems built for growth", "Strategy", "Positioning", "Websites", "Customer acquisition", "Automation"],
  problem: {
    h2: "Growth shouldn’t<br />depend on luck.",
    statements: [
      { n: "01", a: "Referrals are great.", b: "Until they slow down." },
      { n: "02", a: "A beautiful website is great.", b: "Until nobody converts." },
      { n: "03", a: "Running ads is great.", b: "Until the budget stops." },
    ],
    big: 'Most businesses don’t have a marketing problem.<br /><span class="accent-head">They have a systems problem.</span>',
    aside: "More activity isn’t always the answer. A better-connected system is.",
  },
  whatWeDo: {
    kicker: "What we do",
    h2: "We connect the dots.",
    intro: "Websites, findability on Google and AI, and automation. Separately they help. Together they are how customers find you and how the busywork gets done.",
    pillars: [
      { n: "01", title: "Where the business is going", desc: "We start from where the business wants to go, then decide what the website, findability and automation need to do.", items: ["Business goal", "Offer", "Who it is for", "What the site must do"] },
      { n: "02", title: "Websites", desc: "Custom, fast, code-based websites. Not WordPress. A One-Pager is live within 7 days.", items: ["One-Pager", "Multi-page sites", "Mobile-first", "Clear contact path", "SEO foundations"] },
      { n: "03", title: "Found on Google and AI", desc: "Get found on Google and in AI assistants like ChatGPT and Google AI Overviews.", items: ["Google visibility", "AI search", "Clear business facts", "Schema.org", "Pages that answer real questions"] },
      { n: "04", title: "Automation", desc: "Brainy handles support, bookings, follow-ups and admin.", items: ["Customer support", "Bookings", "Follow-ups", "Admin", "Tool connections"] },
    ],
    foot: "Explore all services",
  },
  partnership: {
    kicker: "The growth partnership",
    h2: 'Six months.<br /><span class="accent-head">One clear direction.</span>',
    intro: "Growth Essentials is a website built to get you found on Google and AI and turn visitors into customers. The €2,700 setup has a 6-month results guarantee.",
    approach: [
      { n: "01", title: "Understand", text: "We start from where the business wants to go, and from how people look for it on Google and in AI answers." },
      { n: "02", title: "Build", text: "We build the website and the findability around that goal." },
      { n: "03", title: "Maintain", text: "The monthly fee covers maintenance and, on Growth Essentials, ongoing findability work." },
      { n: "04", title: "Automate", text: "Where it helps, Brainy takes support, bookings, follow-ups and admin off the team." },
    ],
    backTitle: "6-month results guarantee",
    backText: "The Growth Essentials €2,700 setup is protected. We agree on clear, measurable goals before we start. If we don't deliver them within six months, you get your €2,700 setup fee back, based on the goals we document together.",
    cta: "Discuss your growth plan",
  },
  services: { kicker: "Packages", h2: "Clear prices.", offers: offersEN, addOnsLabel: "Also on the start page", flagLabel: "On request",
    addOns: ["Business strategy session, €350"] },
  why: {
    kicker: "Why Webmaister",
    h2: 'Technology is the tool.<br /><span class="accent-head">Growth is the goal.</span>',
    copy: core.en,
    differentiators: ["Start from where the business wants to go", "Custom, code-based sites, not WordPress", "Findability on Google and in AI assistants", "A One-Pager live within 7 days", "Monthly maintenance and findability", "Direct contact with the founder"],
    founderLabel: "The founder",
    founderRole: "Founder, Webmaister",
    founderBio: "Junalda Meiland has 10+ years in technology, a background in software development and IT project management, and has been an entrepreneur since 2016. She is based in Rotterdam. She starts from where the business wants to go, then builds the website, the findability and the automation.",
    founderLink: "About Junalda Meiland, founder",
  },
  work: { kicker: "Selected work", h2: "Built for real businesses.", viewCase: "View case", allLink: "See all success stories" },
  howStart: {
    kicker: "How we start",
    h2: "Let’s find out what’s<br />holding you back.",
    intro: "Every business is different. Before recommending a website, campaign, or growth partnership, we first look at where your business stands and what needs to improve.",
    steps: [
      { n: "01", title: "Conversation", text: "We discuss your business, goals, and current acquisition challenges." },
      { n: "02", title: "Direction", text: "We identify the most relevant opportunities and determine whether we’re the right partner." },
      { n: "03", title: "Proposal", text: "We outline a tailored approach, deliverables, investment, and next steps." },
    ],
    bookCta: "Book a discovery call",
    note: "The initial discovery conversation is free and separate from our paid in-depth strategy session.",
  },
  faq: { kicker: "Questions", h2: "Straight answers.", items: faqs },
  final: { h2: 'Ready to be<br /><span class="accent-head">found?</span>', sub: core.en, ctaPrimary: "See packages and prices", ctaSecondary: "Explore our services" },
};

export const homeNL = {
  meta: {
    title: "Website laten maken die gevonden wordt op Google & AI | Webmaister",
    description: core.nl,
  },
  whatsapp: "WhatsApp",
  clientsLabel: "Vertrouwd door groeiende bedrijven",
  hero: {
    kicker: "Webbureau in Rotterdam",
    h1: 'Je bedrijf groeide.<br /><span class="muted-head">Je systemen niet.</span>',
    sub: core.nl,
    ctaPrimary: "Plan een gesprek",
    ctaSecondary: "Bekijk pakketten en prijzen",
    ctaServices: "Bekijk onze diensten",
  },
  marquee: ["Systemen gebouwd voor groei", "Strategie", "Positionering", "Websites", "Klantacquisitie", "Automatisering"],
  problem: {
    h2: "Groei hoort niet<br />van geluk af te hangen.",
    statements: [
      { n: "01", a: "Mond-tot-mond is mooi.", b: "Tot het opdroogt." },
      { n: "02", a: "Een mooie website is mooi.", b: "Tot niemand converteert." },
      { n: "03", a: "Adverteren is mooi.", b: "Tot het budget stopt." },
    ],
    big: 'De meeste bedrijven hebben geen marketingprobleem.<br /><span class="accent-head">Ze hebben een systeemprobleem.</span>',
    aside: "Méér activiteit is niet altijd het antwoord. Een beter verbonden systeem wel.",
  },
  whatWeDo: {
    kicker: "Wat we doen",
    h2: "We verbinden de punten.",
    intro: "Websites, vindbaarheid op Google en in AI, en automatisering. Los van elkaar helpen ze. Samen zorgen ze dat klanten je vinden en dat het terugkerende werk gedaan wordt.",
    pillars: [
      { n: "01", title: "Waar het bedrijf naartoe wil", desc: "We beginnen bij waar het bedrijf naartoe wil, en bepalen daarna wat de website, de vindbaarheid en de automatisering moeten doen.", items: ["Bedrijfsdoel", "Aanbod", "Voor wie", "Wat de site moet doen"] },
      { n: "02", title: "Websites", desc: "Maatwerk websites in code, snel, zonder WordPress. Een One-Pager staat binnen 7 dagen live.", items: ["One-Pager", "Meerdere pagina's", "Mobiel-first", "Duidelijke contactroute", "SEO-fundament"] },
      { n: "03", title: "Gevonden op Google en in AI", desc: "Gevonden worden op Google en in AI-assistenten zoals ChatGPT en Google AI Overviews.", items: ["Google", "AI-zoeken", "Heldere bedrijfsgegevens", "Schema.org", "Pagina's die echte vragen beantwoorden"] },
      { n: "04", title: "Automatisering", desc: "Brainy doet ondersteuning, afspraken, opvolging en administratie.", items: ["Ondersteuning", "Afspraken", "Opvolging", "Administratie", "Koppelingen"] },
    ],
    foot: "Bekijk alle diensten",
  },
  partnership: {
    kicker: "De groeipartnerschap",
    h2: 'Zes maanden.<br /><span class="accent-head">Eén duidelijke richting.</span>',
    intro: "Growth Essentials is een website waarmee je gevonden wordt op Google en in AI, en waarmee bezoekers klanten worden. Op de setup van €2.700 geldt een resultaten-garantie van 6 maanden.",
    approach: [
      { n: "01", title: "Begrijpen", text: "We beginnen bij waar het bedrijf naartoe wil, en bij hoe mensen het zoeken op Google en in AI-antwoorden." },
      { n: "02", title: "Bouwen", text: "We bouwen de website en de vindbaarheid om dat doel heen." },
      { n: "03", title: "Bijhouden", text: "Het maandbedrag dekt onderhoud en, bij Growth Essentials, doorlopende vindbaarheid." },
      { n: "04", title: "Automatiseren", text: "Waar het helpt, neemt Brainy ondersteuning, afspraken, opvolging en administratie over." },
    ],
    backTitle: "Resultaten-garantie van 6 maanden",
    backText: "De setup van €2.700 voor Growth Essentials is beschermd. We spreken vooraf duidelijke, meetbare doelen af. Halen we die niet binnen zes maanden, dan krijg je de setup van €2.700 terug, op basis van de doelen die we samen vastleggen.",
    cta: "Bespreek je groeiplan",
  },
  services: { kicker: "Pakketten", h2: "Heldere prijzen.", offers: offersNL, addOnsLabel: "Ook op de startpagina", flagLabel: "Op aanvraag",
    addOns: ["Strategiesessie, €350"] },
  why: {
    kicker: "Waarom Webmaister",
    h2: 'Technologie is het middel.<br /><span class="accent-head">Groei is het doel.</span>',
    copy: core.nl,
    differentiators: ["Eerst waar het bedrijf naartoe wil", "Maatwerk in code, geen WordPress", "Vindbaarheid op Google en in AI-assistenten", "Een One-Pager live binnen 7 dagen", "Maandelijks onderhoud en vindbaarheid", "Direct contact met de oprichter"],
    founderLabel: "De oprichter",
    founderRole: "Oprichter, Webmaister",
    founderBio: "Junalda Meiland heeft meer dan 10 jaar ervaring in technologie, een achtergrond in softwareontwikkeling en IT-projectmanagement, en is ondernemer sinds 2016. Ze werkt vanuit Rotterdam. Ze begint bij waar het bedrijf naartoe wil, en bouwt daarna de website, de vindbaarheid en de automatisering.",
    founderLink: "Over Junalda Meiland, oprichter",
  },
  work: { kicker: "Geselecteerd werk", h2: "Gebouwd voor echte bedrijven.", viewCase: "Bekijk case", allLink: "Bekijk alle cases" },
  howStart: {
    kicker: "Hoe we starten",
    h2: "Laten we uitzoeken wat je<br />tegenhoudt.",
    intro: "Elk bedrijf is anders. Voordat we een website, campagne of partnerschap aanraden, kijken we eerst waar je bedrijf staat en wat er beter moet.",
    steps: [
      { n: "01", title: "Gesprek", text: "We bespreken je bedrijf, je doelen en je huidige acquisitie-uitdagingen." },
      { n: "02", title: "Richting", text: "We bepalen de meest relevante kansen en of wij de juiste partner zijn." },
      { n: "03", title: "Voorstel", text: "We schetsen een aanpak op maat, met deliverables, investering en volgende stappen." },
    ],
    bookCta: "Plan een kennismaking",
    note: "Het eerste kennismakingsgesprek is gratis en staat los van onze betaalde, uitgebreide strategiesessie.",
  },
  faq: { kicker: "Vragen", h2: "Korte antwoorden.", items: faqsNL },
  final: { h2: 'Klaar om<br /><span class="accent-head">gevonden te worden?</span>', sub: core.nl, ctaPrimary: "Bekijk pakketten en prijzen", ctaSecondary: "Bekijk onze diensten" },
};
