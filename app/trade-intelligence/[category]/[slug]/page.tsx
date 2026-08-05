import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import NewsletterBanner from "@/components/sections/NewsletterBanner";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

// TODO: replace with generateStaticParams() sourced from a real article
// collection once one exists (lib/data/articles.ts or a CMS).

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;

  return buildMetadata({
    title: slug.replace(/-/g, " "),
    description: "",
    path: `/trade-intelligence/${category}/${slug}`,
  });
}

// Every article template includes: body content, Related article,
// Related podcast, Related solution, Newsletter CTA, Consultation CTA —
// per the Content Relationship Map.
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { href: "/trade-intelligence", label: "Trade Intelligence" },
            { href: `/trade-intelligence/${category}`, label: category },
            {
              href: `/trade-intelligence/${category}/${slug}`,
              label: slug,
            },
          ]}
        />
      </Container>

      <Container className="max-w-prose py-12">
        <h1>{/* TODO: article.title */}</h1>
        {/* TODO: article body */}
      </Container>

      <Container className="grid gap-8 pb-16 md:grid-cols-3">
        <div>
          <h3>Related article</h3>
        </div>

        <div>
          <h3>Related podcast</h3>
        </div>

        <div>
          <h3>Related solution</h3>
        </div>
      </Container>

      <NewsletterBanner />
      <CTASection headline="Have a question about this market?" />
    </>
  );
}
