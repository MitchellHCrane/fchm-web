# Migration status

Legend: ⬜ not started · 🟨 record drafted (auto-extracted) · 🟦 on staging · ✅ cut over (DNS moved) · 📦 old repo archived

## URL preservation

Each officer's `slug` = the **live production subdomain label** (e.g. `linda` →
`https://linda.1stclasshomemortgage.com/`), captured in
`packages/content/subdomains.txt` from the Netlify site list on 2026-09-02.
`scripts/check-subdomains.mjs` (CI) fails if a `live` record's slug isn't
registered there, so a rename can't silently break a production URL. Officer
pages are all the single route `/` — no path changes, no content 301s.

## Tier 1 — loan-officer sites

All records auto-extracted into `packages/content/officers/<slug>.ts` as
`status: "draft"` (they build at `/sites/<slug>/` for preview but get no
subdomain until `"live"`). See `docs/EXTRACTION-REVIEW.md` for per-record caveats.

All 23 records below flipped `live` on 2026-09-15 (already confirmed intended
in the Sep 4 content review — see `docs/EXTRACTION-REVIEW.md`). "Cutover"
tracks the Netlify domain move itself (add to `fchm` → remove from the old
site), which is a separate, manual, one-subdomain-at-a-time step — see
`docs/NETLIFY.md` for the exact list and old-site names.

| Old repo | slug / live subdomain | Repo status | Cutover | Notes |
|---|---|---|---|---|
| troywarner | troy → *subdomain TBD* | 🟨 draft | — | pilot content fully migrated & verified; `troy.1stclasshomemortgage.com` confirmed reserved for the company-site alias (not this LO site) — stays draft until a real subdomain is picked |
| alanCooper | alan | 🟦 live | ⬜ | `profileBackground: "plain"` + flag hero image |
| andrewAdams | andrew | 🟦 live | ✅ cut over 2026-09-14 | Realtor referral partner (not a loan officer) — confirmed intended |
| bruceIngramNew | bruce | 🟦 live | ⬜ | blink app URL |
| calebAdams | caleb | 🟦 live | ⬜ | testimonials array intentionally empty — confirmed |
| casseystanger | cassey | 🟦 live | ⬜ | |
| deloyGriff2 (+ deloyGriffin) | deloy | 🟦 live | ⬜ | both old repos → one site; deloyGriffin.ts removed; fax from deloyGriffin — confirmed intended |
| ericPoulson | eric | 🟦 live | ⬜ | plain bg; long bio truncated; socialVerse/introVideo ids left as placeholders — confirmed intended |
| erickshank | erick | 🟦 live | ⬜ | reviewUrl is a Zillow link — confirmed intended |
| ginnybrimley | ginny | 🟦 live | ⬜ | own fax |
| jamesThomson | james | 🟦 live | ⬜ | folder/remote/name disagree — content says "Thompson"; yahoo email |
| jenniferMoore | jennifer | 🟦 live | ⬜ | plain bg; long bio truncated; FB/IG/Calendly — confirmed intended |
| jourdancampbell | jourdan | 🗑 retired | — | Netlify site **deleted**; record kept for restore (not built/routed) |
| karifitzgerald | kari | 🟦 live | ⬜ | plain bg; blink URL; own fax; utahlender.com email |
| kentbarker | kent | 🟦 live | ⬜ | own fax; .png headshot |
| kris-matyas | mortgagerebel | 🟦 live | ⬜ ⚠ | old Netlify site is **paused** — un-pause it as part of cutover; blink slug `themortgagerebel` |
| lindaskehan | linda | 🟦 live | ⬜ | own fax + review link; large headshot |
| philWillson | phil | 🟦 live | ⬜ | name "Phillip"; phone == fax; loanforce.net email — confirmed intended |
| raulLaveiru | raul | 🟦 live | ⬜ | my1003 URL had a 9-digit id; using NMLS 2223020 — confirmed intended |
| russWarner | russ | 🟦 live | ⬜ | gmail email |
| sarahSpencer | sarah | 🟦 live | ⬜ | gmail email; .png headshot |
| steveJones | steve | 🟦 live | ⬜ | blink app URL |
| steveSummers | steves | 🟦 live | ⬜ | FB/IG; large headshot |
| tiffanyBartnicki | tiffany | 🟦 live | ⬜ | blink app URL; own fax |
| toddRodocker | todd | 🟦 live | ⬜ | blink app URL; gmail email |
| tresabertlshofer | tresa | 🗑 retired | — | Netlify site **deleted**; record kept for restore (not built/routed) |

## Tier 2 — microsites (Phase 4) — ✅ migrated, staging verification pending

| Old repo | route | Status | Notes |
|---|---|---|---|
| troyReferralSite | `app/referral/` → `referral.1stclasshomemortgage.com` | 🟦 built | Canonical/OG/JSON-LD updated from the old repo's stale `troy.1stclasshomemortgage.com` to `referral.` (the actual live subdomain — `troy.` is reserved, see Tier 1). FAQ copy + FAQPage JSON-LD both read `@content/referral.ts` (single source, no more manual sync). `react-snap`/`puppeteer` dropped — static export covers it. GA4 tag not carried over (was a `G-XXXXXXXXXX` placeholder) — add the real ID to `@config/site.ts` `analytics.ga4MeasurementId` when known. |
| dpa-1stclass | `app/dpa/` → `dpa.1stclasshomemortgage.com` | 🟦 built | JSX-in-data converted to serializable `Span[]` rich text (`@content/dpa.ts` + `@ui/dpa/RichText`). |

## Tier 3 — company (Phase 5) — ✅ migrated, staging verification pending

| Old repo | route | Status | Notes |
|---|---|---|---|
| 1stclassnextjs | `app/company/[domain]/` → `1stclasshomemortgage.com` + `firstclasshomemortgage.com` | 🟦 built | Fixed the `next/head`-in-App-Router bug (was a no-op) with real `generateMetadata` + server-rendered JSON-LD. Replaced the four `NEXT_PUBLIC_*` env vars (couldn't vary per-domain in one deploy anyway) with a `host → CompanyTenant` lookup in `@content/company.ts`. `mortgage-calculator-react` replaced with the same in-house calculator ported verbatim from the source. ⚠ REVIEW: `NEXT_PUBLIC_NMLS_NUMBER` existed in the old `.env.*.example` files but was never read anywhere in the source; the footer's NMLS/license text is static ("Regulated by the **Colorado** Division of Real Estate NMLS #2719095" + "Company NMLS #1843") — confirm that's intentional, not a copy-paste leftover, and confirm the real phone number per domain (both currently default to Troy's own number, matching every code fallback). |
| 1stclasshomemortgage | retire (superseded by 1stclassnextjs, now folded into `fchm-web`) | ⬜ | Check GSC / inbound links for deep paths that relied on its Netlify SPA redirect before decommissioning. |
