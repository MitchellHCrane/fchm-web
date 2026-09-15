import { defineOfficer } from "@content/schema";

// REVIEW: review link is a Zillow lender-profile URL, kept as custom reviewUrl
/** Migrated from the `erickshank` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "erick",
  name: "Erick Shank",
  firstName: "Erick",
  credentialTitle: "Senior Loan Officer",
  nmls: "915427",

  phone: "(801)-347-3330",
  email: "erick@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/erick.jpg",
    alt: "Erick Shank, Senior Loan Officer",
  },
  bio: "Hello! I'm Erick, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "915427" },
  filedropUrl: "https://documentguardian.com/filedrop/erick@firstclasshomemortgage.com",
  reviewUrl: "https://www.zillow.com/lender-profile/erickshank/?utm_source=email&utm_medium=email&utm_campaign=emo-MortgageReviewPublishedNotifyLender-reply#reviews",

  status: "live",
});
