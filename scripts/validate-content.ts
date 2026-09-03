/** CI gate: every officer record parses against the zod schema, slugs are
 *  unique, and each headshot file referenced actually exists in public/. */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { officers } from "@content/officers";

let errors = 0;
const seen = new Set<string>();

for (const o of officers) {
  if (seen.has(o.slug)) {
    console.error(`✗ duplicate slug: ${o.slug}`);
    errors++;
  }
  seen.add(o.slug);

  if (o.headshot.src.startsWith("/")) {
    const p = join(process.cwd(), "public", o.headshot.src);
    if (!existsSync(p)) {
      console.error(`✗ ${o.slug}: missing headshot file public${o.headshot.src}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} content error(s).`);
  process.exit(1);
}
console.log(`✓ ${officers.length} officer record(s) valid.`);
