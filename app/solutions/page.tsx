import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { solutions } from "@/lib/data/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Outcomes-led advisory, market expansion, and capacity building for Africa.",
  path: "/solutions",
});

// PAGE 3 — SOLUTIONS (landing)
export default function SolutionsPage() {
  return (
    <Container className="py-20 pt-44">
      <p className="meta-label">Solutions</p>
      <h1 className="mt-2">Demonstrate outcomes, not services.</h1>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {solutions.map((solution) => (
          <Card
            key={solution.slug}
            href={`/solutions/${solution.slug}`}
            eyebrow={solution.category}
            title={solution.title}
            image={{ src: solution.iconSrc, alt: solution.title }}
          />
        ))}
      </div>
    </Container>
  );
}
