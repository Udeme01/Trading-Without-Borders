import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ArticleCard from "@/components/content/ArticleCard";
import {
  episodes,
  getEpisodeBySlug,
  toSpotifyEmbedUrl,
} from "@/lib/data/podcast";
import { articles } from "@/lib/data/articles";
import { solutions } from "@/lib/data/solutions";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return episodes.map((e) => ({ episode: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ episode: string }>;
}): Promise<Metadata> {
  const { episode: slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};

  return buildMetadata({
    title: episode.title,
    description: `${episode.title} — with ${episode.guest}, on Trading Without Borders.`,
    path: `/podcast/${episode.slug}`,
  });
}

// Every episode contains: Video, Audio, Transcript, Key Insights, Quotes,
// Resources, Related Articles, Related Solutions, CTA.
export default async function EpisodePage({
  params,
}: {
  params: Promise<{ episode: string }>;
}) {
  const { episode: slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const embedUrl = toSpotifyEmbedUrl(episode.spotifyUrl);
  const relatedArticles = articles.filter((a) =>
    episode.relatedArticleSlugs?.includes(a.slug),
  );
  const relatedSolutions = solutions.filter((s) =>
    episode.relatedSolutionSlugs?.includes(s.slug),
  );

  const hasQuotes = (episode.quotes?.length ?? 0) > 0;

  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { href: "/podcast", label: "Podcast" },
            { href: `/podcast/${episode.slug}`, label: episode.title },
          ]}
        />
      </Container>

      <Container className="py-12">
        <p className="meta-label">
          {new Date(episode.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 max-w-3xl">{episode.title}</h1>
        <p className="mt-3 text-ink-60">With {episode.guest}</p>

        {/* Video/Audio — embedded from Spotify, where the show already
            lives, rather than a self-hosted player. */}
        {embedUrl ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <iframe
              src={embedUrl}
              width="100%"
              height="232"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Listen to ${episode.title} on Spotify`}
            />
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-line p-6 text-sm text-ink-40">
            Spotify link for this episode hasn&apos;t been added yet.
          </p>
        )}
      </Container>

      {(episode.keyInsights.length > 0 || hasQuotes) && (
        <Container className="grid gap-16 pb-16 md:grid-cols-2">
          {episode.keyInsights.length > 0 && (
            <section>
              <h2>Key insights</h2>
              <ul className="mt-6 space-y-3">
                {episode.keyInsights.map((insight) => (
                  <li
                    key={insight}
                    className="border-t border-line pt-3 text-sm text-ink-60"
                  >
                    {insight}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {hasQuotes && (
            <section>
              <h2>Quotes</h2>
              <ul className="mt-6 space-y-6">
                {episode.quotes!.map((quote) => (
                  <li
                    key={quote}
                    className="border-l-2 border-[#001C55]/20 pl-4 font-display text-lg italic text-ink-60"
                  >
                    &ldquo;{quote}&rdquo;
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Container>
      )}

      {episode.transcript && (
        <Container className="pb-16">
          <h2>Transcript</h2>
          <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink-60">
            {episode.transcript}
          </p>
        </Container>
      )}

      {(episode.resources?.length ||
        relatedArticles.length > 0 ||
        relatedSolutions.length > 0) && (
        <Container className="grid gap-10 pb-16 sm:grid-cols-2 md:grid-cols-3">
          {episode.resources && episode.resources.length > 0 && (
            <div>
              <h3>Resources</h3>
              <ul className="mt-4 space-y-2">
                {episode.resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.url}
                      className="text-sm text-[#001C55] underline underline-offset-4 hover:text-[#001C55]/60"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div>
              <h3>Related articles</h3>
              <ul className="mt-4 space-y-2">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <a
                      href={`/trade-intelligence/${article.slug}`}
                      className="text-sm text-[#001C55] underline underline-offset-4 hover:text-[#001C55]/60"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedSolutions.length > 0 && (
            <div>
              <h3>Related solutions</h3>
              <ul className="mt-4 space-y-2">
                {relatedSolutions.map((solution) => (
                  <li key={solution.slug}>
                    <a
                      href={`/solutions/${solution.slug}`}
                      className="text-sm text-[#001C55] underline underline-offset-4 hover:text-[#001C55]/60"
                    >
                      {solution.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      )}

      <CTASection headline="Want a conversation like this for your team?" />
    </>
  );
}
