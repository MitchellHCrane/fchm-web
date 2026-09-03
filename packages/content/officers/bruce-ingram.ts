import { defineOfficer } from "@content/schema";

/** Migrated from the `bruceIngramNew` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "bruce-ingram",
  name: "Bruce Ingram",
  firstName: "Bruce",
  credentialTitle: "Mortgage Loan Originator",
  nmls: "1845144",

  phone: "(385)-220-4318",
  email: "bruce@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/bruce-ingram.jpeg",
    alt: "Bruce Ingram, Mortgage Loan Originator",
  },
  bio: "Hello! I'm Bruce, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "bruceingram" },
  filedropUrl: "https://documentguardian.com/filedrop/bruce@firstclasshomemortgage.com",

  status: "draft",
});
