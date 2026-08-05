export interface Role {
  slug: string;
  label: string;
  cardTagline: string; // "Setting continental strategy"
  strapline: string; // "Built specifically for..."
  challenges: string[];
  opportunities: string[];
  jtbd: string[]; // jobs to be done
  recommendedSolutionSlugs: string[];
}

export interface Solution {
  slug: string;
  category: "Expand Across Africa" | "Advisory" | "Capacity Building";
  title: string;
  problem: string;
  whyItMatters: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
}

export interface Article {
  slug: string;
  category: string; // Articles | Reports | Trade Briefs | Country Intelligence | ...
  title: string;
  excerpt: string;
  country?: string;
  industry?: string;
  audience?: string[];
  date: string; // ISO
  relatedSolutionSlugs?: string[];
  relatedPodcastSlugs?: string[];
}

export interface PodcastEpisode {
  slug: string;
  title: string;
  guest: string;
  industry?: string;
  country?: string;
  date: string; // ISO
  keyInsights: string[];
  relatedArticleSlugs?: string[];
  relatedSolutionSlugs?: string[];
}
