import { PodcastEpisode } from "@/types";

// PLACEHOLDER — real episode data (110+ existing episodes) isn't wired
// up yet. These entries exist only to preview Section 10's layout.
// relatedSolutionSlugs added so Discover role pages can preview their
// Relevant Podcast Episodes section. Guests are described by role, not
// named — do not invent specific real people's names as placeholder
// content. Replace this whole file with real episode data (RSS feed
// parse or CMS) before launch.
export const episodes: PodcastEpisode[] = [
  {
    slug: "afcfta-rules-of-origin-in-practice",
    title: "What rules of origin actually mean for exporters",
    guest: "Customs policy specialist",
    date: "2026-06-10",
    keyInsights: [],
    relatedSolutionSlugs: ["expand-across-africa", "trade-advisory"],
  },
  {
    slug: "diaspora-investment-entry-points",
    title: "Where diaspora capital fits into African trade",
    guest: "Diaspora investment advisor",
    date: "2026-05-27",
    keyInsights: [],
    relatedSolutionSlugs: ["market-intelligence"],
  },
  {
    slug: "government-perspective-on-afcfta-implementation",
    title: "AfCFTA implementation, from inside government",
    guest: "Trade ministry official",
    date: "2026-05-13",
    keyInsights: [],
    relatedSolutionSlugs: ["government-advisory", "capacity-building"],
  },
];

export function getFeaturedEpisodes(limit = 3) {
  return episodes.slice(0, limit);
}
