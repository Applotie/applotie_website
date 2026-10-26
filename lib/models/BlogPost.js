import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    featuredImage: { type: String, default: "" },
    author: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: { type: Date },
    seo: {
      metaTitle: { type: String, default: "" },
      metaDescription: { type: String, default: "" },
      keywords: { type: [String], default: [] },
      canonicalUrl: { type: String, default: "" },
      ogImage: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

// Public listing, related posts and the sitemap all filter by status and sort by publish date.
PostSchema.index({ status: 1, publishedAt: -1 });

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
