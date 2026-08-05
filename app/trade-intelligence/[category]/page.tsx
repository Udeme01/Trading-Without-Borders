import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  return buildMetadata({
    title: params.category.replace(/-/g, " "),
    description: `${params.category} on African trade.`,
    path: `/trade-intelligence/${params.category}`,
  });
}

// Category listing (e.g. /trade-intelligence/country-intelligence).
export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <Container className="py-16">
      <Breadcrumbs
        items={[
          { href: "/trade-intelligence", label: "Trade Intelligence" },
          { href: `/trade-intelligence/${params.category}`, label: params.category },
        ]}
      />
      <h1 className="mt-4 capitalize">{params.category.replace(/-/g, " ")}</h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* TODO: ArticleCard grid filtered by category */}
      </div>
    </Container>
  );
}
