import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import { roles, getRoleBySlug } from "@/lib/data/roles";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return roles.map((role) => ({ role: role.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { role: string };
}): Metadata {
  const role = getRoleBySlug(params.role);
  if (!role) return {};
  return buildMetadata({
    title: role.label,
    description: role.strapline,
    path: `/discover/${role.slug}`,
  });
}

// Per-role template: Hero / Challenges / Opportunities / JTBD /
// Recommended Services / Relevant Resources / Relevant Podcast / Case
// Studies / CTA — matches the sitemap's "Each role page contains" block.
export default function RolePage({ params }: { params: { role: string } }) {
  const role = getRoleBySlug(params.role);
  if (!role) notFound();

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { href: "/discover", label: "Discover" },
            { href: `/discover/${role.slug}`, label: role.label },
          ]}
        />
      </Container>
      <Hero eyebrow="Discover" headline={role.strapline} />
      <Container className="grid gap-16 py-16 md:grid-cols-2">
        <section>
          <h2>Challenges</h2>
          {/* TODO: role.challenges */}
        </section>
        <section>
          <h2>Opportunities</h2>
          {/* TODO: role.opportunities */}
        </section>
      </Container>
      <Container className="pb-16">
        <h2>Jobs to be done</h2>
        {/* TODO: role.jtbd */}
      </Container>
      <Container className="pb-16">
        <h2>Recommended services</h2>
        {/* TODO: map role.recommendedSolutionSlugs to Solution cards */}
      </Container>
      <Container className="pb-16">
        <h2>Relevant resources</h2>
        {/* TODO: related articles */}
      </Container>
      <Container className="pb-16">
        <h2>Relevant podcast episodes</h2>
        {/* TODO: related episodes */}
      </Container>
      <Container className="pb-16">
        <h2>Case studies</h2>
        {/* TODO */}
      </Container>
      <CTASection headline={`Ready to move forward as a ${role.label.toLowerCase()}?`} />
    </>
  );
}
