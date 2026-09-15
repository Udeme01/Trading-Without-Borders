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

  // Lock body scroll while the mobile menu is open, and always close it
  // if the viewport grows past the mobile breakpoint (e.g. rotating a
  // tablet, or resizing a browser window).
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-100 ${isScrolled || isOpen ? "bg-white shadow-2xl backdrop-blur-sm" : "bg-paper/0"} transition-colors`}
    >
      <Container className="flex items-center justify-between py-6">
        <Link
          href="/"
          className={`font-display text-lg font-semibold tracking-tight ${isScrolled || isOpen ? "text-[#001C55]" : "text-white"}`}
          onClick={() => setIsOpen(false)}
        >
          Trading Without Borders
        </Link>

        <div className="xl:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            rounded
            color={isScrolled || isOpen ? "#001C55" : "#FFFFFF"}
            label={isOpen ? "Close menu" : "Open menu"}
          />
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[12px] uppercase tracking-widest ${isScrolled ? "text-[#001C55] hover:text-[#001C55]/60" : "text-white hover:text-white/60"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          href="/contact"
          variant="primary"
          className={`hidden xl:inline-flex ${isScrolled ? "bg-[#001C55] text-white" : "bg-white text-[#001C55] hover:bg-white/80"}`}
        >
          Book a Strategy Session
        </Button>
      </Container>

      {/* Mobile nav panel */}
      <div
        className={`fixed z-90 bg-white inset-x-0 top-[88px] xl:hidden overflow-y-auto transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[calc(100vh-88px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-2 pb-12 pt-6">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#001C55]/10 py-6 font-display text-4xl font-medium tracking-tight text-[#001C55] transition-colors hover:text-[#001C55]/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href="/contact"
            variant="primary"
            onClick={() => setIsOpen(false)}
            className="mt-10 inline-flex justify-center bg-[#001C55] py-4 text-sm text-white"
          >
            Book a Strategy Session
          </Button>
        </Container>
      </div>
    </header>
  );
}
