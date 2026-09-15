import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ArticleCard from "@/components/content/ArticleCard";
import PodcastCard from "@/components/content/PodcastCard";
import CTASection from "@/components/sections/CTASection";
import { roles, getRoleBySlug } from "@/lib/data/roles";
import { solutions } from "@/lib/data/solutions";
import { articles } from "@/lib/data/articles";
import { episodes } from "@/lib/data/podcast";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) {
    return buildMetadata({
      title: "Discover",
      description:
        "Choose your role to get a tailored path through Trading Without Borders.",
      path: "/discover",
    });
  }

  return buildMetadata({
    title: role.label,
    description: role.strapline,
    path: `/discover/${role.slug}`,
  });
}

// PAGE 2 — DISCOVER (role detail). Sections map to the sitemap doc: Hero,
// Challenges, Opportunities, JTBD, Recommended Services, CTA. Relevant
// Resources / Podcast / Case Studies slot in once that content exists.
export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();

  const recommendedSolutions = solutions.filter((solution) =>
    role.recommendedSolutionSlugs.includes(solution.slug),
  );
  const recommendedSolutionSlugs = recommendedSolutions.map((s) => s.slug);

  // Bridge: Role → Recommended Solutions → Articles/Podcasts tagged to
  // those solutions. Matches the sitemap's Content Relationship Map —
  // there's no direct role↔content link, so we go through Solutions.
  const relevantArticles = articles.filter(
    (article) =>
      article.category !== "Case Studies" &&
      article.relatedSolutionSlugs?.some((slug) =>
        recommendedSolutionSlugs.includes(slug),
      ),
  );

  const caseStudies = articles.filter(
    (article) =>
      article.category === "Case Studies" &&
      article.relatedSolutionSlugs?.some((slug) =>
        recommendedSolutionSlugs.includes(slug),
      ),
  );

  const relevantEpisodes = episodes.filter((episode) =>
    episode.relatedSolutionSlugs?.some((slug) =>
      recommendedSolutionSlugs.includes(slug),
    ),
  );

  const hasChallenges = role.challenges.length > 0;
  const hasOpportunities = role.opportunities.length > 0;
  const hasJtbd = role.jtbd.length > 0;

  return (
    <>
      {/* Hero — full-bleed background image with text overlaid, matching
          the homepage hero treatment. One orchestrated entrance: heading,
          subheading, description, and CTA stagger in on load. */}
      <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden pb-16 pt-32 md:items-center md:pb-0">
        {role.image && (
          <Image
            src={role.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        {/* Overlay — dark enough to keep white text legible over any
            photo, heavier on the left where the text sits. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 md:bg-gradient-to-r md:from-black/85 md:via-black/55 md:to-black/15" />

        <Container className="relative z-10">
          <div className="max-w-xl md:max-w-2xl">
            {role.eyebrow && (
              <p className="meta-label text-white/60 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                {role.eyebrow}
              </p>
            )}

            <h1
              className="mt-2 text-6xl leading-[0.95] tracking-tight text-white opacity-0 sm:text-7xl lg:text-8xl [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "80ms" }}
            >
              {role.heading ?? role.label}
            </h1>

            {role.subheading && (
              <p
                className="mt-6 font-display text-xl italic text-white/70 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: "260ms" }}
              >
                {role.subheading}
              </p>
            )}

            {role.description && (
              <p
                className="mt-6 max-w-md text-white/85 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: "380ms" }}
              >
                {role.description}
              </p>
            )}

            <p
              className="mt-4 max-w-md text-sm text-white/50 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "460ms" }}
            >
              {role.strapline}
            </p>

            <div
              className="opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards] mt-8"
              style={{ animationDelay: "560ms" }}
            >
              <Button
                href="/contact"
                variant="primary"
                className="mt-8 bg-white text-[#001C55] hover:bg-white/85"
              >
                {role.ctaLabel ?? "Book a Strategy Session"}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges / Opportunities — only renders once content exists */}
      {(hasChallenges || hasOpportunities) && (
        <section className="border-b border-line py-20">
          <Container>
            <div className="grid gap-14 md:grid-cols-2">
              {hasChallenges && (
                <div>
                  <p className="meta-label">The challenges</p>
                  <h2 className="mt-2 max-w-sm">
                    What makes this stage harder than it looks.
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {role.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="border-t border-line pt-5 text-sm text-ink-60"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasOpportunities && (
                <div>
                  <p className="meta-label">The opportunities</p>
                  <h2 className="mt-2 max-w-sm">
                    What AfCFTA specifically opens up for you.
                  </h2>
                  <ul className="mt-8 space-y-5">
                    {role.opportunities.map((opportunity) => (
                      <li
                        key={opportunity}
                        className="border-t border-line pt-5 text-sm text-ink-60"
                      >
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Jobs to be done — only renders once content exists */}
      {hasJtbd && (
        <section className="border-b border-line bg-linear-to-b from-[#001C55] to-[#001C55]/80 py-20 text-paper">
          <Container>
            <p className="meta-label !text-paper/50">
              What you&apos;re really here to do
            </p>
            <h2 className="mt-2 max-w-lg text-paper">
              Beyond the title, here&apos;s the job.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {role.jtbd.map((job, index) => (
                <div key={job} className="border-t border-paper/20 pt-5">
                  <span className="meta-label !text-paper/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-paper/90">{job}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Recommended solutions */}
      {recommendedSolutions.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <p className="meta-label">Recommended for you</p>
            <h2 className="mt-2 max-w-lg">
              Where to start, based on where you are.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 overflow-visible px-4 sm:grid-cols-2 sm:px-8">
              {recommendedSolutions.map((solution) => (
                <Card
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  eyebrow={solution.category}
                  title={solution.title}
                  ctaLabel="Explore this solution"
                  image={{ src: solution.iconSrc, alt: solution.title }}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Relevant Resources */}
      {relevantArticles.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <p className="meta-label">Relevant resources</p>
            <h2 className="mt-2 max-w-lg">
              Reading worth your time, picked for this role.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 overflow-visible px-4 sm:grid-cols-2 sm:px-8">
              {relevantArticles.slice(0, 4).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Relevant Podcast Episodes */}
      {relevantEpisodes.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <p className="meta-label">Relevant podcast episodes</p>
            <h2 className="mt-2 max-w-lg">
              Conversations built for this role.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {relevantEpisodes.slice(0, 4).map((episode) => (
                <PodcastCard key={episode.slug} episode={episode} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <p className="meta-label">Case studies</p>
            <h2 className="mt-2 max-w-lg">Proof, not promises.</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 overflow-visible px-4 sm:grid-cols-2 sm:px-8">
              {caseStudies.slice(0, 4).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline={
          role.ctaLabel ?? "Ready to move forward with Trading Without Borders?"
        }
      />
    </>
  );
}
