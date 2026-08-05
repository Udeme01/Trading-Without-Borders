import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

// Two CTAs recur across the sitemap ("Book a Strategy Session" / secondary
// links) — this covers both without a third component.
export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-mono uppercase text-xs tracking-[0.12em] transition-colors";

  const variants = {
    primary: "bg-[#001C55] text-paper hover:bg-[#001C55]/90 rounded-md",
    secondary: "border border-white text-white hover:bg-[#001C55] hover:border-[#001C55] rounded-md",
    ghost: "text-ink underline underline-offset-4 hover:text-ink-60",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
