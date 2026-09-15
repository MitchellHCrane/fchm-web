import { defineOfficer } from "@content/schema";

/** Migrated from the `alanCooper` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "alan",
  name: "Alan Cooper",
  firstName: "Alan",
  credentialTitle: "Mortgage Broker",
  nmls: "1912420",

  phone: "(254)-733-3008",
  fax: "(254)-613-6326",
  email: "alan@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/alan.jpg",
    alt: "Alan Cooper, Mortgage Broker",
  },
  bio: "Hello I'm Alan, I help families obtain the American Dream, one home at a time! I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "my1003", nmls: "1912420" },
  filedropUrl: "https://documentguardian.com/filedrop/alan@firstclasshomemortgage.com",
  profileBackground: "plain",
  heroBackground: { src: "/backgrounds/flag.jpg", overlay: true },

  status: "live",
});
