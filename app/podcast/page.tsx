import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Podcast",
  description:
    "Trading Without Borders: An AfCFTA Conversation Series — 110+ episodes demystifying AfCFTA with industry leaders and government officials.",
  path: "/podcast",
});

// PAGE 5 — PODCAST.
// This is the flagship, pre-existing show (110 episodes, real audience),
// not a new "internal rename" — kept its established name and tagline
// rather than the "Conversations Shaping African Trade" placeholder from
// the original brief.
export default function PodcastPage() {
  return (
    <Container className="py-20">
      <p className="meta-label">An AfCFTA Conversation Series</p>
      <h1 className="mt-2">Trading Without Borders</h1>
      <p className="mt-4 max-w-prose text-ink-60">
        110+ episodes demystifying the African Continental Free Trade Area —
        conversations with stakeholders, industry leaders, and government
        officials on what AfCFTA means in practice.
      </p>

      <section className="mt-12">
        <h2>Latest episode</h2>
        {/* TODO: latest episode feature */}
      </section>

      <section className="mt-16">
        <h2>Featured episodes</h2>
        {/* TODO: PodcastCard grid */}
      </section>

      <section className="mt-16 flex flex-wrap gap-2">
        <Badge>Browse by Topic</Badge>
        <Badge>Browse by Guest</Badge>
        <Badge>Browse by Industry</Badge>
        <Badge>Browse by Country</Badge>
      </section>
    </Container>
  );
}
