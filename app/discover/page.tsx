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
    <Container className="py-20">
      <p className="meta-label">Discover</p>
      <h1 className="mt-2">Choose your role.</h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role, index) => (
          <RoleCard key={role.slug} role={role} index={index} />
        ))}
      </div>
    </Container>
  );
}
