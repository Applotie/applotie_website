// Blog data access for the public site. Posts are managed in /admin and stored in MongoDB.
import { cache } from "react";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";

// Card colours cycle through the brand palette, like the design's journal cards.
const SWATCHES = [
  { bg: "#ff2d2d", fg: "#111111" },
  { bg: "#2f5bff", fg: "#ffe14d" },
  { bg: "#ffe14d", fg: "#111111" },
  { bg: "#4a74ff", fg: "#111111" },
  { bg: "#ececf1", fg: "#ff2d2d" },
  { bg: "#ffffff", fg: "#111111" },
];

export function readingMinutes(content = "") {
  const words = String(content).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(d) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return "";
  }
}

/** Plain, serialisable card data (safe to pass to client components). */
export function toCard(post, i = 0) {
  const sw = SWATCHES[i % SWATCHES.length];
  const cat = post.category || "Journal";
  return {
    slug: post.slug,
    href: `/blog/${post.slug}`,
    cat,
    title: post.title,
    dek: post.excerpt || "",
    read: `${readingMinutes(post.content)} min read`,
    image: post.featuredImage || "",
    author: post.author || "Applotie team",
    date: formatDate(post.publishedAt || post.createdAt),
    glyph: (cat[0] || "A").toUpperCase(),
    bg: sw.bg,
    fg: sw.fg,
  };
}

export async function getPublishedPosts() {
  try {
    await connectDB();
    const posts = await BlogPost.find({ status: "published" }).sort({ publishedAt: -1, createdAt: -1 }).lean();
    return posts;
  } catch (err) {
    console.error("[blog] could not load posts", err);
    return [];
  }
}

// Cached per request, so generateMetadata and the page share one query.
export const getPost = cache(async (slug) => {
  if (typeof slug !== "string" || !/^[a-z0-9-]{1,200}$/.test(slug)) return null;
  await connectDB();
  return BlogPost.findOne({ slug, status: "published" }).lean();
});

export async function getRelated(post, limit = 3) {
  try {
    await connectDB();
    const same = await BlogPost.find({ status: "published", slug: { $ne: post.slug }, category: post.category })
      .sort({ publishedAt: -1 })
      .limit(limit)
      .lean();
    if (same.length >= limit) return same;
    const more = await BlogPost.find({
      status: "published",
      slug: { $nin: [post.slug, ...same.map((p) => p.slug)] },
    })
      .sort({ publishedAt: -1 })
      .limit(limit - same.length)
      .lean();
    return [...same, ...more];
  } catch {
    return [];
  }
}

/** Turn a heading into an anchor id. */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[`*_~[\]()#>!]/g, "")
    .replace(/[^a-z0-9ऀ-ॿ]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Level-2 headings from markdown, for the "In this article" list. */
export function tocFromMarkdown(md = "") {
  const out = [];
  let fence = false;
  String(md)
    .split("\n")
    .forEach((line) => {
      if (/^\s*```/.test(line)) fence = !fence;
      if (fence) return;
      const m = /^##\s+(.+?)\s*#*\s*$/.exec(line);
      if (m) out.push({ id: slugify(m[1]), label: m[1].replace(/[*_`]/g, "") });
    });
  return out;
}
