import { Metadata } from "next";

const SITE_URL = "https://www.tradingwithoutborders.com"; // update before launch
const SITE_NAME = "Trading Without Borders";

// Shared helper so every page builds metadata the same way instead of
// hand-rolling <head> tags. Used by page.tsx files across the app.
export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/discover/founder"
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export { SITE_URL, SITE_NAME };
