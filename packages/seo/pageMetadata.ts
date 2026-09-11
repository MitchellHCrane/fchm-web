import type { Metadata } from "next";
import { shared } from "@config/site";

/** Generic page metadata builder for the company/referral/dpa tiers — same
 *  shape as @seo/metadata's officer builder, parameterized by an absolute URL
 *  instead of an Officer record. */
export function buildPageMetadata(page: {
  url: string;
  title: string;
  description: string;
  ogImage: string; // absolute URL
  siteName?: string;
}): Metadata {
  return {
    metadataBase: new URL(page.url),
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.url },
    openGraph: {
      type: "website",
      url: page.url,
      title: page.title,
      description: page.description,
      siteName: page.siteName ?? shared.company.legalName,
      images: [{ url: page.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.ogImage],
    },
  };
}
