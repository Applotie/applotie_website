import { SITE_URL } from "@/lib/site-seo";

// robots.txt is crawl guidance only. The admin area and write APIs are protected by
// server-side session checks, and both also send `X-Robots-Tag: noindex` (see proxy.js).
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
