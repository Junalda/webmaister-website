import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live as Markdown in src/content/blog/. GetAutoSEO (or Zapier)
// can publish by committing a new .md file here (directly or via the
// /api/blog/ingest webhook), which triggers a redeploy.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Webmaister"),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional URL slug; when set it overrides the filename for the route, so
    // files can be keyed by a stable id (used by the AutoSEO webhook).
    slug: z.string().optional(),
    // AutoSEO (getautoseo.com) integration fields.
    autoseoId: z.number().optional(),
    heroAlt: z.string().optional(),
    lang: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

// NL guide / knowledge base (/gids/). Answer-first articles with an FAQ.
const gids = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gids" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    answer: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().default(0),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    related: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { blog, gids };
