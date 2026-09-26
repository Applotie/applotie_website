"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-12 text-[#111318]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,19,24,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,19,24,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Decorative red route */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border border-[#E52B2B]/20" />

      <div className="pointer-events-none absolute -right-12 top-36 h-2 w-2 rounded-full bg-[#F5C518]" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full border border-[#111318]/10" />

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <a
            href="/"
            className="inline-flex items-center text-2xl font-black tracking-[-0.05em]"
          >
            APPlotie
            <span className="ml-1 text-[#E52B2B]">.</span>
          </a>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#E52B2B]" />
            <span className="h-1.5 w-3 rounded-full bg-[#F5C518]" />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-[#111318]/10 bg-white p-7 shadow-[0_20px_70px_rgba(17,19,24,0.08)] sm:p-9">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E52B2B]">
              Admin Panel
            </p>

            <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Welcome back.
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#666A72]">
              Sign in to manage your Applotie blog.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#111318]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#111318]/15 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999CA2] focus:border-[#E52B2B] focus:bg-white focus:ring-4 focus:ring-[#E52B2B]/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#111318]"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-[#111318]/15 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#999CA2] focus:border-[#E52B2B] focus:bg-white focus:ring-4 focus:ring-[#E52B2B]/10"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-[#E52B2B]/20 bg-[#E52B2B]/5 px-4 py-3 text-sm font-medium text-[#C92121]">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#111318] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#E52B2B] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="relative z-10">
                {loading ? "Logging in..." : "Login to dashboard"}
              </span>
            </button>
          </form>

          <div className="mt-7 border-t border-[#111318]/10 pt-6 text-center">
            <a
              href="/blog"
              className="text-sm font-semibold text-[#666A72] transition hover:text-[#E52B2B]"
            >
              ← Back to blog
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#999CA2]">
          Applotie Technologies · Admin access
        </p>
      </div>
    </main>
  );
}