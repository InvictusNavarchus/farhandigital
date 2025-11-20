import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

/**
 * Convert SVG buffer to PNG buffer using Resvg
 */
function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

/**
 * Generate OG image for a blog post
 */
export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

/**
 * Generate OG image for the site
 */
export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}
