import type { CollectionEntry } from "astro:content";

/**
 * Get the URL path for a blog post
 * Uses natural Astro routing - posts are at /blog/{slug}
 * 
 * @param post - The blog post collection entry
 * @returns The URL path for the post (e.g., "/blog/my-post-title")
 */
export function getPostPath(post: CollectionEntry<"blog">): string {
  // Extract the slug from the post ID (last segment)
  const slug = post.id.split("/").pop()?.replace(/\.md$/, "") || post.id;
  
  // Return the natural Astro path
  return `/blog/${slug}`;
}

/**
 * Get just the slug portion for a blog post (without /blog/ prefix)
 * Used for generating static paths in [...slug].astro
 * 
 * @param post - The blog post collection entry
 * @returns The slug (e.g., "my-post-title")
 */
export function getPostSlug(post: CollectionEntry<"blog">): string {
  return post.id.split("/").pop()?.replace(/\.md$/, "") || post.id;
}
