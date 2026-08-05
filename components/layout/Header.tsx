"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Squash as Hamburger } from "hamburger-react";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/solutions", label: "Solutions" },
  { href: "/trade-intelligence", label: "Trade Intelligence" },
  { href: "/podcast", label: "Podcast" },
  { href: "/about", label: "About" },
];

// GLOBAL COMPONENT — Sticky Navigation. Search bar intentionally left as
// a follow-up once Trade Intelligence content exists to search over.
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[#001C55] hover:text-[#001C55]/90"
        >
          Trading Without Borders
        </Link>

        <div className="xl:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            rounded
            color="#000"
          />
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.1em] text-ink-60 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          href="/contact"
          variant="primary"
          className="hidden xl:inline-flex bg-[#001C55] hover:bg-[#001C55]/90 rounded-md"
        >
          Book a Strategy Session
        </Button>
        {/* TODO: mobile menu toggle */}
      </Container>
    </header>
  );
}
