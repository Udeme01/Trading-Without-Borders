import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import { solutions, getSolutionBySlug } from "@/lib/data/solutions";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.title,
    description: solution.problem || solution.title,
    path: `/solutions/${solution.slug}`,
  });
}

// Per-solution template: Problem / Why it matters / Our approach /
// Deliverables / Outcomes / Proof / CTA — matches the sitemap exactly.
export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { href: "/solutions", label: "Solutions" },
            { href: `/solutions/${solution.slug}`, label: solution.title },
          ]}
        />
      </Container>
      <Hero eyebrow={solution.category} headline={solution.title} />
      <Container className="grid gap-16 py-16 md:grid-cols-2">
        <section>
          <h2>The problem</h2>
          {/* TODO: solution.problem */}
        </section>
        <section>
          <h2>Why it matters</h2>
          {/* TODO: solution.whyItMatters */}
        </section>
      </Container>
      <Container className="pb-16">
        <h2>Our approach</h2>
        {/* TODO: solution.approach */}
      </Container>
      <Container className="grid gap-16 pb-16 md:grid-cols-2">
        <section>
          <h2>Deliverables</h2>
          {/* TODO: solution.deliverables */}
        </section>
        <section>
          <h2>Outcomes</h2>
          {/* TODO: solution.outcomes */}
        </section>
      </Container>
      <Container className="pb-16">
        <h2>Proof</h2>
        {/* TODO: case studies / testimonials */}
      </Container>
      <CTASection headline={`Talk to us about ${solution.title.toLowerCase()}.`} />
    </>
  );
}
