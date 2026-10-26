import BlogPage from "@/components/site/pages/Blog";
import JsonLd from "@/components/site/JsonLd";
import { getPublishedPosts, toCard } from "@/lib/blog";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

// Posts are edited in /admin, so always read the latest from MongoDB.
export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Journal | Web, SEO & Marketing Notes from Patna | Applotie",
  description:
    "Practical notes on websites, apps, SEO and digital marketing from the Applotie team in Patna. Written by the people doing the work, for people running businesses.",
  path: "/blog",
});

export default async function Page() {
  const posts = (await getPublishedPosts()).map((p, i) => toCard(p, i));
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
      <BlogPage posts={posts} />
    </>
  );
}
