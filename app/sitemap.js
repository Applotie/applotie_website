import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { SITE_URL } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

// Indexable public pages. /terms is left out while it duplicates the privacy policy (it is noindex).
const STATIC_PATHS = [
  "",
  "/services",
  "/services/web-development-in-patna",
  "/services/app-development-in-patna",
  "/services/seo-services-in-patna",
  "/services/performance-marketing-in-patna",
  "/services/reputation-management-in-patna",
  "/services/branding-agency-in-patna",
  "/products",
  "/products/clinic-management-software",
  "/projects",
  "/about",
  "/contact",
  "/blog",
  "/privacy",
];

export default async function sitemap() {
  let posts = [];
  try {
    await connectDB();
    posts = await BlogPost.find({ status: "published" })
      .select("slug updatedAt publishedAt")
      .sort({ publishedAt: -1 })
      .lean();
  } catch (error) {
    console.error("[sitemap] could not load posts", error);
  }

  // Static pages get no lastModified: stamping "now" on every request tells crawlers nothing.
  const staticPages = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(path === "/blog" && posts[0] ? { lastModified: posts[0].updatedAt ?? posts[0].publishedAt } : {}),
  }));

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
  }));

  return [...staticPages, ...blogPages];
}
