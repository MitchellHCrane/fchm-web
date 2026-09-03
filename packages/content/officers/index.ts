import { officerSchema, type Officer } from "@content/schema";

// One import per officer. `pnpm new:officer` appends here automatically.
import troyWarner from "./troy-warner";
import alanCooper from "./alan-cooper";
import andrewAdams from "./andrew-adams";
import bruceIngram from "./bruce-ingram";
import calebAdams from "./caleb-adams";
import casseyStanger from "./cassey-stanger";
import deloyGriff from "./deloy-griff";
import deloyGriffin from "./deloy-griffin";
import ericPoulson from "./eric-poulson";
import ericShank from "./eric-shank";
import ginnyBrimley from "./ginny-brimley";
import jamesThompson from "./james-thompson";
import jenniferMoore from "./jennifer-moore";
import jourdanCampbell from "./jourdan-campbell";
import kariFitzgerald from "./kari-fitzgerald";
import kentBarker from "./kent-barker";
import krisMatyas from "./kris-matyas";
import lindaSkehan from "./linda-skehan";
import philWillson from "./phil-willson";
import raulLaveiru from "./raul-laveiru";
import russWarner from "./russ-warner";
import sarahSpencer from "./sarah-spencer";
import steveJones from "./steve-jones";
import steveSummers from "./steve-summers";
import tiffanyBartnicki from "./tiffany-bartnicki";
import toddRodocker from "./todd-rodocker";
import tresaBertlshofer from "./tresa-bertlshofer";

const RAW = [troyWarner, alanCooper, andrewAdams, bruceIngram, calebAdams, casseyStanger, deloyGriff, deloyGriffin, ericPoulson, ericShank, ginnyBrimley, jamesThompson, jenniferMoore, jourdanCampbell, kariFitzgerald, kentBarker, krisMatyas, lindaSkehan, philWillson, raulLaveiru, russWarner, sarahSpencer, steveJones, steveSummers, tiffanyBartnicki, toddRodocker, tresaBertlshofer];

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
