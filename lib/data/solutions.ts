import { Solution } from "@/types";

// Source of truth for PAGE 3 — SOLUTIONS.
// Each entry drives app/solutions/[slug]/page.tsx via generateStaticParams.
//
// PLACEHOLDER CONTENT — problem/whyItMatters/approach/deliverables/outcomes
// are illustrative copy so the solution detail page can be previewed end
// to end. Replace with real content before launch.
//
// Also restored "market-intelligence" and "government-advisory" — these
// are referenced by roles.ts (recommendedSolutionSlugs) and listed in the
// sitemap doc, but were missing from this file, silently breaking the
// Recommended Services section on several Discover role pages.
export const solutions: Solution[] = [
  {
    slug: "advisory",
    category: "Advisory",
    title: "Advisory",
    iconSrc: "/images/roles/build.jpg",
    problem:
      "Businesses moving into African markets often rely on generalist consultants who understand neither the legal framework nor how deals actually close on the ground.",
    whyItMatters:
      "A structuring mistake made early is expensive to unwind later — sometimes unwinnable. Advisory grounded in both law and closed transactions catches what generic guidance misses.",
    approach: [
      "Diagnostic review of the business's current structure and target markets",
      "Regulatory and rules-of-origin analysis specific to the sectors involved",
      "Direct, practicing-lawyer input rather than a handoff between separate legal and advisory teams",
    ],
    deliverables: [
      "A written structuring recommendation with rationale",
      "A prioritised list of regulatory risks and how to close them",
      "Ongoing advisory access through the structuring process",
    ],
    outcomes: [
      "A defensible legal and commercial structure before capital moves",
      "Fewer surprises when a deal reaches formal due diligence",
    ],
  },
  {
    slug: "expand-across-africa",
    category: "Expand Across Africa",
    title: "Market Expansion",
    iconSrc: "/images/roles/executive.jpg",
    problem:
      "Choosing which African market to enter first is often based on assumption or anecdote, not a structured read of trade data and regulatory readiness.",
    whyItMatters:
      "The wrong first market can cost years of momentum. AfCFTA is compressing the window in which an early, well-sequenced move creates lasting advantage.",
    approach: [
      "Comparative market analysis across candidate countries",
      "Sequencing recommendation — which market first, and why",
      "Entry-structure design specific to the chosen market's regulatory environment",
    ],
    deliverables: [
      "A market prioritisation report",
      "An entry roadmap with key regulatory milestones",
    ],
    outcomes: [
      "A validated first-market decision, not a guess",
      "A sequencing plan for markets two and three",
    ],
  },
  {
    slug: "trade-advisory",
    category: "Advisory",
    title: "Trade Education",
    iconSrc: "/images/roles/founder.jpg",
    problem:
      "Teams making trade decisions often don't have a shared, accurate understanding of how AfCFTA actually applies to their sector.",
    whyItMatters:
      "Misunderstanding rules of origin or tariff phase-downs leads to decisions that look sound on a slide deck and fail in customs.",
    approach: [
      "Sector-specific briefing sessions for the team making the decisions",
      "Applied case walkthroughs, not abstract policy summaries",
    ],
    deliverables: [
      "A tailored briefing session or series",
      "Reference materials the team can return to",
    ],
    outcomes: [
      "A team that can evaluate trade decisions independently",
      "Fewer costly misreadings of AfCFTA rules downstream",
    ],
  },
  {
    slug: "executive-advisory",
    category: "Advisory",
    title: "Executive Briefings",
    iconSrc: "/images/roles/founder01.jpg",
    problem:
      "Executives are often asked to approve continental strategy without a clear, independent read on the trade and regulatory landscape driving it.",
    whyItMatters:
      "A board-level decision made on incomplete intelligence is a expensive one to reverse. Executives need a defensible thesis, not just enthusiasm.",
    approach: [
      "A focused briefing built around the specific decision at hand",
      "Direct access to ask hard questions before committing",
    ],
    deliverables: [
      "A written or presented executive briefing",
      "A clear recommendation, not just background information",
    ],
    outcomes: [
      "A board-ready rationale for a continental decision",
      "Confidence the decision was pressure-tested, not just presented",
    ],
  },
  {
    slug: "market-intelligence",
    category: "Advisory",
    title: "Market Intelligence",
    iconSrc: "/images/roles/investor.jpg",
    problem:
      "Investors and businesses often evaluate African opportunities using outdated or generic country data that doesn't reflect current trade conditions.",
    whyItMatters:
      "The numbers that look promising in a pitch deck don't always hold up against the specific regulatory and market realities of a given country.",
    approach: [
      "Country and sector-specific trade intelligence, built for the decision at hand",
      "Risk analysis grounded in current AfCFTA implementation status, not assumptions",
    ],
    deliverables: [
      "A market or country intelligence report",
      "A risk summary specific to the opportunity being evaluated",
    ],
    outcomes: [
      "A decision grounded in current, specific intelligence",
      "Early visibility into risks a generic report would miss",
    ],
  },
  {
    slug: "speaking-training",
    category: "Capacity Building",
    title: "Speaking & Training",
    iconSrc: "/images/beyond.jpg",
    problem:
      "Teams and audiences often hear about AfCFTA in the abstract, without a practitioner translating it into what it actually means for their work.",
    whyItMatters:
      "Policy fluency doesn't automatically transfer into practical understanding. Training grounded in real advisory practice closes that gap.",
    approach: [
      "Tailored talks, workshops, or training sessions for the specific audience",
      "Content built from active advisory practice, not generic policy slides",
    ],
    deliverables: [
      "A delivered talk, workshop, or training session",
      "Supporting materials for the audience to keep",
    ],
    outcomes: [
      "An audience that leaves with practical, applicable understanding",
      "A credible, specific voice on AfCFTA at the event or organisation",
    ],
  },
  {
    slug: "government-advisory",
    category: "Capacity Building",
    title: "Government Advisory",
    iconSrc: "/images/roles/government.jpg",
    problem:
      "Trade policy frameworks are sometimes designed without enough visibility into how businesses will actually respond to them on the ground.",
    whyItMatters:
      "A policy that looks complete on paper can stall in implementation if it doesn't reflect real private-sector behaviour and constraints.",
    approach: [
      "Private-sector-informed input during policy design or review",
      "Implementation gap analysis grounded in real market feedback",
    ],
    deliverables: [
      "A policy or implementation review",
      "Recommendations grounded in private-sector realities",
    ],
    outcomes: [
      "Policy that's more likely to translate into real trade activity",
      "Fewer implementation surprises after a policy takes effect",
    ],
  },
  {
    slug: "capacity-building",
    category: "Capacity Building",
    title: "Capacity Building",
    iconSrc: "/images/africa.jpg",
    problem:
      "Development and government initiatives often rely on generic frameworks that don't reflect the specific trade conditions of the country or sector involved.",
    whyItMatters:
      "Capacity-building that isn't grounded in real market and regulatory conditions tends to produce activity without lasting outcomes.",
    approach: [
      "Programme design grounded in current AfCFTA implementation realities",
      "Direct involvement from advisory practice, not just framework design",
    ],
    deliverables: [
      "A capacity-building programme design or review",
      "Ongoing advisory support through implementation",
    ],
    outcomes: [
      "A programme with a credible, evidence-based foundation",
      "Capacity that outlasts the programme itself",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
