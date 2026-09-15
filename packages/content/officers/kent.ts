import { defineOfficer } from "@content/schema";

/** Migrated from the `kentbarker` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "kent",
  name: "Kent Barker",
  firstName: "Kent",
  credentialTitle: "Mortgage Loan Officer",
  nmls: "288828",

  phone: "(801)-458-8746",
  fax: "(877)-411-1834",
  email: "kent@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/kent.png",
    alt: "Kent Barker, Mortgage Loan Officer",
  },
  bio: "Hello! I'm Kent, I look forward to helping you with your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "288828" },
  filedropUrl: "https://documentguardian.com/filedrop/kent@firstclasshomemortgage.com",

  status: "live",
});
