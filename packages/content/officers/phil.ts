import { defineOfficer } from "@content/schema";

// REVIEW: name 'Phillip Willson'; phone == fax (both 801-808-3912) — verify fax
/** Migrated from the `philWillson` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "phil",
  name: "Phillip Willson",
  firstName: "Phillip",
  credentialTitle: "Loan Officer",
  nmls: "263970",

  phone: "(801)-808-3912",
  fax: "(801)-808-3912",
  email: "phil@loanforce.net",

  headshot: {
    src: "/headshots/phil.jpg",
    alt: "Phillip Willson, Loan Officer",
  },
  bio: "Hello! I'm Phil, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "philwillson" },
  filedropUrl: "https://documentguardian.com/filedrop/phil@loanforce.net",

  status: "live",
});
