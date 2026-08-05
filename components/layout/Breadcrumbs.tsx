import Link from "next/link";

interface Crumb {
  href: string;
  label: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="meta-label flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden>/</span>}
          {i === items.length - 1 ? (
            <span className="text-ink">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
