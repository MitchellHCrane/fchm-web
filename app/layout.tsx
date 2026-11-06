import type { Metadata } from "next";
import { fontVariables } from "@config/fonts";
import { shared } from "@config/site";
import "./globals.css";

export const metadata: Metadata = {
  // Per-page metadata is set by generateMetadata() in each route. This is only
  // the fallback for anything that doesn't override it.
  title: {
    default: shared.company.legalName,
    template: `%s | ${shared.company.legalName}`,
  },
  description:
    "First Class Home Mortgage — nationwide mortgage lending. Regulated by State of Utah Division of Real Estate NMLS #1843.",
  // Served from /brand/, which every host passes through unrewritten (see
  // scripts/gen-redirects.mjs). Root-relative /favicon.ico would be rewritten
  // into the per-host tree (/sites/<slug>/favicon.ico) and 404.
  icons: {
    icon: [
      { url: "/brand/favicon.ico", sizes: "any" },
      { url: "/brand/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/brand/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
