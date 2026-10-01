import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import DeletePostButton from "./DeletePostButton";
import LogoutButton from "./LogoutButton";

export default async function AdminPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  await connectDB();

  const posts = await BlogPost.find()
    .sort({ createdAt: -1 })
    .lean();

  const publishedCount = posts.filter(
    (post) => post.status === "published"
  ).length;

  const draftCount = posts.filter(
    (post) => post.status === "draft"
  ).length;

  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* Top navigation */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-[-0.05em]"
          >
            Applotie
            <span className="text-signal-red">.</span>
          </Link>

          <div className="flex items-center gap-3">
  <Link
    href="/blog"
    target="_blank"
    className="hidden rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold transition hover:border-ink/25 hover:bg-ivory sm:inline-flex"
  >
    View Blog ↗
  </Link>

  <LogoutButton />

  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
    A
  </div>
</div>
        </div>
      </header>

      {/* Background */}
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full border border-signal-red/10" />

        <div className="pointer-events-none absolute right-32 top-32 h-2 w-2 rounded-full bg-muted-gold" />

        <div className="pointer-events-none absolute -left-20 bottom-20 h-48 w-48 rounded-full border border-ink/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          {/* Dashboard heading */}
          <section className="mb-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-signal-red">
                  Content Management
                </p>

                <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                  Dashboard
                  <span className="text-signal-red">.</span>
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                  Manage your Applotie Insights, publish new articles,
                  and keep your content up to date.
                </p>
              </div>

              <Link
                href="/admin/posts/create"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-signal-red px-5 py-3.5 text-sm font-bold text-white transition hover:bg-signal-red"
              >
                <span className="text-lg leading-none">+</span>
                Create Post
              </Link>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-10 grid gap-4 sm:grid-cols-3">
            {/* Total */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
              <div className="mb-5 flex items-start justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Total Posts
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white">
                  ∑
                </span>
              </div>

              <p className="text-3xl font-black tracking-[-0.04em]">
                {posts.length}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                All articles
              </p>
            </div>

            {/* Published */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
              <div className="mb-5 flex items-start justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Published
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-red text-xs font-bold text-white">
                  ✓
                </span>
              </div>

              <p className="text-3xl font-black tracking-[-0.04em]">
                {publishedCount}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                Live on the website
              </p>
            </div>

            {/* Drafts */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
              <div className="mb-5 flex items-start justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Drafts
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted-gold text-xs font-bold text-ink">
                  D
                </span>
              </div>

              <p className="text-3xl font-black tracking-[-0.04em]">
                {draftCount}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                Not published yet
              </p>
            </div>
          </section>

          {/* Posts section */}
          <section className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_35px_rgba(17,18,20,0.04)]">
            {/* Section header */}
            <div className="flex flex-col justify-between gap-3 border-b border-ink/10 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
              <div>
                <h2 className="text-lg font-black tracking-[-0.025em]">
                  Blog Posts
                </h2>

                <p className="mt-1 text-xs text-text-muted">
                  Manage your articles and publishing status.
                </p>
              </div>

              <span className="w-fit rounded-full bg-ivory px-3 py-1.5 text-xs font-semibold text-text-secondary">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </span>
            </div>

            {posts.length === 0 ? (
              <div className="px-6 py-20 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory text-2xl">
                  ✦
                </div>

                <h3 className="text-lg font-bold">
                  No posts yet
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-text-secondary">
                  Your first article is waiting to be written.
                  Create a post to get started.
                </p>

                <Link
                  href="/admin/posts/create"
                  className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-signal-red"
                >
                  Create your first post
                </Link>
              </div>
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-ink/10 bg-ivory text-left">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
                          Article
                        </th>

                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
                          Category
                        </th>

                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
                          Status
                        </th>

                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {posts.map((post) => (
                        <tr
                          key={post._id.toString()}
                          className="border-b border-ink/10 last:border-0"
                        >
                          {/* Article */}
                          <td className="max-w-md px-6 py-5">
                            <Link
                              href={`/admin/posts/${post._id}`}
                              className="group"
                            >
                              <h3 className="font-bold leading-6 transition group-hover:text-signal-red">
                                {post.title}
                              </h3>

                              <p className="mt-1 truncate text-xs text-text-muted">
                                /blog/{post.slug}
                              </p>
                            </Link>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-5">
                            <span className="rounded-full bg-ivory px-3 py-1.5 text-xs font-semibold text-text-secondary">
                              {post.category}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-6 py-5">
                            {post.status === "published" ? (
                              <span className="inline-flex items-center gap-2 rounded-full bg-signal-red/8 px-3 py-1.5 text-xs font-bold text-burgundy">
                                <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
                                Published
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-2 rounded-full bg-muted-gold/20 px-3 py-1.5 text-xs font-bold text-burgundy">
                                <span className="h-1.5 w-1.5 rounded-full bg-muted-gold" />
                                Draft
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                href={`/admin/posts/${post._id}`}
                                className="rounded-lg border border-ink/10 px-3 py-2 text-xs font-bold transition hover:border-ink/25 hover:bg-ivory"
                              >
                                Edit
                              </Link>

                              <DeletePostButton
                                id={post._id.toString()}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="divide-y divide-ink/10 md:hidden">
                  {posts.map((post) => (
                    <article
                      key={post._id.toString()}
                      className="p-5"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        {post.status === "published" ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-signal-red/8 px-3 py-1.5 text-xs font-bold text-burgundy">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-muted-gold/20 px-3 py-1.5 text-xs font-bold text-burgundy">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-gold" />
                            Draft
                          </span>
                        )}

                        <span className="text-xs text-text-muted">
                          {post.category}
                        </span>
                      </div>

                      <Link href={`/admin/posts/${post._id}`}>
                        <h3 className="text-lg font-bold leading-6 transition hover:text-signal-red">
                          {post.title}
                        </h3>

                        <p className="mt-2 truncate text-xs text-text-muted">
                          /blog/{post.slug}
                        </p>
                      </Link>

                      <div className="mt-5 flex items-center gap-2">
                        <Link
                          href={`/admin/posts/${post._id}`}
                          className="flex-1 rounded-lg border border-ink/10 px-4 py-2.5 text-center text-xs font-bold transition hover:bg-ivory"
                        >
                          Edit Post
                        </Link>

                        <DeletePostButton
                          id={post._id.toString()}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Bottom note */}
          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-text-muted sm:flex-row">
            <p>Applotie Insights CMS</p>

            <Link
              href="/blog"
              className="font-semibold transition hover:text-signal-red"
            >
              Open public blog →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}