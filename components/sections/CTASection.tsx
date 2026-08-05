import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Reused as: Home "Final CTA", bottom of every Solution page, bottom of
// every Discover role page, bottom of every Podcast episode.
export default function CTASection({
  headline = "Ready to move forward?",
  cta = { href: "/contact", label: "Book a Strategy Session" },
}: {
  headline?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-line py-20 text-center">
      <Container>
        <h2 className="mx-auto max-w-2xl">{headline}</h2>
        <div className="mt-8">
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
