import { MetadataRoute } from "next";

const BASE_URL = "https://www.applotie.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}