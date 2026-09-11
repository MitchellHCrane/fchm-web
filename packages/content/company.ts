import type { PostalAddress } from "@content/schema";

/**
 * The company marketing site is served on TWO apex domains from one build
 * (`app/company/[domainKey]/`). Ported from `1stclassnextjs`, which set these
 * per domain via NEXT_PUBLIC_* env vars in the Netlify dashboard (not
 * committed) — build-time env can't vary per request in a single deploy, so
 * this replaces it with a plain host lookup.
 *
 * NOTE: `NEXT_PUBLIC_NMLS_NUMBER` existed in the old `.env.*.example` files
 * but was never actually read anywhere in the source — the footer's NMLS text
 * is static ("Company NMLS #1843" + a Colorado disclosure, see companyFooter
 * below). `NEXT_PUBLIC_PHONE_NUMBER` also never differed between the two
 * `.env.*.example` files; every component's fallback was Troy's own number.
 * REVIEW: confirm the real values current in the Netlify dashboard for both
 * domains before cutover — this fills in the code-level fallbacks.
 */
export type DomainKey = "1stclasshomemortgage" | "firstclasshomemortgage";

export interface CompanyTenant {
  domainKey: DomainKey;
  host: string;
  address: PostalAddress;
  phone: string; // digits only, e.g. "3859991871"
}

export const companyTenants: Record<DomainKey, CompanyTenant> = {
  "1stclasshomemortgage": {
    domainKey: "1stclasshomemortgage",
    host: "1stclasshomemortgage.com",
    address: {
      line1: "10416 S 1055 W 102",
      line2: "South Jordan, UT 84095 United States",
      city: "South Jordan",
      region: "UT",
      postalCode: "84095",
      country: "US",
      mapsUrl: "https://goo.gl/maps/o97dcDxGxFcAcRheA",
    },
    phone: "3859991871",
  },
  firstclasshomemortgage: {
    domainKey: "firstclasshomemortgage",
    host: "firstclasshomemortgage.com",
    address: {
      line1: "10808 River Front Parkway, Suite #3035",
      line2: "South Jordan, UT 84095",
      city: "South Jordan",
      region: "UT",
      postalCode: "84095",
      country: "US",
      mapsUrl: "https://goo.gl/maps/o97dcDxGxFcAcRheA",
    },
    phone: "3859991871",
  },
};

export const domainKeys = Object.keys(companyTenants) as DomainKey[];

export function getCompanyTenant(domainKey: string): CompanyTenant | undefined {
  return companyTenants[domainKey as DomainKey];
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

/** Static per-tenant content that doesn't vary by domain today. */
export const companyContent = {
  legalName: "First Class Home Mortgage",
  email: "loans@troywarner.com",
  applicationUrl: "https://firstclasshomemortgage.my1003app.com/102983/register",
  dpaUrl: "https://dpa.1stclasshomemortgage.com/",
  referralUrl: "https://referral.1stclasshomemortgage.com/",
  helocUrl: "https://flow.avenfoundry.com?i=3ed1d582-10ee-423c-923a-4d98a59722e9",
  fax: "(801)-303-7083",
  // REVIEW: this is what the live footer says today — a Colorado disclosure
  // alongside the company NMLS. Confirm intended (not a copy-paste leftover).
  license: {
    line1: "Regulated by the Colorado Division of Real Estate NMLS #2719095",
    line2: "Company NMLS #1843",
  },
  social: {
    facebook: "https://www.facebook.com/1stClassHomeMortgage",
    instagram: "https://www.instagram.com/firstclasshomemortgage/",
    linkedin: "https://www.linkedin.com/company/first-class-home-mortgage/",
    youtube: "https://www.youtube.com/@firstclasshomemortgagetroy3144",
  },
  ogImages: {
    home: "/company/images/seo/fchm-generic.jpg",
    testimonials: "/company/images/seo/fchm-testimonials.jpg",
    careers: "/company/images/seo/fchm-careers.jpg",
    mortgageCalculator: "/company/images/seo/fchm-mortgage-calc.jpg",
  },
};
