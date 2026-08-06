import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: ReactNode;
  headline: string;
  supporting?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

// Used on Home, and reused (with different copy) as the top of every
// Discover role page and Solutions page per the sitemap.
export default function Hero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="border-b border-line min-h-screen flex items-center py-20 bg-linear-to-b from-[#001C55] to-[#001C55]/80">
      <Container>
        {eyebrow && <p className="meta-label mb-4">{eyebrow}</p>}
        <h1 className="max-w-4xl font-bold text-3xl md:text-6xl text-white">
          {headline}
        </h1>
        {supporting && (
          <p className="mt-6 max-w-prose text-md md:text-lg text-white text-ink-60 font-regular">
            {supporting}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" className="text-white">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
