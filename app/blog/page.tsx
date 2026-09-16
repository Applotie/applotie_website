const posts = [
  {
    category: "Strategy",
    title: "How to build a digital presence that compounds",
    excerpt:
      "A practical framework for aligning positioning, product experience and growth channels.",
  },
  {
    category: "Development",
    title: "What makes a website feel fast",
    excerpt:
      "The technical and design decisions that turn a polished interface into a responsive one.",
  },
  {
    category: "Growth",
    title: "Turning attention into qualified demand",
    excerpt:
      "A closer look at the systems behind sustainable SEO and performance marketing.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#202124]">
      <section className="border-b border-[#202124]/10 px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E52B2B]">
            Applotie Journal
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Ideas for building better digital products.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#202124]/60 sm:text-lg">
            Practical thinking on strategy, design, development and growth for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(32,33,36,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.08)_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="relative overflow-hidden border border-[#202124]/10 bg-white p-6 shadow-[0_16px_45px_rgba(32,33,36,0.06)] sm:p-8"
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E52B2B]">
                  {post.category}
                </span>
                <span className="text-sm font-semibold text-[#F0B900]">
                  0{index + 1}
                </span>
              </div>
              <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#202124]/60">
                {post.excerpt}
              </p>
              <span className="mt-8 inline-flex text-sm font-semibold text-[#202124]">
                Read article <span className="ml-2 text-[#E52B2B]">↗</span>
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
