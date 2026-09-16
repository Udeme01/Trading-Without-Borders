import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import RoleCard from "@/components/content/RoleCard";
import { roles } from "@/lib/data/roles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discover",
  description:
    "Choose your role to get a tailored path through Trading Without Borders.",
  path: "/discover",
});

// PAGE 2 — DISCOVER (landing)
export default function DiscoverPage() {
  return (
    <Container className="py-20 pt-44">
      <p className="font-mono uppercase tracking-[0.14em] text-ink/70 mb-4 text-[10px]">Discover</p>
      <h1 className="max-w-4xl font-bold text-3xl md:text-6xl">Choose your role.</h1>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {roles.map((role, index) => (
          <RoleCard key={role.slug} role={role} index={index} />
        ))}
      </div>
    </Container>
  );
}
