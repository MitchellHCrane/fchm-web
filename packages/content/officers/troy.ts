import { defineOfficer } from "@content/schema";

/**
 * Migrated from the `troywarner` repo (the original template).
 *
 * DOMAIN: moves onto the wildcard as `troy.1stclasshomemortgage.com` (decision
 * 2026-09-02). The old `troywarner.com` / `start.troywarner.com` sites should
 * 301 to it at cutover. NOTE: `troy.1stclasshomemortgage.com` was historically
 * an alias of the referral site (now primary at `referral.`) — confirm it's
 * free before pointing DNS.
 */
export default defineOfficer({
  slug: "troy",
  name: "Troy Warner",
  firstName: "Troy",
  credentialTitle: "Mortgage Banker",
  nmls: "102983",

  phone: "(385)-999-1871",
  fax: "(801)-303-7083",
  email: "loans@troywarner.com",

  headshot: {
    src: "/headshots/troy.jpg",
    alt: "Troy Warner, Mortgage Banker",
    width: 800,
    height: 800,
  },
  bio: "Hello! I'm Troy, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "102983" },
  filedropUrl: "https://documentguardian.com/filedrop/loans@troywarner.com",
  reviewUrl: "https://g.page/r/CStPPIWpW1rHEAg/review",
  calendlyUrl: "https://calendly.com/troywarnerloans",

  sections: ["whyChoose"],
  socialVerse: {
    venueId: "74e470a9-374a-489c-a39d-66abdad20a06",
    socialverseId: "a4b7e21d-36b5-4091-887e-560ebe606a4a",
  },

  status: "live", // pilot — fully migrated & verified
});
