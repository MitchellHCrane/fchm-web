import { defineOfficer } from "@content/schema";

/** Migrated from the `sarahSpencer` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "sarah",
  name: "Sarah Spencer",
  firstName: "Sarah",
  credentialTitle: "Loan Officer",
  nmls: "2135830",

  phone: "(801)-201-4670",
  email: "sarahspencerloans@gmail.com",

  headshot: {
    src: "/headshots/sarah.png",
    alt: "Sarah Spencer, Loan Officer",
  },
  bio: "Hello! I'm Sarah, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "2135830" },

  status: "draft",
});
