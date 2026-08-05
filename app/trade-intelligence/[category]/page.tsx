import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  return buildMetadata({
    title: category.replace(/-/g, " "),
    description: `${category} on African trade.`,
    path: `/trade-intelligence/${category}`,
  });
}

// Category listing (e.g. /trade-intelligence/country-intelligence).
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <Container className="py-16">
      <Breadcrumbs
        items={[
          { href: "/trade-intelligence", label: "Trade Intelligence" },
          {
            href: `/trade-intelligence/${category}`,
            label: category,
          },
        ]}
      />

      <h1 className="mt-4 capitalize">{category.replace(/-/g, " ")}</h1>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* TODO: ArticleCard grid filtered by category */}
      </div>
    </Container>
  );
}
