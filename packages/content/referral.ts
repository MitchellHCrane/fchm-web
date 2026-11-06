/**
 * The loan-officer recruiting microsite, migrated from `troyReferralSite`.
 * Single tenant, single page. One content object feeds the visible Faq
 * component AND the FAQPage JSON-LD, replacing the CRA repo's manual
 * "keep these in sync" comment with an actual single source of truth.
 */
export const referral = {
  host: "referral.1stclasshomemortgage.com",
  title: "Join or Refer a Loan Officer | First Class Home Mortgage",
  description:
    "Now hiring experienced loan officers in CA, CO, ID, NM, TX, UT & FL. Join First Class Home Mortgage, or refer a loan officer and earn $695 per hire. NMLS #1843.",
  ogImage: "/referral/og-image-2026.jpg",

  ceo: {
    name: "Troy Warner",
    title: "President & CEO",
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

  // Two-path hero: Troy sends this link both to loan officers he wants to
  // hire and to people who might know one. Each card scrolls to its path.
  hero: {
    heading: "Grow your career at First Class Home Mortgage",
    subhead:
      "Now hiring experienced loan officers in California, Colorado, Idaho, New Mexico, Texas, Utah & Florida.",
    join: {
      eyebrow: "I'm a loan officer",
      title: "Join our team",
      body: "Multiple wholesale lenders, up to 2% comp, real processing and leadership support, and President's Club trips for top producers.",
      cta: "Apply to Join",
      href: "#join",
    },
    refer: {
      eyebrow: "I know a loan officer",
      title: "Refer & earn $695",
      body: "Send us a licensed loan officer. Earn $695 when they're hired and close a loan, plus $25 for Realtors when they interview.",
      cta: "Refer a Loan Officer",
      href: "#refer",
    },
    video: {
      id: "dmEV-6MeL7Y",
      // Trip photo instead of YouTube's stock thumbnail.
      poster: "/referral/presidents-club/conference-1600.webp",
      title:
        "Why loan officers join First Class Home Mortgage",
    },
  },

  referStats: [
    { value: "$695", label: "per loan officer hired" },
    { value: "$25", label: "to Realtors when your referral interviews" },
    { value: "10", label: "paid referrals per month" },
  ],

  formUrl: "https://fs10.formsite.com/twarner69/kdbphjilaj/index",

  who: "An independent mortgage brokerage working with multiple wholesale lenders, actively growing in California, Colorado, Idaho, New Mexico, Texas, Utah & Florida. NMLS #1843.",
  mission:
    "Serving clients and partners with dependability, integrity, and knowledge through caring communication.",
  whoStats: [
    { value: "2006", label: "Helping families since" },
    { value: "7", label: "States we're hiring in" },
    { value: "1,000s", label: "Families helped into homes" },
  ],

  // Join path: what a loan officer gets by joining.
  // Sourced from the "Recruiting 2027" flyer plus the existing comp/401(k)
  // and President's Club facts; don't add unverified perks.
  whyJoin: {
    eyebrow: "Join our team",
    heading: "Why loan officers choose First Class",
    items: [
      { icon: "options", title: "More options for your borrowers", body: "As an independent brokerage working with multiple wholesale lenders, you can find products and pricing that fit each client, from first-time buyers to self-employed borrowers and investors." },
      { icon: "support", title: "Support that moves you forward", body: "Accessible leadership, experienced processing support, and a team willing to work through challenging scenarios together." },
      { icon: "tech", title: "Technology that supports relationships", body: "CRM tools, automation, and responsible AI that strengthen follow-up, simplify routine work, and free up time for clients and referral partners." },
      { icon: "growth", title: "Keep learning, keep growing", body: "Hands-on leadership, team collaboration, and ongoing training, with a path toward a future leadership role." },
      { icon: "comp", title: "Up to 2% comp + 401(k)", body: "Max comp plan of 2% lender-paid per closed loan. 401(k) offered to tenured employees." },
      { icon: "trip", title: "President's Club trips", body: "Our top loan officers earn a yearly trip to an exotic beach resort." },
    ],
  } as const,

  // Direct pitch to a loan officer who lands on the page themselves.
  loanOfficers: {
    eyebrow: "Recruiting 2027 · For loan officers",
    heading: "Build your business. Strengthen your future.",
    question: "Is the company you're with today making you better?",
    body: [
      "Your experience, relationships, and work ethic deserve a company committed to helping you grow. We're recruiting experienced loan officers who take initiative, communicate clearly, and care about the people they serve.",
      "You bring the relationships and drive. We bring guidance, collaboration, and resources to help you serve those relationships well. We'll walk through our compensation structure, company fees, and available support so you can evaluate the opportunity clearly.",
    ],
    lookingForHeading: "We're looking for action takers",
    lookingFor: [
      "3+ years of mortgage experience",
      "Strong communication skills",
      "The motivation to grow",
      "Retail and wholesale loan officers welcome",
    ],
    cta: "Schedule a confidential conversation with Troy Warner, President & CEO.",
  },

  share: {
    heading: "Know a loan officer who'd love Cancun?",
    message:
      "Thought of you — First Class Home Mortgage is hiring loan officers (up to 2% comp + yearly President's Club trips). Check it out:",
  },

  presidentsClub: {
    eyebrow: "President's Club",
    heading: "Every year, our top loan officers go somewhere amazing",
    body: "Each year CEO Troy Warner takes 10–16 of our top loan officers on a President's Club trip to an exotic beach resort. It's one of the biggest reasons loan officers join First Class Home Mortgage.",
    destinations: [
      "Costa Rica",
      "Cancun",
      "Dominican Republic",
      "Puerto Vallarta",
      "Caribbean cruises",
    ],
    // Files in public/referral/presidents-club/<slug>-{800,1600}.webp
    // (web-optimized, metadata stripped). w/h = the 1600 version's size.
    photos: [
      { slug: "cancun", w: 1600, h: 1584, alt: "First Class Home Mortgage loan officers at a beach resort in Cancun" },
      { slug: "costa-rica", w: 1363, h: 1600, alt: "President's Club group in front of a purple star monument in Costa Rica" },
      { slug: "cruise", w: 1600, h: 1280, alt: "Loan officers at dinner aboard Royal Caribbean's Independence of the Seas" },
      { slug: "team-group", w: 1600, h: 887, alt: "President's Club loan officers together on a company trip" },
      { slug: "team-dinner", w: 1600, h: 900, alt: "Loan officers celebrating at a President's Club dinner" },
      { slug: "night-out", w: 900, h: 1600, alt: "First Class Home Mortgage loan officers on a night out during a company trip" },
    ],
  },

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
      body: "When your referral is hired, stays on, and closes a loan with us, you earn $695. Up to 10 per month: that's $6,950, or $7,200 for Realtors who also earn the $25 interview rewards.",
    },
  ] as const,

  incentives: [
    "$25 reward to any Realtor who participates in referring a loan officer. The Loan Officer you submit must interview with our company.",
    "$695 for any referral submitted who is hired by the company & remains in their position & closes one loan with First Class Home Mortgage. (Max is 10 per month: $6,950, or $7,200 including the $25 interview rewards.)",
  ],
  eligibility:
    "Currently licensed active Loan Officer's that have an NMLS Number",
  rules: [
    "If two or more people refer the same candidate, only the first referrer will receive the reward.",
    "The max cap on the number of referrals a Realtor can make is 10 per month.",
  ],

  faq: [
    {
      q: "How much do I earn for referring a loan officer?",
      a: "Realtors earn $25 for any referral who interviews with First Class Home Mortgage. You earn $695 for a referral who is hired, stays in their position, and closes at least one loan with us. The maximum is 10 referrals per month: $6,950 in hire rewards, or $7,200 with the $25 interview rewards included.",
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
      a: "Yes. A Realtor can make up to 10 referrals per month, for a maximum of $7,200 ($6,950 in hire rewards plus $250 in interview rewards).",
    },
    {
      q: "What is the loan officer compensation plan?",
      a: "Loan officers have a maximum comp plan of 2% lender-paid per closed loan. A 401(k) is offered to tenured employees.",
    },
    {
      q: "I'm a loan officer. Can I talk to you directly?",
      a: "Yes. If you have three or more years of mortgage experience, schedule a confidential conversation with Troy Warner, President & CEO. Call or text (801) 597-8832 or email loans@troywarner.com. Experienced retail and wholesale loan officers are welcome.",
    },
    {
      q: "Who runs the program and who do I contact?",
      a: "The Partner/Recruiting Referral Program is run by Troy Warner, President & CEO. Call (801) 597-8832 or email loans@troywarner.com for details.",
    },
  ],

  jobPosting: {
    title: "Licensed Mortgage Loan Officer / Originator",
    description:
      "<p>First Class Home Mortgage, an independent mortgage brokerage working with multiple wholesale lenders, is recruiting experienced licensed loan officers (originators) with an active NMLS number and three or more years of mortgage experience. Experienced retail and wholesale loan officers are welcome.</p><p>We offer accessible leadership, experienced processing support, ongoing training, and CRM, automation, and responsible AI tools that create more time for clients and referral partners. Maximum comp plan of 2% lender-paid per closed loan; 401(k) offered to tenured employees.</p>",
    // REVIEW: rolling 1-year window from migration date — replace with the
    // real posting date at cutover if this listing should have a fixed date.
    datePosted: "2026-09-10",
    validThrough: "2027-09-10",
    employmentType: "FULL_TIME",
  },
};

export type ReferralContent = typeof referral;
