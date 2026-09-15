import { defineOfficer } from "@content/schema";

/** Migrated from the `casseystanger` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "cassey",
  name: "Cassey Stanger",
  firstName: "Cassey",
  credentialTitle: "Mortgage Loan Officer",
  nmls: "291944",

  phone: "(801)-458-6459",
  email: "cs@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/cassey.jpeg",
    alt: "Cassey Stanger, Mortgage Loan Officer",
  },
  bio: "Hello! I'm Cassey, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "291944" },
  filedropUrl: "https://documentguardian.com/filedrop/cs@firstclasshomemortgage.com",

  status: "live",
});
