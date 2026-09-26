import { z } from "zod";

export const blogPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(150, "Title cannot exceed 150 characters"),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only contain lowercase letters, numbers and hyphens"
    ),

  excerpt: z
    .string()
    .trim()
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt cannot exceed 300 characters"),

  content: z
    .string()
    .min(1, "Content is required"),

  featuredImage: z
    .string()
    .optional(),

  author: z
    .string()
    .trim()
    .min(2, "Author is required"),

  category: z
    .string()
    .trim()
    .min(2, "Category is required"),

  tags: z
    .array(z.string())
    .default([]),

  status: z
    .enum(["draft", "published"])
    .default("draft"),

  publishedAt: z
    .coerce
    .date()
    .optional(),

  seo: z
    .object({
      metaTitle: z
        .string()
        .max(60, "SEO title should be 60 characters or less")
        .optional(),

      metaDescription: z
        .string()
        .max(
          160,
          "Meta description should be 160 characters or less"
        )
        .optional(),

      keywords: z
        .array(z.string())
        .default([]),

      canonicalUrl: z
        .string()
        .url("Invalid canonical URL")
        .optional()
        .or(z.literal("")),

      ogImage: z
        .string()
        .optional(),
    })
    .default({}),
});