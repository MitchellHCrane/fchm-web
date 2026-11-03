import { defineOfficer } from "@content/schema";

/** Migrated from the `dallinCooper` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "dallin",
  name: "Dallin Wood",
  firstName: "Dallin",
  credentialTitle: "Loan Officer",
  nmls: "2844794",

  phone: "(801)-550-0873 ",
  fax: "(254)-613-6326",
  email: "dallin@woodrei.com",

  headshot: {
    src: "/headshots/dallin.jpg",
    alt: "Dallin Wood, Loan Officer",
  },
  bio: "Hello I'm Dallin, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "2844794", spanish: true },
  //   filedropUrl: "https://documentguardian.com/filedrop/dallin@woodrei.com", doesnt have one

  resourceCards: ["application", "creditSmart", "dpa", "review", "schedule"],

  status: "live",
});
