import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import MarkdownContent from "./MarkdownContent";
import FinalCTA from "@/components/cta";


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
    <main className="min-h-screen bg-white text-ink">

      {/* ARTICLE HEADER */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-signal-red transition hover:text-ink"
          >
            ← Back to insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>

            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-medium text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            {post.title}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-text-secondary">
            <span className="font-semibold text-ink">
              By {post.author}
            </span>

            <span className="h-1 w-1 rounded-full bg-muted-gold" />

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
          <div className="overflow-hidden rounded-[2rem] bg-ink">
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
            <div className="sticky top-10 border-t border-ink/10 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                Written by
              </p>

              <p className="mt-2 text-sm font-bold">
                {post.author}
              </p>

              <div className="mt-8 h-px bg-ink/10" />

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                Category
              </p>

              <p className="mt-2 text-sm font-semibold">
                {post.category}
              </p>

              {post.tags?.length > 0 && (
                <>
                  <div className="mt-8 h-px bg-ink/10" />

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary">
                    Topics
                  </p>

                  <div className="mt-3 flex flex-col gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-text-secondary"
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

            <div className="rounded-2xl border border-ink/10 bg-ivory p-6 sm:p-8">
              <p className="text-sm font-semibold leading-6 text-text-secondary">
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
                <div className="absolute inset-0 rounded-full border border-ink/10" />

                <div className="absolute inset-6 rounded-full border border-signal-red/20" />

                <span className="absolute right-1 top-10 h-3 w-3 rounded-full bg-signal-red" />

                <span className="absolute bottom-5 left-5 h-4 w-4 rounded-full bg-muted-gold" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ARTICLE FOOTER CTA */}
      <FinalCTA />
    </main>
  );
}