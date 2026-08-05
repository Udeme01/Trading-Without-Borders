import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Generates /robots.txt automatically. Next.js serves this file's default
// export at the root — no separate public/robots.txt needed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Add any private/internal paths here as they're built, e.g.:
        // disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
