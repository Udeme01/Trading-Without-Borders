import { Article } from "@/types";

// PLACEHOLDER — no real Trade Intelligence content source exists yet
// (see README "Next steps"). These entries exist only so Section 9's
// layout can be previewed and built against a real Article shape.
// relatedSolutionSlugs added so Discover role pages can preview their
// Relevant Resources / Case Studies sections. Replace this whole file
// with a real data source (MDX collection or CMS fetch) before launch —
// do not ship these placeholder titles.
export const articles: Article[] = [
  {
    slug: "afcfta-rules-of-origin-explained",
    category: "Policy Explained",
    title: "AfCFTA rules of origin, explained for founders",
    excerpt:
      "What actually qualifies a product for preferential tariffs — and where founders most often get it wrong.",
    date: "2026-06-01",
    relatedSolutionSlugs: ["expand-across-africa", "market-intelligence"],
  },
  {
    slug: "cross-border-jv-structuring-checklist",
    category: "Guides",
    title: "A structuring checklist for cross-border joint ventures",
    excerpt:
      "The regulatory due-diligence steps that determine whether a partnership survives its first audit.",
    date: "2026-05-18",
    relatedSolutionSlugs: ["trade-advisory", "executive-advisory"],
  },
  {
    slug: "reading-a-country-trade-profile",
    category: "Country Intelligence",
    title: "How to read a country trade profile before you enter",
    excerpt:
      "The handful of numbers that actually predict market-entry difficulty — and the ones that don't.",
    date: "2026-05-02",
    relatedSolutionSlugs: ["market-intelligence", "government-advisory"],
  },
  {
    slug: "market-entry-case-study-consumer-goods",
    category: "Case Studies",
    title: "Structuring a first move: a consumer goods case study",
    excerpt:
      "How a mid-sized consumer goods company sequenced its entry across three markets without a legal misstep.",
    date: "2026-04-20",
    relatedSolutionSlugs: ["expand-across-africa", "market-intelligence"],
  },
];

export function getFeaturedArticles(limit = 3) {
  return articles.slice(0, limit);
}
