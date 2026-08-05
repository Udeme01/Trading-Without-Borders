import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

// One shared card shape for Role cards (Choose Your Journey), Solution
// cards, Article cards, Podcast cards — pass different eyebrow/copy.
export default function Card({ href, eyebrow, title, description, className }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block border border-line p-6 transition-colors hover:border-ink hover:bg-[#001C55] rounded-2xl shadow-xs hover:shadow-2xl hover:translate-y-[-8px]",
        className
      )}
    >
      {eyebrow && <span className="meta-label uppercase text-[10px] text-[#001C55] tracking-[0.14em] group-hover:text-white">{eyebrow}</span>}
      <h3 className="mt-2 font-display text-xl leading-snug group-hover:underline underline-offset-4 text-[#001C55] group-hover:text-white">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-[#001C55] group-hover:text-white leading-relaxed">{description}</p>
      )}
    </Link>
  );
}
