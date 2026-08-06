"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${isScrolled ? "bg-white shadow-2xl backdrop-blur-sm" : "bg-paper/0"} transition-colors`}
    >
      <Container className="flex items-center justify-between py-6">
        <Link
          href="/"
          className={`font-display text-lg font-semibold tracking-tight ${isScrolled ? "text-[#001C55]" : "text-white"}`}
        >
          Trading Without Borders
        </Link>

        <div className="xl:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            rounded
            color={isScrolled ? "#001C55" : "#FFFFFF"}
          />
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-widest ${isScrolled ? "text-[#001C55]" : "text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          href="/contact"
          variant="primary"
          className="hidden xl:inline-flex"
        >
          Book a Strategy Session
        </Button>
        {/* TODO: mobile menu toggle */}
      </Container>
    </header>
  );
}
