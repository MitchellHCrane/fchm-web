import { defineOfficer } from "@content/schema";

/** Migrated from the `toddRodocker` repo. DRAFT — verify before setting status: "live". */
export default defineOfficer({
  slug: "todd-rodocker",
  name: "Todd Rodocker",
  firstName: "Todd",
  credentialTitle: "Loan Officer",
  nmls: "317650",

  phone: "(801)-694-0903",
  email: "toddrodocker@gmail.com",

  headshot: {
    src: "/headshots/todd-rodocker.jpg",
    alt: "Todd Rodocker, Loan Officer",
  },
  bio: "Hello! I'm Todd, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.",

  application: { kind: "blink", slug: "toddrodocker" },
  filedropUrl: "https://documentguardian.com/filedrop/toddrodocker@gmail.com",

  status: "draft",
});
