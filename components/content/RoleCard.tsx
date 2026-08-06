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
      className="group relative block border border-line p-5 py-32 transition-colors hover:bg-[#001C55] rounded-2xl shadow-xs hover:shadow-2xl hover:translate-y-[-8px] flex flex-col justify-between"
    >
      <span className="meta-label text-black/60 group-hover:text-paper/45! absolute top-5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <ArrowUpRight
        size={16}
        className="absolute right-5 top-5 text-black/60 group-hover:text-paper"
      />
      <h3 className="mt-8 font-display text-xl font-semibold text-[#001C55] group-hover:text-white">
        {role.label}
      </h3>
      <p className="mt-2 text-xs leading-snug text-[#001C55] group-hover:text-white">
        {role.cardTagline}
      </p>
    </Link>
  );
}
