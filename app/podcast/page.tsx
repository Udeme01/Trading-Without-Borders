import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import PodcastCard from "@/components/content/PodcastCard";
import { episodes } from "@/lib/data/podcast";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Podcast",
  description:
    "Trading Without Borders: An AfCFTA Conversation Series — 110+ episodes demystifying AfCFTA with industry leaders and government officials.",
  path: "/podcast",
});

const BROWSE_FILTERS = ["Topic", "Guest", "Industry", "Country"];

// PAGE 5 — PODCAST.
// This is the flagship, pre-existing show (110 episodes, real audience),
// not a new "internal rename" — kept its established name and tagline
// rather than the "Conversations Shaping African Trade" placeholder from
// the original brief.
export default function PodcastPage() {
  const [latest, ...restEpisodes] = episodes;

  return (
    <>
      {/* Hero — full-bleed host photo, dark on the left where the text
          sits, fading to fully visible on the right. Same treatment as
          the Discover role pages. */}
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden pb-16 pt-32 md:items-center md:pb-0">
        <Image
          src="/images/omobola-adekola.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-xl md:max-w-4xl">
            <p className="font-mono uppercase text-[10px] mb-4 tracking-widest text-white/70 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              An AfCFTA Conversation Series
            </p>
            <h1
              className="mt-2 text-6xl leading-[0.95] tracking-tight text-white opacity-0 sm:text-7xl lg:text-8xl [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "80ms" }}
            >
              Trading Without Borders
            </h1>
            <p
              className="mt-6 max-w-md text-white/85 opacity-0 [animation:reveal-up_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "260ms" }}
            >
              110+ episodes demystifying the African Continental Free Trade Area
              — conversations with stakeholders, industry leaders, and
              government officials on what AfCFTA means in practice.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        {/* Browse filters — repositioned as an actual toolbar, styled as
            dropdowns (not wired up yet, as agreed — just placed where a
            filter bar belongs, above the episode list it would filter). */}
        <div className="flex flex-wrap items-center gap-3 border-y border-line py-4">
          <span className="meta-label text-ink-40">Browse by</span>
          {BROWSE_FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[#001C55] transition-colors hover:border-[#001C55]"
            >
              {label}
              <ChevronDown size={13} />
            </button>
          ))}
        </div>

        {/* Latest episode */}
        {latest && (
          <section className="mt-12">
            <h2>Latest episode</h2>
            <Link
              href={`/podcast/${latest.slug}`}
              className="group mt-6 block rounded-2xl border border-line p-8 transition-colors hover:bg-[#001C55] md:p-12"
            >
              <p className="font-mono uppercase text-xs tracking-[0.14em] text-ink-60 group-hover:text-paper/70">
                {new Date(latest.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-3 max-w-2xl font-display text-3xl text-[#001C55] group-hover:text-white">
                {latest.title}
              </h3>
              <p className="mt-2 text-sm text-ink-60 group-hover:text-white/70">
                With {latest.guest}
              </p>
              <span className="mt-6 inline-flex items-center rounded-md border border-[#001C55] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#001C55] transition-colors group-hover:border-white group-hover:text-white">
                Listen now
              </span>
            </Link>
          </section>
        )}

        {/* All episodes — every episode, horizontally scrollable so it
            scales cleanly once this holds 110+ real entries instead of
            paginating or dumping them all in one long vertical list. */}
        {restEpisodes.length > 0 && (
          <section className="mt-16">
            <h2>All episodes</h2>
            <div className="mt-8 flex snap-x snap-mandatory overflow-x-auto gap-6 px-6 pb-3 [scrollbar-width:thin]">
              {restEpisodes.map((episode) => (
                <div
                  key={episode.slug}
                  className="w-[85vw] shrink-0 snap-start sm:w-[380px]"
                >
                  <PodcastCard episode={episode} />
                </div>
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
