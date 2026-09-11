# fchm-web

One repo, one Netlify site, one Next.js app — serving every First Class Home
Mortgage site: the loan-officer subdomains, the referral and DPA microsites,
and the company marketing site on both its apex domains.

Replaces 31 separate repos (24 loan-officer CRA apps, `troyReferralSite`,
`dpa-1stclass`, `1stclassnextjs`, `1stclasshomemortgage`), each with its own
Netlify site.

## How it works

- **Officers** — one data file each: `packages/content/officers/<slug>.ts`
  (validated against `packages/content/schema.ts`), rendered at `/sites/<slug>/`.
- **Referral microsite** — `packages/content/referral.ts` + `app/referral/`
  (`referral.1stclasshomemortgage.com`).
- **DPA microsite** — `packages/content/dpa.ts` (serializable rich text, not
  JSX) + `app/dpa/` (`dpa.1stclasshomemortgage.com`).
- **Company site** — `packages/content/company.ts` maps each apex domain to its
  own address/phone (replacing per-domain `NEXT_PUBLIC_*` env vars, which can't
  vary per request in one deploy) + `app/company/[domain]/`
  (`1stclasshomemortgage.com`, `firstclasshomemortgage.com`).
- Shared content (disclosures, corporate address, brand, links) lives once in
  `packages/config/site.ts`. Shared UI is namespaced per tier under
  `packages/ui/{sections,company,referral,dpa}/`; shared SEO (metadata + JSON-LD)
  in `packages/seo/`.
- `next build` static-exports everything to `out/`.
- `scripts/gen-redirects.mjs` (runs on `pre{dev,build}`) writes `public/_redirects`
  with Netlify host rules — per-officer blocks generated from the data files,
  plus static blocks for the referral/dpa/company hosts. A wildcard
  `*.1stclasshomemortgage.com` domain (+ the company/microsite domains added
  individually) on the one Netlify site routes every host here. Public URLs
  (e.g. `/testimonials` on either company domain) never expose the internal
  `/company/<domain>/...` route — the rewrite is server-side.

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
