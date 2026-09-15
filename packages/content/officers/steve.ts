import { defineOfficer } from "@content/schema";

/** Migrated from the `steveJones` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "steve",
  name: "Steve Jones",
  firstName: "Steve",
  credentialTitle: "Loan Originator",
  nmls: "292252",

  phone: "(801)-913-6502",
  email: "sjones@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/steve.jpg",
    alt: "Steve Jones, Loan Originator",
  },
  bio: "Hello! I'm Steve, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "stevejones" },

  status: "live",
});
