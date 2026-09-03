import { defineOfficer } from "@content/schema";

/** Migrated from the `lindaskehan` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "linda",
  name: "Linda Skehan",
  firstName: "Linda",
  credentialTitle: "Loan Officer",
  nmls: "262918",

  phone: "(801)-209-4744",
  fax: "(801)-951-5213",
  email: "linda@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/linda.jpg",
    alt: "Linda Skehan, Loan Officer",
  },
  bio: "Hello! I'm Linda, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "262918" },
  filedropUrl: "https://documentguardian.com/filedrop/linda@firstclasshomemortgage.com",
  reviewUrl: "https://g.page/r/Ca6GOecLexOkEAI/review",

  status: "draft",
});
