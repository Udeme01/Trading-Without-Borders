import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { roles } from "@/lib/data/roles";
import { solutions } from "@/lib/data/solutions";
// import { getAllArticles } from "@/lib/data/articles"; // wire up once the
// Trade Intelligence content source (CMS/MDX) exists
// import { getAllEpisodes } from "@/lib/data/podcast";

// Next.js serves this at /sitemap.xml automatically.
// If the catalogue grows past ~1,000 URLs, split into
// generateSitemaps() + multiple sitemap files instead of one array.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/discover",
    "/solutions",
    "/trade-intelligence",
    "/podcast",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const roleRoutes: MetadataRoute.Sitemap = roles.map((role) => ({
    url: `${SITE_URL}/discover/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${SITE_URL}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
  //   url: `${SITE_URL}/trade-intelligence/${a.category}/${a.slug}`,
  //   lastModified: a.date,
  //   changeFrequency: "yearly",
  //   priority: 0.6,
  // }));

  // const podcastRoutes: MetadataRoute.Sitemap = getAllEpisodes().map((e) => ({
  //   url: `${SITE_URL}/podcast/${e.slug}`,
  //   lastModified: e.date,
  //   changeFrequency: "yearly",
  //   priority: 0.6,
  // }));

  return [
    ...staticRoutes,
    ...roleRoutes,
    ...solutionRoutes,
    // ...articleRoutes,
    // ...podcastRoutes,
  ];
}
