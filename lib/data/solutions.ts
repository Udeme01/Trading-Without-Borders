import { Solution } from "@/types";

// Source of truth for PAGE 3 — SOLUTIONS.
// Each entry drives app/solutions/[slug]/page.tsx via generateStaticParams.
export const solutions: Solution[] = [
  {
    slug: "advisory",
    category: "Advisory",
    title: "Advisory",
    iconSrc: "/images/roles/build.jpg",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "expand-across-africa",
    category: "Expand Across Africa",
    title: "Market Expansion",
    iconSrc: "/images/roles/executive.jpg",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "trade-advisory",
    category: "Advisory",
    title: "Trade Education",
    iconSrc: "/images/roles/founder.jpg",
    problem: "",
    whyItMatters: "",
    approach: [],
    deliverables: [],
    outcomes: [],
  },
  {
    slug: "executive-advisory",
    category: "Advisory",
    title: "Executive Briefings",
    iconSrc: "/images/roles/founder01.jpg",
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
    iconSrc: "/images/beyond.jpg",
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
    iconSrc: "/images/africa.jpg",
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
