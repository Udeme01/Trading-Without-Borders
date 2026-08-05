import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import NewsletterBanner from "@/components/sections/NewsletterBanner";
import Card from "@/components/ui/Card";
import RoleCard from "@/components/content/RoleCard";
import Container from "@/components/ui/Container";
import { roles } from "@/lib/data/roles";
import { solutions } from "@/lib/data/solutions";
import StatStrip from "@/components/sections/StatStrip";
import Button from "@/components/ui/Button";
import Image from "next/image";
import ArticleCard from "@/components/content/ArticleCard";
import PodcastCard from "@/components/content/PodcastCard";
import { getFeaturedArticles } from "@/lib/data/articles";
import { getFeaturedEpisodes } from "@/lib/data/podcast";

// PAGE 1 — HOME. Sections map 1:1 to the sitemap doc; fill in real copy
// per section as it's written. Structure/order is intentionally fixed.
export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);
  const featuredEpisodes = getFeaturedEpisodes(3);
  return (
    <>
      <Hero
        eyebrow={
          <>
            <span className="text-white">Trading </span>
            <span className="text-[#001C55] font-bold">Without Borders</span>
          </>
        }
        headline="Africa is open for business. Are you ready to move?"
        supporting="Advisory, market intelligence, and trade education for the people building Africa's next chapter."
        primaryCta={{ href: "/contact", label: "Book a Strategy Session" }}
        secondaryCta={{
          href: "/trade-intelligence",
          label: "Explore Trade Intelligence",
        }}
      />

      {/* Section 2 — Africa Is Changing */}
      <section className="border-b border-line py-20">
        <Container>
          <p className="meta-label">The shift</p>
          <h2 className="mt-2 max-w-3xl">
            Africa is changing — and the rules are being rewritten from within.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="max-w-prose text-ink-60">
              For decades, African economies traded more with the rest of the
              world than with each other — held back by fragmented markets,
              inconsistent tariffs, and borders that made moving goods across
              the continent slower and costlier than shipping them overseas.
            </p>
            <p className="max-w-prose text-ink-60">
              The African Continental Free Trade Area changes that calculation.
              It's the largest free trade area in the world by number of
              countries — a single market built to make Africa trade with itself
              first, and the businesses positioned early stand to define what
              that market looks like.
            </p>
          </div>

          <div className="mt-14">
            <StatStrip
              stats={[
                { value: "54", label: "Countries in the agreement" },
                { value: "1.3B", label: "People, single market" },
                { value: "$3.4T", label: "Combined GDP" },
                { value: "16%", label: "Pre-AfCFTA intra-African trade share" },
              ]}
            />
            <p className="mt-4 text-xs text-ink-40">
              Compare: intra-regional trade sits at roughly 59% in Asia and 68%
              in Europe — the gap AfCFTA is built to close.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 3 — The Cost of Standing Still */}
      <section className="border-b border-line bg-[#001C55] py-24 text-paper">
        <Container>
          <p className="meta-label !text-paper/50">
            The cost of standing still
          </p>
          <h2 className="mt-2 max-w-2xl">
            Waiting isn't neutral. It's a decision — one your competitors are
            already making differently.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div className="border-t border-paper/20 pt-6">
              <span className="meta-label !text-paper/50">
                01 — Missed Opportunities
              </span>
              <h3 className="mt-3 text-paper">
                Someone else is signing the deal you're still evaluating.
              </h3>
              <p className="mt-3 text-sm text-paper/70">
                AfCFTA is compressing a decade of market-entry advantage into a
                few years. The businesses building compliant trade structures
                and partnerships now are the ones who'll hold the relationships
                and tariff advantages when the rules fully phase in — not the
                ones still "monitoring the situation."
              </p>
            </div>

            <div className="border-t border-paper/20 pt-6">
              <span className="meta-label !text-paper/50">
                02 — Regulatory Uncertainty
              </span>
              <h3 className="mt-3 text-paper">
                54 countries. 54 sets of rules still converging under you.
              </h3>
              <p className="mt-3 text-sm text-paper/70">
                Rules of origin, customs regimes, and sector-specific protocols
                are still being harmonised country by country. Move without
                proper legal structuring and a deal that looks sound today can
                become a compliance liability the moment a regulation catches up
                to it.
              </p>
            </div>

            <div className="border-t border-paper/20 pt-6">
              <span className="meta-label !text-paper/50">
                03 — Poor Market Intelligence
              </span>
              <h3 className="mt-3 text-paper">
                Generic country reports get generic outcomes.
              </h3>
              <p className="mt-3 text-sm text-paper/70">
                Decisions made on outdated or one-size-fits-all intelligence cut
                both ways: companies either overestimate how easy entry will be,
                or miss the specific, narrow openings — a tariff phase-down, a
                sector protocol — where the real advantage actually sits.
              </p>
            </div>
          </div>

          <p className="mt-16 max-w-2xl font-display text-2xl italic text-paper/90">
            Every quarter spent uncertain is a quarter a competitor spends
            moving.
          </p>
        </Container>
      </section>

      {/* Section 4 — What Becomes Possible? */}
      <section className="border-b border-line py-20">
        <Container>
          <p className="meta-label">What becomes possible</p>
          <h2 className="mt-2 max-w-xl">
            Not just compliant. Positioned to move first.
          </h2>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-0 md:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="meta-label mb-4">Before</p>
              {[
                "Watching AfCFTA from the sidelines",
                "One misstep from stalling a deal",
                "Guessing which market to enter",
                "Reacting to regulation",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-line py-3 text-sm text-ink-60 last:border-b"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center px-6 py-8 text-ink-20 md:py-0">
              <span aria-hidden className="text-lg">
                →
              </span>
            </div>

            <div className="bg-[#001C55] px-6 rounded-2xl">
              <p className="meta-label !text-paper/50 pt-4 pb-4">After</p>
              {[
                "Trading inside a $3.4T single market",
                "Compliant structures, built to move fast",
                "Intelligence-backed entry, sector by sector",
                "Anticipating regulation, ahead of the curve",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-paper/15 py-3 text-sm font-semibold text-paper last:border-b"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5 — Choose Your Journey */}
      <section className="border-b border-line py-20">
        <Container>
          <p className="meta-label">Choose your journey</p>
          <h2 className="mt-2">Built for where you sit.</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => (
              <RoleCard key={role.slug} role={role} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6 — How We Move You Forward */}
      <section className="border-b border-line py-20">
        <Container>
          <p className="meta-label">How we move you forward</p>
          <h2 className="mt-2">Solutions</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                eyebrow={solution.category}
                title={solution.title}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 7 — Why Trading Without Borders? */}
      <section className="border-b border-line py-20">
        <Container>
          <p className="meta-label">Why Trading Without Borders</p>
          <h2 className="mt-2 max-w-2xl">
            Trade advice is easy to find. Trade advice built on both law and
            deals is not.
          </h2>
          <p className="mt-6 max-w-prose text-ink-60">
            Most AfCFTA commentary stops at explaining the framework. Trading
            Without Borders exists to close the gap between understanding AfCFTA
            and actually structuring a compliant, defensible move inside it —
            advisory grounded in practicing trade law, not just writing about
            it.
          </p>

          <div className="mt-14">
            <p className="meta-label mb-4">Credibility</p>
            <StatStrip
              stats={[
                {
                  value: "~20 yrs",
                  label: "In trade law & corporate advisory",
                },
                { value: "110+", label: "AfCFTA podcast episodes" },
                { value: "54", label: "Countries covered under AfCFTA" },
                { value: "M.CIoD", label: "Chartered governance credential" },
              ]}
            />
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div>
              <span className="meta-label">01</span>
              <h3 className="mt-3">Law and trade strategy, one practice</h3>
              <p className="mt-2 text-sm text-ink-60">
                Most advisors are either lawyers or trade consultants, rarely
                both. Structuring, compliance, and negotiation come from the
                same source — nothing gets lost in a handoff between them.
              </p>
            </div>
            <div>
              <span className="meta-label">02</span>
              <h3 className="mt-3">AfCFTA-specific, not generalist</h3>
              <p className="mt-2 text-sm text-ink-60">
                A dedicated podcast and practice built around one framework, not
                Africa-market advisory in general — depth over breadth on the
                agreement that actually determines your entry terms.
              </p>
            </div>
            <div>
              <span className="meta-label">03</span>
              <h3 className="mt-3">Built on real transactions</h3>
              <p className="mt-2 text-sm text-ink-60">
                Advisory grounded in an active corporate and commercial
                transactions practice — not a theoretical framework, a record of
                deals actually structured and closed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 8 — Meet Omobola Adekola */}
      <section className="border-b border-line py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:items-start">
            <div className="aspect-[4/5] w-full max-w-[280px] border border-line bg-paper-dim">
              {/* TODO: replace with real portrait — grayscale to match monochrome
            system. Keep aspect-[4/5], border/bg act as placeholder frame. */}
              <Image
                src="/images/omobola-adekola.jpeg"
                alt="Omobola Adekola"
                width={400}
                height={500}
              />
            </div>

            <div>
              <p className="meta-label">Your guide</p>
              <h2 className="mt-2">Meet Omobola Adekola</h2>
              <p className="mt-6 max-w-prose text-lg text-ink-60">
                She's seen a good deal die in a compliance gap nobody caught
                early enough — and watched others move through the same
                conditions cleanly, because someone knew exactly where to look.
                Trading Without Borders exists so you don't have to learn AfCFTA
                the expensive way.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
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

      {/* Section 9 — Featured Insights */}
      {featuredArticles.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="meta-label">Trade Intelligence</p>
                <h2 className="mt-2">Featured insights</h2>
              </div>
              <Button
                href="/trade-intelligence"
                variant="ghost"
                className="hidden md:inline-flex"
              >
                View all →
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            <Button
              href="/trade-intelligence"
              variant="ghost"
              className="mt-8 inline-flex md:hidden"
            >
              View all →
            </Button>
          </Container>
        </section>
      )}

      {/* Section 10 — Featured Podcast */}
      {featuredEpisodes.length > 0 && (
        <section className="border-b border-line py-20">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="meta-label">An AfCFTA Conversation Series</p>
                <h2 className="mt-2">Featured podcast</h2>
              </div>
              <Button
                href="/podcast"
                variant="ghost"
                className="hidden md:inline-flex"
              >
                All episodes →
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredEpisodes.map((episode) => (
                <PodcastCard key={episode.slug} episode={episode} />
              ))}
            </div>

            <Button
              href="/podcast"
              variant="ghost"
              className="mt-8 inline-flex md:hidden"
            >
              All episodes →
            </Button>
          </Container>
        </section>
      )}

      {/* Section 11 — Newsletter */}
      <NewsletterBanner />

      {/* Section 12 — Final CTA */}
      <CTASection headline="Ready to move Africa forward with you?" />
    </>
  );
}
