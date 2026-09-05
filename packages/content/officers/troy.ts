import { defineOfficer } from "@content/schema";

/**
 * Migrated from the `troywarner` repo (the original template).
 *
 * DOMAIN: UNDECIDED (2026-09-04). `troy.1stclasshomemortgage.com` is reserved
 * for a separate site (the referral microsite, `referral.` / `troy.` /
 * `start.troywarner.com` — confirmed distinct from this LO/portfolio site).
 * Pulled back to `status: "draft"` until a subdomain is picked for this
 * record; do not re-flip to `"live"` on `troy.` — see docs/MIGRATION-STATUS.md.
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

  status: "draft", // pilot content fully migrated & verified; subdomain TBD — see header comment
});
