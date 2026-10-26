const isDev = process.env.NODE_ENV !== "production";

// No third-party scripts, frames or fonts are loaded (next/font self-hosts the Google fonts).
// 'unsafe-inline' for scripts is required by Next's inline bootstrap scripts without a per-request
// nonce, which would force every page to render dynamically. Blog images may come from any https host.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "media-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    agentUpgrade: "security",
  },
  // The Meddolic case-study page was removed; its summary still lives on the Work page.
  async redirects() {
    return [{ source: "/projects/meddolic", destination: "/projects", permanent: true }];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Images and the hero film in public/ default to max-age=0 (revalidated on every visit). Their names
      // are not content-hashed, so cache for a day rather than forever: a replaced file shows within 24h.
      {
        source: "/:file(.+\\.(?:webp|png|jpg|svg|mp4))",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
