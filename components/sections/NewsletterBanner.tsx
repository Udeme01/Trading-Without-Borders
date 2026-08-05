import Container from "@/components/ui/Container";

// GLOBAL COMPONENT — appears on Home (Section 11) and at the end of every
// Trade Intelligence article per the Content Relationship Map.
export default function NewsletterBanner() {
  return (
    <section className="border-y border-line bg-ink-80/3 py-16">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="meta-label">Africa Trade Brief</p>
          <h3 className="mt-2">Trade intelligence, in your inbox.</h3>
        </div>
        {/* TODO: wire to email provider */}
        <form className="flex w-full max-w-sm gap-2 md:w-auto">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full border border-line bg-paper px-4 py-3 text-sm outline-hidden focus-visible:border-ink"
          />
          <button
            type="submit"
            className="bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-paper hover:bg-ink-80"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  );
}
