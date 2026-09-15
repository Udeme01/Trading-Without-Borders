import { PodcastEpisode } from "@/types";

// PLACEHOLDER — real episode data (110+ existing episodes) isn't wired
// up yet. These entries exist only to preview the podcast landing and
// episode detail pages end to end. Guests are described by role, not
// named — do not invent specific real people's names as placeholder
// content. spotifyUrl values below are NOT real — replace with the
// actual Spotify episode links before launch. Replace this whole file
// with real episode data (RSS feed parse or CMS) before launch.
export const episodes: PodcastEpisode[] = [
  {
    slug: "afcfta-rules-of-origin-in-practice",
    title: "What rules of origin actually mean for exporters",
    guest: "Customs policy specialist",
    date: "2026-06-10",
    keyInsights: [
      "Rules of origin, not tariff schedules, are where most exporters actually get tripped up.",
      "A product can qualify for preferential tariffs in one corridor and not another, depending on input sourcing.",
      "Documentation gaps cause more shipment delays than genuine non-compliance.",
    ],
    quotes: [
      "Founders think of AfCFTA as a tariff question. It's actually a documentation question first.",
    ],
    transcript:
      "Full transcript not yet available for this placeholder episode — replace with real transcript text or a link to the transcript source before launch.",
    resources: [{ label: "AfCFTA Rules of Origin Manual", url: "#" }],
    relatedSolutionSlugs: ["expand-across-africa", "trade-advisory"],
    relatedArticleSlugs: ["afcfta-rules-of-origin-explained"],
    spotifyUrl: "https://open.spotify.com/episode/placeholder1",
  },
  {
    slug: "diaspora-investment-entry-points",
    title: "Where diaspora capital fits into African trade",
    guest: "Diaspora investment advisor",
    date: "2026-05-27",
    keyInsights: [
      "Diaspora capital often enters through informal channels that don't scale past a certain size.",
      "Structuring diaspora investment formally opens access to AfCFTA-linked incentives.",
    ],
    quotes: [],
    relatedSolutionSlugs: ["market-intelligence"],
    relatedArticleSlugs: ["reading-a-country-trade-profile"],
    spotifyUrl: "https://open.spotify.com/episode/placeholder2",
  },
  {
    slug: "government-perspective-on-afcfta-implementation",
    title: "AfCFTA implementation, from inside government",
    guest: "Trade ministry official",
    date: "2026-05-13",
    keyInsights: [
      "Implementation speed varies less by country size than by ministry coordination.",
      "Private-sector feedback loops are the biggest lever governments underuse.",
    ],
    quotes: [],
    relatedSolutionSlugs: ["government-advisory", "capacity-building"],
    spotifyUrl: "https://open.spotify.com/episode/placeholder3",
  },
];

export function getFeaturedEpisodes(limit = 3) {
  return episodes.slice(0, limit);
}

export function getEpisodeBySlug(slug: string) {
  return episodes.find((e) => e.slug === slug);
}

// Converts a standard open.spotify.com episode URL into its embeddable
// iframe form. Returns null if the URL doesn't match the expected shape.
export function toSpotifyEmbedUrl(spotifyUrl?: string) {
  if (!spotifyUrl) return null;
  const match = spotifyUrl.match(/open\.spotify\.com\/episode\/([\w-]+)/);
  if (!match) return null;
  return `https://open.spotify.com/embed/episode/${match[1]}?utm_source=generator`;
}
