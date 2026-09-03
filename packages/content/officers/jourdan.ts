import { defineOfficer } from "@content/schema";

/** Migrated from the `jourdancampbell` repo.
 *  RETIRED: the Netlify site was deleted. Record kept so the site can be
 *  restored — set status back to "draft", verify the data, add to
 *  packages/content/subdomains.txt, then "live". */
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

  status: "retired",
});
