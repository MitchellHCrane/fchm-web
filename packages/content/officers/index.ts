import { officerSchema, type Officer } from "@content/schema";

// One import per officer. `pnpm new:officer` appends here automatically.
// The `slug` in each file is the LIVE subdomain label — do not change it
// without a redirect (see packages/content/subdomains.txt).
import alan from "./alan";
import andrew from "./andrew";
import bruce from "./bruce";
import caleb from "./caleb";
import cassey from "./cassey";
import deloy from "./deloy";
import eric from "./eric";
import erick from "./erick";
import ginny from "./ginny";
import james from "./james";
import jennifer from "./jennifer";
import jourdan from "./jourdan";
import kari from "./kari";
import kent from "./kent";
import linda from "./linda";
import mortgagerebel from "./mortgagerebel";
import phil from "./phil";
import raul from "./raul";
import russ from "./russ";
import sarah from "./sarah";
import steve from "./steve";
import steves from "./steves";
import tiffany from "./tiffany";
import todd from "./todd";
import tresa from "./tresa";
import troy from "./troy";

const RAW = [alan, andrew, bruce, caleb, cassey, deloy, eric, erick, ginny, james, jennifer, jourdan, kari, kent, linda, mortgagerebel, phil, raul, russ, sarah, steve, steves, tiffany, todd, tresa, troy];

/** Validated, defaults-applied officer records, keyed by slug. */
export const officers: Officer[] = RAW.map((raw, i) => {
  const parsed = officerSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(
      `Invalid officer record at index ${i} (${(raw as { slug?: string }).slug ?? "?"}):\n` +
        JSON.stringify(parsed.error.format(), null, 2),
    );
  }
  return parsed.data;
});

export const officersBySlug: Record<string, Officer> = Object.fromEntries(
  officers.map((o) => [o.slug, o]),
);

/** All non-retired slugs — used to prerender pages (drafts included, for preview). */
export const officerSlugs = officers
  .filter((o) => o.status !== "retired")
  .map((o) => o.slug);

/** Live slugs only — used for Netlify host redirects + sitemaps. */
export const liveOfficerSlugs = officers
  .filter((o) => o.status === "live")
  .map((o) => o.slug);

export function getOfficer(slug: string): Officer | undefined {
  return officersBySlug[slug];
}
