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

| Old repo | slug / live subdomain | Status | Notes |
|---|---|---|---|
| troywarner | troy-warner → **troywarner.com** | 🟨 ⚠ | apex domain, NOT `*.1stclasshomemortgage.com` — decide domain strategy |
| alanCooper | alan | 🟨 | `profileBackground: "plain"` |
| andrewAdams | andrew | 🟨 ⚠ | Realtor title, only corp NMLS found, template app link — is this a LO site? |
| bruceIngramNew | bruce | 🟨 | blink app URL |
| calebAdams | caleb | 🟨 ⚠ | testimonials array not yet populated |
| casseystanger | cassey | 🟨 | |
| deloyGriff2 (+ deloyGriffin) | deloy | 🟨 ⚠ | both old repos → one site; deloyGriffin.ts removed; fax from deloyGriffin |
| ericPoulson | eric | 🟨 ⚠ | plain bg; long bio truncated; socialVerse/introVideo ids TODO; rs@3 |
| erickshank | erick | 🟨 ⚠ | reviewUrl is a Zillow link |
| ginnybrimley | ginny | 🟨 | own fax |
| jamesThomson | james | 🟨 | folder/remote/name disagree — content says "Thompson"; yahoo email |
| jenniferMoore | jennifer | 🟨 ⚠ | plain bg; long bio truncated; FB/IG/Calendly |
| jourdancampbell | jourdan | 🟨 ⚠ | **no live Netlify site found** — confirm subdomain |
| karifitzgerald | kari | 🟨 | plain bg; blink URL; own fax; utahlender.com email |
| kentbarker | kent | 🟨 | own fax; .png headshot |
| kris-matyas | mortgagerebel | 🟨 ⚠ | Netlify site is **paused**; blink slug `themortgagerebel`; Calendly |
| lindaskehan | linda | 🟨 | own fax + review link; large headshot |
| philWillson | phil | 🟨 ⚠ | name "Phillip"; phone == fax; loanforce.net email |
| raulLaveiru | raul | 🟨 ⚠ | my1003 URL had a 9-digit id; using NMLS 2223020 |
| russWarner | russ | 🟨 | gmail email |
| sarahSpencer | sarah | 🟨 | gmail email; .png headshot |
| steveJones | steve | 🟨 | blink app URL |
| steveSummers | steves | 🟨 | FB/IG; large headshot |
| tiffanyBartnicki | tiffany | 🟨 | blink app URL; own fax |
| toddRodocker | todd | 🟨 | blink app URL; gmail email |
| tresabertlshofer | tresa | 🟨 ⚠ | **no live Netlify site found** — confirm subdomain |

## Tier 2 — microsites (Phase 4)

| Old repo | live subdomain(s) | Status |
|---|---|---|
| troyReferralSite | `referral.` (also `troy.`, `start.troywarner.com`) | ⬜ |
| dpa-1stclass | `dpa.1stclasshomemortgage.com` | ⬜ |

## Tier 3 — company (Phase 5)

| Old repo | domain | Status |
|---|---|---|
| 1stclassnextjs | `1stclasshomemortgage.com` + `firstclasshomemortgage.com` | ⬜ |
| 1stclasshomemortgage | retire (superseded by 1stclassnextjs) | ⬜ |
