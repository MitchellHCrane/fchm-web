/**
 * The loan-officer recruiting microsite, migrated from `troyReferralSite`.
 * Single tenant, single page. One content object feeds the visible Faq
 * component AND the FAQPage JSON-LD, replacing the CRA repo's manual
 * "keep these in sync" comment with an actual single source of truth.
 */
export const referral = {
  host: "referral.1stclasshomemortgage.com",
  title: "First Class Home Mortgage | Loan Officer Referral Program",
  description:
    "Refer a licensed loan officer to First Class Home Mortgage and earn up to $695 per hire. Hiring originators in CA, CO, ID, NM, TX, UT & FL. NMLS #1843.",
  ogImage: "/referral/og-image.png",

  ceo: {
    name: "Troy Warner",
    nmls: "102983",
    phone: "(801) 597-8832",
    tel: "+18015978832",
    email: "loans@troywarner.com",
  },

  areasServed: [
    "California",
    "Colorado",
    "Idaho",
    "New Mexico",
    "Texas",
    "Utah",
    "Florida",
  ],

  hero: {
    heading: "Loan Officer Referral Program",
    tagline:
      "We're hiring originators in California, Colorado, Idaho, New Mexico, Texas, Utah & Florida. Refer a licensed loan officer to First Class Home Mortgage and earn up to $695 per hire.",
    body: "The Partner/Recruiting Referral Program is a great way you can make extra cash!",
    video: {
      id: "dmEV-6MeL7Y",
      title:
        "Troy Warner explains the First Class Home Mortgage loan officer referral program",
    },
  },

  formUrl: "https://fs10.formsite.com/twarner69/kdbphjilaj/index",

  who: "First Class Home Mortgage is a mid-size mortgage company that is actively looking to grow our business in these 7 States; California, Colorado, Idaho, New Mexico, Texas, Utah & Florida. NMLS #1843 - Since 2006, we have helped 1,000's of families realize the joy of homeownership. We support our loan officers with amazing technology, the best programs & social media marketing & advertising.",

  howItWorks: [
    {
      step: "application",
      title: "1. Submit the referral",
      body: "Send us a licensed loan officer through the online referral form. It takes about two minutes.",
    },
    {
      step: "review",
      title: "2. They interview with us",
      body: "The loan officer you referred interviews with First Class Home Mortgage. You earn $25 just for a Realtor referral that interviews.",
    },
    {
      step: "payout",
      title: "3. You get paid",
      body: "When your referral is hired, stays on, and closes a loan with us, you earn $695 — up to 10 per month ($7,200).",
    },
  ] as const,

  incentives: [
    "$25 reward to any Realtor who participates in referring a loan officer. The Loan Officer you submit must interview with our company.",
    "$695 for any referral submitted who is hired by the company & remains in their position & closes one loan with First Class Home Mortgage. (Max is 10 per month or $7,200)",
  ],
  eligibility:
    "Currently licensed active Loan Officer's that have an NMLS Number",
  rules: [
    "If two or more people refer the same candidate, only the first referrer will receive the reward.",
    "The max cap on the number of referrals a Realtor can make is 10 per month. Loan Officers has a max comp plan of 2% lender paid per closed loan. 401-K is offered to tenure employees.",
  ],

  faq: [
    {
      q: "How much do I earn for referring a loan officer?",
      a: "Realtors earn $25 for any referral who interviews with First Class Home Mortgage. You earn $695 for a referral who is hired, stays in their position, and closes at least one loan with us. The maximum is 10 referrals per month, or $7,200.",
    },
    {
      q: "Who is eligible to be referred?",
      a: "Currently licensed, active loan officers who have an NMLS number.",
    },
    {
      q: "Which states does the program cover?",
      a: "First Class Home Mortgage is licensed and actively hiring in California, Colorado, Idaho, New Mexico, Texas, Utah, and Florida.",
    },
    {
      q: "How do I submit a referral?",
      a: "Use the online referral form linked on this page — it takes about two minutes. If two or more people refer the same candidate, only the first referrer receives the reward.",
    },
    {
      q: "Is there a cap on how many referrals I can make?",
      a: "Yes. A Realtor can make up to 10 referrals per month, for a maximum of $7,200.",
    },
    {
      q: "What is the loan officer compensation plan?",
      a: "Loan officers have a maximum comp plan of 2% lender-paid per closed loan. A 401(k) is offered to tenured employees.",
    },
    {
      q: "Who runs the program and who do I contact?",
      a: "The Partner/Recruiting Referral Program is run by CEO Troy Warner. Call (801) 597-8832 or email loans@troywarner.com for details.",
    },
  ],

  jobPosting: {
    title: "Licensed Mortgage Loan Officer / Originator",
    description:
      "<p>First Class Home Mortgage is hiring licensed mortgage loan officers (originators) with an active NMLS number. We support our loan officers with technology, competitive programs, and social media marketing and advertising. Maximum comp plan of 2% lender-paid per closed loan; 401(k) offered to tenured employees.</p>",
    // REVIEW: rolling 1-year window from migration date — replace with the
    // real posting date at cutover if this listing should have a fixed date.
    datePosted: "2026-09-10",
    validThrough: "2027-09-10",
    employmentType: "FULL_TIME",
  },
};

export type ReferralContent = typeof referral;
