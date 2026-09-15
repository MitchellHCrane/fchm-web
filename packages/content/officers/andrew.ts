import { defineOfficer } from "@content/schema";

// Confirmed intended (2026-09-14): Andrew is a Realtor referral partner, not
// a licensed loan officer — the "Realtor®, Owner and Principal Broker" title,
// corporate NMLS #1843, and the application link pointing at the company
// homepage are all correct as-is, not migration artifacts.
/** Migrated from the `andrewAdams` repo. */
export default defineOfficer({
  slug: "andrew",
  name: "Andrew Adams",
  firstName: "Andrew",
  credentialTitle: "Realtor®, Owner and Principal Broker",
  // REVIEW: regex only found the corporate NMLS #1843 in the footer. Andrew's
  // repo also had the un-edited template application link (blink slug
  // "troywarner"). Confirm whether Andrew Adams is a loan officer with his own
  // site at all, or a Realtor referral partner — this record may not belong here.
  nmls: "1843", // corporate NMLS — confirmed correct for Andrew, not a migration gap

  phone: "(801)-971-2525",
  email: "mail@askandrewadams.com",

  headshot: {
    src: "/headshots/andrew.jpeg",
    alt: "Andrew Adams, Realtor®, Owner and Principal Broker",
  },
  bio: "Hello! I'm Andrew, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "custom", href: "https://firstclasshomemortgage.com/" },

  status: "live",
});
