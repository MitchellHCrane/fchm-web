import { defineOfficer } from "@content/schema";

/** Migrated from the `jourdancampbell` repo. DRAFT.
 *  ⚠ NOT currently deployed — no matching Netlify site in the account list.
 *  Confirm the intended subdomain before setting status: "live". */
export default defineOfficer({
  slug: "jourdan",
  name: "Jourdan Campbell",
  firstName: "Jourdan",
  credentialTitle: "Mortgage Banker",
  nmls: "1855425",

  phone: "(505)-608-8877",
  email: "jourdan@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/jourdan.jpeg",
    alt: "Jourdan Campbell, Mortgage Banker",
  },
  bio: "Hello! I'm Jourdan, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "jourdancampbell" },
  filedropUrl: "https://documentguardian.com/filedrop/Jourdan@firstclasshomemortgage.com",

  status: "draft",
});
