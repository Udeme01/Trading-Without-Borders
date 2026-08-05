import Link from "next/link";
import Container from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    heading: "Discover",
    links: [
      { href: "/discover/founder", label: "Founder" },
      { href: "/discover/executive", label: "Executive" },
      { href: "/discover/investor", label: "Investor" },
      { href: "/discover/government", label: "Government" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { href: "/solutions/trade-advisory", label: "Trade Advisory" },
      { href: "/solutions/market-intelligence", label: "Market Intelligence" },
      { href: "/solutions/executive-advisory", label: "Executive Advisory" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/podcast", label: "Podcast" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg font-semibold">Trading Without Borders</p>
          <p className="mt-2 text-sm text-ink-60">Africa Trade Brief — newsletter</p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="meta-label">{col.heading}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-60 hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-ink-40">
          © {new Date().getFullYear()} Trading Without Borders. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
