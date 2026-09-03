import { defineOfficer } from "@content/schema";

/** Migrated from the `ginnybrimley` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "ginny",
  name: "Ginny Brimley",
  firstName: "Ginny",
  credentialTitle: "Mortgage Loan Officer",
  nmls: "261107",

  phone: "(801)-577-9063",
  fax: "(801)-218-7411",
  email: "ginny@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/ginny.jpeg",
    alt: "Ginny Brimley, Mortgage Loan Officer",
  },
  bio: "Hello! I'm Ginny, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "261107" },
  filedropUrl: "https://documentguardian.com/filedrop/ginny@firstclasshomemortgage.com",

  status: "draft",
});
