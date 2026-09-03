import { defineOfficer } from "@content/schema";

/** Migrated from the `jamesThomson` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "james-thompson",
  name: "James Thompson",
  firstName: "James",
  credentialTitle: "Loan Officer",
  nmls: "298103",

  phone: "(801)-750-1446",
  email: "reoappr@yahoo.com",

  headshot: {
    src: "/headshots/james-thompson.jpg",
    alt: "James Thompson, Loan Officer",
  },
  bio: "Hello! I'm James, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "298103" },

  status: "draft",
});
