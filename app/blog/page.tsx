import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import Link from "next/link";
import FinalCTA from "@/components/cta";


export default async function BlogPage() {
  await connectDB();

  const posts = await BlogPost.find({
    status: "published",
  })
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();

  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white text-[#111318]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#111318]/10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1113180d 1px, transparent 1px), linear-gradient(to bottom, #1113180d 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Decorative red route */}
        <div className="absolute right-[8%] top-[18%] hidden h-48 w-48 rounded-full border border-[#E52B2B]/20 lg:block" />

        <div className="absolute right-[14%] top-[32%] hidden h-3 w-3 rounded-full bg-[#F5C518] lg:block" />

        <div className="absolute right-[9%] top-[46%] hidden h-2 w-2 rounded-full bg-[#E52B2B] lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E52B2B]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#5F6368]">
                Applotie Insights
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Ideas that
              <span className="relative mx-3 inline-block">
                move
                <span className="absolute -bottom-1 left-0 h-2 w-full bg-[#F5C518] sm:h-3" />
              </span>
              businesses forward.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5F6368] sm:text-xl">
              Practical insights on technology, web development,
              SEO, digital marketing and building better digital
              experiences.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#111318]/15 bg-white px-4 py-2 text-sm font-medium">
              Development
            </span>

            <span className="rounded-full border border-[#111318]/15 bg-white px-4 py-2 text-sm font-medium">
              SEO
            </span>

            <span className="rounded-full border border-[#111318]/15 bg-white px-4 py-2 text-sm font-medium">
              Marketing
            </span>

            <span className="rounded-full border border-[#111318]/15 bg-white px-4 py-2 text-sm font-medium">
              Technology
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-[#111318]/10 bg-[#F7F7F5] px-6 py-20 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E52B2B]">
              Coming soon
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              No published articles yet.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[#5F6368]">
              We're working on useful insights around technology,
              development, SEO and digital growth.
            </p>
          </div>
        ) : (
          <>
            {/* FEATURED */}
            {featuredPost && (
              <div>
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E52B2B]">
                      Featured
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                      Start here.
                    </h2>
                  </div>
                </div>

                <article className="group overflow-hidden rounded-[2rem] border border-[#111318]/10 bg-[#F7F7F5]">
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGE */}
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="relative block min-h-[320px] overflow-hidden bg-[#111318] lg:min-h-[520px]"
                    >
                      {featuredPost.featuredImage ? (
                        <img
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="relative flex h-full min-h-[320px] items-center justify-center bg-[#111318]">
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)",
                              backgroundSize: "40px 40px",
                            }}
                          />

                          <span className="relative text-8xl font-black text-white/10">
                            A
                          </span>

                          <span className="absolute bottom-8 right-8 h-4 w-4 rounded-full bg-[#F5C518]" />
                          <span className="absolute left-8 top-8 h-3 w-3 rounded-full bg-[#E52B2B]" />
                        </div>
                      )}

                      <div className="absolute left-6 top-6">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                      </div>
                    </Link>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
                      <div>
                        <p className="text-sm font-medium text-[#5F6368]">
                          {featuredPost.publishedAt
                            ? new Date(
                                featuredPost.publishedAt
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })
                            : ""}
                        </p>

                        <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                          {featuredPost.title}
                        </h3>

                        <p className="mt-6 text-base leading-7 text-[#5F6368] sm:text-lg">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="mt-10 flex items-center justify-between border-t border-[#111318]/10 pt-6">
                        <span className="text-sm font-semibold">
                          By {featuredPost.author}
                        </span>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="group/link inline-flex items-center gap-3 text-sm font-bold"
                        >
                          Read article

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E52B2B] text-white transition group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* LATEST */}
            {latestPosts.length > 0 && (
              <div className="mt-28">
                <div className="mb-10 flex items-end justify-between border-b border-[#111318]/10 pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E52B2B]">
                      The latest
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                      From the journal.
                    </h2>
                  </div>

                  <span className="hidden text-sm text-[#5F6368] sm:block">
                    {latestPosts.length}{" "}
                    {latestPosts.length === 1
                      ? "article"
                      : "articles"}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {latestPosts.map((post) => (
                    <article
                      key={post._id.toString()}
                      className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#111318]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-[#111318]"
                      >
                        {post.featuredImage ? (
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div
                            className="flex h-full items-center justify-center"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)",
                              backgroundSize: "32px 32px",
                            }}
                          >
                            <span className="text-6xl font-black text-white/10">
                              A
                            </span>
                          </div>
                        )}

                        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </Link>

                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-medium text-[#5F6368]">
                          {post.publishedAt
                            ? new Date(
                                post.publishedAt
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : ""}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em]">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="transition group-hover:text-[#E52B2B]"
                          >
                            {post.title}
                          </Link>
                        </h3>

                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5F6368]">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold"
                          >
                            Read more
                            <span className="transition group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <FinalCTA />
    </main>
  );
}