import { defineOfficer } from "@content/schema";

/** Migrated from the `russWarner` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "russ",
  name: "Russ Warner",
  firstName: "Russ",
  credentialTitle: "Loan Officer",
  nmls: "70310",

  phone: "(801)-599-7447",
  email: "russelldeewarner@gmail.com",

  headshot: {
    src: "/headshots/russ.jpg",
    alt: "Russ Warner, Loan Officer",
  },
  bio: "Hello! I'm Russ, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "70310" },

  status: "draft",
});
