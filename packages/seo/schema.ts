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

/** Referral microsite: ported verbatim from troyReferralSite's index.html. */
export function referralLocalBusinessSchema(): Record<string, unknown> {
  const url = "https://referral.1stclasshomemortgage.com/";
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    name: "First Class Home Mortgage",
    alternateName: "First Class Home Mortgage - Troy Warner",
    description:
      "Mid-size mortgage company running a Partner/Recruiting Referral Program for licensed loan officers, serving California, Colorado, Idaho, New Mexico, Texas, Utah, and Florida.",
    url,
    logo: `${url}icons/fcLogo1.png`,
    image: `${url}og-image.png`,
    telephone: "+18015978832",
    email: "loans@troywarner.com",
    priceRange: "Free to join",
    address: {
      "@type": "PostalAddress",
      streetAddress: shared.company.address.line1,
      addressLocality: shared.company.address.city,
      addressRegion: shared.company.address.region,
      postalCode: shared.company.address.postalCode,
      addressCountry: shared.company.address.country,
    },
    areaServed: [
      "California",
      "Colorado",
      "Idaho",
      "New Mexico",
      "Texas",
      "Utah",
      "Florida",
    ],
    founder: { "@type": "Person", name: "Troy Warner", jobTitle: "CEO" },
    sameAs: ["https://1stclasshomemortgage.com"],
    identifier: `NMLS #${shared.company.corporateNmls}`,
  };
}

export function jobPostingSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  areasServed: string[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: shared.company.legalName,
      sameAs: "https://1stclasshomemortgage.com",
      logo: "https://referral.1stclasshomemortgage.com/icons/fcLogo1.png",
      identifier: `NMLS #${shared.company.corporateNmls}`,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: job.areasServed.map((name) => ({
      "@type": "State",
      name,
    })),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: { "@type": "QuantitativeValue", unitText: "COMMISSION", value: 2 },
    },
  };
}

/** Generic WebPage schema for the company site's pages. */
export function webPageSchema(page: {
  name: string;
  description: string;
  url: string;
  image?: string;
  withSearchAction?: boolean;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    author: { "@type": "Organization", name: shared.company.legalName },
    image: page.image,
    potentialAction: page.withSearchAction
      ? {
          "@type": "SearchAction",
          target: `${new URL(page.url).origin}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}

function absolute(src: string, base: string): string {
  if (src.startsWith("http")) return src;
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
}
