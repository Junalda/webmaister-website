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
  }),
});

export const collections = { blog };
