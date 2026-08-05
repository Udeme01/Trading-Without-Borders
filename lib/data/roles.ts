import { Role } from "@/types";

// Source of truth for PAGE 2 — DISCOVER.
// Each entry drives app/discover/[role]/page.tsx via generateStaticParams.
export const roles: Role[] = [
  {
    slug: "founder",
    label: "Founder",
    cardTagline: "Building your first move into Africa",
    strapline: "Built specifically for founders expanding into African markets.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["expand-across-africa", "market-intelligence"],
  },
  {
    slug: "executive",
    label: "CEO / Executive",
    cardTagline: "Setting continental strategy",
    strapline: "Built specifically for executives setting Africa strategy.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["executive-advisory", "trade-advisory"],
  },
  {
    slug: "investor",
    label: "Investor",
    cardTagline: "Evaluating African opportunities",
    strapline: "Built specifically for investors evaluating African opportunities.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["market-intelligence", "trade-advisory"],
  },
  {
    slug: "government",
    label: "Government",
    cardTagline: "Shaping trade policy and strategy",
    strapline: "Built specifically for government and trade-policy stakeholders.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["government-advisory", "capacity-building"],
  },
  {
    slug: "development-organisation",
    label: "Development Organisation",
    cardTagline: "Supporting development initiatives",
    strapline: "Built specifically for development and multilateral organisations.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["capacity-building", "government-advisory"],
  },
  {
    slug: "professional",
    label: "Professional",
    cardTagline: "Supporting trade and market-entry professionals",
    strapline: "Built specifically for trade and market-entry professionals.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["speaking-training", "trade-advisory"],
  },
  {
    slug: "student",
    label: "Student",
    cardTagline: "Studying African trade and policy",
    strapline: "Built specifically for students studying African trade and policy.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["speaking-training"],
  },
  {
    slug: "media",
    label: "Media",
    cardTagline: "Covering African trade and policy",
    strapline: "Built specifically for journalists and media covering African trade.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: [],
  },
];

export function getRoleBySlug(slug: string) {
  return roles.find((r) => r.slug === slug);
}
