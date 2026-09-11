import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*  Shared primitives                                                          */
/* -------------------------------------------------------------------------- */

export const postalAddressSchema = z.object({
  line1: z.string(), // "10808 River Front Parkway, Suite #3035"
  line2: z.string(), // "South Jordan, UT 84095"
  city: z.string().default("South Jordan"),
  region: z.string().default("UT"),
  postalCode: z.string().default("84095"),
  country: z.string().default("US"),
  mapsUrl: z.string().url(),
});
export type PostalAddress = z.infer<typeof postalAddressSchema>;

export const imageRefSchema = z.object({
  /** import path or public URL; resolved by the component */
  src: z.string(),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});
export type ImageRef = z.infer<typeof imageRefSchema>;

/* -------------------------------------------------------------------------- */
/*  Shared (global) config — identical across every tenant                     */
/* -------------------------------------------------------------------------- */

export interface SharedConfig {
  company: {
    legalName: string;
    corporateNmls: string; // "1843"
    /** rendered verbatim in every footer */
    stateDisclosure: string;
    fax: string;
    /** default corporate address; an officer may override */
    address: PostalAddress;
  };
  brand: {
    palette: {
      primary: string;
      primaryDark: string;
      accentGreen: string;
      ink: string;
      paper: string;
    };
    fonts: { heading: string; body: string; serif: string };
    logo: ImageRef;
    logoMark: ImageRef;
    ogDefault: ImageRef;
  };
  links: {
    creditSmart: string;
    dpa: string;
    referral: string;
    corporateReview: string;
    corporateMaps: string;
  };
  analytics: { ga4MeasurementId?: string };
  /** apex domain every officer subdomain lives under */
  officerDomain: string;
  /** used to build absolute URLs (canonical, OG, sitemap) for an officer */
  officerBaseUrl: (slug: string) => string;
}

/* -------------------------------------------------------------------------- */
/*  Officer                                                                    */
/* -------------------------------------------------------------------------- */

export const RESOURCE_CARD_IDS = [
  "application",
  "creditSmart",
  "upload",
  "dpa",
  "review",
  "schedule",
  "swag",
] as const;
export type ResourceCardId = (typeof RESOURCE_CARD_IDS)[number];

export const OFFICER_SECTION_IDS = [
  "whyChoose",
  "socialVerse",
  "introVideo",
  "testimonials",
  "faq",
  "howItWorks",
] as const;
export type OfficerSectionId = (typeof OFFICER_SECTION_IDS)[number];

export const DEFAULT_RESOURCE_CARDS: ResourceCardId[] = [
  "application",
  "creditSmart",
  "upload",
  "dpa",
  "review",
  "schedule",
];

const applicationSchema = z.discriminatedUnion("kind", [
  // firstclasshomemortgage.my1003app.com/<nmls>/register
  z.object({ kind: z.literal("my1003"), nmls: z.string() }),
  // blink.mortgage/app/signup/p/FirstClassHomeMortgage/<slug>
  z.object({ kind: z.literal("blink"), slug: z.string() }),
  z.object({ kind: z.literal("custom"), href: z.string().url() }),
]);
export type ApplicationUrl = z.infer<typeof applicationSchema>;

const extraCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string().url(),
  icon: z.enum(RESOURCE_CARD_IDS),
  btnText: z.string(),
});

export const officerSchema = z.object({
  /** subdomain label + content filename, e.g. "alan-cooper" */
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slug must be kebab-case"),
  name: z.string(),
  firstName: z.string(),
  /** free text: "Mortgage Banker" | "Loan Officer" | "Mortgage Broker" | ... */
  credentialTitle: z.string(),
  nmls: z.string(),

  phone: z.string(),
  fax: z.string().optional(),
  email: z.string().email(),
  address: postalAddressSchema.optional(),

  headshot: imageRefSchema,
  /** single paragraph for most; array for long multi-paragraph bios */
  bio: z.union([z.string(), z.array(z.string()).min(1)]),
  /** overrides the default "Hello! I'm <firstName>, ..." intro line */
  introOverride: z.string().optional(),

  application: applicationSchema,
  /** documentguardian.com/filedrop/<email>; omit to hide the Upload card */
  filedropUrl: z.string().url().optional(),
  /** defaults to SharedConfig.links.corporateReview */
  reviewUrl: z.string().url().optional(),
  /** presence toggles the "schedule" card */
  calendlyUrl: z.string().url().optional(),

  social: z
    .object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      linkedin: z.string().url().optional(),
    })
    .optional(),

  resourceCards: z.array(z.enum(RESOURCE_CARD_IDS)).optional(),
  extraCards: z.array(extraCardSchema).optional(),
  sections: z.array(z.enum(OFFICER_SECTION_IDS)).optional(),

  profileBackground: z.enum(["particles", "plain"]).default("particles"),
  /** only rendered when profileBackground is "plain" — a full-bleed hero
   *  image behind the profile card (≥768px), matching what these sites
   *  actually shipped instead of the particle canvas. */
  heroBackground: z
    .object({ src: z.string(), overlay: z.boolean().optional() })
    .optional(),

  socialVerse: z
    .object({ venueId: z.string(), socialverseId: z.string() })
    .optional(),
  introVideo: z
    .object({ src: z.string(), poster: z.string().optional() })
    .optional(),
  testimonials: z
    .array(z.object({ quote: z.string(), author: z.string() }))
    .optional(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),

  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: imageRefSchema.optional(),
      noindex: z.boolean().optional(),
    })
    .optional(),

  status: z.enum(["live", "draft", "retired"]).default("draft"),
  /** for consolidated duplicates, e.g. deloy-griffin -> deloy-griff */
  redirectTo: z.string().optional(),
});

export type Officer = z.infer<typeof officerSchema>;
export type OfficerInput = z.input<typeof officerSchema>;

/** helper for defining an officer record with inference + no import of zod at the call site */
export function defineOfficer(input: OfficerInput): OfficerInput {
  return input;
}
