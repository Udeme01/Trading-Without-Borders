import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Book a strategy session or reach Trading Without Borders directly.",
  path: "/contact",
});

const OPTIONS = [
  { slug: "strategy-session", label: "Book Strategy Session" },
  { slug: "corporate-enquiry", label: "Corporate Enquiry" },
  { slug: "government-partnership", label: "Government Partnership" },
  { slug: "speaking-request", label: "Speaking Request" },
  { slug: "media-interview", label: "Media Interview" },
  { slug: "general", label: "General Contact" },
];

// PAGE 7 — CONTACT
// TODO: decide whether each option routes to its own form/page or all
// funnel into one form with a "reason" select — sitemap doesn't specify.
export default function ContactPage() {
  return (
    <Container className="py-20">
      <h1>How can we help?</h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OPTIONS.map((opt) => (
          <Card key={opt.slug} href={`/contact#${opt.slug}`} title={opt.label} />
        ))}
      </div>
    </Container>
  );
}
