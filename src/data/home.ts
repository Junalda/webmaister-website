// Homepage content for both languages. Rendered by HomeView.astro, used by
// / (NL) and /en/ (EN). Service naming follows /start (Starter Website,
// Growth Website, Growth Strategist) plus the Lead Generation System.

const offersEN = [
  { name: "Starter Website / One-Pager", price: "€500", unit: "setup", recurring: "+ €150 / month", who: "For entrepreneurs who need a professional online presence without unnecessary complexity.", cta: "Discuss your website" },
  { name: "Growth Website", price: "€2,700", unit: "setup", recurring: "+ €300 / month", who: "For established businesses whose current website no longer reflects their quality, positioning or ambitions.", cta: "Upgrade my website" },
  { name: "Lead Generation System", price: "€5,000", unit: "setup", recurring: "+ €500 / month", who: "For businesses that want to connect their website, conversion process and lead acquisition into a structured system.", cta: "Discuss lead generation" },
  { name: "Growth Strategist", price: "From €1,600", unit: "per month", recurring: "Minimum six-month engagement", who: "For established businesses that want to move beyond referrals and build a predictable acquisition system.", cta: "Let's talk growth", flagship: true },
];
const offersNL = [
  { name: "Starter Website / One-Pager", price: "€500", unit: "setup", recurring: "+ €150 / maand", who: "Voor ondernemers die een professionele online aanwezigheid nodig hebben zonder onnodige complexiteit.", cta: "Bespreek je website" },
  { name: "Growth Website", price: "€2.700", unit: "setup", recurring: "+ €300 / maand", who: "Voor gevestigde bedrijven waarvan de huidige website niet meer past bij hun kwaliteit, positionering of ambities.", cta: "Upgrade mijn website" },
  { name: "Leadgeneratiesysteem", price: "€5.000", unit: "setup", recurring: "+ €500 / maand", who: "Voor bedrijven die hun website, conversieproces en leadacquisitie willen verbinden tot één gestructureerd systeem.", cta: "Bespreek leadgeneratie" },
  { name: "Growth Strategist", price: "vanaf €1.600", unit: "per maand", recurring: "Minimaal 6 maanden", who: "Voor gevestigde bedrijven die verder willen dan mond-tot-mond en een voorspelbaar acquisitiesysteem willen bouwen.", cta: "Plan een gesprek", flagship: true },
];

export const homeEN = {
  meta: {
    title: "Webmaister · Rotterdam web agency for websites, lead generation & AI automation",
    description: "Webmaister is a Rotterdam web agency building websites, lead generation and AI automation for growing businesses. Websites from €500 setup + €150/mo. Let's talk growth.",
  },
  whatsapp: "WhatsApp us",
  clientsLabel: "Trusted by growing businesses",
  hero: {
    kicker: "Rotterdam web agency",
    h1: 'Your business grew.<br /><span class="muted-head">Your systems didn’t.</span>',
    sub: "We help growing businesses turn outdated websites, disconnected marketing, and unpredictable customer acquisition into systems built for growth.",
    ctaPrimary: "Let's talk growth",
    ctaSecondary: "Explore our services",
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
    intro: "Strategy. Websites. Acquisition. Automation. Individually, they’re useful. Together, they create a foundation for growth.",
    pillars: [
      { n: "01", title: "Strategy & Positioning", desc: "We help businesses clarify their positioning, refine their offers, and build a practical growth strategy.", items: ["Business positioning", "Offer development", "Customer journey strategy", "Acquisition strategy", "Growth planning"] },
      { n: "02", title: "Websites & Conversion", desc: "We design and develop websites that build credibility and turn interest into inquiries.", items: ["Business websites", "High-converting landing pages", "One-page websites", "E-commerce websites", "Conversion optimization", "SEO foundations"] },
      { n: "03", title: "Customer Acquisition", desc: "We help businesses build more structured ways to reach and convert potential customers.", items: ["Acquisition funnels", "Lead generation", "Google Ads", "Campaign landing pages", "Conversion tracking", "Lead follow-up processes"] },
      { n: "04", title: "Systems & Automation", desc: "We connect technology and processes to reduce manual work and improve the customer journey.", items: ["CRM integrations", "Lead management", "Workflow automation", "AI-assisted processes", "Business system integrations", "Customer follow-up automation"] },
    ],
    foot: "Explore all services",
  },
  partnership: {
    kicker: "The growth partnership",
    h2: 'Six months.<br /><span class="accent-head">One clear direction.</span>',
    intro: "Real growth requires more than a new website or another marketing campaign. We work with businesses over six months to strengthen their positioning, connect their acquisition channels, and build systems designed to generate more consistent opportunities.",
    approach: [
      { n: "01", title: "Understand", text: "We analyze the business, its offer, customers, existing channels, and growth opportunities." },
      { n: "02", title: "Build", text: "We improve the foundations: positioning, website, conversion paths, and acquisition systems." },
      { n: "03", title: "Optimize", text: "We monitor performance, identify bottlenecks, and improve what works." },
      { n: "04", title: "Scale", text: "We strengthen successful channels and develop a more sustainable approach to customer acquisition." },
    ],
    backTitle: "We back our work.",
    backText: "We agree on measurable objectives before starting. If the agreed results are not achieved within six months, we refund the startup fee, subject to the agreed terms and clearly documented objectives. This commitment reflects our confidence in our approach.",
    cta: "Discuss your growth plan",
  },
  services: { kicker: "Services & investment", h2: "Clear entry points.", offers: offersEN, addOnsLabel: "Additional services", flagLabel: "Flagship",
    addOns: ["Website maintenance, from €150 / month", "Ads management, from €449 / month", "E-commerce development, from €2,500 setup", "Custom e-commerce front-end, from €3,500 setup", "E-commerce recurring services, from €350 / month", "Business strategy session, €350"] },
  why: {
    kicker: "Why Webmaister",
    h2: 'Technology is the tool.<br /><span class="accent-head">Growth is the goal.</span>',
    copy: "A website alone won’t grow your business. Neither will another disconnected marketing campaign. What matters is how your positioning, customer journey, acquisition channels, and technology work together. That’s where we focus.",
    differentiators: ["Strategy before execution", "Custom-built solutions instead of generic templates", "Technology connected to business objectives", "Ongoing optimization instead of one-off delivery", "Direct communication", "Focus on long-term growth"],
    founderLabel: "The founder",
    founderRole: "Founder, Webmaister",
    founderBio: "Junalda brings 10+ years in technology, a background in software development and IT project management, and hands-on experience building and operating businesses as an entrepreneur since 2016. That combination, technology and business, not one without the other, is how Webmaister approaches growth.",
    founderLink: "Talk to Junalda",
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
  final: { h2: 'Ready to build<br /><span class="accent-head">what’s next?</span>', sub: "Your next stage of growth deserves better systems. Let’s build them.", ctaPrimary: "Let's talk growth", ctaSecondary: "Explore our services" },
};

export const homeNL = {
  meta: {
    title: "Website laten maken & AI-automatisering in Rotterdam | Webmaister",
    description: "Webbureau in Rotterdam voor websites, leadgeneratie en AI-automatisering voor groeiende bedrijven. One-page website vanaf €500 setup + €150/mnd. Plan een gratis gesprek.",
  },
  whatsapp: "WhatsApp",
  clientsLabel: "Vertrouwd door groeiende bedrijven",
  hero: {
    kicker: "Webbureau in Rotterdam",
    h1: 'Je bedrijf groeide.<br /><span class="muted-head">Je systemen niet.</span>',
    sub: "Wij helpen groeiende bedrijven om verouderde websites, losse marketing en onvoorspelbare klantacquisitie om te zetten in systemen die gebouwd zijn voor groei.",
    ctaPrimary: "Plan een gesprek",
    ctaSecondary: "Bekijk onze diensten",
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
    intro: "Strategie. Websites. Acquisitie. Automatisering. Los van elkaar zijn ze nuttig. Samen vormen ze een fundament voor groei.",
    pillars: [
      { n: "01", title: "Strategie & positionering", desc: "We helpen bedrijven hun positionering aan te scherpen, hun aanbod te verfijnen en een praktische groeistrategie te bouwen.", items: ["Bedrijfspositionering", "Aanbodontwikkeling", "Customer journey-strategie", "Acquisitiestrategie", "Groeiplanning"] },
      { n: "02", title: "Websites & conversie", desc: "We ontwerpen en bouwen websites die vertrouwen wekken en interesse omzetten in aanvragen.", items: ["Zakelijke websites", "High-converting landingspagina’s", "One-page websites", "E-commerce websites", "Conversieoptimalisatie", "SEO-fundamenten"] },
      { n: "03", title: "Klantacquisitie", desc: "We helpen bedrijven om gestructureerder potentiële klanten te bereiken en te converteren.", items: ["Acquisitiefunnels", "Leadgeneratie", "Google Ads", "Campagne-landingspagina’s", "Conversietracking", "Leadopvolging"] },
      { n: "04", title: "Systemen & automatisering", desc: "We verbinden techniek en processen om handwerk te verminderen en de klantreis te verbeteren.", items: ["CRM-integraties", "Leadmanagement", "Workflow-automatisering", "AI-ondersteunde processen", "Systeemintegraties", "Opvolg-automatisering"] },
    ],
    foot: "Bekijk alle diensten",
  },
  partnership: {
    kicker: "De groeipartnerschap",
    h2: 'Zes maanden.<br /><span class="accent-head">Eén duidelijke richting.</span>',
    intro: "Echte groei vraagt meer dan een nieuwe website of nóg een campagne. We werken zes maanden met bedrijven om hun positionering te versterken, acquisitiekanalen te verbinden en systemen te bouwen die consistenter kansen opleveren.",
    approach: [
      { n: "01", title: "Begrijpen", text: "We analyseren het bedrijf, het aanbod, de klanten, bestaande kanalen en groeikansen." },
      { n: "02", title: "Bouwen", text: "We verbeteren de fundamenten: positionering, website, conversiepaden en acquisitiesystemen." },
      { n: "03", title: "Optimaliseren", text: "We monitoren prestaties, sporen knelpunten op en verbeteren wat werkt." },
      { n: "04", title: "Opschalen", text: "We versterken succesvolle kanalen en ontwikkelen een duurzamere aanpak van klantacquisitie." },
    ],
    backTitle: "We staan achter ons werk.",
    backText: "We spreken vooraf meetbare doelen af. Worden de afgesproken resultaten niet binnen zes maanden behaald, dan betalen we de startfee terug, onder de afgesproken voorwaarden en op basis van duidelijk gedocumenteerde doelen. Dit weerspiegelt ons vertrouwen in onze aanpak.",
    cta: "Bespreek je groeiplan",
  },
  services: { kicker: "Diensten & investering", h2: "Heldere instappunten.", offers: offersNL, addOnsLabel: "Aanvullende diensten", flagLabel: "Flagship",
    addOns: ["Website-onderhoud, vanaf €150 / maand", "Ads-beheer, vanaf €449 / maand", "E-commerce, vanaf €2.500 setup", "Custom e-commerce front-end, vanaf €3.500 setup", "E-commerce terugkerend, vanaf €350 / maand", "Betaalde strategiesessie, €350"] },
  why: {
    kicker: "Waarom Webmaister",
    h2: 'Technologie is het middel.<br /><span class="accent-head">Groei is het doel.</span>',
    copy: "Een website alleen laat je bedrijf niet groeien. Nóg een losse campagne ook niet. Wat telt, is hoe je positionering, klantreis, acquisitiekanalen en techniek samenwerken. Daar richten wij ons op.",
    differentiators: ["Strategie vóór uitvoering", "Maatwerk in plaats van generieke templates", "Techniek gekoppeld aan bedrijfsdoelen", "Doorlopende optimalisatie in plaats van eenmalige oplevering", "Direct contact", "Focus op groei op de lange termijn"],
    founderLabel: "De oprichter",
    founderRole: "Oprichter, Webmaister",
    founderBio: "Junalda brengt 10+ jaar ervaring in technologie, een achtergrond in softwareontwikkeling en IT-projectmanagement, en praktijkervaring met het bouwen en runnen van bedrijven als ondernemer sinds 2016. Die combinatie, techniek én business, niet het een zonder het ander, is hoe Webmaister naar groei kijkt.",
    founderLink: "Praat met Junalda",
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
  final: { h2: 'Klaar om te bouwen<br /><span class="accent-head">wat nu komt?</span>', sub: "Je volgende groeifase verdient betere systemen. Laten we ze bouwen.", ctaPrimary: "Plan een gesprek", ctaSecondary: "Bekijk onze diensten" },
};
