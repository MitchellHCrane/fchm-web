# fchm-web

One repo, one Netlify site, one Next.js app — serving every First Class Home
Mortgage loan-officer site (and, later, the microsites + company site).

Replaces ~31 separate Create React App repos, each with its own Netlify site.

## How it works

- Each officer is one data file: `packages/content/officers/<slug>.ts`
  (validated against `packages/content/schema.ts`).
- Shared content (disclosures, corporate address, brand, links) lives once in
  `packages/config/site.ts`.
- Shared UI is in `packages/ui/`; shared SEO (metadata + JSON-LD) in `packages/seo/`.
- `next build` static-exports the whole thing to `out/`. Each officer renders at
  `/sites/<slug>/`.
- `scripts/gen-redirects.mjs` (runs on `pre{dev,build}`) writes `public/_redirects`
  with Netlify host rules: `https://<slug>.1stclasshomemortgage.com/*` →
  `/sites/<slug>/`. A wildcard `*.1stclasshomemortgage.com` domain on the one
  Netlify site routes every subdomain here.

## Commands

| | |
|---|---|
| `pnpm dev` | local dev (regenerates `_redirects` first) |
| `pnpm build` | static export to `out/` |
| `pnpm typecheck` / `pnpm lint` | CI gates |
| `pnpm validate:content` | zod-validate every officer record |
| `pnpm new:officer <slug> "<Name>" "<Title>" <nmls>` | scaffold a new officer |

## Add an officer

See `docs/ADDING-AN-OFFICER.md`. Short version: `pnpm new:officer …`, drop a
headshot in `public/headshots/<slug>.jpg`, fill in the record, open a PR, preview
at `/sites/<slug>/`, merge. No new repo, no new Netlify site; DNS is covered by
the wildcard record.

## Migration status

`docs/MIGRATION-STATUS.md` tracks which subdomains have been cut over from their
old repo. Old repos stay **archived read-only** as the rollback + reference.
