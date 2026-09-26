import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import MarkdownContent from "./MarkdownContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPost(slug: string) {
  await connectDB();

  return BlogPost.findOne({
    slug,
    status: "published",
  }).lean();
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.seo?.metaTitle || post.title;

  const description =
    post.seo?.metaDescription || post.excerpt;

  const canonicalUrl =
    post.seo?.canonicalUrl ||
    `https://www.applotie.com/blog/${post.slug}`;

  const ogImage =
    post.seo?.ogImage || post.featuredImage;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author],
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl =
    post.seo?.canonicalUrl ||
    `https://www.applotie.com/blog/${post.slug}`;

  const ogImage =
    post.seo?.ogImage || post.featuredImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description: post.excerpt,

    url: canonicalUrl,

    author: {
      "@type": "Person",
      name: post.author,
    },

    publisher: {
      "@type": "Organization",
      name: "Applotie Technologies",
      url: "https://www.applotie.com",
    },

    datePublished: post.publishedAt
      ? post.publishedAt.toISOString()
      : post.createdAt.toISOString(),

    dateModified: post.updatedAt.toISOString(),

    image: ogImage ? [ogImage] : [],

    articleSection: post.category,

    keywords: post.seo?.keywords?.join(", "),
  };

  return (
    <main className="min-h-screen bg-white text-[#111318]">

      {/* ARTICLE HEADER */}
      <section className="relative overflow-hidden border-b border-[#111318]/10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1113180d 1px, transparent 1px), linear-gradient(to bottom, #1113180d 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E52B2B] transition hover:text-[#111318]"
          >
            ← Back to insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-[#111318] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>

            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#111318]/15 bg-white px-4 py-2 text-xs font-medium text-[#5F6368]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            {post.title}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#5F6368] sm:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#5F6368]">
            <span className="font-semibold text-[#111318]">
              By {post.author}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#F5C518]" />

            {post.publishedAt && (
              <time dateTime={post.publishedAt.toISOString()}>
                {new Date(
                  post.publishedAt
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {post.featuredImage && (
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="overflow-hidden rounded-[2rem] bg-[#111318]">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="max-h-[680px] w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* ARTICLE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="grid lg:grid-cols-[180px_minmax(0,760px)_1fr] lg:gap-12">
          {/* LEFT META */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 border-t border-[#111318]/10 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6368]">
                Written by
              </p>

              <p className="mt-2 text-sm font-bold">
                {post.author}
              </p>

              <div className="mt-8 h-px bg-[#111318]/10" />

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6368]">
                Category
              </p>

              <p className="mt-2 text-sm font-semibold">
                {post.category}
              </p>

              {post.tags?.length > 0 && (
                <>
                  <div className="mt-8 h-px bg-[#111318]/10" />

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6368]">
                    Topics
                  </p>

                  <div className="mt-3 flex flex-col gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-[#5F6368]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </aside>

          {/* CONTENT */}
          <article>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />

            <div className="rounded-2xl border border-[#111318]/10 bg-[#F7F7F5] p-6 sm:p-8">
              <p className="text-sm font-semibold leading-6 text-[#5F6368]">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-10">
              <MarkdownContent content={post.content} />
            </div>
          </article>

          {/* RIGHT DECORATIVE AREA */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <div className="relative ml-auto h-40 w-40">
                <div className="absolute inset-0 rounded-full border border-[#111318]/10" />

                <div className="absolute inset-6 rounded-full border border-[#E52B2B]/20" />

                <span className="absolute right-1 top-10 h-3 w-3 rounded-full bg-[#E52B2B]" />

                <span className="absolute bottom-5 left-5 h-4 w-4 rounded-full bg-[#F5C518]" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ARTICLE FOOTER CTA */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#111318] px-8 py-14 text-black sm:px-12 lg:px-16 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C518]">
            Keep building
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Have a digital problem worth solving?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-red-900">
            Let's talk about your website, software, SEO or
            digital growth goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#F5C518] px-6 py-3.5 text-sm font-bold text-[#111318] transition hover:bg-white"
            >
              Start a conversation →
            </Link>

            <Link
              href="/blog"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-white hover:bg-white hover:text-[#111318]"
            >
              More articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}