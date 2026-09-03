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
