import type { SharedConfig } from "@content/schema";

/**
 * The single source of truth for everything that is identical across every
 * loan-officer site (and, later, the microsites + company site).
 *
 * Change a value here once -> one build -> it ships to every subdomain.
 */
export const shared: SharedConfig = {
  company: {
    legalName: "First Class Home Mortgage",
    corporateNmls: "1843",
    stateDisclosure:
      "Regulated by State of Utah Division of Real Estate NMLS #1843",
    fax: "(801)-303-7083",
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

  brand: {
    palette: {
      primary: "#2ca4f2",
      primaryDark: "#004e82",
      accentGreen: "#10b981",
      ink: "#000000",
      paper: "#ffffff",
    },
    fonts: {
      heading: "var(--font-heading)", // Source Sans 3
      body: "var(--font-body)", // Open Sans
      serif: "var(--font-serif)", // Bitter
    },
    logo: { src: "/brand/fc-logo.png", alt: "First Class Home Mortgage" },
    logoMark: { src: "/brand/fc-logo-mark.png", alt: "First Class Home Mortgage" },
    ogDefault: {
      src: "/brand/og-default.png",
      alt: "First Class Home Mortgage",
      width: 1200,
      height: 630,
    },
  },

  links: {
    creditSmart: "https://creditsmart.freddiemac.com/paths/homebuyer-u/",
    dpa: "https://dpa.1stclasshomemortgage.com/",
    referral: "https://referral.1stclasshomemortgage.com/",
    corporateReview: "https://g.page/r/CStPPIWpW1rHEAg/review",
    corporateMaps: "https://goo.gl/maps/o97dcDxGxFcAcRheA",
  },

  analytics: {
    // TODO(phase-4): real GA4 id. troyReferralSite currently ships the
    // placeholder "G-XXXXXXXXXX".
    ga4MeasurementId: undefined,
  },

  officerDomain: "1stclasshomemortgage.com",
  officerBaseUrl: (slug: string) => `https://${slug}.1stclasshomemortgage.com`,
};

/* ---- derived helpers ---------------------------------------------------- */

export function applicationHref(
  app:
    | { kind: "my1003"; nmls: string }
    | { kind: "blink"; slug: string }
    | { kind: "custom"; href: string },
): string {
  switch (app.kind) {
    case "my1003":
      return `https://firstclasshomemortgage.my1003app.com/${app.nmls}/register`;
    case "blink":
      return `https://blink.mortgage/app/signup/p/FirstClassHomeMortgage/${app.slug}`;
    case "custom":
      return app.href;
  }
}

export function filedropHref(email: string): string {
  return `https://documentguardian.com/filedrop/${email}`;
}
