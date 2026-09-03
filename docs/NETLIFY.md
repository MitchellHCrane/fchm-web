# Netlify configuration

## The one site (new)

| Setting | Value |
|---|---|
| Repo | `MitchellHCrane/fchm-web` |
| Build command | `pnpm build` |
| Publish dir | `out` |
| Node version | 20 (`netlify.toml` + `.nvmrc`) |
| Package manager | pnpm (via `packageManager` field) |
| Primary domain | TBD — wildcard `*.1stclasshomemortgage.com` (needs Netlify DNS) |
| Redirects | `public/_redirects` (generated) + `netlify.toml` headers |
| Env vars | none for the officer tier |

## Live sites captured from the Netlify list (2026-09-02)

Officer subdomains (all "Deploys from GitHub", plain CRA):
`alan` · `andrew` · `bruce` · `caleb` · `cassey` · `deloy` · `eric` (Poulson) ·
`erick` (Shank) · `ginny` · `james` · `jennifer` · `kari` · `kent` · `linda` ·
`mortgagerebel` (Kris Matyas — **paused**) · `phil` · `raul` · `russ` · `sarah` ·
`steve` (Jones) · `steves` (Summers) · `tiffany` · `todd` — all
`<label>.1stclasshomemortgage.com`. Full list in
`packages/content/subdomains.txt`.

Not on the wildcard:
- `troywarner.com` + `start.troywarner.com` — Troy's own domain (2 GitHub sites).
- `referral.1stclasshomemortgage.com` (troyReferralSite; also historically
  `troy.1stclasshomemortgage.com`).
- `dpa.1stclasshomemortgage.com`, `1stclasshomemortgage.com`,
  `firstclasshomemortgage.com` (Next.js).

In the repos but **no live Netlify site**: `jourdancampbell`, `tresabertlshofer`.

Unrelated sites in the account (ignore): seekifieds.com, dadjokewars.com,
various `*imitation*` / `pdapichallenge` / `bamboo-*` / `mitchellhcrane`.

## Old sites — settings to export before decommissioning

> Phase 0 task. The dashboard is the ONLY record of these. For each of the 31
> current sites capture: build command, publish dir, `NODE_VERSION`, all env
> vars, every redirect rule, custom domain + domain aliases, and the DNS records.

| Old repo / subdomain | Build cmd | Publish | Node | Env vars | Redirects | Notes |
|---|---|---|---|---|---|---|
| _(fill in from the Netlify dashboard)_ | | | | | | |

Known from the repos:
- `1stclasshomemortgage` relies on a dashboard SPA redirect (`/* /index.html 200`)
  — **not** recreated here (Next routing replaces it). Check GSC for deep paths
  first.
- `1stclassnextjs` sets `NEXT_PUBLIC_ADDRESS_LINE1/2`, `NEXT_PUBLIC_MAPS_URL`,
  `NEXT_PUBLIC_NMLS_NUMBER`, `NEXT_PUBLIC_PHONE_NUMBER` per domain
  (`1stclasshomemortgage.com` vs `firstclasshomemortgage.com` — different street
  addresses). Becomes a `host → CompanyTenant` lookup in Phase 5.

## DNS

Decision pending (plan risk #3): move `1stclasshomemortgage.com` to Netlify DNS
for a true wildcard cert + zero-touch officer onboarding, vs. per-subdomain CNAME
+ domain alias. Inventory MX / SPF / DKIM / DMARC + existing subdomains first.
