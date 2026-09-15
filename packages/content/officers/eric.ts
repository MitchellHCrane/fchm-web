import { defineOfficer } from "@content/schema";

// REVIEW: long multi-paragraph bio (see repo Profile.js); needs socialVerse venue/id + introVideo src from ericPoulson/src/Components/*
/** Migrated from the `ericPoulson` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "eric",
  name: "Eric Poulson",
  firstName: "Eric",
  credentialTitle: "Loan Originator",
  nmls: "304790",

  phone: "(801)-209-1250",
  email: "ericp@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/eric.jpg",
    alt: "Eric Poulson, Loan Originator",
  },
  bio: "I have been a loan officer for over 28 years which has exposed me to a diverse array of lending practices, including Conventional, FHA, VA and non-traditional lending. I am passionate about making sure my clients feel well-informed and comf",

  application: { kind: "my1003", nmls: "304790" },
  filedropUrl: "https://documentguardian.com/filedrop/ericp@firstclasshomemortgage.com",
  reviewUrl: "https://g.page/r/CZhd3TR7YiY_EAE/review",
  profileBackground: "plain",
  heroBackground: { src: "/backgrounds/plain-hero.png" },
  sections: ["socialVerse","introVideo"],

  status: "live",
});
