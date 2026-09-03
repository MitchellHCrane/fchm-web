import { defineOfficer } from "@content/schema";

/** Migrated from the `tresabertlshofer` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "tresa-bertlshofer",
  name: "Tresa Bertlshofer",
  firstName: "Tresa",
  credentialTitle: "Mortgage Loan Officer",
  nmls: "1847320",

  phone: "(801)-923-3166",
  fax: "(801)-384-0779",
  email: "tresa@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/tresa-bertlshofer.jpeg",
    alt: "Tresa Bertlshofer, Mortgage Loan Officer",
  },
  bio: "Hello! I'm Tresa, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "tresabertlshofer" },
  filedropUrl: "https://documentguardian.com/filedrop/tresa@firstclasshomemortgage.com",

  status: "draft",
});
