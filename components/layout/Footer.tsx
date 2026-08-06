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
    <footer className="border-t border-line bg-[#001C55] py-16 text-paper">
      <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-xl lg:text-2xl font-semibold">Trading Without Borders</p>
          <p className="mt-2 text-sm text-white/70">Africa Trade Brief — newsletter</p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="uppercase text-xs tracking-[0.14em] text-white">{col.heading}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Trading Without Borders. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
