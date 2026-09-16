import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Trade Intelligence",
  description:
    "Articles, reports, trade briefs, and country intelligence on African trade.",
  path: "/trade-intelligence",
});

const CATEGORIES = [
  "Articles",
  "Reports",
  "Trade Briefs",
  "Country Intelligence",
  "Industry Intelligence",
  "Guides",
  "Toolkits",
  "White Papers",
  "Policy Explained",
  "Case Studies",
  "FAQs",
];

const FILTERS = ["Country", "Industry", "Topic", "Audience", "Date"];

// PAGE 4 — TRADE INTELLIGENCE (knowledge hub landing).
// Once a content source (CMS/MDX) exists, swap the placeholder grid below
// for ArticleCard components pulled from lib/data/articles.ts and wire
// search + filters against it.
export default function TradeIntelligencePage() {
  return (
    <Container className="py-20 pt-44">
      <p className="font-mono uppercase tracking-[0.14em] text-ink/70 mb-4 text-[10px]">
        Trade Intelligence
      </p>
      <h1 className="max-w-4xl font-bold text-3xl md:text-6xl">
        The knowledge hub.
      </h1>

      {/* TODO: search input */}

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Badge key={f}>{f}</Badge>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* TODO: ArticleCard grid */}
      </div>
    </Container>
  );
}
