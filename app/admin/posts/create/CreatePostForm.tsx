"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MarkdownPreview from "../MarkdownPreview";

export default function CreatePostForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    author: "",
    category: "",
    tags: "",
    status: "draft",

    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      canonicalUrl: "",
      ogImage: "",
    },
  });

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    if (name === "title") {
      setFormData((previous) => ({
        ...previous,
        title: value,
        slug: generateSlug(value),
      }));

      return;
    }

    if (name.startsWith("seo.")) {
      const seoField = name.replace("seo.", "");

      setFormData((previous) => ({
        ...previous,
        seo: {
          ...previous.seo,
          [seoField]: value,
        },
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,

          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),

          seo: {
            ...formData.seo,

            keywords: formData.seo.keywords
              .split(",")
              .map((keyword) => keyword.trim())
              .filter(Boolean),
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to create post");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* Header */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/admin"
            className="text-xl font-black tracking-[-0.05em]"
          >
            APPlotie
            <span className="text-signal-red">.</span>
          </Link>

          <Link
            href="/admin"
            className="text-sm font-semibold text-text-secondary transition hover:text-signal-red"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      {/* Background */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-signal-red/10" />

        <div className="pointer-events-none absolute right-32 top-36 h-2 w-2 rounded-full bg-muted-gold" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          {/* Page heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-signal-red">
                Content Management
              </p>

              <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Create Post
                <span className="text-signal-red">.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                Write, optimize, and publish a new article for
                Applotie Insights.
              </p>
            </div>

            <div className="rounded-full bg-muted-gold/20 px-4 py-2 text-xs font-bold text-burgundy">
              New Article
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
              {/* Main editor */}
              <div className="space-y-6">
                {/* Basic Information */}
                <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_35px_rgba(17,18,20,0.04)] sm:p-8">
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">
                      01
                    </p>

                    <h2 className="text-xl font-black tracking-[-0.03em]">
                      Basic Information
                    </h2>

                    <p className="mt-1 text-sm text-text-secondary">
                      The main content and identity of your article.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-bold"
                      >
                        Title
                      </label>

                      <input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. How Next.js Helps Improve SEO"
                        required
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    {/* Slug */}
                    <div>
                      <label
                        htmlFor="slug"
                        className="mb-2 block text-sm font-bold"
                      >
                        Slug
                      </label>

                      <div className="flex items-center overflow-hidden rounded-xl border border-ink/15 bg-ivory focus-within:border-signal-red focus-within:bg-white focus-within:ring-4 focus-within:ring-signal-red/10">
                        <span className="hidden border-r border-ink/10 px-4 text-xs text-text-muted sm:block">
                          /blog/
                        </span>

                        <input
                          id="slug"
                          name="slug"
                          value={formData.slug}
                          onChange={handleChange}
                          placeholder="my-first-blog-post"
                          required
                          className="w-full bg-transparent px-4 py-3.5 text-sm outline-none"
                        />
                      </div>

                      <p className="mt-2 text-xs text-text-muted">
                        Automatically generated from the title. You can
                        edit it if needed.
                      </p>
                    </div>

                    {/* Excerpt */}
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label
                          htmlFor="excerpt"
                          className="text-sm font-bold"
                        >
                          Excerpt
                        </label>

                        <span className="text-xs text-text-muted">
                          {formData.excerpt.length}/300
                        </span>
                      </div>

                      <textarea
                        id="excerpt"
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        rows={4}
                        placeholder="A short description that explains what this article is about..."
                        required
                        className="w-full resize-none rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label
                          htmlFor="content"
                          className="text-sm font-bold"
                        >
                          Content
                        </label>

                        <span className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-text-secondary">
                          Markdown
                        </span>
                      </div>

                      <div className="grid gap-5 xl:grid-cols-2">
                        {/* Editor */}
                        <textarea
                          id="content"
                          name="content"
                          value={formData.content}
                          onChange={handleChange}
                          rows={24}
                          placeholder={`# Start writing...

Use Markdown to structure your article.

## Example heading

Write your content here...`}
                          required
                          className="min-h-[500px] w-full resize-y rounded-xl border border-border-dark bg-ink px-5 py-5 font-mono text-sm leading-7 text-text-dark-primary outline-none transition placeholder:text-white/30 focus:border-signal-red focus:ring-4 focus:ring-signal-red/10"
                        />

                        {/* Preview */}
                        <div className="min-h-[500px] overflow-hidden rounded-xl border border-ink/10 bg-ivory">
                          <div className="border-b border-ink/10 px-5 py-3">
                            <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-secondary">
                              Live Preview
                            </span>
                          </div>

                          <div className="max-h-[570px] overflow-y-auto p-5">
                            <MarkdownPreview
                              content={formData.content}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SEO */}
                <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_35px_rgba(17,18,20,0.04)] sm:p-8">
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">
                      03
                    </p>

                    <h2 className="text-xl font-black tracking-[-0.03em]">
                      Search Optimization
                    </h2>

                    <p className="mt-1 text-sm text-text-secondary">
                      Control how this article appears in search
                      engines and social sharing.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Meta title */}
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label
                          htmlFor="seo.metaTitle"
                          className="text-sm font-bold"
                        >
                          Meta Title
                        </label>

                        <span className="text-xs text-text-muted">
                          {formData.seo.metaTitle.length}/60
                        </span>
                      </div>

                      <input
                        id="seo.metaTitle"
                        name="seo.metaTitle"
                        value={formData.seo.metaTitle}
                        onChange={handleChange}
                        maxLength={60}
                        placeholder="SEO optimized page title"
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    {/* Meta description */}
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label
                          htmlFor="seo.metaDescription"
                          className="text-sm font-bold"
                        >
                          Meta Description
                        </label>

                        <span className="text-xs text-text-muted">
                          {formData.seo.metaDescription.length}/160
                        </span>
                      </div>

                      <textarea
                        id="seo.metaDescription"
                        name="seo.metaDescription"
                        value={formData.seo.metaDescription}
                        onChange={handleChange}
                        maxLength={160}
                        rows={4}
                        placeholder="Describe this article for search results..."
                        className="w-full resize-none rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    {/* Keywords */}
                    <div>
                      <label
                        htmlFor="seo.keywords"
                        className="mb-2 block text-sm font-bold"
                      >
                        Keywords
                      </label>

                      <input
                        id="seo.keywords"
                        name="seo.keywords"
                        value={formData.seo.keywords}
                        onChange={handleChange}
                        placeholder="nextjs, seo, web development"
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />

                      <p className="mt-2 text-xs text-text-muted">
                        Separate keywords with commas.
                      </p>
                    </div>

                    {/* Canonical */}
                    <div>
                      <label
                        htmlFor="seo.canonicalUrl"
                        className="mb-2 block text-sm font-bold"
                      >
                        Canonical URL
                      </label>

                      <input
                        id="seo.canonicalUrl"
                        name="seo.canonicalUrl"
                        value={formData.seo.canonicalUrl}
                        onChange={handleChange}
                        placeholder="https://www.applotie.com/blog/example"
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    {/* OG image */}
                    <div>
                      <label
                        htmlFor="seo.ogImage"
                        className="mb-2 block text-sm font-bold"
                      >
                        OG Image URL
                      </label>

                      <input
                        id="seo.ogImage"
                        name="seo.ogImage"
                        value={formData.seo.ogImage}
                        onChange={handleChange}
                        placeholder="https://example.com/og-image.jpg"
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Publish */}
                <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
                  <h2 className="mb-5 text-lg font-black tracking-[-0.03em]">
                    Publish
                  </h2>

                  <div>
                    <label
                      htmlFor="status"
                      className="mb-2 block text-sm font-bold"
                    >
                      Status
                    </label>

                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-sm font-medium outline-none transition focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  {error && (
                    <div className="mt-5 rounded-xl border border-signal-red/20 bg-signal-red/5 px-4 py-3 text-sm font-medium leading-5 text-burgundy">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 w-full rounded-xl bg-signal-red px-5 py-3.5 text-sm font-bold text-white transition hover:bg-signal-red disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Creating..." : "Create Post"}
                  </button>

                  <Link
                    href="/admin"
                    className="mt-3 block w-full rounded-xl border border-ink/10 px-5 py-3.5 text-center text-sm font-bold transition hover:bg-ivory"
                  >
                    Cancel
                  </Link>
                </section>

                {/* Post Information */}
                <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">
                      02
                    </p>

                    <h2 className="text-lg font-black tracking-[-0.03em]">
                      Post Information
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="featuredImage"
                        className="mb-2 block text-sm font-bold"
                      >
                        Featured Image URL
                      </label>

                      <input
                        id="featuredImage"
                        name="featuredImage"
                        value={formData.featuredImage}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="author"
                        className="mb-2 block text-sm font-bold"
                      >
                        Author
                      </label>

                      <input
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author name"
                        required
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-bold"
                      >
                        Category
                      </label>

                      <input
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Development"
                        required
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="tags"
                        className="mb-2 block text-sm font-bold"
                      >
                        Tags
                      </label>

                      <input
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="nextjs, seo, javascript"
                        className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10"
                      />

                      <p className="mt-2 text-xs text-text-muted">
                        Separate tags with commas.
                      </p>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}