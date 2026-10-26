import { z } from "zod";

// Image fields accept an http(s) URL or a site-relative path like "/blog/cover.png".
const imageUrl = z
  .string()
  .trim()
  .max(2048)
  .refine(
    (value) => value === "" || (value.startsWith("/") && !value.startsWith("//")) || /^https?:\/\/[^\s]+$/i.test(value),
    "Image must be an http(s) URL or a path starting with /"
  );

// Trimmed, de-duplicated (case-insensitive) list such as tags or keywords.
const shortList = z
  .array(z.string().trim().min(1).max(60))
  .max(30)
  .transform((items) => {
    const seen = new Set();
    return items.filter((item) => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  });

const seoFields = {
  metaTitle: z.string().trim().max(60, "SEO title should be 60 characters or less").optional(),
  metaDescription: z.string().trim().max(160, "Meta description should be 160 characters or less").optional(),
  keywords: shortList.optional(),
  canonicalUrl: z
    .url({ protocol: /^https?$/, error: "Invalid canonical URL" })
    .max(2048)
    .optional()
    .or(z.literal("")),
  ogImage: imageUrl.optional(),
};

// Field rules without defaults, shared by the create (full) and update (partial) schemas.
// publishedAt is set by the server on publish; clients cannot send it.
const postFields = {
  title: z.string().trim().min(5, "Title must be at least 5 characters").max(150, "Title cannot exceed 150 characters"),
  slug: z
    .string()
    .trim()
    .min(3, "Slug is required")
    .max(120, "Slug cannot exceed 120 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug can only contain lowercase letters, numbers and hyphens"),
  excerpt: z
    .string()
    .trim()
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt cannot exceed 300 characters"),
  content: z.string().min(1, "Content is required").max(200_000, "Content is too long"),
  featuredImage: imageUrl.optional(),
  author: z.string().trim().min(2, "Author is required").max(80),
  category: z.string().trim().min(2, "Category is required").max(60),
  tags: shortList,
  status: z.enum(["draft", "published"]),
};

export const blogPostSchema = z
  .object({
    ...postFields,
    // Optional on create: the API derives it from the title when it is blank.
    slug: postFields.slug.optional().or(z.literal("")),
    tags: shortList.default([]),
    status: postFields.status.default("draft"),
    seo: z
      .object({ ...seoFields, keywords: shortList.default([]) })
      .strict()
      .default({ keywords: [] }),
  })
  .strict();

/** Updates may send any subset of fields (no defaults are filled in); unknown keys are rejected. */
export const blogPostUpdateSchema = z
  .object({ ...postFields, seo: z.object(seoFields).strict() })
  .strict()
  .partial();
