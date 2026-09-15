import { defineOfficer } from "@content/schema";

/** Migrated from the `tiffanyBartnicki` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "tiffany",
  name: "Tiffany Bartnicki",
  firstName: "Tiffany",
  credentialTitle: "Loan Originator",
  nmls: "288477",

  phone: "(801)-440-6311",
  fax: "(801)-951-5213",
  email: "tiffany@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/tiffany.jpeg",
    alt: "Tiffany Bartnicki, Loan Originator",
  },
  bio: "Hello! I'm Tiffany, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "tiffanybartnicki" },
  filedropUrl: "https://documentguardian.com/filedrop/tiffany@firstclasshomemortgage.com",

  status: "live",
});
