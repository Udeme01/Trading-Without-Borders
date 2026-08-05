import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

// TODO: generateStaticParams() once lib/data/podcast.ts exists.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ episode: string }>;
}): Promise<Metadata> {
  const { episode } = await params;


  return buildMetadata({
    title: episode.replace(/-/g, " "),
    description: "",
    path: `/podcast/${episode}`,
  });
}

// Every episode contains: Video, Audio, Transcript, Key Insights, Quotes,
// Resources, Related Articles, Related Solutions, CTA.
export default async function EpisodePage({
  params,
}: {
  params: Promise<{ episode: string }>;
}) {
  const { episode } = await params;
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { href: "/podcast", label: "Podcast" },
            { href: `/podcast/${episode}`, label: episode },
          ]}
        />
      </Container>
      <Container className="py-12">
        <h1>{/* TODO: episode.title */}</h1>
        {/* TODO: video embed, audio player */}
      </Container>
      <Container className="grid gap-16 pb-16 md:grid-cols-2">
        <section>
          <h2>Key insights</h2>
        </section>
        <section>
          <h2>Quotes</h2>
        </section>
      </Container>
      <Container className="pb-16">
        <h2>Transcript</h2>
      </Container>
      <Container className="grid gap-8 pb-16 md:grid-cols-3">
        <div>
          <h3>Resources</h3>
        </div>
        <div>
          <h3>Related articles</h3>
        </div>
        <div>
          <h3>Related solutions</h3>
        </div>
      </Container>
      <CTASection headline="Want a conversation like this for your team?" />
    </>
  );
}
