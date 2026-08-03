// =========================================================================
// HubIzi Schilderwerken - centrale content- en metadatabron.
// Eén plek voor NAW-gegevens, diensten, waarden en FAQ, zodat de teksten op
// de pagina's en de gestructureerde data (JSON-LD) nooit uit elkaar lopen.
// =========================================================================

export const site = {
  name: "HubIzi",
  legalName: "HubIzi Schilderwerken",
  tagline: "Alles wat wij aanpakken, tillen we naar een hoger niveau.",
  url: "https://www.hubizi-schilderwerken.nl",
  email: "info@hubizi-schilderwerken.nl",
  emailDisplay: "Info@hubizi-schilderwerken.nl",
  phone: "06 21 40 32 33",
  phoneHref: "+31621403233",
  kvk: "70206244",
  founder: "Hubert Isidora",
  founded: "2017",
  street: "Willaertpark 8",
  postalCode: "5144 VM",
  city: "Waalwijk",
  region: "Noord-Brabant",
  country: "NL",
  areaServed: ["Waalwijk", "Noord-Brabant", "Nederland"],
  // Eén vaste bedrijfsomschrijving die terugkomt in de Organization-schema,
  // de home-metabeschrijving, de footer en de Over-onspagina, zodat zoek- en
  // AI-machines altijd exact dezelfde definitie lezen.
  description:
    "HubIzi Schilderwerken is een vakkundig schildersbedrijf uit Waalwijk. Sinds 2017 verzorgt oprichter Hubert Isidora binnen- en buitenschilderwerk, het spuiten van objecten en strak afwerkwerk, altijd met een oog voor detail.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten/" },
  { label: "Over ons", href: "/over-ons/" },
  { label: "Contact", href: "/contact/" },
];

export const ctaPrimary = { label: "Vraag een offerte aan", href: "/contact/" };
export const ctaSecondary = { label: "Bekijk onze diensten", href: "/diensten/" };

// ---- Diensten (aangedreven op home, dienstenoverzicht en Service-schema) ----
export const services = [
  {
    slug: "schilderwerken",
    icon: "brush",
    name: "Schilderwerken",
    short: "Binnen- en buitenschilderwerk met een strakke, duurzame afwerking.",
    lead:
      "Een frisse laag verf beschermt uw woning en tilt het geheel naar een hoger niveau. Wij schilderen binnen en buiten met oog voor elk detail.",
    outcome:
      "Een strak resultaat dat jaren meegaat, netjes afgeplakt en zonder gedoe opgeleverd.",
    intro: [
      "Schilderwerk is meer dan een kleurtje kiezen. Goede voorbereiding bepaalt hoe lang het resultaat mooi blijft. Wij nemen de tijd voor schuren, plamuren en gronden, zodat de eindlaag perfect hecht en egaal wordt.",
      "Of het nu gaat om kozijnen, deuren, plafonds, wanden of de complete gevel: wij werken netjes, beschermen uw meubels en vloeren en laten uw woning schoon achter.",
    ],
    points: [
      "Buitenschilderwerk voor kozijnen, deuren en gevels",
      "Binnenschilderwerk voor wanden, plafonds en trappen",
      "Grondig voorwerk: schuren, plamuren en gronden",
      "Houtrotherstel waar dat nodig is",
      "Duurzame, milieubewuste verfsystemen",
      "Netjes afgeplakt en schoon opgeleverd",
    ],
  },
  {
    slug: "spuiten-van-objecten",
    icon: "spray",
    name: "Spuiten van objecten",
    short: "Spuitwerk voor een naadloos gladde, fabrieksmatige afwerking.",
    lead:
      "Voor een egaal en naadloos resultaat spuiten wij deuren, kozijnen, meubels en objecten. Geen streken, geen structuur, alleen een strakke laag.",
    outcome:
      "Een gladde, fabrieksmatige uitstraling die u met de kwast niet bereikt.",
    intro: [
      "Spuiten geeft een egaliteit die kwasten en rollers niet kunnen evenaren. Perfect voor deuren, keukens, trapleuningen, radiatoren en losse objecten die er als nieuw uit moeten zien.",
      "Wij werken in een stofarme omgeving, plakken alles zorgvuldig af en kiezen de juiste lak per ondergrond. Zo krijgt u een naadloze afwerking die lang mooi blijft.",
    ],
    points: [
      "Deuren en kozijnen in spuitkwaliteit",
      "Keukenkastjes en meubels een nieuwe look geven",
      "Radiatoren, trapleuningen en lijstwerk",
      "Losse objecten in onze werkplaats gespoten",
      "Zorgvuldig afplakken en stofarm werken",
      "De juiste lak per ondergrond en gebruik",
    ],
  },
  {
    slug: "afwerken",
    icon: "finish",
    name: "Afwerken",
    short: "Wand- en sausklaar afwerken voor een strak, egaal eindresultaat.",
    lead:
      "De laatste stap bepaalt het gevoel van een ruimte. Wij maken wanden en plafonds sausklaar en werken alles strak en egaal af.",
    outcome:
      "Wanden en plafonds die kant en klaar zijn voor het mooiste eindresultaat.",
    intro: [
      "Een strakke muur begint met een goede voorbereiding. Wij vullen naden, herstellen beschadigingen en maken wanden en plafonds sausklaar, zodat de eindlaag egaal en zonder oneffenheden wordt.",
      "Van spachtelputz en structuurwerk tot glad pleisterwerk en behangklaar maken: wij zorgen voor een basis die klopt en een afwerking waar u jaren van geniet.",
    ],
    points: [
      "Wanden en plafonds sausklaar maken",
      "Naden vullen en beschadigingen herstellen",
      "Glad pleisterwerk en structuurwerk",
      "Behangklaar maken van muren",
      "Egaal en strak eindresultaat",
      "Nette voorbereiding voor een langdurig mooi resultaat",
    ],
  },
];

// ---- Werkwijze in vier stappen ----
export const process = [
  { step: "01", name: "Kennismaking", text: "We bespreken uw wensen en komen langs om de situatie op locatie te bekijken." },
  { step: "02", name: "Heldere offerte", text: "U ontvangt een duidelijke offerte zonder verrassingen, met een reële planning." },
  { step: "03", name: "Vakkundig aan de slag", text: "We werken netjes, beschermen uw interieur en houden u onderweg op de hoogte." },
  { step: "04", name: "Nette oplevering", text: "We leveren schoon op en lopen samen het resultaat na, tot in het detail." },
];

// ---- Waarden / redenen om te kiezen voor HubIzi ----
export const values = [
  { icon: "eye", title: "Oog voor detail", text: "De afwerking maakt het verschil. Wij zien de kleine dingen die het geheel af maken." },
  { icon: "shield", title: "Vakmanschap sinds 2017", text: "Ervaren schilderwerk met een resultaat dat jaren meegaat." },
  { icon: "chat", title: "Duidelijk en eerlijk", text: "Heldere afspraken, een reële planning en een offerte zonder verrassingen." },
  { icon: "broom", title: "Netjes en schoon", text: "We beschermen uw interieur en leveren uw woning schoon en opgeruimd op." },
];

// ---- FAQ (voedt de FAQPage-schema en de teksten op home en contact) ----
export const faqs = [
  {
    q: "In welke regio werkt HubIzi Schilderwerken?",
    a: "Wij zijn gevestigd in Waalwijk en werken in Waalwijk, Noord-Brabant en de wijde omgeving. Neem gerust contact op om te vragen of we ook bij u langskomen.",
  },
  {
    q: "Verzorgen jullie zowel binnen- als buitenschilderwerk?",
    a: "Ja. Wij verzorgen binnen- en buitenschilderwerk, het spuiten van objecten en het strak afwerken van wanden en plafonds. Zowel voor particulieren als voor bedrijven.",
  },
  {
    q: "Is een offerte gratis en vrijblijvend?",
    a: "Zeker. We komen graag langs om de situatie te bekijken en stellen daarna een heldere, vrijblijvende offerte op zonder verrassingen achteraf.",
  },
  {
    q: "Werken jullie met duurzame verf?",
    a: "Wij kiezen per klus het juiste verfsysteem en werken waar mogelijk met duurzame, milieubewuste producten die lang mooi blijven.",
  },
  {
    q: "Wat maakt HubIzi anders dan andere schilders?",
    a: "Oprichter Hubert Isidora is sinds 2017 actief met een uitgesproken oog voor detail. Goede voorbereiding, netjes werken en een strakke afwerking staan bij ons voorop.",
  },
  {
    q: "Hoe vraag ik een offerte aan?",
    a: "Bel of mail ons, of vul het contactformulier in. We reageren snel en plannen een moment om langs te komen en de klus op te nemen.",
  },
];
