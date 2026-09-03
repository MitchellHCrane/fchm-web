import { defineOfficer } from "@content/schema";

/** Migrated from the `kris-matyas` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "kris-matyas",
  name: "Kris Matyas",
  firstName: "Kris",
  credentialTitle: "Mortgage Broker",
  nmls: "864775",

  phone: "(801)-638-0507",
  email: "kris@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/kris-matyas.jpg",
    alt: "Kris Matyas, Mortgage Broker",
  },
  bio: "Hello! I'm Kris, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "themortgagerebel" },
  calendlyUrl: "https://calendly.com/kris-mortgage/30min",

  status: "draft",
});
