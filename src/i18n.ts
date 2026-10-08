import { site } from "@/data/site";

export type Lang = "nl" | "en";

// Bilingual page pairs (NL default at /, EN under /en/). Pages not listed here
// have no translation: /start (EN, excluded by design), the NL-only service
// pages under /nl/, and the NL guide under /gids/.
export const pagePairs: { nl: string; en: string }[] = [
  { nl: "/", en: "/en/" },
  { nl: "/diensten/", en: "/en/solutions/" },
  { nl: "/cases/", en: "/en/work/" },
  { nl: "/over-ons/", en: "/en/about/" },
  { nl: "/contact/", en: "/en/contact/" },
];

const abs = (p: string) => new URL(p, site.url).href;
const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

// hreflang alternates for a bilingual page, given its NL and EN paths.
// x-default points to the NL version per the project's default-language choice.
export function alternatesFor(nlPath: string, enPath: string) {
  return [
    { hreflang: "nl", href: abs(nlPath) },
    { hreflang: "en", href: abs(enPath) },
    { hreflang: "x-default", href: abs(nlPath) },
  ];
}

// The URL to switch the current page to the other language. Falls back to the
// other language's homepage when the current page has no mapped translation.
export function switchUrl(currentPath: string, currentLang: Lang): string {
  const p = norm(currentPath);
  const pair = pagePairs.find((x) => x.nl === p || x.en === p);
  if (pair) return currentLang === "nl" ? pair.en : pair.nl;
  return currentLang === "nl" ? "/en/" : "/";
}
