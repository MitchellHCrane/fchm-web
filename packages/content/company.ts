import type { PostalAddress } from "@content/schema";

/**
 * The company marketing site (`app/company/[domain]/`), served on
 * 1stclasshomemortgage.com. Ported from `1stclassnextjs`. The old
 * firstclasshomemortgage.com domain now 301-redirects here (see
 * scripts/gen-redirects.mjs). The `[domain]` route segment is kept so another
 * apex domain could be added later.
 */
export type DomainKey = "1stclasshomemortgage";

export interface CompanyTenant {
  domainKey: DomainKey;
  host: string;
  phone: string; // digits only — the main "Call" number in navbar/hero/CTAs
}

export const companyTenants: Record<DomainKey, CompanyTenant> = {
  "1stclasshomemortgage": {
    domainKey: "1stclasshomemortgage",
    host: "1stclasshomemortgage.com",
    phone: "3859991871",
  },
};

/** Labeled offices and phone numbers shown on the company site. */
export const companyContact: {
  offices: { label: string; address: PostalAddress }[];
  phones: { label: string; phone: string }[]; // phone: digits only
} = {
  offices: [
    {
      label: "Corporate Office",
      address: {
        line1: "10808 River Front Parkway, Suite #3035",
        line2: "South Jordan, UT 84095",
        city: "South Jordan",
        region: "UT",
        postalCode: "84095",
        country: "US",
        mapsUrl: "https://goo.gl/maps/o97dcDxGxFcAcRheA",
      },
    },
    {
      label: "Branch Office",
      address: {
        line1: "10416 S 1055 W Suite 102",
        line2: "South Jordan, UT 84095 United States",
        city: "South Jordan",
        region: "UT",
        postalCode: "84095",
        country: "US",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=10416+S+1055+W+Suite+102+South+Jordan+UT+84095",
      },
    },
  ],
  phones: [
    { label: "Troy Warner", phone: "8015978832" },
    { label: "Corporate", phone: "3859991871" },
  ],
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
