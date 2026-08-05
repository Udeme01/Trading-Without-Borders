import { Solution } from "@/types";

// Source of truth for PAGE 3 — SOLUTIONS.
// Each entry drives app/solutions/[slug]/page.tsx via generateStaticParams.
export const solutions: Solution[] = [
  {
    slug: "expand-across-africa",
    category: "Expand Across Africa",
    title: "Expand Across Africa",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "trade-advisory",
    category: "Advisory",
    title: "Trade Advisory",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "market-intelligence",
    category: "Advisory",
    title: "Market Intelligence",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "executive-advisory",
    category: "Advisory",
    title: "Executive Advisory",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "speaking-training",
    category: "Capacity Building",
    title: "Speaking & Training",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "government-advisory",
    category: "Advisory",
    title: "Government Advisory",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "capacity-building",
    category: "Capacity Building",
    title: "Capacity Building",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
