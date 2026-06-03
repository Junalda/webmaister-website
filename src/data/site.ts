// =========================================================================
// Webmaister central content & metadata source.
// One place for NAP, services, case studies and FAQ so that page copy and
// structured data (JSON-LD) never drift apart.
// =========================================================================

export const site = {
  name: "Webmaister",
  legalName: "Webmaister",
  tagline: "Growth & AI Infrastructure Partner",
  url: "https://webmaister.io",
  email: "hello@webmaister.io",
  phone: "+31(0) 103072175",
  phoneHref: "+31103072175",
  kvk: "87478889",
  city: "Rotterdam",
  region: "Zuid-Holland",
  country: "NL",
  areaServed: ["Rotterdam", "Zuid-Holland", "Netherlands"],
  founded: "2021",
  social: {
    linkedin: "https://www.linkedin.com/company/webmaister",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Success Stories", href: "/success-stories/" },
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
      "NursiTree introduces a genuinely new idea: a reusable tree bunker that lets trees thrive in dense urban environments while capturing rainwater and cooling city streets. A concept this innovative has to be understood and trusted in seconds by municipalities, urban planners and landscaping partners. NursiTree needed a digital platform that could explain the innovation clearly and present the company with the credibility its mission deserves.",
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
      "NursiTree now has a digital foundation that matches the ambition of its mission: greener, more climate-resilient cities. The platform explains the tree bunker concept with clarity, positions NursiTree as a credible partner for municipalities and urban planners, and is ready to grow as the company scales.",
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
