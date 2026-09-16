import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatStrip from "@/components/sections/StatStrip";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Our story, mission, and the people behind Trading Without Borders.",
  path: "/about",
});

// PAGE 6 — ABOUT
//
// PLACEHOLDER COPY throughout — Our Story / Mission / Vision / Philosophy
// / Team / Partners / Media / Speaking are all illustrative text so the
// page can be reviewed fully designed. Replace before launch.
export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <Container className="pb-16 pt-36 min-h-[80vh] flex flex-col items-start justify-center tracking-wide">
        <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
          About
        </p>
        <h1 className="mt-4 max-w-full leading-32">
          Advisory built on both law and deals — not one or the other.
        </h1>
      </Container>

      {/* Our Story — wide narrative, label column + text column */}
      <section className="border-t border-line py-32 bg-linear-to-b from-[#001C55] to-[#001C55]/80">
        <Container>
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <p className="font-mono uppercase text-sm tracking-[0.14em] !text-paper/50">
              Our story
            </p>
            <div className="max-w-2xl space-y-5 text-paper/70 font-display text-lg leading-snug tracking-wide">
              <p>
                Trading Without Borders started from a simple observation: most
                AfCFTA commentary stops at explaining the framework, and most
                trade advisory stops at explaining the law. Few practices sit at
                the intersection of both — structuring deals and explaining the
                policy behind them, in the same conversation.
              </p>
              <p>
                What began as a podcast translating AfCFTA into plain language
                became a practice: advisory grounded in real, closed
                transactions, not theoretical frameworks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision — side by side, deliberately different rhythm
          from the Our Story block above it */}
      <section className="border-t border-line py-20">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
                Mission
              </p>
              <p className="mt-4 max-w-md font-display text-2xl leading-snug text-[#001C55]">
                Close the gap between understanding AfCFTA and structuring a
                compliant, defensible move inside it.
              </p>
            </div>
            <div>
              <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
                Vision
              </p>
              <p className="mt-4 max-w-md font-display text-2xl leading-snug text-[#001C55]">
                A continent where every founder, investor, and policymaker
                trades with the same clarity as the advisors around them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Philosophy — full-bleed navy break, matches the homepage's
          pull-quote treatment. The one deliberate visual "moment" on an
          otherwise quiet, editorial page. */}
      <section className="bg-linear-to-b from-[#001C55] to-[#001C55]/80 py-24 text-paper">
        <Container>
          <p className="font-mono uppercase text-sm tracking-[0.14em] !text-paper/50">
            The philosophy
          </p>
          <p className="mt-6 max-w-3xl font-display text-3xl italic leading-snug text-paper/95 sm:text-4xl">
            Advice without practice is theory. Practice without advice is luck.
            Neither is good enough for a decision this size.
          </p>
        </Container>
      </section>

      {/* Meet Omobola — the centerpiece. Large portrait, real bio,
          credentials, and a direct CTA. */}
      <section className="border-b border-line py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-[minmax(0,420px)_1fr] md:items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-paper-dim">
              <Image
                src="/images/omobola-adekola.jpeg"
                alt="Omobola Adekola"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 420px, 100vw"
              />
            </div>

            <div>
              <p className="meta-label">Meet Omobola</p>
              <h2 className="mt-2 max-w-lg">
                The trusted guide, not just the advisor.
              </h2>
              <p className="mt-6 max-w-prose text-ink-60">
                She&apos;s seen a good deal die in a compliance gap nobody
                caught early enough — and watched others move through the same
                conditions cleanly, because someone knew exactly where to look.
                Trading Without Borders exists so you don&apos;t have to learn
                AfCFTA the expensive way.
              </p>
              <p className="mt-4 max-w-prose text-ink-60">
                Her practice sits at the intersection of corporate law and trade
                strategy — advisory grounded in transactions she&apos;s actually
                structured and closed, not a theoretical read of the framework.
              </p>

              <div className="mt-10 bg-linear-to-b from-[#001C55] to-[#001C55]/80 p-4 rounded-2xl">
                <StatStrip
                  stats={[
                    {
                      value: "~20 yrs",
                      label: "In trade law & corporate advisory",
                    },
                    { value: "110+", label: "AfCFTA podcast episodes" },
                    { value: "54", label: "Countries covered under AfCFTA" },
                    {
                      value: "M.CIoD",
                      label: "Chartered governance credential",
                    },
                  ]}
                />
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  className="text-white"
                >
                  Book a Strategy Session
                </Button>
                <Button href="/podcast" variant="ghost">
                  Listen to the podcast
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Team — honest positioning for a solo-led practice, not an
          empty "Team" heading with nothing under it */}
      <section className="border-b border-line py-32 bg-linear-to-b from-[#001C55] to-[#001C55]/80">
        <Container>
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <p className="font-mono uppercase text-sm tracking-[0.14em] !text-paper/50">
              The team
            </p>
            <p className="max-w-2xl space-y-5 text-paper/70 font-display text-lg leading-snug tracking-wide">
              Trading Without Borders is led directly by Omobola — every
              engagement, every briefing, every structuring decision. No account
              managers, no handoffs to a junior team partway through. As the
              practice grows, this page will introduce the people who join it.
            </p>
          </div>
        </Container>
      </section>

      {/* Partners & Media — combined, since both are early-stage empty
          states right now. Avoids two back-to-back sparse sections. */}
      <section className="border-b border-line py-20">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
                Partners
              </p>
              <p className="mt-4 max-w-md font-display text-2xl leading-snug text-[#001C55]">
                Partnership details will be added here as formal collaborations
                are announced.
              </p>
            </div>
            <div>
              <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
                Media
              </p>
              <p className="mt-4 max-w-md font-display text-2xl leading-snug text-[#001C55]">
                Press mentions and media coverage will be added here as they
                come in.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Speaking */}
      <section className="py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:items-center">
            <p className="font-mono uppercase text-sm tracking-[0.14em] text-ink/70">
              Speaking
            </p>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="mt-4 max-w-md font-display text-2xl leading-snug text-[#001C55]">
                Available for talks, panels, and training sessions on AfCFTA and
                African trade strategy.
              </p>
              <Button href="/solutions/speaking-training" variant="ghost">
                See speaking & training →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
