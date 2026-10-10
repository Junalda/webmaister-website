// Full NL service pages (/nl/[slug]/). Each renders via ServicePage.astro:
// answer-first lead, intro, who-it's-for, steps, concrete pricing, a relevant
// case, an FAQ (6-8) and a CTA. Prices follow the canonical price list.

export type ServicePage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  intro: string[];
  forWho: string;
  extra?: string[];
  steps: { title: string; text: string }[];
  pricing: { text: string; items: { name: string; price: string }[] };
  caseSlug: string;
  caseText: string;
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  cta: string;
};

const ALL = {
  website: { label: "Website laten maken Rotterdam", href: "/nl/website-laten-maken-rotterdam/" },
  webdesign: { label: "Webdesign Rotterdam", href: "/nl/webdesign-rotterdam/" },
  seo: { label: "SEO Rotterdam", href: "/nl/seo-rotterdam/" },
  ai: { label: "AI-automatisering Rotterdam", href: "/nl/ai-automatisering-rotterdam/" },
  agent: { label: "AI-agent Rotterdam", href: "/nl/ai-agent-rotterdam/" },
  onderhoud: { label: "Website-onderhoud Rotterdam", href: "/nl/website-onderhoud-rotterdam/" },
  geo: { label: "GEO-optimalisatie", href: "/nl/geo-optimalisatie/" },
};

export const services: ServicePage[] = [
  {
    slug: "website-laten-maken-rotterdam",
    keyword: "Website laten maken Rotterdam",
    title: "Website laten maken in Rotterdam vanaf €500 | Webmaister",
    description: "Website laten maken in Rotterdam? Webmaister bouwt snelle, conversiegerichte websites. Starter Website vanaf €500 setup + €150/mnd, Growth Website vanaf €2.700. Levertijd 2–4 weken.",
    h1: "Website laten maken in Rotterdam",
    lead: "Een website laten maken in Rotterdam kost bij Webmaister vanaf €500 setup plus €150 per maand voor een Starter Website (one-pager), of vanaf €2.700 setup plus €300 per maand voor een volledige Growth Website. De gemiddelde levertijd is 2 tot 4 weken.",
    intro: [
      "Een website is vaak het eerste wat een potentiële klant van je ziet. In een paar seconden bepaalt die bezoeker of je betrouwbaar overkomt en of het de moeite waard is om contact op te nemen. Een goede website is daarom geen digitaal visitekaartje, maar een verkoper die dag en nacht voor je werkt.",
      "Wij bouwen websites die snel laden, vertrouwen wekken en bezoekers omzetten in aanvragen. We beginnen niet bij het ontwerp, maar bij de vraag waar jouw bedrijf naartoe wil, en bouwen daar de website omheen: met heldere positionering, een logische structuur en duidelijke call-to-actions.",
    ],
    forWho: "Deze dienst is er voor ondernemers en bedrijven in Rotterdam en omgeving die een professionele website nodig hebben: starters die online willen beginnen, en gevestigde bedrijven waarvan de huidige site verouderd is of te weinig aanvragen oplevert. Of je nu een eenvoudige one-pager wilt of een volledige zakelijke website, we stemmen de aanpak af op je doel en budget.",
    extra: [
      "Wat Webmaister anders maakt, is dat we een website nooit als eindproduct zien, maar als het fundament van je acquisitie. We beginnen bij je positionering en je doelen, niet bij een mooi plaatje, en bouwen daar een site omheen die daadwerkelijk aanvragen oplevert. Dat betekent duidelijke keuzes: één hoofdboodschap, een logische route naar het contactformulier en teksten die aansluiten op wat je klant zoekt.",
      "Omdat we in Rotterdam zitten en met lokale ondernemers werken, kennen we de markt en denken we mee over hoe je je onderscheidt. We bouwen snel en schaalbaar, met sterke laadtijden en een nette technische basis, zodat je site niet alleen vandaag goed werkt, maar ook morgen goed gevonden wordt. Onderhoud en optimalisatie horen bij het maandbedrag, dus je website blijft na livegang veilig, snel en actueel in plaats van langzaam te verouderen.",
      "Zo krijg je geen eenmalig project dat na een jaar gedateerd is, maar een digitaal fundament dat met je bedrijf meegroeit, uit te breiden met SEO, leadgeneratie of AI-automatisering zodra je daar klaar voor bent. Je weet vooraf wat het kost en wat je krijgt, en je hebt één vast aanspreekpunt dat de techniek en de groei voor je bewaakt.",
    ],
    steps: [
      { title: "Strategie & positionering", text: "We bepalen voor wie de site is, welke actie bezoekers moeten ondernemen en hoe je je onderscheidt van de concurrentie." },
      { title: "Ontwerp", text: "We ontwerpen een premium, mobiel-first website die past bij je merk en meteen vertrouwen wekt." },
      { title: "Bouw", text: "We bouwen de site snel en schaalbaar, met sterke Core Web Vitals en een SEO-klare structuur." },
      { title: "Lancering", text: "We testen op alle apparaten, zetten meetwaarden op en gaan live, meestal binnen 2 tot 4 weken." },
      { title: "Groei", text: "Na livegang optimaliseren we op basis van echte data en kun je uitbreiden met SEO, leadgeneratie of onderhoud." },
    ],
    pricing: {
      text: "Wat kost een website laten maken in Rotterdam? De prijs hangt af van de omvang. Onze vaste pakketten:",
      items: [
        { name: "Starter Website / One-Pager", price: "€500 setup + €150 / maand" },
        { name: "Growth Website (volledig)", price: "€2.700 setup + €300 / maand" },
        { name: "Leadgeneratiesysteem", price: "€5.000 setup + €500 / maand" },
        { name: "E-commerce", price: "vanaf €2.500 setup" },
      ],
    },
    caseSlug: "nursitree",
    caseText: "Voor NursiTree bouwden we een premium digitaal platform dat een innovatief, technisch product in seconden begrijpelijk maakt en vertrouwen wekt bij gemeenten en partners.",
    faq: [
      { q: "Wat kost een website laten maken in Rotterdam?", a: "Een Starter Website (one-pager) start vanaf €500 setup plus €150 per maand. Een volledige Growth Website start vanaf €2.700 setup plus €300 per maand. In een gratis gesprek bepalen we de scope en geven we een heldere offerte." },
      { q: "Wat is het verschil tussen een one-pager en een volledige website?", a: "Een one-pager is één pagina met je verhaal, aanbod en contact, ideaal om snel professioneel online te zijn. Een volledige website heeft meerdere pagina's, sterkere positionering en een conversiegerichte structuur, geschikt voor serieuzere groei." },
      { q: "Hoe lang duurt het om een website te laten maken?", a: "De gemiddelde levertijd is 2 tot 4 weken, afhankelijk van de omvang en hoe snel we content en feedback ontvangen." },
      { q: "Zit onderhoud bij de prijs inbegrepen?", a: "Ja, het maandbedrag dekt hosting, updates en doorlopend onderhoud, zodat je site veilig, snel en up-to-date blijft." },
      { q: "Is de website goed vindbaar in Google?", a: "We bouwen elke website SEO-klaar op: snelle laadtijden, een nette structuur en correcte techniek. Voor actieve posities bieden we aanvullend SEO Rotterdam aan." },
      { q: "Kunnen jullie mijn bestaande website verbeteren?", a: "Vaak wel. We kunnen een bestaande site herontwerpen of optimaliseren in plaats van helemaal opnieuw te beginnen, afhankelijk van wat het meest oplevert." },
      { q: "Werken jullie alleen voor bedrijven in Rotterdam?", a: "We zitten in Rotterdam en kennen de lokale markt, maar werken met bedrijven in heel Zuid-Holland, de rest van Nederland en op afstand." },
    ],
    related: [ALL.webdesign, ALL.seo, ALL.onderhoud],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "webdesign-rotterdam",
    keyword: "Webdesign Rotterdam",
    title: "Webdesign Rotterdam, premium, conversiegericht ontwerp | Webmaister",
    description: "Webdesign in Rotterdam dat vertrouwen wekt en converteert. Premium, mobiel-first ontwerp vanaf €500 setup + €150/mnd. Levertijd 2–4 weken. Plan een gratis gesprek.",
    h1: "Webdesign in Rotterdam",
    lead: "Webdesign in Rotterdam betekent bij Webmaister een premium, conversiegericht ontwerp dat in seconden vertrouwen wekt. Een ontwerptraject start vanaf €500 setup plus €150 per maand (one-pager) of €2.700 setup plus €300 per maand voor een volledige website.",
    intro: [
      "Goed webdesign is meer dan mooi. Het stuurt de aandacht, maakt je aanbod meteen duidelijk en leidt de bezoeker naar één logische actie: contact opnemen of kopen. Design dat er alleen goed uitziet maar niet converteert, kost je klanten.",
      "Wij ontwerpen websites met een duidelijke hiërarchie, rustige typografie en ruimte, zodat je boodschap binnenkomt. Elk ontwerp is mobiel-first, want het grootste deel van je bezoekers komt via de telefoon, en gebouwd om snel te laden.",
    ],
    forWho: "Webdesign van Webmaister is er voor bedrijven in Rotterdam die zich premium willen presenteren: dienstverleners, consultants, B2B-bedrijven en merken waarvan de uitstraling achterblijft bij de kwaliteit die ze leveren. Als je huidige site gedateerd aanvoelt of niet meer past bij je ambities, is een herontwerp de snelste manier om dat recht te zetten.",
    extra: [
      "Veel ontwerpbureaus leveren een mooi plaatje op en zijn daarna weg. Wij ontwerpen vanuit één vraag: wat moet de bezoeker doen, en wat houdt hem nu tegen? Elk element, van de koptekst tot de knop, staat er met een reden. Zo voorkomen we design dat indruk maakt maar niet converteert.",
      "Onze ontwerpen zijn rustig en zelfverzekerd: sterke typografie, veel ruimte en een duidelijke hiërarchie, zodat je boodschap meteen binnenkomt. Dat is bewust. Een drukke, overladen site zorgt voor twijfel; een helder, premium ontwerp wekt vertrouwen, en vertrouwen is wat een bezoeker over de streep trekt om contact op te nemen.",
      "Omdat we het ontwerp ook zelf bouwen, gaat er niets verloren tussen idee en uitvoering. De site die live gaat, ziet er exact zo uit als bedoeld, laadt snel en werkt op elk scherm. En doordat we in Rotterdam met lokale bedrijven werken, denken we mee over positionering: niet alleen hóe het eruitziet, maar wat het over jouw bedrijf zegt.",
      "Het resultaat is een site die past bij de kwaliteit die je levert, die je met trots deelt, en die bezoekers omzet in aanvragen in plaats van ze te laten afhaken. Design is bij ons geen sluitstuk, maar een onderdeel van je groei.",
      "Werk je al met een bestaande huisstijl of logo, dan sluiten we daar naadloos op aan; heb je die nog niet scherp, dan denken we mee. We leveren niet alleen een ontwerp, maar ook de onderbouwing: waarom deze structuur, deze volgorde en deze call-to-action. Zo weet je precies waarom het werkt, en kun je er met vertrouwen mee naar buiten.",
    ],
    steps: [
      { title: "Merk & doel", text: "We brengen je merk, doelgroep en doelen in kaart en bepalen welke indruk de site moet maken." },
      { title: "Structuur", text: "We bepalen de paginastructuur en de route die een bezoeker aflegt naar de aanvraag." },
      { title: "Ontwerp", text: "We ontwerpen een onderscheidend, premium design op maat, geen template." },
      { title: "Realisatie", text: "We bouwen het ontwerp pixelzuiver, snel en toegankelijk, klaar voor alle schermen." },
      { title: "Verfijning", text: "We testen, verfijnen op basis van gedrag en leveren op, doorgaans binnen 2 tot 4 weken." },
    ],
    pricing: {
      text: "Wat kost webdesign in Rotterdam? Design zit bij onze websitepakketten inbegrepen:",
      items: [
        { name: "Starter Website / One-Pager", price: "€500 setup + €150 / maand" },
        { name: "Growth Website (volledig)", price: "€2.700 setup + €300 / maand" },
        { name: "Custom e-commerce front-end", price: "vanaf €3.500 setup" },
        { name: "Betaalde strategiesessie", price: "€350" },
      ],
    },
    caseSlug: "queenly-events",
    caseText: "Voor Queenly Events herontwierpen we de digitale ervaring rond luxe, vertrouwen en emotie, zodat de site de premiumkwaliteit van hun events eindelijk weerspiegelt.",
    faq: [
      { q: "Wat kost webdesign in Rotterdam?", a: "Ontwerp zit bij onze pakketten: vanaf €500 setup + €150 per maand voor een one-pager, of €2.700 setup + €300 per maand voor een volledige website. Een losse strategiesessie is €350." },
      { q: "Werken jullie met templates of maatwerk?", a: "Maatwerk. We ontwerpen een uniek design dat past bij jouw merk en positionering, in plaats van een generiek sjabloon." },
      { q: "Is het ontwerp mobiel-vriendelijk?", a: "Ja, alles is mobiel-first ontworpen en getest, omdat de meeste bezoekers via hun telefoon komen." },
      { q: "Kan ik later zelf teksten of afbeeldingen aanpassen?", a: "Dat kan afhankelijk van de opzet. We bespreken vooraf of je zelf wilt kunnen beheren, en richten het daarop in." },
      { q: "Hoe lang duurt een ontwerptraject?", a: "Gemiddeld 2 tot 4 weken, afhankelijk van de omvang en de snelheid van feedback." },
      { q: "Verbetert goed design ook mijn conversie?", a: "Ja. Een helder, rustig ontwerp met een duidelijke call-to-action maakt het makkelijker om contact op te nemen, waardoor meer bezoekers aanvragen worden." },
    ],
    related: [ALL.website, ALL.seo, ALL.onderhoud],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "seo-rotterdam",
    keyword: "SEO Rotterdam",
    title: "SEO Rotterdam, hoger in Google, meer aanvragen | Webmaister",
    description: "SEO in Rotterdam die klanten oplevert die actief zoeken. Technische SEO, lokale SEO en conversie als één groeisysteem. Plan een gratis gesprek met Webmaister.",
    h1: "SEO in Rotterdam",
    lead: "SEO in Rotterdam zorgt dat klanten die actief zoeken bij jou terechtkomen in plaats van bij de concurrent. Bij Webmaister is SEO geen los trucje, maar onderdeel van een groeisysteem; het werkt het beste in combinatie met een snelle, converterende website. Een SEO-traject stemmen we af op je budget en doelen.",
    intro: [
      "Online zichtbaar zijn is niet hetzelfde als gevonden worden. Met de juiste SEO verschijn je bovenaan in Google op de zoekopdrachten waar jouw klanten daadwerkelijk op zoeken, zoals 'website laten maken Rotterdam' of jouw dienst plus jouw stad.",
      "We pakken SEO opbouwend aan: eerst de technische basis en de conversie op orde, dan content die antwoord geeft op echte klantvragen, en daarna autoriteit opbouwen. Zo wordt vindbaarheid een voorspelbare bron van aanvragen in plaats van toeval.",
    ],
    forWho: "SEO Rotterdam is er voor bedrijven die meer willen halen uit organisch verkeer: ondernemers die afhankelijk zijn van mond-tot-mond en structureler gevonden willen worden, en bedrijven met een website die wel bezoekers trekt maar te weinig aanvragen oplevert. Lokale dienstverleners profiteren extra van lokale SEO gericht op Rotterdam en Zuid-Holland.",
    extra: [
      "Veel SEO-bureaus leveren rapporten vol posities en bezoekersaantallen, maar daar betaal je de rekeningen niet van. Wij sturen op wat telt: aanvragen en omzet. Een hoge positie die niet converteert is waardeloos, dus we verbeteren altijd de vindbaarheid én de conversie op de pagina waar het verkeer landt.",
      "We pakken SEO opbouwend en eerlijk aan. Geen trucjes of keyword stuffing die op de korte termijn werken en je op de lange termijn schaden, maar een stevige technische basis, content die echte klantvragen beantwoordt en autoriteit die geleidelijk groeit. Dat is precies wat zoekmachines, en inmiddels ook AI-assistenten, belonen.",
      "Omdat we zowel de website als de SEO in huis doen, werken ze samen in plaats van langs elkaar heen. Een snelle, goed gestructureerde site is de helft van het werk; de andere helft is de juiste content en lokale signalen, zoals je Google Bedrijfsprofiel. Voor een bedrijf in Rotterdam betekent dat: gevonden worden door de mensen die hier, nu, naar jouw dienst zoeken.",
      "SEO is bij ons geen losse dienst, maar onderdeel van een groeisysteem. Daardoor wordt vindbaarheid een voorspelbare bron van klanten, in plaats van iets wat je er los bij koopt en hoopt dat het werkt.",
    ],
    steps: [
      { title: "Analyse", text: "We brengen je huidige posities, verkeer en concurrentie in kaart en bepalen de kansen met de meeste impact." },
      { title: "Techniek", text: "We verbeteren snelheid, structuur, indexatie en de technische basis van je site." },
      { title: "Content", text: "We maken content die aansluit op echte zoekvragen en jouw expertise aantoont." },
      { title: "Lokale SEO", text: "We versterken je lokale vindbaarheid, inclusief Google Bedrijfsprofiel en lokale signalen." },
      { title: "Meten & bijsturen", text: "We rapporteren op wat telt, aanvragen en posities, en sturen maandelijks bij." },
    ],
    pricing: {
      text: "Wat kost SEO in Rotterdam? SEO scopen we op jouw situatie en budget. Richtprijzen en gerelateerde diensten:",
      items: [
        { name: "Growth Strategist (incl. SEO & acquisitie)", price: "vanaf €1.600 / maand" },
        { name: "Leadgeneratiesysteem", price: "€5.000 setup + €500 / maand" },
        { name: "Website met SEO-fundamenten", price: "vanaf €2.700 setup + €300 / maand" },
        { name: "Betaalde strategiesessie", price: "€350" },
      ],
    },
    caseSlug: "capture-the-moment-solutions",
    caseText: "Voor Capture the Moment Solutions bouwden we een SEO-klaar platform met heldere positionering, zodat de juiste klanten de waarde van het werk meteen begrijpen en vinden.",
    faq: [
      { q: "Wat kost SEO in Rotterdam?", a: "Dat hangt af van je situatie en doelen. SEO zit onder meer in onze Growth Strategist-samenwerking vanaf €1.600 per maand en in het Leadgeneratiesysteem. Plan een gratis gesprek voor een concreet voorstel." },
      { q: "Hoe snel zie ik resultaat met SEO?", a: "De eerste verbeteringen (techniek, conversie) merk je vaak snel; sterke organische posities groeien doorgaans over enkele maanden. We starten met de hoogste impact eerst." },
      { q: "Wat is het verschil tussen SEO en Google Ads?", a: "SEO levert organisch, 'gratis' verkeer op dat opbouwt en blijft; Google Ads levert direct verkeer zolang je betaalt. Vaak werkt de combinatie het beste." },
      { q: "Doen jullie ook lokale SEO?", a: "Ja, we richten ons specifiek op lokale zoekopdrachten in Rotterdam en Zuid-Holland, inclusief je Google Bedrijfsprofiel." },
      { q: "Kan SEO zonder een nieuwe website?", a: "Soms wel, maar een snelle, goed gestructureerde website is de basis. Als je huidige site SEO in de weg zit, adviseren we eerst dat te verbeteren." },
      { q: "Garanderen jullie de nummer 1-positie?", a: "Nee. Niemand kan posities garanderen. We bouwen het systeem en sturen bij op wat aantoonbaar werkt, zonder valse beloften." },
    ],
    related: [ALL.website, ALL.geo, ALL.webdesign],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "ai-automatisering-rotterdam",
    keyword: "AI-automatisering Rotterdam",
    title: "AI-automatisering Rotterdam, minder handwerk, meer groei | Webmaister",
    description: "AI-automatisering voor bedrijven in Rotterdam: leads kwalificeren, 24/7 vragen beantwoorden en administratie automatiseren. Opschalen zonder meer personeel. Plan een gesprek.",
    h1: "AI-automatisering in Rotterdam",
    lead: "AI-automatisering in Rotterdam laat je bedrijf groeien zonder dat je meer mensen hoeft aan te nemen. Bij Webmaister automatiseren we het terugkerende werk, zoals leads opvangen, vragen beantwoorden en administratie, met systemen die dag en nacht doorwerken tegen een fractie van de kosten.",
    intro: [
      "Veel ondernemers verliezen uren per week aan repetitief werk: dezelfde vragen beantwoorden, leads handmatig opvolgen, data overtikken tussen tools. Dat werk is nodig, maar het hoeft niet door een mens te gebeuren.",
      "Wij koppelen techniek en processen zodat het terugkerende werk zichzelf doet. Het resultaat: snellere reactietijden, minder gemiste leads en meer tijd voor het werk dat er echt toe doet, terwijl je kunt opschalen zonder dat je personeelskosten meegroeien.",
    ],
    forWho: "AI-automatisering is er voor groeiende mkb-bedrijven in Rotterdam die tegen hun eigen capaciteit aanlopen: bedrijven die veel aanvragen of klantvragen krijgen, veel handmatig opvolgen, of waar administratie en opvolging blijven liggen. Het is breed toepasbaar, van dienstverleners tot e-commerce.",
    extra: [
      "AI-automatisering klinkt groot, maar werkt het beste als je klein begint. Wij jagen geen hypes na; we kijken naar jouw concrete processen en kiezen de ene taak die nu de meeste tijd kost of de meeste leads laat liggen. Die automatiseren we eerst, bewijzen de waarde, en bouwen van daaruit uit. Zo loop je geen onnodig risico en zie je snel resultaat.",
      "Het verschil met losse tools is dat wij alles verbinden. Een aanvraag die binnenkomt, wordt automatisch opgevangen, gekwalificeerd, opgevolgd en in je CRM gezet, zonder dat iemand iets hoeft over te tikken. Daardoor reageer je sneller, mis je minder leads en houdt je team tijd over voor het werk dat er echt toe doet.",
      "Voor een bedrijf in Rotterdam dat wil groeien, betekent dit dat je kunt opschalen zonder dat je personeelskosten meegroeien. De techniek werkt dag en nacht door, tegen een fractie van de kosten van een extra medewerker, en wordt onderdeel van je bredere acquisitiesysteem in plaats van een losstaand speeltje.",
      "We werken met betrouwbare, gevestigde tools en richten alles zorgvuldig in op jouw situatie. Je houdt grip en inzicht, en je weet precies wat er gebeurt en wat het oplevert.",
      "Belangrijk: automatisering is geen doel op zich. We automatiseren alleen wat je tijd of klanten oplevert, en laten het menselijke werk menselijk. Het doel is dat jij en je team minder tijd kwijt zijn aan terugkerend werk en meer tijd overhouden voor klanten, kwaliteit en groei, met een systeem dat meeschaalt op het moment dat je het nodig hebt.",
    ],
    steps: [
      { title: "Analyse", text: "We brengen in kaart welk werk de meeste tijd kost of de meeste leads laat liggen." },
      { title: "Prioriteren", text: "We kiezen de taak met de hoogste impact om mee te beginnen, en bewijzen de waarde." },
      { title: "Bouwen", text: "We bouwen of koppelen de automatisering aan je bestaande tools en website." },
      { title: "Integreren", text: "We verbinden alles, van aanvraag tot opvolging en CRM, tot één werkend geheel." },
      { title: "Optimaliseren", text: "We meten, verbeteren en breiden stap voor stap uit naar meer processen." },
    ],
    pricing: {
      text: "Wat kost AI-automatisering voor een mkb-bedrijf? Dat hangt af van de processen. We beginnen klein en bouwen uit. Richtprijzen:",
      items: [
        { name: "Leadgeneratiesysteem (incl. opvolging)", price: "€5.000 setup + €500 / maand" },
        { name: "Growth Strategist", price: "vanaf €1.600 / maand" },
        { name: "Automatisering op maat", price: "op aanvraag" },
        { name: "Betaalde strategiesessie", price: "€350" },
      ],
    },
    caseSlug: "hope-love-foundation",
    caseText: "Voor Hope & Love Foundation bouwden we een warm, betrouwbaar platform dat de impact helder maakt en donateurs en partners het vertrouwen geeft om bij te dragen.",
    faq: [
      { q: "Wat kost AI-automatisering voor een mkb-bedrijf?", a: "Dat hangt af van de processen die je wilt automatiseren. We starten vaak met één proces met hoge impact en bouwen uit. Automatisering zit onder meer in ons Leadgeneratiesysteem (€5.000 setup + €500/mnd) en de Growth Strategist (vanaf €1.600/mnd)." },
      { q: "Vervangt AI mijn medewerkers?", a: "Nee, het haalt repetitief werk weg zodat je team zich op waardevoller werk kan richten. Je schaalt op zonder dat je personeelskosten meegroeien." },
      { q: "Werkt dit ook voor mijn type bedrijf?", a: "AI-automatisering is breed toepasbaar, van dienstverleners tot e-commerce. In een gratis gesprek bekijken we welke taken bij jou het meeste opleveren." },
      { q: "Waarmee kan ik het beste beginnen?", a: "Met de ene taak die de meeste tijd of de meeste leads kost. Kleine, opeenstapelende winst werkt beter dan één grote risicovolle ingreep." },
      { q: "Is mijn data veilig?", a: "Ja. We werken met betrouwbare, gevestigde tools en richten integraties zorgvuldig in, afgestemd op jouw situatie." },
      { q: "Wat is het verschil met een AI-agent?", a: "Een AI-agent is een specifieke toepassing die zelfstandig taken uitvoert, zoals vragen beantwoorden of afspraken inplannen. AI-automatisering is het bredere geheel van processen dat we automatiseren." },
    ],
    related: [ALL.agent, ALL.geo, ALL.website],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "ai-agent-rotterdam",
    keyword: "AI-agent Rotterdam",
    title: "AI-agent laten bouwen in Rotterdam, 24/7 een digitale medewerker | Webmaister",
    description: "Een AI-agent voor je bedrijf in Rotterdam: vangt leads op, beantwoordt vragen 24/7 in elke taal en plant afspraken in. Een digitale medewerker die altijd doorwerkt.",
    h1: "AI-agent in Rotterdam",
    lead: "Een AI-agent in Rotterdam werkt als een digitale medewerker die 24/7 doorgaat: hij vangt leads op, beantwoordt klantvragen in elke taal, plant afspraken in en volgt op, zodat geen aanvraag koud wordt. Een AI-agent bouwen we meestal als onderdeel van een leadgeneratie- of automatiseringstraject.",
    intro: [
      "Een AI-agent is geen simpele chatbot met vaste antwoorden. Het is een slim systeem dat jouw bedrijf 'kent', uit je eigen kennis put en zelfstandig taken uitvoert. Terwijl jij slaapt, beantwoordt hij vragen, kwalificeert hij leads en zorgt hij dat warme contacten niet verdwijnen.",
      "Voor een groeiend bedrijf betekent dat: snellere reacties, meer gekwalificeerde aanvragen en minder gemiste kansen buiten kantooruren, zonder dat je er een medewerker bij hoeft te zetten.",
    ],
    forWho: "Een AI-agent is er voor bedrijven in Rotterdam die veel klantcontact of aanvragen hebben en sneller en consistenter willen reageren: dienstverleners, webshops en B2B-bedrijven die leads buiten kantooruren mislopen of waar opvolging blijft liggen.",
    extra: [
      "Het grote verschil met een standaard chatbot is intelligentie en context. Een chatbot werkt met vaste scripts en loopt vast zodra een vraag afwijkt. Een AI-agent put uit jouw eigen kennis, begrijpt wat iemand bedoelt en voert zelfstandig taken uit: een lead kwalificeren, een vraag beantwoorden of een afspraak inplannen. Daardoor voelt het gesprek als een echte medewerker, niet als een keuzemenu.",
      "Voor een groeiend bedrijf is dat direct voelbaar. De meeste aanvragen komen niet netjes tussen negen en vijf binnen. Een AI-agent vangt ze op het moment dat de interesse het hoogst is, ook 's avonds en in het weekend, en zorgt dat warme contacten niet verdwijnen omdat niemand op tijd reageerde.",
      "Wij bouwen de agent op maat en koppelen hem aan je website, je kanalen en waar nuttig je agenda en CRM. We voeden hem met jouw gecontroleerde informatie en testen uitgebreid, zodat de antwoorden kloppen en bij je merk passen. Waar iets te complex of te belangrijk is, verwijst de agent netjes door naar een mens.",
      "Zo wordt de AI-agent geen gimmick, maar een werkend onderdeel van je acquisitiesysteem: een digitale medewerker die 24/7 doorwerkt en ervoor zorgt dat je sneller reageert dan je concurrent.",
      "In de praktijk begint het klein en groeit het mee. We kunnen beginnen met één taak, bijvoorbeeld het beantwoorden van veelgestelde vragen op je website, en van daaruit uitbreiden naar kwalificeren, afspraken inplannen en opvolgen. Zo bewijs je eerst de waarde voordat je uitbreidt, en bouw je stap voor stap een systeem dat steeds meer werk uit handen neemt.",
    ],
    steps: [
      { title: "Doel & scope", text: "We bepalen welke taken de agent moet uitvoeren: vragen beantwoorden, leads kwalificeren of afspraken inplannen." },
      { title: "Kennisbasis", text: "We voeden de agent met jouw eigen informatie, zodat de antwoorden kloppen en bij je merk passen." },
      { title: "Bouw & koppeling", text: "We bouwen de agent en koppelen hem aan je website, kanalen en, waar nuttig, je CRM." },
      { title: "Test", text: "We testen uitgebreid op echte vragen en scherpen de antwoorden aan." },
      { title: "Live & verbeteren", text: "We zetten de agent live en verbeteren hem op basis van echte gesprekken." },
    ],
    pricing: {
      text: "Wat kost een AI-agent? Dat hangt af van de taken en koppelingen. Een AI-agent zit doorgaans in een groter traject:",
      items: [
        { name: "Leadgeneratiesysteem (incl. opvolging & agent)", price: "€5.000 setup + €500 / maand" },
        { name: "Growth Strategist", price: "vanaf €1.600 / maand" },
        { name: "AI-agent op maat", price: "op aanvraag" },
        { name: "Betaalde strategiesessie", price: "€350" },
      ],
    },
    caseSlug: "capture-the-moment-solutions",
    caseText: "Voor Capture the Moment Solutions bouwden we een platform met heldere positionering en conversielogica, de basis waarop een AI-agent leads kan opvangen en opvolgen.",
    faq: [
      { q: "Wat kost een AI-agent in Rotterdam?", a: "Dat hangt af van de taken en koppelingen. Een AI-agent bouwen we meestal als onderdeel van een Leadgeneratiesysteem (€5.000 setup + €500/mnd) of een Growth Strategist-samenwerking (vanaf €1.600/mnd)." },
      { q: "Is een AI-agent hetzelfde als een chatbot?", a: "Nee. Een chatbot volgt vaste scripts. Een AI-agent put uit jouw kennis, begrijpt context en voert zelfstandig taken uit, zoals kwalificeren en afspraken inplannen." },
      { q: "In welke talen kan de agent antwoorden?", a: "In vrijwel elke taal. Internationale bezoekers krijgen direct antwoord in hun eigen taal, zonder dat er iemand van je team wakker hoeft te zijn." },
      { q: "Kan de agent afspraken inplannen?", a: "Ja, we kunnen de agent koppelen aan je agenda en opvolging, zodat warme leads meteen een afspraak kunnen maken." },
      { q: "Hoe voorkomen jullie foute antwoorden?", a: "We voeden de agent met jouw gecontroleerde informatie en testen uitgebreid. Waar nodig laten we de agent doorverwijzen naar een mens." },
      { q: "Werkt de agent samen met mijn website?", a: "Ja, de agent integreert met je website en kanalen en wordt onderdeel van je acquisitiesysteem." },
    ],
    related: [ALL.ai, ALL.website, ALL.geo],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "website-onderhoud-rotterdam",
    keyword: "Website-onderhoud Rotterdam",
    title: "Website-onderhoud Rotterdam vanaf €150/mnd | Webmaister",
    description: "Website-onderhoud in Rotterdam: updates, beveiliging, back-ups, snelheid en kleine aanpassingen. Vanaf €150 per maand. Je site blijft veilig, snel en up-to-date.",
    h1: "Website-onderhoud in Rotterdam",
    lead: "Website-onderhoud in Rotterdam kost bij Webmaister vanaf €150 per maand. Daarvoor houden we je website veilig, snel en up-to-date: updates, beveiliging, back-ups, snelheidsbewaking en kleine inhoudelijke aanpassingen.",
    intro: [
      "Een website is geen eenmalig project. Zonder onderhoud veroudert hij: updates blijven uit, de snelheid zakt, beveiligingslekken ontstaan en kleine fouten blijven staan. Dat kost vertrouwen en uiteindelijk klanten.",
      "Met onderhoud nemen we dat uit handen. Je site blijft technisch gezond en actueel, en kleine wijzigingen, zoals een nieuwe tekst, foto of dienst, regelen wij, zodat jij je op je bedrijf kunt richten.",
    ],
    forWho: "Website-onderhoud is er voor ondernemers in Rotterdam die geen tijd of zin hebben om zelf met techniek bezig te zijn, en voor bedrijven die willen dat hun site altijd veilig, snel en up-to-date is. Bij onze websitepakketten zit onderhoud standaard inbegrepen.",
    extra: [
      "Veel ondernemers denken dat een website af is zodra hij live staat. In de praktijk begint het dan pas. Software en plugins krijgen updates, nieuwe beveiligingslekken duiken op, de laadtijd zakt naarmate er content bijkomt, en kleine foutjes sluipen erin. Zonder onderhoud veroudert een site stilletjes, precies op het moment dat een potentiële klant kijkt.",
      "Wij nemen dat volledig uit handen. We houden de software actueel, maken regelmatig back-ups, bewaken de beveiliging en monitoren de snelheid. Zo blijft je site technisch gezond en loop je geen onnodig risico op uitval of een gehackte website, iets wat niet alleen vervelend is, maar ook je vindbaarheid en vertrouwen schaadt.",
      "Daarnaast regelen we de kleine inhoudelijke wijzigingen voor je: een nieuwe tekst, een extra dienst, een foto die vervangen moet worden. Je hoeft zelf niet in de techniek te duiken; je stuurt een bericht en wij zorgen dat het klopt. Dat scheelt tijd en frustratie, en je weet zeker dat aanpassingen netjes en veilig gebeuren.",
      "Omdat snelheid, beveiliging en actualiteit ook meewegen in Google, is onderhoud niet alleen een technische hygiëne, maar ook een investering in je vindbaarheid. Voor een vast, overzichtelijk maandbedrag weet je dat je website in goede handen is en klaar blijft om mee te groeien met je bedrijf.",
      "Een ander voordeel van onderhoud bij Webmaister is dat je één vast aanspreekpunt hebt dat je site écht kent. We hoeven ons niet eerst in te werken bij elke vraag, waardoor aanpassingen sneller en zonder gedoe gebeuren. En doordat we doorlopend met je site bezig zijn, zien we kansen om te verbeteren voordat ze problemen worden, van een pagina die trager wordt tot een formulier dat beter kan converteren. Zo wordt onderhoud meer dan onderhoud: het is doorlopende, kleine optimalisatie die je site langzaam maar zeker beter maakt.",
    ],
    steps: [
      { title: "Nulmeting", text: "We controleren de staat van je site: updates, snelheid, beveiliging en verbeterpunten." },
      { title: "Updates & beveiliging", text: "We houden software actueel, maken back-ups en bewaken de beveiliging." },
      { title: "Snelheid", text: "We monitoren en optimaliseren de laadtijd, belangrijk voor bezoekers én Google." },
      { title: "Aanpassingen", text: "Kleine inhoudelijke wijzigingen voeren we voor je door, zonder gedoe." },
      { title: "Rapportage", text: "Je weet wat er gebeurt en dat je site in goede handen is." },
    ],
    pricing: {
      text: "Wat kost website-onderhoud in Rotterdam?",
      items: [
        { name: "Website-onderhoud", price: "vanaf €150 / maand" },
        { name: "Inbegrepen bij Starter Website", price: "€150 / maand" },
        { name: "Inbegrepen bij Growth Website", price: "€300 / maand" },
        { name: "E-commerce terugkerend", price: "vanaf €350 / maand" },
      ],
    },
    caseSlug: "nursitree",
    caseText: "Voor NursiTree bouwden we een schaalbaar platform; met onderhoud blijft zo'n fundament veilig, snel en klaar om mee te groeien met het bedrijf.",
    faq: [
      { q: "Wat kost website-onderhoud in Rotterdam?", a: "Onderhoud start vanaf €150 per maand. Bij onze websitepakketten zit het inbegrepen: €150 per maand bij een Starter Website, €300 per maand bij een Growth Website." },
      { q: "Wat valt er onder onderhoud?", a: "Updates, beveiliging, back-ups, snelheidsbewaking en kleine inhoudelijke aanpassingen zoals teksten, foto's of een nieuwe dienst." },
      { q: "Ik heb mijn site ergens anders laten maken. Kunnen jullie het onderhoud overnemen?", a: "Vaak wel. We bekijken eerst de staat en techniek van je site en adviseren of overnemen zinvol is of dat verbeteren beter loont." },
      { q: "Zitten kleine wijzigingen erbij in?", a: "Ja, kleine inhoudelijke aanpassingen horen bij het onderhoud. Grotere uitbreidingen stemmen we apart af." },
      { q: "Waarom is onderhoud belangrijk voor SEO?", a: "Google beloont snelle, veilige en actuele sites. Achterstallig onderhoud schaadt je snelheid en beveiliging, en daarmee je posities." },
      { q: "Kan ik het onderhoud maandelijks opzeggen?", a: "We spreken heldere voorwaarden af in het gesprek, zodat je precies weet waar je aan toe bent." },
    ],
    related: [ALL.website, ALL.webdesign, ALL.seo],
    cta: "Plan een gratis gesprek",
  },
  {
    slug: "geo-optimalisatie",
    keyword: "GEO-optimalisatie",
    title: "GEO-optimalisatie, vindbaar worden in ChatGPT, Claude & Perplexity | Webmaister",
    description: "GEO (Generative Engine Optimization): word genoemd door ChatGPT, Claude, Gemini en Perplexity. Webmaister maakt je bedrijf duidelijk en citeerbaar voor AI-assistenten.",
    h1: "GEO-optimalisatie: vindbaar in ChatGPT, Claude en Perplexity",
    lead: "GEO-optimalisatie (Generative Engine Optimization) zorgt dat je bedrijf wordt genoemd als relevante optie wanneer mensen een vraag stellen aan AI-assistenten zoals ChatGPT, Claude, Gemini en Perplexity. Waar SEO draait om posities in Google, draait GEO om duidelijk, betrouwbaar en citeerbaar zijn voor machines.",
    intro: [
      "Steeds meer mensen zoeken niet meer in Google, maar vragen het aan een AI. Op 'wie kan een website maken in Rotterdam?' geeft zo'n assistent geen lijst links, maar een paar concrete aanbevelingen. Je wilt dat jouw bedrijf daar bij hoort.",
      "Niemand kan garanderen dat ChatGPT een bedrijf aanbeveelt. Wél kunnen we de onderliggende signalen maximaal verbeteren: heldere feiten, consistente bedrijfsgegevens, machine-leesbare structuur (schema.org), een scherpe omschrijving van wat je doet en voor wie, en content die echte vragen beantwoordt. Dat maakt het waarschijnlijker dat je genoemd wordt.",
    ],
    forWho: "GEO-optimalisatie is er voor bedrijven die vooroplopen en gevonden willen worden in de nieuwe generatie zoekgedrag: ondernemers die nu al merken dat klanten 'via ChatGPT' binnenkomen, en bedrijven die hun autoriteit en vindbaarheid toekomstbestendig willen maken, naast hun bestaande SEO.",
    extra: [
      "Het zoekgedrag verandert sneller dan veel bedrijven denken. Waar mensen vroeger een rij blauwe links kregen, krijgen ze nu van een AI-assistent een kort, concreet antwoord met een paar aanbevelingen. Sta je daar niet tussen, dan besta je in dat gesprek simpelweg niet, hoe goed je ook bent.",
      "GEO draait daarom om duidelijkheid en betrouwbaarheid voor machines. Een AI kan jou alleen aanbevelen als hij ondubbelzinnig begrijpt wie je bent, wat je doet, voor wie en waar, en als die informatie klopt en consistent is. Wij maken dat machine-leesbaar met correcte schema.org-structuur, een scherpe omschrijving en harde feiten zoals prijzen, adres en diensten op je site.",
      "We doen dit eerlijk. Niemand kan garanderen dat ChatGPT, Claude of Perplexity jouw bedrijf noemt, en wie dat belooft, verkoopt lucht. Wat we wél kunnen, is de onderliggende signalen, autoriteit, structuur, consistentie en content, maximaal verbeteren, zodat de kans zo groot mogelijk wordt. Dezelfde basis versterkt bovendien je gewone SEO, dus je investering werkt twee kanten op.",
      "Voor een bedrijf in Rotterdam dat nu al nadenkt over morgen, is GEO de logische volgende stap: niet in plaats van SEO, maar ernaast, zodat je gevonden wordt waar je toekomstige klanten straks zoeken.",
    ],
    steps: [
      { title: "Entiteit scherpstellen", text: "We maken ondubbelzinnig wie je bent, wat je doet, voor wie en waar, zodat AI je begrijpt." },
      { title: "Machine-leesbaar maken", text: "We voegen correcte structured data (schema.org) en een duidelijke, citeerbare omschrijving toe." },
      { title: "Harde feiten", text: "We zetten prijzen, adres, diensten en bewijs op je site, zodat AI concrete antwoorden kan geven." },
      { title: "Content", text: "We schrijven content die echte vragen beantwoordt, de bron die AI graag citeert." },
      { title: "Consistentie & meten", text: "We zorgen voor dezelfde gegevens overal en volgen welke kanalen, inclusief AI, klanten opleveren." },
    ],
    pricing: {
      text: "Wat kost GEO-optimalisatie? GEO loopt mee in onze groei- en SEO-trajecten. Richtprijzen:",
      items: [
        { name: "Growth Strategist (incl. SEO & GEO)", price: "vanaf €1.600 / maand" },
        { name: "Leadgeneratiesysteem", price: "€5.000 setup + €500 / maand" },
        { name: "GEO-scan & advies", price: "vanaf €350 (strategiesessie)" },
        { name: "Website met GEO-fundamenten", price: "vanaf €2.700 setup + €300 / maand" },
      ],
    },
    caseSlug: "hope-love-foundation",
    caseText: "Voor Hope & Love Foundation bouwden we een helder, goed gestructureerd platform, precies het soort fundament dat mensen én machines snel begrijpen.",
    faq: [
      { q: "Wat is GEO-optimalisatie?", a: "GEO staat voor Generative Engine Optimization: je bedrijf duidelijk en betrouwbaar maken voor AI-assistenten zoals ChatGPT, Claude en Perplexity, zodat je wordt genoemd als relevante optie bij vragen van potentiële klanten." },
      { q: "Wat is het verschil tussen SEO en GEO?", a: "SEO richt zich op posities in zoekmachines zoals Google. GEO richt zich op genoemd en geciteerd worden door AI-assistenten. Ze versterken elkaar: dezelfde duidelijkheid en autoriteit helpen beide." },
      { q: "Kun je garanderen dat ChatGPT mijn bedrijf aanraadt?", a: "Nee, en wie dat belooft, is niet eerlijk. We verbeteren de onderliggende signalen, feiten, structuur, autoriteit en duidelijkheid, maximaal, zodat de kans zo groot mogelijk wordt." },
      { q: "Wat kost GEO-optimalisatie?", a: "GEO loopt mee in onze SEO- en groeitrajecten, onder meer in de Growth Strategist (vanaf €1.600/mnd). Een losse GEO-scan en advies kan via een strategiesessie van €350." },
      { q: "Hoe meet je of GEO werkt?", a: "Onder meer via verwijzingen vanuit AI-tools in je statistieken en via de vraag 'hoe heb je ons gevonden?' op je formulieren. Zo zie je concreet of AI klanten oplevert." },
      { q: "Doen jullie dit naast gewone SEO?", a: "Ja. GEO en SEO combineren we; de basis (duidelijke feiten, schema, goede content) dient beide." },
    ],
    related: [ALL.seo, ALL.website, ALL.ai],
    cta: "Plan een gratis gesprek",
  },
];
