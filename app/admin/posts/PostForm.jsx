"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const EMPTY_FORM = {
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
};

const COPY = {
  create: {
    heading: "Create Post",
    intro: "Write, optimize, and publish a new article for Applotie Insights.",
    basicInfo: "The main content and identity of your article.",
    slugHint: "Automatically generated from the title. You can edit it if needed.",
    previewClass: "bg-ivory",
    submit: "Create Post",
    submitting: "Creating...",
    failed: "Failed to create post",
  },
  edit: {
    heading: "Edit Post",
    intro: "Update your article, content, and search optimization settings.",
    basicInfo: "Edit the main content and identity of your article.",
    slugHint: "Changing the slug changes the public URL of this article.",
    previewClass: "bg-stone",
    submit: "Update Post",
    submitting: "Saving...",
    failed: "Failed to update post",
  },
};

const sectionClass = "rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_35px_rgba(17,18,20,0.04)]";
const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-ivory px-4 text-sm outline-none transition placeholder:text-text-muted focus:border-signal-red focus:bg-white focus:ring-4 focus:ring-signal-red/10";
const inputClass = `${fieldClass} py-3.5`;
const sideInputClass = `${fieldClass} py-3`;
const textareaClass = `${fieldClass} resize-none py-3.5 leading-6`;

// Mirrors the server's slug rules closely enough for a live preview; the API validates the result.
function generateSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function splitList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toFormData(post) {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    featuredImage: post.featuredImage || "",
    author: post.author,
    category: post.category,
    tags: post.tags?.join(", ") || "",
    status: post.status,
    seo: {
      metaTitle: post.seo?.metaTitle || "",
      metaDescription: post.seo?.metaDescription || "",
      keywords: post.seo?.keywords?.join(", ") || "",
      canonicalUrl: post.seo?.canonicalUrl || "",
      ogImage: post.seo?.ogImage || "",
    },
  };
}

function errorMessage(data, fallback) {
  return data.errors?.length
    ? data.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(" · ")
    : data.message || fallback;
}

/** Create form when `id` is absent, edit form for that post otherwise. */
export default function PostForm({ id }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  const copy = isEdit ? COPY.edit : COPY.create;

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  // New posts keep generating the slug from the title until the admin edits the slug themselves.
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Failed to fetch post");
          return;
        }

        setFormData(toFormData(data.post));
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name.startsWith("seo.")) {
      const seoField = name.slice("seo.".length);
      setFormData((previous) => ({ ...previous, seo: { ...previous.seo, [seoField]: value } }));
      return;
    }

    if (!isEdit && name === "title") {
      setFormData((previous) => ({
        ...previous,
        title: value,
        slug: slugTouched ? previous.slug : generateSlug(value),
      }));
      return;
    }

    if (!isEdit && name === "slug") {
      setSlugTouched(value !== "");
      setFormData((previous) => ({ ...previous, slug: generateSlug(value).replace(/^-/, "") }));
      return;
    }

    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSaving(true);

    try {
      const response = await fetch(isEdit ? `/api/posts/${id}` : "/api/posts", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          slug: formData.slug.replace(/^-+|-+$/g, ""),
          tags: splitList(formData.tags),
          seo: { ...formData.seo, keywords: splitList(formData.seo.keywords) },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(errorMessage(data, copy.failed));
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ivory px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-ink/10 border-t-signal-red" />

          <p className="text-sm font-semibold text-text-secondary">Loading post...</p>
        </div>
      </main>
    );
  }

  if (isEdit && error && !formData.title) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ivory px-6">
        <div className="w-full max-w-md rounded-2xl border border-signal-red/20 bg-white p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-signal-red/10 text-signal-red">
            !
          </div>

          <h1 className="text-xl font-black">Unable to load post</h1>

          <p className="mt-2 text-sm text-text-secondary">{error}</p>

          <Link href="/admin" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white">
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* Header */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/admin" className="text-xl font-black tracking-[-0.05em]">
            APPlotie
            <span className="text-signal-red">.</span>
          </Link>

          <Link href="/admin" className="text-sm font-semibold text-text-secondary transition hover:text-signal-red">
            ← Dashboard
          </Link>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-signal-red/10" />
        <div className="pointer-events-none absolute right-32 top-36 h-2 w-2 rounded-full bg-muted-gold" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          {/* Page heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-signal-red">Content Management</p>

              <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                {copy.heading}
                <span className="text-signal-red">.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">{copy.intro}</p>
            </div>

            {isEdit ? (
              <div
                className={`w-fit rounded-full px-4 py-2 text-xs font-bold ${
                  formData.status === "published" ? "bg-signal-red/10 text-burgundy" : "bg-muted-gold/20 text-burgundy"
                }`}
              >
                {formData.status === "published" ? "Published" : "Draft"}
              </div>
            ) : (
              <div className="rounded-full bg-muted-gold/20 px-4 py-2 text-xs font-bold text-burgundy">New Article</div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
              {/* Main editor */}
              <div className="space-y-6">
                {/* Basic Information */}
                <section className={`${sectionClass} sm:p-8`}>
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">01</p>

                    <h2 className="text-xl font-black tracking-[-0.03em]">Basic Information</h2>

                    <p className="mt-1 text-sm text-text-secondary">{copy.basicInfo}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="title" className="mb-2 block text-sm font-bold">
                        Title
                      </label>

                      <input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. How Next.js Helps Improve SEO"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="slug" className="mb-2 block text-sm font-bold">
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

                      <p className="mt-2 text-xs text-text-muted">{copy.slugHint}</p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label htmlFor="excerpt" className="text-sm font-bold">
                          Excerpt
                        </label>

                        <span className="text-xs text-text-muted">{formData.excerpt.length}/300</span>
                      </div>

                      <textarea
                        id="excerpt"
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        rows={4}
                        placeholder="A short description that explains what this article is about..."
                        required
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label htmlFor="content" className="text-sm font-bold">
                          Content
                        </label>

                        <span className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-text-secondary">
                          Markdown
                        </span>
                      </div>

                      <div className="grid gap-5 xl:grid-cols-2">
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

                        <div
                          className={`min-h-[500px] overflow-hidden rounded-xl border border-ink/10 ${copy.previewClass}`}
                        >
                          <div className="border-b border-ink/10 px-5 py-3">
                            <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-secondary">
                              Live Preview
                            </span>
                          </div>

                          <div className="max-h-[570px] overflow-y-auto p-5">
                            <div>
                              <h3>Preview</h3>

                              {formData.content.trim() ? (
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{formData.content}</ReactMarkdown>
                              ) : (
                                <p>Start writing to see the preview...</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SEO */}
                <section className={`${sectionClass} sm:p-8`}>
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">03</p>

                    <h2 className="text-xl font-black tracking-[-0.03em]">Search Optimization</h2>

                    <p className="mt-1 text-sm text-text-secondary">
                      Control how this article appears in search engines and social sharing.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label htmlFor="seo.metaTitle" className="text-sm font-bold">
                          Meta Title
                        </label>

                        <span className="text-xs text-text-muted">{formData.seo.metaTitle.length}/60</span>
                      </div>

                      <input
                        id="seo.metaTitle"
                        name="seo.metaTitle"
                        value={formData.seo.metaTitle}
                        onChange={handleChange}
                        maxLength={60}
                        placeholder="SEO optimized page title"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between">
                        <label htmlFor="seo.metaDescription" className="text-sm font-bold">
                          Meta Description
                        </label>

                        <span className="text-xs text-text-muted">{formData.seo.metaDescription.length}/160</span>
                      </div>

                      <textarea
                        id="seo.metaDescription"
                        name="seo.metaDescription"
                        value={formData.seo.metaDescription}
                        onChange={handleChange}
                        maxLength={160}
                        rows={4}
                        placeholder="Describe this article for search results..."
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="seo.keywords" className="mb-2 block text-sm font-bold">
                        Keywords
                      </label>

                      <input
                        id="seo.keywords"
                        name="seo.keywords"
                        value={formData.seo.keywords}
                        onChange={handleChange}
                        placeholder="nextjs, seo, web development"
                        className={inputClass}
                      />

                      <p className="mt-2 text-xs text-text-muted">Separate keywords with commas.</p>
                    </div>

                    <div>
                      <label htmlFor="seo.canonicalUrl" className="mb-2 block text-sm font-bold">
                        Canonical URL
                      </label>

                      <input
                        id="seo.canonicalUrl"
                        name="seo.canonicalUrl"
                        value={formData.seo.canonicalUrl}
                        onChange={handleChange}
                        placeholder="https://www.applotie.com/blog/example"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="seo.ogImage" className="mb-2 block text-sm font-bold">
                        OG Image URL
                      </label>

                      <input
                        id="seo.ogImage"
                        name="seo.ogImage"
                        value={formData.seo.ogImage}
                        onChange={handleChange}
                        placeholder="https://example.com/og-image.jpg"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Publish */}
                <section className={sectionClass}>
                  <h2 className="mb-5 text-lg font-black tracking-[-0.03em]">Publish</h2>

                  <div>
                    <label htmlFor="status" className="mb-2 block text-sm font-bold">
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
                    disabled={saving}
                    className="mt-5 w-full rounded-xl bg-signal-red px-5 py-3.5 text-sm font-bold text-white transition hover:bg-signal-red disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving ? copy.submitting : copy.submit}
                  </button>

                  <Link
                    href="/admin"
                    className="mt-3 block w-full rounded-xl border border-ink/10 px-5 py-3.5 text-center text-sm font-bold transition hover:bg-ivory"
                  >
                    Cancel
                  </Link>
                </section>

                {/* Post Information */}
                <section className={sectionClass}>
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-signal-red">02</p>

                    <h2 className="text-lg font-black tracking-[-0.03em]">Post Information</h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="featuredImage" className="mb-2 block text-sm font-bold">
                        Featured Image URL
                      </label>

                      <input
                        id="featuredImage"
                        name="featuredImage"
                        value={formData.featuredImage}
                        onChange={handleChange}
                        placeholder="https://..."
                        className={sideInputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="author" className="mb-2 block text-sm font-bold">
                        Author
                      </label>

                      <input
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author name"
                        required
                        className={sideInputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="mb-2 block text-sm font-bold">
                        Category
                      </label>

                      <input
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Development"
                        required
                        className={sideInputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="tags" className="mb-2 block text-sm font-bold">
                        Tags
                      </label>

                      <input
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="nextjs, seo, javascript"
                        className={sideInputClass}
                      />

                      <p className="mt-2 text-xs text-text-muted">Separate tags with commas.</p>
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
