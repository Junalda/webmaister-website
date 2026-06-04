// =========================================================================
// Webmaister central content & metadata source.
// One place for NAP, services, case studies and FAQ so that page copy and
// structured data (JSON-LD) never drift apart.
// =========================================================================

export const site = {
  name: "Webmaister",
  legalName: "Webmaister",
  tagline: "Growth & AI Infrastructure Partner",
  url: "https://www.webmaister.io",
  email: "hello@webmaister.io",
  phone: "+31(0) 103072175",
  phoneHref: "+31103072175",
  kvk: "87478889",
  city: "Rotterdam",
  region: "Zuid-Holland",
  country: "NL",
  areaServed: ["Rotterdam", "Zuid-Holland", "Netherlands"],
  founded: "2023",
  // Single canonical company description (boilerplate) reused in the
  // Organization schema, the home meta description, the footer and About page,
  // so AI/search engines always read the exact same definition.
  description:
    "Webmaister is a Growth & AI Infrastructure Partner based in Rotterdam, the Netherlands. We help ambitious businesses grow with premium websites, AI solutions and automation that attract more customers, save time and increase revenue.",
  social: {
    linkedin: "https://www.linkedin.com/company/112275381/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Success Stories", href: "/success-stories/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const ctaPrimary = { label: "Book a Growth Strategy Call", href: "/contact/" };
export const ctaSecondary = { label: "Explore Solutions", href: "/solutions/" };

// ---- The three pillars (ecosystem) ----
export const pillars = [
  {
    id: "digital-presence",
    name: "Digital Presence",
    short: "Premium websites that build trust and generate leads.",
    icon: "globe",
    outcome: "A site customers trust in seconds and one that turns visitors into qualified leads.",
  },
  {
    id: "growth-systems",
    name: "Growth Systems",
    short: "SEO, conversion optimization and customer-acquisition systems.",
    icon: "trend",
    outcome: "A predictable engine that brings the right customers to you, month after month.",
  },
  {
    id: "brainy",
    name: "Brainy AI & Automation",
    short: "AI that automates repetitive work and helps you scale without extra hires.",
    icon: "spark",
    outcome: "A digital employee that handles the busywork 24/7 so your team can focus on growth.",
  },
];

// ---- The modern business problem ----
export const problems = [
  { title: "Your website doesn't generate leads", text: "Beautiful, maybe but it isn't turning visitors into conversations or customers." },
  { title: "Processes are still manual", text: "Quotes, follow-ups and admin eat the hours that should go into growth." },
  { title: "Customers wait too long", text: "Slow replies cost trust and revenue while competitors answer instantly." },
  { title: "Teams waste time on repetitive work", text: "Skilled people stuck doing copy-paste tasks a system should handle." },
  { title: "Growth depends entirely on people", text: "Every new customer means more headcount so scaling stays expensive and fragile." },
];

// ---- Growth framework ----
export const framework = [
  { step: "01", name: "Discover", text: "We map your customers, funnel and bottlenecks to find the highest-leverage growth opportunities." },
  { step: "02", name: "Build", text: "We design a premium, fast digital foundation engineered to convert and built to last." },
  { step: "03", name: "Automate", text: "Brainy takes over repetitive work lead capture, support, follow-ups and admin 24/7." },
  { step: "04", name: "Scale", text: "We optimize with real data so results compound and growth no longer depends on headcount." },
];

// ---- What Brainy does ----
export const brainyCapabilities = [
  { title: "Capture & qualify leads", text: "Greets every visitor, asks the right questions and routes hot leads to your team automatically." },
  { title: "Answer questions 24/7", text: "Instant, accurate answers from your own knowledge base, day or night, in any language." },
  { title: "Book appointments & follow-ups", text: "Schedules calls, sends reminders and never lets a lead go cold." },
  { title: "Generate content", text: "Drafts on-brand copy, emails and product descriptions in minutes, not days." },
  { title: "Analyze business data", text: "Turns scattered numbers into clear answers you can act on." },
  { title: "Automate admin work", text: "Handles repetitive back-office tasks so your team reclaims hours every week." },
];

// ---- Solutions catalogue ----
export const solutionGroups = [
  {
    id: "digital-presence",
    name: "Digital Presence",
    tag: "Build trust. Generate leads.",
    icon: "globe",
    intro: "A premium website is your hardest-working salesperson. We build digital foundations that load instantly, look world-class and turn visitors into customers.",
    items: [
      { name: "Premium Website Design", outcome: "Win trust in seconds and convert more visitors with a fast, elegant site engineered around your customer's journey." },
      { name: "Website Redesign", outcome: "Modernize an outdated site into a credibility and conversion engine without losing your existing SEO." },
      { name: "Website Maintenance", outcome: "Stay fast, secure and up to date with proactive care, so your site never costs you a customer." },
    ],
  },
  {
    id: "growth-systems",
    name: "Growth Systems",
    tag: "Predictable customer acquisition.",
    icon: "trend",
    intro: "Traffic is only useful when it becomes revenue. We build acquisition and conversion systems that bring the right customers to you and turn them into buyers.",
    items: [
      { name: "SEO", outcome: "Get found by customers actively searching in Rotterdam and beyond, and own the rankings that drive demand." },
      { name: "Conversion Optimization", outcome: "Turn more of your existing traffic into leads and sales often the fastest ROI in your entire funnel." },
      { name: "Lead Generation Systems", outcome: "A reliable pipeline of qualified leads, captured and nurtured automatically instead of by chance." },
    ],
  },
  {
    id: "brainy",
    name: "Brainy AI Solutions",
    tag: "Your digital employee, working 24/7.",
    icon: "spark",
    intro: "Brainy is the intelligent layer that runs the work you'd otherwise hire for sales, support, admin and operations around the clock, at a fraction of the cost.",
    items: [
      { name: "AI Assistants", outcome: "A digital team member that handles routine work across sales, service and operations 24/7." },
      { name: "AI Customer Support", outcome: "Instant, accurate answers that delight customers and cut support load and response times." },
      { name: "AI Lead Qualification", outcome: "Every inbound lead engaged, qualified and routed in seconds so your team only talks to buyers." },
      { name: "AI Knowledge Bases", outcome: "Your company's expertise, searchable in plain language for customers and staff alike." },
      { name: "AI Content Generation", outcome: "On-brand content at scale: pages, emails, descriptions and posts produced in minutes." },
      { name: "Business Process Automation", outcome: "Connect your tools and let the repetitive work run itself, eliminating manual handoffs and errors." },
    ],
  },
];

// ---- Success stories / case studies ----
// Authentic transformation stories. Intentionally qualitative: we describe the
// challenge, strategic thinking and brand/digital transformation rather than
// inventing statistics.
export const caseStudies = [
  {
    slug: "nursitree",
    company: "NursiTree",
    industry: "Urban Greening & Green Infrastructure",
    cardIndustry: "Green Infrastructure",
    cardText: "Giving an innovative urban-greening concept a premium digital home.",
    headline: "A Premium Digital Home for the Future of Urban Trees",
    challenge:
      "Founded in 2024 by urban-tree specialists Tony Hoekstra and Gerbrand van de Weerd, NursiTree (a name that fuses Nursery, City and Tree) introduces a genuinely new idea: a reusable tree bunker that lets trees thrive in dense urban environments while capturing rainwater and cooling city streets. A concept this innovative has to be understood and trusted in seconds by municipalities, urban planners and landscaping partners. NursiTree needed a digital platform that could explain the innovation clearly and present the company with the credibility its mission deserves.",
    solutionIntro:
      "Webmaister designed and developed a modern digital platform that makes an innovative, technical product easy to understand and inspires confidence. The website was built with:",
    solutionPoints: [
      "Clear storytelling for an innovative product",
      "A strong, sustainable brand identity",
      "Mobile-first design",
      "Fast loading performance",
      "SEO-ready architecture",
      "Scalable infrastructure for future growth",
    ],
    outcome:
      "NursiTree now has a digital foundation that matches the ambition of its mission: greener, more climate-resilient cities. The platform explains the tree bunker concept with clarity, communicates its benefits for water management and urban cooling, and positions NursiTree as a credible partner for municipalities and urban planners, ready to grow as the company scales.",
    quote: "Growth starts with credibility. Before you can scale, people need to trust you.",
  },
  {
    slug: "queenly-events",
    company: "Queenly Events",
    industry: "Luxury Events & Wedding Planning",
    cardIndustry: "Luxury Events",
    cardText: "Transforming a boutique event brand into a premium digital experience.",
    headline: "Elevating a Boutique Brand into a Premium Experience",
    challenge:
      "Queenly Events delivered beautiful events but their online presence did not fully communicate the premium quality of their work. Potential clients needed to immediately feel confidence, elegance and professionalism.",
    solutionIntro:
      "Webmaister reimagined the digital experience around luxury, trust and emotion. The new platform focuses on:",
    solutionPoints: [
      "Premium storytelling",
      "Elegant visual presentation",
      "Luxury positioning",
      "Conversion-focused inquiries",
      "Mobile optimization",
      "Strong brand consistency",
    ],
    outcome:
      "Queenly Events now has a digital presence that reflects the quality and sophistication of the experiences they create. The website supports their goal of attracting higher-value clients and strengthening their market position.",
    quote: "Luxury is not about saying you're premium. It's about making people feel it.",
  },
  {
    slug: "yiska-cleaning",
    company: "Yiska Cleaning",
    industry: "Commercial Cleaning Services",
    cardIndustry: "Commercial Services",
    cardText: "Creating a professional online presence designed for long-term growth.",
    headline: "Creating a Professional Brand Built for Growth",
    challenge:
      "Yiska Cleaning wanted to move beyond being seen as just another cleaning company. The company needed a professional online presence capable of building trust with businesses and supporting future expansion.",
    solutionIntro:
      "Webmaister created a modern business platform focused on professionalism, reliability and credibility. The website was designed to:",
    solutionPoints: [
      "Increase trust",
      "Showcase services clearly",
      "Support lead generation",
      "Improve local visibility",
      "Present the company professionally",
    ],
    outcome:
      "Yiska Cleaning now has a stronger digital presence that aligns with its ambition to become a trusted cleaning partner for businesses. The company is positioned to grow with confidence while presenting a more professional image to prospective clients.",
    quote: "Professional companies deserve professional digital foundations.",
  },
];

// ---- FAQ (powers FAQPage schema + Contact/Home copy) ----
export const faqs = [
  {
    q: "Is Webmaister a web design agency?",
    a: "No. Webmaister is a Growth & AI Infrastructure Partner. We build the complete digital foundation that helps businesses grow premium websites, growth and SEO systems, and Brainy AI automation not just websites.",
  },
  {
    q: "What is Brainy?",
    a: "Brainy is the intelligent AI layer behind Webmaister. It works like a digital employee: capturing and qualifying leads, answering customer questions 24/7, booking appointments, generating content, analyzing data and automating administrative work so businesses scale without hiring extra staff.",
  },
  {
    q: "Do you work with businesses in Rotterdam?",
    a: "Yes. Webmaister is based in Rotterdam and works with ambitious businesses across Rotterdam, Zuid-Holland and the wider Netherlands, as well as remotely. We offer local expertise in website design, SEO and AI automation for the Rotterdam market.",
  },
  {
    q: "How is this different from hiring more staff?",
    a: "Instead of adding headcount to handle repetitive work, Brainy automates it 24/7 at a fraction of the cost. Your existing team is freed to focus on high-value work, and your capacity scales without your payroll scaling with it.",
  },
  {
    q: "What does a project look like?",
    a: "We follow a simple four-step framework: Discover (map your funnel and bottlenecks), Build (a premium, fast digital foundation), Automate (deploy Brainy on the repetitive work), and Scale (optimize with real data so results compound).",
  },
  {
    q: "How do we get started?",
    a: "Book a free Growth Strategy Call. We'll review your current setup, identify the highest-leverage opportunities and outline a clear plan to attract more customers, automate work and grow.",
  },
];

// ---- Solutions-page FAQ (answer-first, powers a second FAQPage) ----
export const solutionsFaqs = [
  {
    q: "What does a premium website include?",
    a: "A premium website from Webmaister is a fast, mobile-first, conversion-focused platform with clear positioning, strong branding, SEO-ready architecture and the structure to grow with your business. It is built to win trust in seconds and turn visitors into qualified leads, not just to look good.",
  },
  {
    q: "Is Brainy a chatbot?",
    a: "No. Brainy is an AI layer that works like a digital employee: it captures and qualifies leads, answers customer questions 24/7, books appointments and follow-ups, generates content and automates administrative work. The goal is to remove repetitive work so your team can focus on growth, not to bolt a chatbot onto your site.",
  },
  {
    q: "How long does a project take?",
    a: "A focused website typically takes a few weeks; growth systems and AI automation are then layered on in stages. We start with the highest-leverage work first so you see value early, then build out from there. Exact timing depends on scope, which we map in the first strategy call.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need: a website, growth and SEO systems, AI automation, or a combination. We scope each project to your goals and budget and give you a clear quote up front. The fastest way to a price is a free Growth Strategy Call, where we map the work and the expected return.",
  },
  {
    q: "Do you only work with businesses in Rotterdam?",
    a: "Webmaister is based in Rotterdam and knows the local market, but we work with ambitious businesses across Zuid-Holland, the wider Netherlands and remotely. The same approach applies wherever you are.",
  },
  {
    q: "Can you improve our existing website instead of rebuilding it?",
    a: "Often, yes. We can redesign or optimize an existing site, add growth and SEO systems, or connect AI automation to what you already have. We start with where you want to go and recommend the smallest change that gets you there.",
  },
];

// ---- Dutch local landing pages (hybrid i18n: English site + NL pages for
// local commercial keywords). Rendered by src/pages/nl/[slug].astro in nl. ----
export const nlLandings = [
  {
    slug: "website-laten-maken-rotterdam",
    keyword: "Website laten maken Rotterdam",
    title: "Website laten maken in Rotterdam · Premium webdesign",
    description:
      "Website laten maken in Rotterdam? Webmaister bouwt premium, razendsnelle en conversiegerichte websites die vertrouwen wekken en klanten opleveren. Plan een gratis strategiegesprek.",
    h1: "Website laten maken in Rotterdam",
    lead:
      "Een premium, razendsnelle website die in seconden vertrouwen wekt en bezoekers omzet in klanten.",
    intro: [
      "Een website is je hardst werkende verkoper. Toch is een mooie website alleen niet genoeg: hij moet snel zijn, vertrouwen wekken en bezoekers omzetten in aanvragen. Daar bouwen wij voor.",
      "Webmaister ontwerpt en bouwt premium websites voor ambitieuze ondernemers in Rotterdam en omgeving. We beginnen niet bij het ontwerp, maar bij waar jouw bedrijf naartoe wil, en bouwen daar de digitale fundering omheen.",
    ],
    includesTitle: "Wat je krijgt",
    includes: [
      "Maatwerk design dat past bij jouw merk",
      "Mobiel-first en razendsnel (sterke Core Web Vitals)",
      "Conversiegericht: duidelijke route naar de aanvraag",
      "SEO-klaar opgebouwd voor vindbaarheid in Rotterdam",
      "Schaalbaar, zodat de site met je meegroeit",
      "Optioneel: onderhoud, SEO en AI-automatisering",
    ],
    faq: [
      { q: "Wat kost een website laten maken in Rotterdam?", a: "Dat hangt af van de omvang en je doelen. We stellen elk project samen op maat en geven vooraf een heldere offerte. De snelste manier naar een prijs is een gratis strategiegesprek, waarin we de scope en de verwachte opbrengst in kaart brengen." },
      { q: "Hoe lang duurt het om een website te bouwen?", a: "Een gerichte website staat doorgaans binnen enkele weken live. We starten met het meest waardevolle werk eerst, zodat je snel resultaat ziet, en bouwen daarna verder uit." },
      { q: "Kunnen jullie mijn bestaande website verbeteren?", a: "Vaak wel. We kunnen een bestaande site herontwerpen of optimaliseren, groei- en SEO-systemen toevoegen of AI-automatisering koppelen aan wat je al hebt." },
    ],
  },
  {
    slug: "seo-rotterdam",
    keyword: "SEO Rotterdam",
    title: "SEO Rotterdam · Hoger in Google met een groeisysteem",
    description:
      "SEO in Rotterdam waarmee klanten je vinden die actief zoeken. Webmaister bouwt een SEO- en conversiesysteem dat verkeer omzet in aanvragen. Plan een gratis gesprek.",
    h1: "SEO in Rotterdam",
    lead:
      "Word gevonden door klanten die nú zoeken, en zet dat verkeer om in aanvragen.",
    intro: [
      "Online zichtbaar zijn is niet hetzelfde als gevonden worden. Met de juiste SEO komen de mensen die actief zoeken in Rotterdam en omgeving bij jou terecht, en niet bij de concurrent.",
      "Webmaister bouwt SEO niet als losse trucjes, maar als een groeisysteem: technische basis, sterke content en conversie-optimalisatie die samen voor een voorspelbare stroom aanvragen zorgen.",
    ],
    includesTitle: "Onze aanpak",
    includes: [
      "Technische SEO: snelheid, structuur en indexatie",
      "Lokale SEO gericht op Rotterdam en Zuid-Holland",
      "Content die antwoord geeft op echte klantvragen",
      "Conversie-optimalisatie: meer aanvragen uit hetzelfde verkeer",
      "Heldere rapportage op wat telt: leads en omzet",
    ],
    faq: [
      { q: "Hoe snel zie ik resultaat met SEO?", a: "SEO is een investering die opbouwt. De eerste verbeteringen (techniek, conversie) merk je vaak snel; sterke organische posities groeien doorgaans over enkele maanden. We starten met de hoogste impact eerst." },
      { q: "Werken jullie alleen voor bedrijven in Rotterdam?", a: "We zitten in Rotterdam en kennen de lokale markt, maar werken met ambitieuze bedrijven in heel Zuid-Holland, de rest van Nederland en op afstand." },
      { q: "Wat kost SEO?", a: "Dat hangt af van je situatie en doelen. We scopen het werk op jouw budget en geven vooraf een duidelijke offerte. Plan een gratis gesprek voor een concreet voorstel." },
    ],
  },
  {
    slug: "ai-automatisering-rotterdam",
    keyword: "AI Automatisering Rotterdam",
    title: "AI Automatisering Rotterdam · Je digitale medewerker",
    description:
      "AI-automatisering voor bedrijven in Rotterdam. Brainy werkt als een digitale medewerker: leads kwalificeren, 24/7 vragen beantwoorden en administratie automatiseren. Plan een gesprek.",
    h1: "AI-automatisering in Rotterdam",
    lead:
      "Laat repetitief werk over aan Brainy, je digitale medewerker die 24/7 doorwerkt.",
    intro: [
      "Groeien hoeft niet te betekenen dat je meer mensen aanneemt. Met AI-automatisering laat je het terugkerende werk over aan een systeem dat dag en nacht doorwerkt, tegen een fractie van de kosten.",
      "Brainy is de intelligente laag achter Webmaister. Geen chatbot, maar een digitale medewerker die leads opvangt en kwalificeert, klantvragen 24/7 beantwoordt, afspraken inplant en administratie automatiseert, zodat jouw team zich op groei kan richten.",
    ],
    includesTitle: "Wat Brainy doet",
    includes: [
      "Leads opvangen en kwalificeren, automatisch",
      "24/7 klantvragen beantwoorden uit je eigen kennisbank",
      "Afspraken en opvolging inplannen",
      "Administratief werk en handmatige taken automatiseren",
      "Opschalen zonder dat je personeelskosten meegroeien",
    ],
    faq: [
      { q: "Is Brainy een chatbot?", a: "Nee. Brainy werkt als een digitale medewerker: leads kwalificeren, 24/7 vragen beantwoorden, afspraken inplannen en administratie automatiseren. Het doel is repetitief werk weghalen, niet een chatbot op je site plakken." },
      { q: "Waarmee kan ik beginnen?", a: "We beginnen met de ene taak die de meeste tijd of de meeste leads kost, bewijzen de waarde, en breiden daarna uit. Kleine, opeenstapelende winst werkt beter dan één grote risicovolle ingreep." },
      { q: "Werkt dit ook voor mijn type bedrijf?", a: "AI-automatisering is breed toepasbaar, van dienstverleners tot e-commerce. In een gratis gesprek kijken we welke taken bij jou het meeste opleveren." },
    ],
  },
];
