import { defineOfficer } from "@content/schema";

/** Migrated from the `deloyGriffin` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "deloy-griffin",
  name: "DeLoy Griffin",
  firstName: "DeLoy",
  credentialTitle: "Mortgage Loan Officer",
  nmls: "250974",

  phone: "(801)-815-1881",
  fax: "(801)-951-5213",
  email: "deloy@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/deloy-griffin.jpeg",
    alt: "DeLoy Griffin, Mortgage Loan Officer",
  },
  bio: "Hello! I'm DeLoy, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "deloygriffin" },
  redirectTo: "deloy-griff",

  status: "retired",
});
