import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  image?: { src: string; alt: string };
  className?: string;
}

export default function Card({
  href,
  eyebrow,
  title,
  description,
  ctaLabel = "Learn more",
  image,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line p-6 py-16 shadow-xs",
        "transition-all duration-500 ease-out",
        "md:hover:z-20 md:hover:scale-[1.125] md:hover:border-ink",
        "md:hover:shadow-[0_40px_100px_-20px_rgba(0,28,85,0.6)]",
        className,
      )}
    >
      {/* Background image */}
      {image?.src && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
      )}

      {/* Tint overlay — keeps text legible over any photo, flips color on hover */}
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-paper/40 transition-colors duration-500",
          "md:group-hover:bg-[#001C55]/85",
        )}
      />

      {eyebrow && (
        <span className="relative text-[10px] uppercase tracking-[0.14em] text-ink/90 transition-colors duration-500 md:group-hover:text-black/70 bg-blue-50 px-2 py-1 rounded-full">
          {eyebrow}
        </span>
      )}

      <h3 className="relative mt-6 font-display text-xl leading-snug text-[#001C55] transition-colors duration-500 md:group-hover:text-white">
        {title}
      </h3>

      {description && (
        <p className="relative mt-2 text-sm leading-relaxed text-[#001C55] transition-colors duration-500 md:group-hover:text-white">
          {description}
        </p>
      )}

      {/* CTA — the only real link in the card */}
      <Link
        href={href}
        className={cn(
          "relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-[#001C55] px-5 py-2.5",
          "text-sm font-semibold text-white shadow-lg",
          "md:absolute md:bottom-5 md:left-6 md:mt-0 md:bg-white md:text-[#001C55]",
          "md:scale-75 md:opacity-0",
          "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "md:group-hover:scale-100 md:group-hover:opacity-100 md:group-hover:delay-[500ms]",
          "md:group-focus-within:scale-100 md:group-focus-within:opacity-100 md:group-focus-within:delay-0",
        )}
      >
        {ctaLabel}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 md:group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
