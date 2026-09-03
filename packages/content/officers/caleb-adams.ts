import { defineOfficer } from "@content/schema";

// REVIEW: testimonial quotes live in calebAdams/src/Components/Testimonials.js
/** Migrated from the `calebAdams` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "caleb-adams",
  name: "Caleb Adams",
  firstName: "Caleb",
  credentialTitle: "Loan Officer",
  nmls: "2281316",

  phone: "(208)-604-7810",
  email: "caleb@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/caleb-adams.jpg",
    alt: "Caleb Adams, Loan Officer",
  },
  bio: "Hello! I'm Caleb, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "2281316" },
  reviewUrl: "https://g.page/r/CZ8c3m9WJ-CpEBM/review",
  sections: ["testimonials"],

  status: "draft",
});
