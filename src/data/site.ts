// =========================================================================
// Webmaister central content & metadata source.
// One place for NAP, services, case studies and FAQ so that page copy and
// structured data (JSON-LD) never drift apart.
// =========================================================================

// Public street address. Single source for visible NAP and PostalAddress.
// Kept on the site and in schema, next to areaServed.
export const businessAddress = {
  streetAddress: "Galvanistraat 1965",
  postalCode: "3029 AD",
  addressLocality: "Rotterdam",
  addressRegion: "Zuid-Holland",
  addressCountry: "NL",
} as const;

// Stable @ids. The site canonical host is www; these ids are the entity keys.
export const schemaIds = {
  organization: "https://www.webmaister.io/#organization",
  founder: "https://www.webmaister.io/#junalda",
  website: "https://www.webmaister.io/#website",
} as const;

// One core sentence, used verbatim in the hero subline, meta descriptions,
// About, llms.txt and the schema description.
export const core = {
  nl: "Webmaister is een webbureau in Rotterdam dat websites bouwt die gevonden worden op Google én in AI-assistenten zoals ChatGPT, voor ondernemers en MKB.",
  en: "Webmaister is a Rotterdam web agency building websites that get found on Google and in AI assistants like ChatGPT, for entrepreneurs and SMEs.",
} as const;

export const site = {
  name: "Webmaister",
  legalName: "JM IT Solutions",
  alternateName: "Webmaister.io",
  tagline: "Webbureau in Rotterdam",
  url: "https://www.webmaister.io",
  email: "hello@webmaister.io",
  phone: "+31 6 43187444",
  phoneHref: "+31643187444",
  whatsapp: "+31 6 43187444",
  whatsappHref: "31643187444", // wa.me format: country code + number, no + or leading 0
  kvk: "87478889",
  streetAddress: businessAddress.streetAddress,
  postalCode: businessAddress.postalCode,
  city: businessAddress.addressLocality,
  region: businessAddress.addressRegion,
  country: businessAddress.addressCountry,
  areaServed: ["Rotterdam", "Zuid-Holland", "Nederland"],
  founder: "Junalda Meiland",
  founded: "2022",
  foundingDate: "2022-09-01",
  deliveryTime: "One-Pager binnen 7 dagen",
  // Geo-coördinaten van Galvanistraat 1965, 3029 AD Rotterdam.
  geo: { lat: "51.911964", lng: "4.430999" },
  description: core.en,
  descriptionNL: core.nl,
  social: {
    linkedin: "https://www.linkedin.com/company/112275381/",
    instagram: "https://www.instagram.com/webmaister.io",
    founderLinkedin: "https://www.linkedin.com/in/junalda-m-n-meiland",
  },
};

// Packages shown on /start. Partnership has no public price.
export const packages = [
  {
    id: "one-pager",
    name: "One-Pager",
    setup: 500,
    monthly: 150,
    description: "A professional one-page website, live within 7 days. €500 setup + €150 per month.",
    descriptionNL: "Een professionele website van één pagina, live binnen 7 dagen. €500 setup + €150 per maand.",
  },
  {
    id: "growth-essentials",
    name: "Growth Essentials",
    setup: 2700,
    monthly: 300,
    description: "Get found on Google and AI and turn visitors into customers. €2,700 setup + €300 per month, with a 6-month results guarantee on the setup.",
    descriptionNL: "Gevonden worden op Google en in AI, en bezoekers omzetten in klanten. €2.700 setup + €300 per maand, met een resultaten-garantie van 6 maanden op de setup.",
  },
  {
    id: "growth-partnership",
    name: "Growth Partnership",
    description: "A done-for-you growth partnership. Price on request. Minimum 6 months.",
    descriptionNL: "Een done-for-you groeipartnerschap. Prijs op aanvraag. Minimaal 6 maanden.",
  },
] as const;

export const nav = [
  { label: "Services", href: "/solutions/" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Work", href: "/success-stories/" },
  { label: "About", href: "/about/" },
];

// ---- Bilingual navigation (NL default at /, EN under /en/). ----
export const navNL = [
  { label: "Diensten", href: "/diensten/" },
  { label: "Cases", href: "/cases/" },
  { label: "Gids", href: "/gids/" },
  { label: "Over ons", href: "/over-ons/" },
  { label: "Contact", href: "/contact/" },
];
export const navEN = [
  { label: "Services", href: "/en/solutions/" },
  { label: "Work", href: "/en/work/" },
  { label: "About", href: "/en/about/" },
  { label: "Contact", href: "/en/contact/" },
];
export const ctaNL = { label: "Plan een gesprek", href: "/contact/" };
export const ctaEN = { label: "Let's Talk Growth", href: "/en/contact/" };

export const ctaPrimary = { label: "Let's Talk Growth", href: "/contact/" };
export const ctaSecondary = { label: "Explore Our Services", href: "/solutions/" };

// Testimonials. Quotes are placeholders until the client confirms the exact
// wording; the Testimonials component only renders entries with confirmed:true,
// so no self-written or unconfirmed quote is ever shown (and no Review schema).
export const testimonials = [
  { name: "Tony Hoekstra & Gerbrand van de Weerd", role: "Oprichters", company: "NursiTree", caseSlug: "nursitree", quote: "[INVULLEN: echte, bevestigde quote van Tony Hoekstra of Gerbrand van de Weerd]", confirmed: false },
  { name: "Esther Macnack", role: "Oprichter", company: "Queenly Events", caseSlug: "queenly-events", quote: "[INVULLEN: echte, bevestigde quote van Esther Macnack]", confirmed: false },
  { name: "Gabriel Snijders", role: "Oprichter", company: "Capture the Moment Solutions", caseSlug: "capture-the-moment-solutions", quote: "[INVULLEN: echte, bevestigde quote van Gabriel Snijders]", confirmed: false },
  { name: "Esther Macnack", role: "Oprichter", company: "Hope & Love Foundation", caseSlug: "hope-love-foundation", quote: "[INVULLEN: echte, bevestigde quote van Esther Macnack]", confirmed: false },
];

// ---- The three pillars (ecosystem) ----
export const pillars = [
  {
    id: "digital-presence",
    name: "Digital Presence",
    short: "Premium websites that build trust and get you found.",
    icon: "globe",
    outcome: "A fast, custom site customers trust in seconds, built to be found on Google and in AI assistants.",
  },
  {
    id: "growth-systems",
    name: "Findability",
    short: "Get found on Google and AI.",
    icon: "trend",
    outcome: "SEO and AI-search visibility, so the right people find you on Google and in assistants like ChatGPT.",
  },
  {
    id: "brainy",
    name: "Brainy AI & Automation",
    short: "AI that handles support, bookings, follow-ups and admin.",
    icon: "spark",
    outcome: "A digital employee for support, bookings, follow-ups and admin, so repetitive work does not wait on your team.",
  },
];

// ---- The modern business problem ----
export const problems = [
  { title: "Customers can't find you", text: "The site may look fine, but it does not show up on Google or in AI answers." },
  { title: "Processes are still manual", text: "Support, follow-ups and admin eat the hours that should go into the business." },
  { title: "Customers wait too long", text: "Slow replies cost trust while someone else answers first." },
  { title: "Teams waste time on repetitive work", text: "Skilled people stuck doing copy-paste tasks a system should handle." },
  { title: "The website and the findability are separate", text: "A new site that nobody can find does not change how customers reach you." },
];

// ---- Growth framework ----
export const framework = [
  { step: "01", name: "Discover", text: "We start from where the business wants to go, then decide what the website, findability and automation need to do." },
  { step: "02", name: "Build", text: "We design and build a fast, custom, code-based site with a clear path to contact." },
  { step: "03", name: "Automate", text: "Brainy takes over repetitive work: support, bookings, follow-ups and admin, 24/7." },
  { step: "04", name: "Stay found", text: "Monthly maintenance and findability work keep the site fast, current and visible on Google and in AI answers." },
];

// ---- What Brainy does ----
export const brainyCapabilities = [
  { title: "Customer support", text: "Answers questions from your own information, day or night, so people are not left waiting." },
  { title: "Bookings", text: "Schedules appointments and sends reminders." },
  { title: "Follow-ups", text: "Keeps the next step moving after a conversation, so requests do not sit still." },
  { title: "Admin", text: "Handles repetitive back-office tasks so your team reclaims hours every week." },
];

// ---- Solutions catalogue ----
export const solutionGroups = [
  {
    id: "digital-presence",
    name: "Digital Presence",
    tag: "Build trust. Get found.",
    icon: "globe",
    intro: "A premium website is the foundation people judge in seconds. We build fast, custom sites that load quickly, explain the business clearly and can be found on Google and in AI assistants.",
    items: [
      { name: "Premium Website Design", outcome: "Win trust in seconds and convert more visitors with a fast, elegant site engineered around your customer's journey." },
      { name: "Website Redesign", outcome: "Modernize an outdated site into a credibility and conversion engine without losing your existing SEO." },
      { name: "Website Maintenance", outcome: "Stay fast, secure and up to date with proactive care, so your site never costs you a customer." },
    ],
  },
  {
    id: "growth-systems",
    name: "Growth Systems",
    tag: "Get found on Google and AI.",
    icon: "trend",
    intro: "Being online is not the same as being found. We work on Google visibility and on being understandable to AI assistants such as ChatGPT and Google AI Overviews.",
    items: [
      { name: "SEO", outcome: "Get found by people actively searching in Rotterdam and beyond, with a fast site and clear pages." },
      { name: "AI search visibility", outcome: "Make who you are, what you do and who it is for explicit, so AI assistants can cite the site when it fits the question." },
      { name: "Monthly findability", outcome: "Included with Growth Essentials: visibility on Google and in AI, reviewed and improved every month." },
    ],
  },
  {
    id: "brainy",
    name: "Brainy AI Solutions",
    tag: "Your digital employee, working 24/7.",
    icon: "spark",
    intro: "Brainy is the automation layer for support, bookings, follow-ups and admin. It is not a chatbot. It takes repetitive work off the team, around the clock.",
    items: [
      { name: "AI Customer Support", outcome: "Answers customer questions from your own information, including outside office hours." },
      { name: "Bookings", outcome: "Schedules appointments and sends reminders so a request can move to a conversation." },
      { name: "Follow-ups", outcome: "Keeps the next step moving after a question or a booking." },
      { name: "Admin automation", outcome: "Handles repetitive back-office tasks so the team spends time on the work that needs a person." },
    ],
  },
];

// ---- Success stories / case studies ----
// Authentic transformation stories. Intentionally qualitative: we describe the
// challenge, strategic thinking and brand/digital transformation rather than
// inventing statistics.
type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  cardIndustry: string;
  cardText: string;
  headline: string;
  challenge: string;
  solutionIntro: string;
  solutionPoints: string[];
  outcome: string;
  quote?: string;
  website?: { label: string; href: string };
  founders?: { name: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
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
    website: { label: "nursitree.com", href: "https://nursitree.com" },
    founders: [
      { name: "Tony Hoekstra", href: "https://www.linkedin.com/in/tonyhoekstra/" },
      { name: "Gerbrand van de Weerd", href: "https://www.linkedin.com/in/gerbrand-van-de-weerd/" },
    ],
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
    website: { label: "queenlyevents.nl", href: "https://queenlyevents.nl" },
    founders: [
      { name: "Esther Macnack", href: "https://www.linkedin.com/in/esther-macnack-1a0332296/" },
    ],
  },
  {
    slug: "capture-the-moment-solutions",
    company: "Capture the Moment Solutions",
    industry: "Visual Storytelling & Content Creation",
    cardIndustry: "Visual Storytelling",
    cardText: "Turning a creative vision into a strategic visual storytelling platform.",
    headline: "A Premium Digital Platform for Strategic Visual Storytelling",
    challenge:
      "Founded by Gabriel, Capture the Moment Solutions had a strong creative vision and real talent for visual storytelling, but the offer lived mostly in a portfolio rather than in a structured online platform. The services spanned real estate photography and videography, personal branding and broader business content creation, so the website had to present multiple offers with clarity instead of overwhelming visitors. The real challenge was positioning: Capture the Moment Solutions needed to be seen as a premium storytelling partner that builds trust and long-term brand growth, not just another photographer or videographer for hire.",
    solutionIntro:
      "Webmaister turned Gabriel's creative vision into a clear, premium platform with structure, positioning and conversion logic. The website was designed and developed with:",
    solutionPoints: [
      "Clear positioning for multiple services",
      "A premium visual storytelling identity",
      "Dedicated pages for real estate and content creation",
      "Portfolio structure for photography and video work",
      "Mobile-first design",
      "SEO-ready architecture",
      "Conversion-focused calls to action",
      "Google Business Profile support",
      "Scalable structure for future growth",
    ],
    outcome:
      "Capture the Moment Solutions now has a professional digital foundation that clearly presents Gabriel's services, story, process and portfolio. Visitors immediately understand the value of his work, and the platform gives them a clear way to get in touch, ready to grow as the business grows.",
    quote: "Trust starts before the first conversation. A strong digital foundation makes your work easier to believe, understand and buy.",
    website: { label: "capturethemomentsolutions.nl", href: "https://capturethemomentsolutions.nl" },
    founders: [
      { name: "Gabriel Snijders", href: "https://www.linkedin.com/in/gabriel-snijders-2956461bb/" },
    ],
  },
  {
    slug: "hope-love-foundation",
    company: "Hope & Love Foundation",
    industry: "Nonprofit & Children's Foundation",
    cardIndustry: "Nonprofit",
    cardText: "Giving a children's foundation a digital home as warm and hopeful as its mission.",
    headline: "A Digital Home Built on Hope and Trust",
    challenge:
      "Founded by Esther Macnack, Hope & Love Foundation exists to help children growing up in poverty, broken families and hard circumstances discover who they are, what they are worth, and that they belong. A mission this personal has to be felt in seconds, not just read. The foundation needed a digital home that could carry the warmth and hope of its work, explain its programs with clarity, and give donors, partners and families the confidence to get involved.",
    solutionIntro:
      "Webmaister designed and developed a warm, trustworthy platform that turns a deeply human mission into a clear, moving experience. The website was built with:",
    solutionPoints: [
      "A warm, emotive brand identity",
      "Clear storytelling of the mission and programs",
      "A donation-ready structure that invites giving",
      "Mobile-first design",
      "SEO-ready architecture",
      "A scalable base for campaigns and mission trips",
    ],
    outcome:
      "Hope & Love Foundation now has a digital home that feels as warm and hopeful as its mission. The platform makes the impact easy to understand, presents its programs and values with clarity, and gives donors and partners the confidence to support the work, ready to grow with every new campaign and mission trip.",
    quote: "People give to a mission they can feel. Clarity and warmth turn belief into support.",
    website: { label: "hopelovefoundation.nl", href: "https://hopelovefoundation.nl" },
    founders: [
      { name: "Esther Macnack", href: "https://www.linkedin.com/in/esther-macnack-1a0332296/" },
    ],
  },
];

// ---- Instagram self-segmentation landing page (/start/) + subpages
// (/start/[slug]/). Visitors pick the buyer type that fits them. ----
export const startOptions = [
  {
    slug: "website",
    choice: "I need a website",
    service: "One-Pager",
    priceLine: "€500 setup + €150/mo",
    benefit: "A professional site for your business, live within 7 days.",
    cta: "Get my website",
    title: "One-Pager: live in 7 days | Webmaister",
    description:
      "A professional site for your business, live within 7 days. €500 setup + €150/month.",
    price: "€500",
    priceNote: "setup + €150/month",
    lead: "A professional site for your business, live within 7 days.",
    forText:
      "For entrepreneurs who need a professional, simple website without a large upfront investment.",
    problem:
      "You don't have a proper website yet, or your current one holds you back. You need to look credible online without committing to a big project.",
    includes: [
      "A focused one-page website",
      "Mobile-first, fast-loading design",
      "Your story, services and contact in one clear flow",
      "A clear call-to-action",
      "SEO-ready foundations",
      "Ongoing maintenance",
      "Live within 7 days",
    ],
  },
  {
    slug: "upgrade",
    choice: "I need more customers",
    service: "Growth packages",
    priceLine:
      "Growth Essentials €2,700 setup + €300/mo · Growth Partnership · Price on request",
    benefit:
      "A website built to get you found on Google and AI and turn visitors into customers, with a 6-month results guarantee.",
    cta: "See growth packages",
    title: "Growth packages: get found on Google and AI | Webmaister",
    description:
      "Growth Essentials is €2,700 setup + €300/month, with a 6-month results guarantee. Growth Partnership is price on request.",
    lead: "A website built to get you found on Google and AI and turn visitors into customers, with a 6-month results guarantee.",
    forText:
      "For established businesses that want to be found on Google and AI, and turn that attention into customers.",
    problem:
      "The right customers can't find you on Google or in AI answers, and too few of the people who do visit become customers.",
    priceHeadline: "€2,700",
    priceHeadlineNote:
      "Growth Essentials setup + €300/mo · Growth Partnership · Price on request",
    packages: [
      {
        name: "Growth Essentials",
        tagline: "Get found, and turn visitors into customers.",
        price: "€300",
        priceNote: "per month",
        setup: "€2,700 one-time setup",
        terms: "Month-to-month after setup",
        forWho:
          "A lower-cost way to get your website found on Google and AI and keep it improving every month.",
        includes: [
          "Google and AI search visibility",
          "Monthly funnel and conversion optimization",
          "Positioning and offer feedback",
          "Performance tracking and reporting",
        ],
        cta: "Start with Essentials",
      },
      {
        name: "Growth Partnership",
        tagline: "A done-for-you growth partnership.",
        price: "Price on request",
        terms: "Minimum 6 months",
        popular: true,
        forWho: "The full system, built and run for you until the right customers come in predictably.",
        setupIncludes:
          "We build the system once: positioning, offer, funnel, campaigns and automation, set up and ready to bring in customers.",
        includesLabel: "Everything in Essentials, plus:",
        includes: [
          "A dedicated growth strategist",
          "Active campaign management",
          "Full business and growth strategy",
          "Sales funnel optimization",
          "Recurring revenue opportunities",
          "Performance reviews and strategic guidance",
        ],
        cta: "Ask about Partnership",
      },
    ],
    guarantee: {
      title: "6-month results guarantee",
      text: "The Growth Essentials €2,700 setup is protected. We agree on clear, measurable goals before we start. If we don't deliver them within six months, you get your €2,700 setup fee back, based on the goals we document together. That's how sure we are it works.",
    },
    note: "The 6-month results guarantee applies to the Growth Essentials €2,700 setup. Growth Partnership is price on request. Advertising budgets and third-party tools are not automatically included.",
  },
  {
    slug: "strategy-session",
    choice: "I need a business strategy",
    service: "Business Strategy Session",
    priceLine: "€350 one-time",
    benefit: "Get clarity on your next move before investing in growth.",
    cta: "Book a strategy session",
    title: "Strategy session: get clarity | Webmaister",
    description:
      "A focused strategic session to get clarity on your next move before you invest in growth. €350 one-time. Book a session.",
    price: "€350",
    priceNote: "one-time",
    lead: "A focused strategic session to get clarity on your next move before you invest in growth.",
    forText:
      "For entrepreneurs who need professional guidance on positioning, business models, finding customers or growth opportunities.",
    problem:
      "You're not sure where to invest next, and you want an expert perspective before committing time and budget.",
    includes: [
      "A focused strategic consultation",
      "Analysis of current business challenges",
      "Identification of growth opportunities",
      "Practical recommendations and next steps",
    ],
    note: "This is a standalone advisory session, not an ongoing service.",
  },
  {
    slug: "not-sure",
    choice: "I'm not sure what I need",
    service: "Let's figure it out together",
    priceLine: "",
    benefit: "Tell us where your business stands, and we'll point you to the right next step.",
    cta: "Help me choose",
    title: "Not sure what you need? Let's figure it out | Webmaister",
    description:
      "Tell us where your business stands, and we'll point you to the right next step. A short, no-pressure conversation.",
    lead: "Tell us where your business stands, and we'll point you to the right next step.",
    forText:
      "For anyone who knows they want to grow but isn't sure which service fits best.",
    problem:
      "You know your business could do better online, but you're not sure whether you need a website, a strategy session, or a growth partnership.",
    includes: [
      "A short, no-pressure conversation",
      "We look at where your business stands",
      "We point you to the right next step",
    ],
  },
];

// ---- FAQ on the homepage, /diensten and /en/solutions. Standalone answers. ----
export const faqs = [
  {
    q: "What does a website from Webmaister cost?",
    a: "A One-Pager is €500 setup plus €150 per month, and it goes live within 7 days. Growth Essentials is €2,700 setup plus €300 per month, with a 6-month results guarantee on the setup: we agree measurable goals first, and if we do not deliver them within six months you get the €2,700 setup fee back, based on the goals we document together. Growth Partnership is price on request, and we do not publish a fixed fee for it.",
  },
  {
    q: "How fast is my site live?",
    a: "A One-Pager is live within 7 days. Growth Essentials and Growth Partnership take longer because the scope is larger, and we agree the timing before we start. We do not quote one delivery time for every package.",
  },
  {
    q: "What's included in the monthly fee?",
    a: "The One-Pager monthly fee of €150 covers ongoing maintenance. The Growth Essentials monthly fee of €300 covers Google and AI search visibility, monthly funnel and conversion optimization, positioning and offer feedback, and performance tracking and reporting. Growth Partnership is scoped on request, with a minimum of 6 months.",
  },
  {
    q: "What does being found in AI (ChatGPT, Google AI Overviews) mean?",
    a: "People ask ChatGPT, Google AI Overviews and similar assistants for a short answer, not only a list of links. Being found means the assistant can mention your business when the question matches what you do. That depends on a site that states who you are, what you do, who it is for and where you work. It is not an ad placement, and no one can promise that an assistant will name you every time.",
  },
  {
    q: "How do you make sure my site appears in AI answers?",
    a: "We write, in plain language and in schema.org structured data, who the business is, what it offers and where it works. The site is fast, custom and code-based, and the pages answer real customer questions. The same clarity helps on Google. We do not guarantee that ChatGPT or Google AI Overviews will cite the site. We make the facts easy for those systems to read.",
  },
  {
    q: "How are the websites built?",
    a: "We build custom, fast, code-based websites, without a theme and plugin stack. That keeps the site light, and we maintain the code ourselves.",
  },
  {
    q: "Who is Webmaister for, and do you only work in Rotterdam?",
    a: "Webmaister is for entrepreneurs and SMEs who want a website that gets found on Google and in AI assistants like ChatGPT. We are based in Rotterdam and work across Rotterdam, Zuid-Holland and the rest of the Netherlands, including remotely. You do not have to be based in Rotterdam.",
  },
  {
    q: "Who is behind Webmaister?",
    a: "Junalda Meiland is the founder. She has 10+ years in technology, a background in software development and IT project management, and she has been an entrepreneur since 2016. She is based in Rotterdam. Her approach is to start from where the business wants to go, then build the website, the findability and the automation.",
  },
  {
    q: "What is the difference between One-Pager, Growth Essentials and Growth Partnership?",
    a: "The One-Pager is one professional page, live within 7 days, at €500 setup and €150 per month. Growth Essentials is the larger build for getting found on Google and in AI and turning visitors into customers, at €2,700 setup and €300 per month, with a 6-month results guarantee on that setup. Growth Partnership is a done-for-you partnership. The price is on request and the minimum term is 6 months.",
  },
];

export const faqsNL = [
  {
    q: "Wat kost een website van Webmaister?",
    a: "Een One-Pager kost €500 setup plus €150 per maand en staat binnen 7 dagen live. Growth Essentials kost €2.700 setup plus €300 per maand, met een resultaten-garantie van 6 maanden op die setup: we spreken meetbare doelen af, en halen we die niet binnen zes maanden, dan krijg je de setup van €2.700 terug, op basis van de doelen die we samen vastleggen. Growth Partnership is op aanvraag, en daar publiceren we geen vast bedrag voor.",
  },
  {
    q: "Hoe snel staat mijn site live?",
    a: "Een One-Pager staat binnen 7 dagen live. Growth Essentials en Growth Partnership duren langer, omdat de omvang groter is, en die doorlooptijd spreken we vooraf af. We noemen niet één levertijd voor elk pakket.",
  },
  {
    q: "Wat zit er in het maandbedrag?",
    a: "Het maandbedrag van €150 bij een One-Pager is doorlopend onderhoud. Het maandbedrag van €300 bij Growth Essentials dekt vindbaarheid op Google en in AI, maandelijkse funnel- en conversieoptimalisatie, feedback op positionering en aanbod, en het bijhouden en rapporteren van prestaties. Growth Partnership stemmen we af op aanvraag, met een minimum van 6 maanden.",
  },
  {
    q: "Wat betekent gevonden worden in AI (ChatGPT, Google AI Overviews)?",
    a: "Mensen stellen een vraag aan ChatGPT, Google AI Overviews en vergelijkbare assistenten en krijgen een kort antwoord, niet alleen een lijst links. Gevonden worden betekent dat zo'n assistent je bedrijf kan noemen als de vraag past bij wat je doet. Dat vraagt een site die duidelijk maakt wie je bent, wat je doet, voor wie en waar. Het is geen advertentieplek, en niemand kan beloven dat een assistent je elke keer noemt.",
  },
  {
    q: "Hoe zorgen jullie dat mijn site in AI-antwoorden verschijnt?",
    a: "We schrijven in gewone taal en in structured data (schema.org) wie het bedrijf is, wat het aanbiedt en waar het werkt. De site is snel, op maat en in code gebouwd, en de pagina's beantwoorden echte klantvragen. Dezelfde duidelijkheid helpt in Google. We garanderen niet dat ChatGPT of Google AI Overviews de site citeren. We maken de feiten wel makkelijk leesbaar voor die systemen.",
  },
  {
    q: "Hoe bouwen jullie de websites?",
    a: "We bouwen maatwerk websites in code: snel, zonder een thema- en pluginlaag. Daardoor blijft de site licht, en we onderhouden de code zelf.",
  },
  {
    q: "Voor wie is Webmaister, en werken jullie alleen in Rotterdam?",
    a: "Webmaister is voor ondernemers en het MKB die een website willen die gevonden wordt op Google en in AI-assistenten zoals ChatGPT. We zitten in Rotterdam en werken in Rotterdam, Zuid-Holland en de rest van Nederland, ook op afstand. Je hoeft niet in Rotterdam gevestigd te zijn.",
  },
  {
    q: "Wie zit er achter Webmaister?",
    a: "Junalda Meiland is de oprichter. Ze heeft meer dan 10 jaar ervaring in technologie, een achtergrond in softwareontwikkeling en IT-projectmanagement, en is ondernemer sinds 2016. Ze werkt vanuit Rotterdam. Haar aanpak: eerst kijken waar het bedrijf naartoe wil, en daarna de website, de vindbaarheid en de automatisering bouwen.",
  },
  {
    q: "Wat is het verschil tussen One-Pager, Growth Essentials en Growth Partnership?",
    a: "De One-Pager is één professionele pagina, live binnen 7 dagen, voor €500 setup en €150 per maand. Growth Essentials is het grotere traject om gevonden te worden op Google en in AI en bezoekers om te zetten in klanten, voor €2.700 setup en €300 per maand, met een resultaten-garantie van 6 maanden op die setup. Growth Partnership is een done-for-you partnerschap. De prijs is op aanvraag en de minimale looptijd is 6 maanden.",
  },
];

// Same questions on the English services page.
export const solutionsFaqs = faqs;

// Visible FAQ on /start, and the FAQPage JSON-LD for that URL. Same packages
// and positioning as the rest of the site.
export const startPageFaqs = [
  {
    q: "What does a website from Webmaister cost?",
    a: "A One-Pager is €500 setup plus €150 per month, and it goes live within 7 days. Growth Essentials is €2,700 setup plus €300 per month, with a 6-month results guarantee on the setup: we agree measurable goals first, and if we do not deliver them within six months you get the €2,700 setup fee back, based on the goals we document together. Growth Partnership is price on request. We do not publish a fixed fee for it.",
  },
  {
    q: "How fast is my site live?",
    a: "A One-Pager is live within 7 days. Growth Essentials and Growth Partnership take longer because the scope is larger, and we agree the timing before we start.",
  },
  {
    q: "What is included in the monthly fee?",
    a: "The One-Pager monthly fee of €150 covers ongoing maintenance. The Growth Essentials monthly fee of €300 covers being found on Google and in AI, monthly funnel and conversion work, feedback on positioning and offer, and performance tracking. Growth Partnership is scoped on request, with a minimum of 6 months.",
  },
  {
    q: "What does being found on Google and in AI mean?",
    a: "People search Google and they also ask assistants such as ChatGPT and Google AI Overviews. Being found means the right people can reach your business in both places. That depends on a fast site that states who you are, what you do, who it is for and where you work. No one can promise that an assistant will name you every time.",
  },
  {
    q: "What is the difference between One-Pager, Growth Essentials and Growth Partnership?",
    a: "The One-Pager is one professional page, live within 7 days, at €500 setup and €150 per month. Growth Essentials is the larger build for getting found on Google and in AI and turning visitors into customers, at €2,700 setup and €300 per month, with a 6-month results guarantee on that setup. Growth Partnership is a done-for-you partnership. The price is on request and the minimum term is 6 months.",
  },
  {
    q: "Who is Webmaister for?",
    a: "Webmaister is for entrepreneurs and SMEs who want a website that gets found on Google and in AI assistants like ChatGPT. We are based in Rotterdam and work across Rotterdam, Zuid-Holland and the rest of the Netherlands, including remotely.",
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
      "AI-automatisering voor bedrijven in Rotterdam. Brainy werkt als een digitale medewerker: ondersteuning, afspraken, opvolging en administratie. Plan een gesprek.",
    h1: "AI-automatisering in Rotterdam",
    lead:
      "Laat repetitief werk over aan Brainy, je digitale medewerker die 24/7 doorwerkt.",
    intro: [
      "Groeien hoeft niet te betekenen dat je meer mensen aanneemt. Met AI-automatisering laat je het terugkerende werk over aan een systeem dat dag en nacht doorwerkt, tegen een fractie van de kosten.",
      "Brainy is de automatisering achter Webmaister. Geen chatbot, maar ondersteuning, afspraken, opvolging en administratie, zodat terugkerend werk niet op het team blijft liggen.",
    ],
    includesTitle: "Wat Brainy doet",
    includes: [
      "Klantvragen beantwoorden uit je eigen informatie",
      "Afspraken inplannen",
      "Opvolging",
      "Administratief werk automatiseren",
    ],
    faq: [
      { q: "Is Brainy een chatbot?", a: "Nee. Brainy neemt ondersteuning, afspraken, opvolging en administratie over. Het doel is repetitief werk weghalen, niet een chatbot op je site plakken." },
      { q: "Waarmee kan ik beginnen?", a: "We beginnen met de ene taak die de meeste tijd kost, bewijzen de waarde, en breiden daarna uit. Kleine, opeenstapelende winst werkt beter dan één grote risicovolle ingreep." },
      { q: "Werkt dit ook voor mijn type bedrijf?", a: "AI-automatisering is breed toepasbaar, van dienstverleners tot e-commerce. In een gratis gesprek kijken we welke taken bij jou het meeste opleveren." },
    ],
  },
];
