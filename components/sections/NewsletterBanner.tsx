import Container from "@/components/ui/Container";

// GLOBAL COMPONENT — appears on Home (Section 11) and at the end of every
// Trade Intelligence article per the Content Relationship Map.
export default function NewsletterBanner() {
  return (
    <section className="border-y border-line bg-[#001C55] py-16 md:py-32">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="uppercase text-xs tracking-[0.14em] text-white/60">
            Africa Trade Brief
          </p>
          <h3 className="mt-2 text-white md:text-xl">
            Trade intelligence, in your inbox.
          </h3>
        </div>
        {/* TODO: wire to email provider */}
        <form className="flex w-full max-w-sm gap-2 md:w-auto">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full border-none bg-paper px-4 py-3 text-sm outline-none rounded-md"
          />
          <button
            type="submit"
            className="bg-white text-[#001C55] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] hover:bg-white/80 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  );
}
