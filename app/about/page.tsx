import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Our story, mission, and the people behind Trading Without Borders.",
  path: "/about",
});

const SECTIONS = [
  "Our Story", "Mission", "Vision", "The Philosophy",
  "Meet Omobola", "The Team", "Partners", "Media", "Speaking",
];

// PAGE 6 — ABOUT
export default function AboutPage() {
  return (
    <Container className="py-20">
      <h1>About Trading Without Borders</h1>
      {SECTIONS.map((section) => (
        <section key={section} className="border-t border-line py-12 first:mt-12">
          <h2>{section}</h2>
          {/* TODO: copy */}
        </section>
      ))}
    </Container>
  );
}
