import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/content/ArticleCard";
import { solutions, getSolutionBySlug } from "@/lib/data/solutions";
import { articles } from "@/lib/data/articles";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return buildMetadata({
    title: solution.title,
    description: solution.problem || solution.title,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const caseStudies = articles.filter(
    (article) =>
      article.category === "Case Studies" &&
      article.relatedSolutionSlugs?.includes(solution.slug),
  );

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

      {(solution.problem || solution.whyItMatters) && (
        <Container className="grid gap-16 py-16 md:grid-cols-2">
          {solution.problem && (
            <section>
              <h2>The problem</h2>
              <p className="mt-4 text-ink-60">{solution.problem}</p>
            </section>
          )}
          {solution.whyItMatters && (
            <section>
              <h2>Why it matters</h2>
              <p className="mt-4 text-ink-60">{solution.whyItMatters}</p>
            </section>
          )}
        </Container>
      )}

      {solution.approach.length > 0 && (
        <Container className="pb-16">
          <h2>Our approach</h2>
          <ol className="mt-6 space-y-4">
            {solution.approach.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border-t border-line pt-4 text-ink-60"
              >
                <span className="meta-label shrink-0 text-ink-40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Container>
      )}

      {(solution.deliverables.length > 0 || solution.outcomes.length > 0) && (
        <Container className="grid gap-16 pb-16 md:grid-cols-2">
          {solution.deliverables.length > 0 && (
            <section>
              <h2>Deliverables</h2>
              <ul className="mt-6 space-y-3">
                {solution.deliverables.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-3 text-sm text-ink-60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {solution.outcomes.length > 0 && (
            <section>
              <h2>Outcomes</h2>
              <ul className="mt-6 space-y-3">
                {solution.outcomes.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-3 text-sm text-ink-60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Container>
      )}

      {/* Proof — case studies linked to this solution via
          article.relatedSolutionSlugs. Renders only once real (or
          placeholder) case study content exists and is linked. */}
      {caseStudies.length > 0 && (
        <Container className="pb-16">
          <h2>Proof</h2>
          <div className="mt-8 grid grid-cols-1 gap-10 overflow-visible px-4 sm:grid-cols-2 sm:px-8">
            {caseStudies.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      )}

      <CTASection
        headline={`Talk to us about ${solution.title.toLowerCase()}.`}
      />
    </>
  );
}
