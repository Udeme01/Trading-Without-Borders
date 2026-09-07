import { Role } from "@/types";

export const roles: Role[] = [
  {
    slug: "founder",
    label: "Founder",
    cardTagline: "Building your first move into Africa",
    strapline:
      "Built specifically for founders expanding into African markets.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["expand-across-africa", "market-intelligence"],
    eyebrow: "EXPANSION",
    heading: "I want to build in Africa.",
    subheading: "But where do I begin?",
    description:
      "I see the opportunity. I need clarity on the right market, the right structure, and the right move.",
    ctaLabel: "Help me make my first move",
    image: "/images/roles/founder0.jpg",
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
    eyebrow: "STRATEGY",
    heading: "I need to make a bigger move.",
    subheading: "But what's the smartest way forward?",
    description:
      "My business is already moving. I need the intelligence to make continental decisions with confidence.",
    ctaLabel: "Help me shape the strategy",
    image: "/images/roles/executive.jpg",
  },
  {
    slug: "investor",
    label: "Investor",
    cardTagline: "Evaluating African opportunities",
    strapline:
      "Built specifically for investors evaluating African opportunities.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["market-intelligence", "trade-advisory"],
    eyebrow: "INVESTMENT",
    heading: "I see an opportunity.",
    subheading: "But what am I missing?",
    description:
      "The numbers look promising. I need to understand the market, the risks, and what lies beneath the opportunity.",
    ctaLabel: "Give me the intelligence",
    image: "/images/roles/investor01.jpg",
  },
  {
    slug: "government",
    label: "Government",
    cardTagline: "Shaping trade policy and strategy",
    strapline:
      "Built specifically for government and trade-policy stakeholders.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["government-advisory", "capacity-building"],
    eyebrow: "POLICY",
    heading: "I want policy to move markets.",
    subheading: "But how do we turn it into action?",
    description:
      "The framework is only the beginning. I need insight that connects policy with what businesses actually do.",
    ctaLabel: "Help me move from policy to impact",
    image: "/images/roles/government.jpg",
  },
  {
    slug: "development-organisation",
    label: "Development Organisation",
    cardTagline: "Supporting development initiatives",
    strapline:
      "Built specifically for development and multilateral organisations.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["capacity-building", "government-advisory"],
    eyebrow: "IMPACT",
    heading: "I'm building for impact.",
    subheading: "But how do I make it work on the ground?",
    description:
      "Good intentions aren't enough. I need the market and trade intelligence to make development initiatives work.",
    ctaLabel: "Help me turn insight into impact",
    image: "/images/roles/development.jpg",
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
    eyebrow: "PRACTICE",
    heading: "I need to advise with confidence.",
    subheading: "But the landscape keeps changing.",
    description:
      "My clients need answers that go beyond the obvious. I need sharper trade and market intelligence.",
    ctaLabel: "Give me the edge",
    image: "/images/roles/professional.jpg",
  },
  {
    slug: "student",
    label: "Student",
    cardTagline: "Studying African trade and policy",
    strapline:
      "Built specifically for students studying African trade and policy.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: ["speaking-training"],
    eyebrow: "LEARNING",
    heading: "I want to understand Africa's next chapter.",
    subheading: "But where do I find the signal in all the noise?",
    description:
      "I'm learning, researching, and looking ahead. I need knowledge I can trust.",
    ctaLabel: "Start exploring",
    image: "/images/roles/student.jpg",
  },
  {
    slug: "media",
    label: "Media",
    cardTagline: "Covering African trade and policy",
    strapline:
      "Built specifically for journalists and media covering African trade.",
    challenges: [],
    opportunities: [],
    jtbd: [],
    recommendedSolutionSlugs: [],
    eyebrow: "COVERAGE",
    heading: "I need to tell the story.",
    subheading: "But I need to get it right.",
    description:
      "Africa's trade story is changing fast. I need the facts, context, and people behind the story.",
    ctaLabel: "Find the story",
    image: "/images/roles/media.jpg",
  },
];

export function getRoleBySlug(slug: string) {
  return roles.find((r) => r.slug === slug);
}
