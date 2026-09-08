import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  className?: string;
}

export default function Card({
  href,
  eyebrow,
  title,
  description,
  ctaLabel = "Learn more",
  className,
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block rounded-2xl border border-line bg-paper p-6 py-32 shadow-xs",
        "transition-all duration-500 ease-out",
        "hover:z-20 hover:scale-[1.125] md:hover:scale-[1.25] hover:border-ink hover:bg-[#001C55]",
        "hover:shadow-[0_40px_100px_-20px_rgba(0,28,85,0.6)]",
        className,
      )}
    >
      {eyebrow && (
        <span className="absolute top-5 text-[10px] uppercase tracking-[0.14em] text-ink/60 transition-colors duration-500 group-hover:text-white/60">
          {eyebrow}
        </span>
      )}

      <h3 className="mt-2 font-display text-xl leading-snug text-[#001C55] transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm leading-relaxed text-[#001C55] transition-colors duration-500 group-hover:text-white">
          {description}
        </p>
      )}

      {/* CTA — pops in as a solid pill button, 2.5s after hover starts */}
      <span
        className={cn(
          "absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5",
          "text-sm font-semibold text-[#001C55] shadow-lg",
          "scale-75 opacity-0",
          "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "group-hover:scale-100 group-hover:opacity-100",
          "delay-0 group-hover:delay-[500ms]",
        )}
      >
        {ctaLabel}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
