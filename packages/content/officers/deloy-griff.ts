import { defineOfficer } from "@content/schema";

// REVIEW: consolidation of deloyGriffin + deloyGriff2; deloy-griffin 301s here
/** Migrated from the `deloyGriff2` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "deloy-griff",
  name: "Deloy Griffin",
  firstName: "Deloy",
  credentialTitle: "Loan Officer",
  nmls: "250974",

  phone: "(801)-815-1881",
  fax: "(801)-951-5213",
  email: "deloy@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/deloy-griff.jpeg",
    alt: "Deloy Griffin, Loan Officer",
  },
  bio: "Hello! I'm Deloy, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "deloygriffin" },

  status: "draft",
});
