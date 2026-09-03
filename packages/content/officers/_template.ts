import { defineOfficer } from "@content/schema";

/**
 * Copy this file to <slug>.ts, fill it in, then add the slug to
 * packages/content/officers/index.ts. Drop the headshot in
 * public/headshots/<slug>.jpg (or .webp) and point `headshot.src` at it.
 *
 * Anything commented out / omitted falls back to the shared defaults in
 * packages/config/site.ts.
 */
export default defineOfficer({
  slug: "first-last",
  name: "First Last",
  firstName: "First",
  credentialTitle: "Loan Officer", // e.g. "Mortgage Banker", "Mortgage Broker"
  nmls: "0000000",

  phone: "(801)-000-0000",
  // fax: "(801)-303-7083",            // omit -> shared corporate fax
  email: "first@firstclasshomemortgage.com",
  // address: { ... },                 // omit -> shared corporate address

  headshot: {
    src: "/headshots/first-last.jpg",
    alt: "First Last",
    width: 800,
    height: 800,
  },
  bio: "Hello! I'm First, I look forward to helping you along your home buying experience.",
  // introOverride: "...",

  application: { kind: "my1003", nmls: "0000000" },
  // application: { kind: "blink", slug: "firstlast" },
  // filedropUrl: "https://documentguardian.com/filedrop/first@firstclasshomemortgage.com",
  // reviewUrl: "https://g.page/r/.../review",
  // calendlyUrl: "https://calendly.com/...",

  // social: { facebook: "...", instagram: "..." },
  // resourceCards: ["application", "creditSmart", "upload", "dpa", "review", "schedule"],
  // sections: ["whyChoose"],
  // profileBackground: "plain",

  status: "draft",
});
