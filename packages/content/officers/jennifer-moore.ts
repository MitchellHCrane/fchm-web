import { defineOfficer } from "@content/schema";

// REVIEW: long bio; has calendly + FB/IG; filedrop email had capital J
/** Migrated from the `jenniferMoore` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "jennifer-moore",
  name: "Jennifer Moore",
  firstName: "Jennifer",
  credentialTitle: "Loan Originator",
  nmls: "2104281",

  phone: "(801)-380-2857",
  email: "jennifer@firstclasshomemortgage.com",

  headshot: {
    src: "/headshots/jennifer-moore.jpg",
    alt: "Jennifer Moore, Loan Originator",
  },
  bio: "I'm Jennifer, a leading loan originator specializing in all things home finance. My top priority is ensuring that my clients have the best experience and a solid financial plan tailored to their needs. I will provide my honest professi",

  application: { kind: "my1003", nmls: "2104281" },
  filedropUrl: "https://documentguardian.com/filedrop/Jennifer@firstclasshomemortgage.com",
  calendlyUrl: "https://calendly.com/jennifer-firstclasshomemortgage/30-minute-discovery-call",
  social: { facebook: "https://www.facebook.com/MortgageswithJenniferMoore", instagram: "https://www.instagram.com/moore_than_mortgages_jen_moore/" },
  profileBackground: "plain",

  status: "draft",
});
