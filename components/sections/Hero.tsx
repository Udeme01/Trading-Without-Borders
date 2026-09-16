"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface HeroSlide {
  eyebrow?: string;
  headline: string;
  supporting?: string;
  image: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

interface HeroProps {
  slides: HeroSlide[];
  intervalMs?: number; // time between auto-advances
}

export default function Hero({ slides, intervalMs = 6000 }: HeroProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [slides.length],
  );

  // Auto-advance
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => goTo(index + 1), intervalMs);
    return () => clearInterval(timer);
  }, [index, intervalMs, slides.length, goTo]);

  const slide = slides[index];

  return (
    <section className="relative border-b border-line min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background images crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            unoptimized
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient + dark overlay stay static so text stays readable across slides */}
      <div className="absolute inset-0 bg-linear-to-b from-[#001C55] to-[#001C55]/70 mix-blend-multiply" />
      <div className="bg-black/0 absolute inset-0" />

      {/* Text content crossfades independently of the image */}
      <Container className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {slide.eyebrow && (
              <p className="font-mono uppercase text-xs tracking-[0.14em] text-paper/70 mb-4">{slide.eyebrow}</p>
            )}
            <h1 className="max-w-6xl font-bold text-3xl md:text-6xl text-white">
              {slide.headline}
            </h1>
            {slide.supporting && (
              <p className="mt-6 max-w-prose text-md md:text-lg text-white/60 font-regular">
                {slide.supporting}
              </p>
            )}
            {(slide.primaryCta || slide.secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {slide.primaryCta && (
                  <Button
                    href={slide.primaryCta.href}
                    variant="primary"
                    className="text-white"
                  >
                    {slide.primaryCta.label}
                  </Button>
                )}
                {slide.secondaryCta && (
                  <Button href={slide.secondaryCta.href} variant="secondary">
                    {slide.secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="mt-16 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
