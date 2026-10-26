import { notFound } from "next/navigation";
import BlogPostView from "@/components/site/pages/BlogPost";
import JsonLd from "@/components/site/JsonLd";
import { getPost, getRelated, readingMinutes, toCard, tocFromMarkdown } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, SITE_URL, breadcrumbLd } from "@/lib/site-seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: { absolute: "Article not found | Applotie" },
      description: "The requested article could not be found.",
      robots: { index: false, follow: true },
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const canonicalUrl = post.seo?.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.seo?.ogImage || post.featuredImage;
  const images = ogImage ? [{ url: ogImage, alt: post.title }] : [DEFAULT_OG_IMAGE];

  return {
    title: { absolute: `${title} | Applotie` },
    description,
    keywords: post.seo?.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      authors: post.author ? [post.author] : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      section: post.category,
      tags: post.seo?.keywords,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = (await getRelated(post)).map((p, i) => toCard(p, i + 1));
  const card = toCard(post, 0);
  const url = post.seo?.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.seo?.ogImage || post.featuredImage;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE_URL}/#business` },
    datePublished: new Date(post.publishedAt || post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt || post.createdAt).toISOString(),
    image: [ogImage ? new URL(ogImage, SITE_URL).toString() : `${SITE_URL}${DEFAULT_OG_IMAGE.url}`],
    articleSection: post.category,
    keywords: post.seo?.keywords?.join(", "),
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <BlogPostView
        post={card}
        url={url}
        content={post.content || ""}
        toc={tocFromMarkdown(post.content)}
        minutes={readingMinutes(post.content)}
        related={related}
      />
    </>
  );
}
