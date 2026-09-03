# Migration status

Legend: ⬜ not started · 🟨 record drafted (auto-extracted) · 🟦 on staging · ✅ cut over (DNS moved) · 📦 old repo archived

## Tier 1 — loan-officer sites

All records auto-extracted into `packages/content/officers/*.ts` as `status: "draft"`
(they build at `/sites/<slug>/` for preview but get no subdomain until `"live"`).
See `docs/EXTRACTION-REVIEW.md` for per-record caveats.

| Old repo | slug | Status | Notes |
|---|---|---|---|
| troywarner | troy-warner | 🟦 live | fully migrated; verify headshot + staging |
| alanCooper | alan-cooper | 🟨 | `profileBackground: "plain"` |
| andrewAdams | andrew-adams | 🟨 ⚠ | Realtor title, corp NMLS only, template app link — is this a LO site? |
| bruceIngramNew | bruce-ingram | 🟨 | blink app URL |
| calebAdams | caleb-adams | 🟨 ⚠ | testimonials array not yet populated |
| casseystanger | cassey-stanger | 🟨 | |
| deloyGriff2 | deloy-griff | 🟨 ⚠ | keeper of the deloy pair; fax taken from deloyGriffin |
| deloyGriffin | deloy-griffin | 🟨 retired | 301 → deloy-griff |
| ericPoulson | eric-poulson | 🟨 ⚠ | plain bg; long bio truncated; socialVerse/introVideo ids TODO; rs@3 |
| erickshank | eric-shank | 🟨 ⚠ | reviewUrl is a Zillow link |
| ginnybrimley | ginny-brimley | 🟨 | own fax |
| jamesThomson | james-thompson | 🟨 | folder/remote/name disagree — content says "Thompson"; yahoo email |
| jenniferMoore | jennifer-moore | 🟨 ⚠ | plain bg; long bio truncated; FB/IG/Calendly |
| jourdancampbell | jourdan-campbell | 🟨 | blink app URL |
| karifitzgerald | kari-fitzgerald | 🟨 | plain bg; blink URL; own fax; utahlender.com email |
| kentbarker | kent-barker | 🟨 | own fax; .png headshot |
| kris-matyas | kris-matyas | 🟨 | blink slug `themortgagerebel`; Calendly |
| lindaskehan | linda-skehan | 🟨 | own fax + review link; large headshot |
| philWillson | phil-willson | 🟨 ⚠ | name "Phillip"; phone == fax; loanforce.net email |
| raulLaveiru | raul-laveiru | 🟨 ⚠ | my1003 URL had a 9-digit id; using NMLS 2223020 |
| russWarner | russ-warner | 🟨 | gmail email |
| sarahSpencer | sarah-spencer | 🟨 | gmail email; .png headshot |
| steveJones | steve-jones | 🟨 | blink app URL |
| steveSummers | steve-summers | 🟨 | FB/IG; large headshot |
| tiffanyBartnicki | tiffany-bartnicki | 🟨 | blink app URL; own fax |
| toddRodocker | todd-rodocker | 🟨 | blink app URL; gmail email |
| tresabertlshofer | tresa-bertlshofer | 🟨 | blink app URL; own fax |

## Tier 2 — microsites (Phase 4)

| Old repo | route | Status |
|---|---|---|
| troyReferralSite | `/referral` (troy. + referral.) | ⬜ |
| dpa-1stclass | `/dpa` (dpa.) | ⬜ |

## Tier 3 — company (Phase 5)

| Old repo | route | Status |
|---|---|---|
| 1stclassnextjs | `(company)` — 1stclasshomemortgage.com + firstclasshomemortgage.com | ⬜ |
| 1stclasshomemortgage | retire (superseded by 1stclassnextjs) | ⬜ |
