/** Scaffold a new officer record from _template.ts.
 *  Usage: pnpm new:officer <slug> "<Full Name>" "<Credential Title>" <nmls>
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [slug, name, title, nmls] = process.argv.slice(2);
if (!slug || !name) {
  console.error(
    'Usage: pnpm new:officer <slug> "<Full Name>" "<Credential Title>" <nmls>',
  );
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`slug must be kebab-case, got "${slug}"`);
  process.exit(1);
}

const dir = join(process.cwd(), "packages/content/officers");
const dest = join(dir, `${slug}.ts`);
if (existsSync(dest)) {
  console.error(`${slug}.ts already exists`);
  process.exit(1);
}

const first = name.split(" ")[0];
const tpl = readFileSync(join(dir, "_template.ts"), "utf8")
  .replace('slug: "first-last"', `slug: "${slug}"`)
  .replace('name: "First Last"', `name: "${name}"`)
  .replace('firstName: "First"', `firstName: "${first}"`)
  .replace(
    'credentialTitle: "Loan Officer"',
    `credentialTitle: "${title ?? "Loan Officer"}"`,
  )
  .replace(/nmls: "0000000"/g, `nmls: "${nmls ?? "0000000"}"`)
  .replace(/first-last\.jpg/g, `${slug}.jpg`)
  .replace('alt: "First Last"', `alt: "${name}"`);

writeFileSync(dest, tpl);

// wire into index.ts
const indexPath = join(dir, "index.ts");
let idx = readFileSync(indexPath, "utf8");
const camel = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
idx = idx.replace(
  /(import troyWarner from ".\/troy-warner";\n)/,
  `$1import ${camel} from "./${slug}";\n`,
);
idx = idx.replace(/const RAW = \[([^\]]*)\];/, (_m, list) => {
  const items = list
    .split(",")
    .map((s: string) => s.trim())
    .filter(Boolean);
  items.push(camel);
  return `const RAW = [${items.join(", ")}];`;
});
writeFileSync(indexPath, idx);

console.log(
  `Created packages/content/officers/${slug}.ts and wired it into index.ts.\n` +
    `Next: drop the headshot at public/headshots/${slug}.jpg and fill in the record.`,
);
