import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPostPath } from "@/utils/blog/getPostPath";
import getSortedPosts from "@/utils/blog/getSortedPosts";
import { SITE } from "@/config";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.blogTitle,
    description: SITE.blogDescription,
    site: SITE.website,
    items: sortedPosts.map((post) => ({
      link: getPostPath(post),
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.modDatetime ?? post.data.pubDatetime),
    })),
  });
}
