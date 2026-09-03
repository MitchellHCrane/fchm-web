import { defineOfficer } from "@content/schema";

/** Migrated from the `karifitzgerald` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "kari-fitzgerald",
  name: "Kari Fitzgerald",
  firstName: "Kari",
  credentialTitle: "Senior Loan Officer",
  nmls: "247303",

  phone: "(801)-450-5171",
  fax: "(877)-239-1186",
  email: "kari@utahlender.com",

  headshot: {
    src: "/headshots/kari-fitzgerald.jpeg",
    alt: "Kari Fitzgerald, Senior Loan Officer",
  },
  bio: "Hello! I'm Kari, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "karifitzgerald" },
  filedropUrl: "https://documentguardian.com/filedrop/kari@firstclasshomemortgage.com",
  profileBackground: "plain",

  status: "draft",
});
