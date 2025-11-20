import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  // Site URL for sitemap and canonical URLs
  site: "https://farhandigital.id",

  // Integrations
  integrations: [
    sitemap({
      // Filter out archives page if needed
      filter: (page) => !page.endsWith("/blog/archives/"),
    }),
  ],

  // Markdown configuration for blog posts
  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: {
      // Syntax highlighting themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  // Image optimization
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
});
