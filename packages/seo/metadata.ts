import type { Metadata } from "next";
import type { Officer } from "@content/schema";
import { shared } from "@config/site";

/**
 * The single place officer <head> SEO is built. Improving SEO for every
 * officer site = editing this function.
 */
export function buildOfficerMetadata(officer: Officer): Metadata {
  const url = shared.officerBaseUrl(officer.slug);
  const bio = Array.isArray(officer.bio) ? officer.bio.join(" ") : officer.bio;

  const title =
    officer.seo?.title ??
    `${officer.name} — ${officer.credentialTitle} | ${shared.company.legalName}`;

  const description =
    officer.seo?.description ??
    `${officer.name}, ${officer.credentialTitle} (NMLS #${officer.nmls}) at ${shared.company.legalName}. ${bio}`.slice(
      0,
      300,
    );

  const ogImage = officer.seo?.ogImage ?? {
    src: officer.headshot.src,
    alt: officer.name,
    width: officer.headshot.width,
    height: officer.headshot.height,
  };
  const ogImageUrl = ogImage.src.startsWith("http")
    ? ogImage.src
    : `${url}${ogImage.src}`;

  return {
    metadataBase: new URL(url),
    // `absolute` bypasses the root layout's "%s | ..." template — the officer
    // title already carries the company name.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: officer.seo?.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "profile",
      url,
      title,
      description,
      siteName: shared.company.legalName,
      images: [
        {
          url: ogImageUrl,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
