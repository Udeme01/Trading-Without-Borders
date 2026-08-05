import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Editorial display serif — high-contrast, a little idiosyncratic at
// bold weights. This is where the "loud" lives: big Fraunces headlines
// against a lot of quiet white space.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  // axes: ["opsz", "SOFT", "WONK"],
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.tradingwithoutborders.com"; // update before launch

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trading Without Borders | Africa Trade Intelligence & Advisory",
    template: "%s | Trading Without Borders",
  },
  description:
    "Advisory, market intelligence, and trade education for founders, executives, investors, and governments building across Africa.",
  openGraph: {
    type: "website",
    siteName: "Trading Without Borders",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-transparent text-ink font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
