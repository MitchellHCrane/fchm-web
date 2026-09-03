import { defineOfficer } from "@content/schema";

/** Migrated from the `steveSummers` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "steves",
  name: "Steve Summers",
  firstName: "Steve",
  credentialTitle: "Senior Loan Officer",
  nmls: "342400",

  phone: "(801)-513-3960",
  email: "steve@helpbuyingutah.com",

  headshot: {
    src: "/headshots/steves.jpg",
    alt: "Steve Summers, Senior Loan Officer",
  },
  bio: "Hello! I'm Steve, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "342400" },
  social: { facebook: "https://www.facebook.com/SteveSummersMortgage/", instagram: "https://www.instagram.com/stevesummersmortgage/" },

  status: "draft",
});
