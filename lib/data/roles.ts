import { Role } from "@/types";

// PLACEHOLDER — challenges/opportunities/jtbd are illustrative copy so
// every Discover role page section can be previewed end to end. Replace
// with real, researched content per role before launch.
export const roles: Role[] = [
  {
    slug: "founder",
    label: "Founder",
    cardTagline: "Building your first move into Africa",
    strapline:
      "Built specifically for founders expanding into African markets.",
    challenges: [
      "No in-house legal or trade team to navigate 54 different regulatory environments.",
      "Limited capital to absorb a costly structuring mistake on the first move.",
      "Generic country reports that don't answer the specific question: where do I start?",
    ],
    opportunities: [
      "AfCFTA compresses years of market-entry advantage into a much shorter window for early movers.",
      "A single trade agreement covering 54 countries instead of negotiating market access one country at a time.",
      "Being the reference case other founders point to once your structure is proven.",
    ],
    jtbd: [
      "Validate which market to enter first, before committing capital.",
      "Choose a legal structure that survives regulatory scrutiny as the business grows.",
      "Get a second opinion before signing a partnership or distribution agreement.",
    ],
    recommendedSolutionSlugs: ["expand-across-africa", "market-intelligence"],
    eyebrow: "EXPANSION",
    heading: "I want to build in Africa.",
    subheading: "But where do I begin?",
    description:
      "I see the opportunity. I need clarity on the right market, the right structure, and the right move.",
    ctaLabel: "Help me make my first move",
    image: "/images/roles/build.jpg",
  },

  {
    slug: "executive",
    label: "CEO / Executive",
    cardTagline: "Setting continental strategy",
    strapline: "Built specifically for executives setting Africa strategy.",
    challenges: [
      "Board-level pressure to move on Africa without a clear, defensible entry thesis.",
      "Conflicting advice from consultants who've never structured a real AfCFTA transaction.",
      "Balancing speed against the risk of a costly continental misstep.",
    ],
    opportunities: [
      "First-mover advantage in sectors where AfCFTA rules of origin are still being finalised.",
      "Consolidating what used to be 54 separate market strategies into one coherent continental plan.",
      "Positioning the business ahead of competitors still treating Africa as one undifferentiated market.",
    ],
    jtbd: [
      "Build a continental strategy the board will actually approve.",
      "Prioritise which markets to enter first, and in what order.",
      "De-risk a major capital decision with intelligence, not assumptions.",
    ],
    recommendedSolutionSlugs: ["executive-advisory", "trade-advisory"],
    eyebrow: "STRATEGY",
    heading: "I need to make a bigger move.",
    subheading: "But what's the smartest way forward?",
    description:
      "My business is already moving. I need the intelligence to make continental decisions with confidence.",
    ctaLabel: "Help me shape the strategy",
    image: "/images/roles/executive0.jpg",
  },
  {
    slug: "investor",
    label: "Investor",
    cardTagline: "Evaluating African opportunities",
    strapline:
      "Built specifically for investors evaluating African opportunities.",
    challenges: [
      "Deal-level enthusiasm outrunning genuine market and regulatory diligence.",
      "Country risk data that's outdated the moment a new AfCFTA protocol takes effect.",
      "Portfolio companies structured before AfCFTA rules were finalised, now facing rework.",
    ],
    opportunities: [
      "Identifying sectors where AfCFTA tariff phase-downs create a genuine window of advantage.",
      "Backing founders who are structurally compliant from day one, reducing downstream risk.",
      "Access to on-the-ground intelligence most funds outside the region don't have.",
    ],
    jtbd: [
      "Stress-test a deal thesis against real regulatory and market conditions.",
      "Understand what's actually driving a country's trade risk profile before committing capital.",
      "Get an independent read on a portfolio company's market-entry structure.",
    ],
    recommendedSolutionSlugs: ["market-intelligence", "trade-advisory"],
    eyebrow: "INVESTMENT",
    heading: "I see an opportunity.",
    subheading: "But what am I missing?",
    description:
      "The numbers look promising. I need to understand the market, the risks, and what lies beneath the opportunity.",
    ctaLabel: "Give me the intelligence",
    image: "/images/roles/investor00.jpg",
  },
  {
    slug: "government",
    label: "Government",
    cardTagline: "Shaping trade policy and strategy",
    strapline:
      "Built specifically for government and trade-policy stakeholders.",
    challenges: [
      "Policy frameworks that look sound on paper but don't reflect how businesses actually move.",
      "Limited visibility into which regulatory gaps are actually costing the country trade volume.",
      "Coordinating implementation across ministries with different priorities and timelines.",
    ],
    opportunities: [
      "Positioning the country as an early, credible AfCFTA implementer to attract investment.",
      "Closing regulatory gaps ahead of neighbouring countries still finalising their frameworks.",
      "Using private-sector intelligence to pressure-test policy before it's finalised, not after.",
    ],
    jtbd: [
      "Translate a trade policy framework into something businesses can actually act on.",
      "Identify where implementation is stalling and why.",
      "Brief decision-makers on how a policy choice will land with the private sector.",
    ],
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
    challenges: [
      "Programme design based on generic regional data rather than country-specific trade realities.",
      "Measuring impact in a way donors trust, beyond activity counts.",
      "Coordinating with government counterparts who are themselves still building AfCFTA capacity.",
    ],
    opportunities: [
      "Designing capacity-building programmes around the specific gaps AfCFTA implementation is exposing.",
      "Partnering with government on initiatives that have a credible, private-sector-informed evidence base.",
      "Positioning initiatives as directly tied to measurable trade outcomes, not just activity.",
    ],
    jtbd: [
      "Ground a programme design in what's actually happening in target markets.",
      "Demonstrate credible impact to funders and stakeholders.",
      "Build local capacity that outlasts the programme itself.",
    ],
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
    challenges: [
      "Client questions moving faster than publicly available AfCFTA guidance can keep up with.",
      "Needing to sound authoritative on a framework that's still actively evolving.",
      "Limited access to the kind of on-the-ground intelligence that sets an advisor apart.",
    ],
    opportunities: [
      "Differentiating a practice by offering AfCFTA-specific depth competitors don't have.",
      "Building a reputation as the advisor who caught a regulatory change before it caught a client.",
      "Turning trade intelligence into a genuine competitive edge in client conversations.",
    ],
    jtbd: [
      "Get ahead of a regulatory change before a client asks about it.",
      "Back up advice with intelligence a client can't easily find elsewhere.",
      "Stay current without spending hours tracking fragmented policy updates.",
    ],
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
    challenges: [
      "Academic material that lags years behind how AfCFTA is actually being implemented.",
      "Separating credible analysis from commentary that oversimplifies a complex framework.",
      "Limited access to practitioners who can explain how policy plays out in practice.",
    ],
    opportunities: [
      "Building genuine expertise in a framework that will shape African trade for decades.",
      "Learning directly from advisory and legal practice, not just secondary sources.",
      "Entering the job market with a specific, defensible area of trade knowledge.",
    ],
    jtbd: [
      "Find trustworthy, current analysis on how AfCFTA is actually unfolding.",
      "Understand how policy translates into real business decisions.",
      "Build a knowledge base that holds up in an interview or a thesis defence.",
    ],
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
    challenges: [
      "Tight deadlines that leave little room to verify complex regulatory claims.",
      "Sourcing credible, on-record voices who understand both the law and the deals.",
      "A story that's technically accurate but misses the practical stakes for businesses.",
    ],
    opportunities: [
      "Access to sourcing grounded in real advisory practice, not just policy commentary.",
      "Getting ahead of a regulatory story before it becomes consensus coverage.",
      "Telling a more accurate, more specific version of Africa's trade story than competitors.",
    ],
    jtbd: [
      "Verify a regulatory or trade claim quickly and accurately.",
      "Find a credible source who can speak to both policy and practice.",
      "Understand the practical stakes behind a policy headline.",
    ],
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
