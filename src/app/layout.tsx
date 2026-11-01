import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const siteUrl = "https://karthikkesavarapu.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karthik Kesavarapu — Data Engineering & AI Systems",
    template: "%s — Karthik Kesavarapu",
  },
  description:
    "Karthik Kesavarapu is an M.S. Computer Science (AI) candidate at the University of Chicago, building data pipelines, agentic AI systems, and full-stack platforms. Summa Cum Laude graduate of UIC.",
  keywords: [
    "Karthik Kesavarapu",
    "Data Engineer",
    "AI Engineer",
    "Agentic AI",
    "University of Chicago MPCS",
    "Azure Databricks",
    "Software Engineer",
  ],
  authors: [{ name: "Karthik Kesavarapu" }],
  creator: "Karthik Kesavarapu",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Karthik Kesavarapu — Data Engineering & AI Systems",
    description:
      "Building the pipelines, platforms, and agentic systems that turn raw data into intelligence. M.S. CS (AI) candidate, University of Chicago.",
    siteName: "Karthik Kesavarapu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Kesavarapu — Data Engineering & AI Systems",
    description:
      "Building the pipelines, platforms, and agentic systems that turn raw data into intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
