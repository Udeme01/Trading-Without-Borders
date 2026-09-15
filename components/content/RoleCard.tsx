import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Role } from "@/types";

// Powers Home Section 5 "Choose Your Journey" and the Discover landing grid.
export default function RoleCard({
  role,
  index,
}: {
  role: Role;
  index: number;
}) {
  return (
    <Link
      href={`/discover/${role.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line/10 p-5 py-32 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {role.image && (
        <Image
          src={role.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      )}

      {/* Gradient overlay — keeps white text legible over any photo, and
          darkens further on hover as a hover affordance. */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001C55]/90 via-[#001C55]/50 to-[#001C55]/20 transition-colors duration-300 group-hover:from-[#001C55]/95 group-hover:via-[#001C55]/70" />

      <span className="meta-label absolute top-5 text-paper/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <ArrowUpRight
        size={16}
        className="absolute right-5 top-5 text-paper/60 transition-colors group-hover:text-paper"
      />

      <div className="relative">
        <h3 className="mt-8 font-display text-xl font-semibold text-white">
          {role.label}
        </h3>
        <p className="mt-2 text-xs leading-snug text-white/80">
          {role.cardTagline}
        </p>
      </div>
    </Link>
  );
}
