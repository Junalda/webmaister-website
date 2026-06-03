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
  phone: "+31 10 123 4567",
  city: "Rotterdam",
  region: "Zuid-Holland",
  country: "NL",
  postalCode: "3011",
  street: "Wilhelminakade 1",
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
export const caseStudies = [
  {
    slug: "rotterdam-dental",
    company: "Rotterdam dental clinic",
    industry: "Healthcare",
    challenge:
      "A growing clinic was losing new-patient enquiries: their dated website ranked poorly, the phone went unanswered after hours, and front-desk staff were buried in scheduling and FAQs.",
    solution:
      "A premium new website with local SEO for Rotterdam, plus Brainy as a 24/7 assistant that answers questions, qualifies enquiries and books appointments straight into the calendar.",
    results: [
      { metric: "+142%", label: "new-patient enquiries in 5 months" },
      { metric: "73%", label: "of bookings now handled automatically" },
      { metric: "< 30s", label: "average response time, day or night" },
    ],
    quote: "It feels like we hired a full-time receptionist who never sleeps and our calendar has never been fuller.",
    author: "Practice Manager",
  },
  {
    slug: "b2b-installer",
    company: "Regional B2B installation firm",
    industry: "Trades & Installation",
    challenge:
      "Quote requests trickled in through a slow contact form, follow-up was inconsistent, and the sales team spent evenings writing repetitive quotes instead of closing deals.",
    solution:
      "A conversion-focused website with an AI lead-qualification flow, plus Brainy automation that captures project details, drafts quotes and triggers timely follow-ups.",
    results: [
      { metric: "3.4×", label: "more qualified quote requests" },
      { metric: "−61%", label: "time spent on manual quoting" },
      { metric: "+38%", label: "quote-to-deal conversion" },
    ],
    quote: "We stopped losing leads to slow follow-up. Brainy keeps every opportunity warm until we can close it.",
    author: "Commercial Director",
  },
  {
    slug: "ecom-retailer",
    company: "Niche e-commerce retailer",
    industry: "E-commerce & Retail",
    challenge:
      "Support tickets spiked with the same questions, response times slipped, and the small team couldn't scale service without hiring squeezing already-thin margins.",
    solution:
      "An AI knowledge base and customer-support assistant trained on their catalogue and policies, deflecting routine tickets and escalating only what truly needs a human.",
    results: [
      { metric: "68%", label: "of tickets resolved without a human" },
      { metric: "+22%", label: "repeat-purchase rate" },
      { metric: "€4.2k", label: "monthly support cost saved" },
    ],
    quote: "Our customers get answers instantly, and the team finally has room to focus on growth instead of inboxes.",
    author: "Founder",
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
