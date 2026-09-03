import type { Officer } from "@content/schema";
import { shared, applicationHref } from "@config/site";

/**
 * Structured data. Generalized from troyReferralSite/public/index.html, which
 * is the reference implementation (LocalBusiness/FinancialService + FAQPage +
 * JobPosting). Edit here once -> every site gets it.
 */

export function realEstateAgentSchema(officer: Officer): Record<string, unknown> {
  const url = shared.officerBaseUrl(officer.slug);
  const address = officer.address ?? shared.company.address;
  const bio = Array.isArray(officer.bio) ? officer.bio.join(" ") : officer.bio;

  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "FinancialService"],
    "@id": `${url}/#agent`,
    name: officer.name,
    description: bio,
    url,
    image: absolute(officer.headshot.src, url),
    telephone: officer.phone,
    email: officer.email,
    jobTitle: officer.credentialTitle,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NMLS",
      value: officer.nmls,
    },
    areaServed: "US",
    parentOrganization: {
      "@type": "FinancialService",
      name: shared.company.legalName,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "NMLS",
        value: shared.company.corporateNmls,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    potentialAction: {
      "@type": "ApplyAction",
      target: applicationHref(officer.application),
      name: "Start your loan application",
    },
    sameAs: officer.social
      ? Object.values(officer.social).filter(Boolean)
      : undefined,
  };
}

export function faqPageSchema(
  faq: { q: string; a: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function absolute(src: string, base: string): string {
  if (src.startsWith("http")) return src;
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
}
