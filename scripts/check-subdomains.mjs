/** CI guard: every officer whose record is `status: "live"` must have a matching
 *  `live` entry in packages/content/subdomains.txt, so a slug rename can never
 *  silently break a production URL. Run with `tsx`. */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const officersDir = join(root, "packages/content/officers");

const registry = new Map(); // slug -> status
for (const raw of readFileSync(
  join(root, "packages/content/subdomains.txt"),
  "utf8",
).split("\n")) {
  const line = raw.replace(/#.*$/, "").trim();
  if (!line) continue;
  const [slug, , status] = line.split(/\s+/);
  if (slug) registry.set(slug, status ?? "live");
}

let errors = 0;
const files = readdirSync(officersDir).filter(
  (f) => f.endsWith(".ts") && f !== "index.ts" && f !== "_template.ts",
);

for (const f of files) {
  const mod = await import(pathToFileURL(join(officersDir, f)).href);
  const o = mod.default;
  const fileSlug = f.replace(/\.ts$/, "");

  if (o.slug !== fileSlug) {
    console.error(`✗ ${f}: slug "${o.slug}" != filename "${fileSlug}"`);
    errors++;
  }

  if (o.status === "live") {
    const reg = registry.get(o.slug);
    if (!reg) {
      console.error(
        `✗ ${o.slug}: status "live" but not in subdomains.txt — a live URL would be created/broken without review`,
      );
      errors++;
    } else if (reg !== "live") {
      console.error(
        `✗ ${o.slug}: status "live" but subdomains.txt marks it "${reg}"`,
      );
      errors++;
    }
  }
}

if (errors) {
  console.error(`\n${errors} subdomain guard error(s).`);
  process.exit(1);
}
console.log(
  `✓ subdomain guard: ${files.length} officer file(s), slugs match filenames, live records registered.`,
);
