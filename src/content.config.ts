import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Blog content collection configuration
 * Uses Astro's file-based loader to load markdown files from src/content/blog
 */
const blog = defineCollection({
  loader: glob({ 
    pattern: "**/[^_]*.md", 
    base: "./src/content/blog" 
  }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default("Farhan"),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

export const collections = { blog };
