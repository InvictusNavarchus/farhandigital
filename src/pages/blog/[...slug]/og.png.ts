import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { getPostSlug } from "@/utils/blog/getPostPath";
import { generateOgImageForPost } from "@/utils/blog/generateOgImages";
import { SITE } from "@/config";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => {
    const slug = getPostSlug(post);
    
    return {
      params: { slug },
      props: post,
    };
  });
}

export const GET: APIRoute = async ({ props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const buffer = await generateOgImageForPost(props as CollectionEntry<"blog">);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
