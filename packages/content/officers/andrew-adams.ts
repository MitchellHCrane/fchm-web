import { defineOfficer } from "@content/schema";

// REVIEW: title 'Realtor, Owner and Principal Broker'; personal NMLS not found (regex caught corp #1843); blink slug was 'troywarner' (template leftover). Is Andrew a loan officer or a referral partner?
/** Migrated from the `andrewAdams` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "andrew-adams",
  name: "Andrew Adams",
  firstName: "Andrew",
  credentialTitle: "Realtor®, Owner and Principal Broker",
  // REVIEW: regex only found the corporate NMLS #1843 in the footer. Andrew's
  // repo also had the un-edited template application link (blink slug
  // "troywarner"). Confirm whether Andrew Adams is a loan officer with his own
  // site at all, or a Realtor referral partner — this record may not belong here.
  nmls: "1843",

  phone: "(801)-971-2525",
  email: "mail@askandrewadams.com",

  headshot: {
    src: "/headshots/andrew-adams.jpeg",
    alt: "Andrew Adams, Realtor®, Owner and Principal Broker",
  },
  bio: "Hello! I'm Andrew, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  // REVIEW: placeholder — the source repo still pointed at the template's link.
  application: { kind: "custom", href: "https://firstclasshomemortgage.com/" },

  status: "draft",
});
