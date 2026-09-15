import { defineOfficer } from "@content/schema";

// REVIEW: source my1003 URL had 222043184 (9 digits, likely typo); using NMLS from title. Verify.
/** Migrated from the `raulLaveiru` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "raul",
  name: "Raul Saez Laveiru",
  firstName: "Raul",
  credentialTitle: "Mortgage Broker",
  nmls: "2223020",

  phone: "(801)-330-8459",
  email: "raul@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/raul.jpeg",
    alt: "Raul Saez Laveiru, Mortgage Broker",
  },
  bio: "Hello! I'm Raul, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "2223020" },
  calendlyUrl: "https://calendly.com/raul-mortgage/30min",

  status: "live",
});
