# Officer data extraction — review notes

> Slugs were renamed to the **real live subdomains** from the Netlify site list
> (`packages/content/subdomains.txt`). `linda-skehan` → `linda`, `eric-shank` →
> `erick`, `kris-matyas` → `mortgagerebel`, etc. `deloy-griffin.ts` was deleted
> (it's an older iteration of the site now at `deloy.`, not a separate URL).
> Three need a domain decision: **troy-warner** (on `troywarner.com`, not the
> wildcard), **jourdan** and **tresa** (no live Netlify site found).

All 26 officer records in `packages/content/officers/*.ts` were auto-extracted
from the old CRA repos with best-effort regex. **Every record is `status: "draft"`
except `troy-warner`.** Verify each against its source repo before flipping to
`"live"`. Headshots were copied from each repo's `src/images/` (originals kept in
the old repos + `troyAssets/`).

## Reviewed and confirmed intended (2026-09-04)

These were flagged during extraction as needing a decision. Mitchell confirmed
all of them are intended as-is for their respective sites — no data changes
needed before flipping `status` to `"live"`.

| slug | issue | resolution |
|---|---|---|
| **andrew-adams** | Title is "Realtor®, Owner and Principal Broker", not a loan-officer title. Regex only found the **corporate** NMLS #1843. The repo's application link was still the un-edited template (`blink/troywarner`). | Confirmed intended — site stays as-is. |
| **deloy-griffin / deloy-griff** | Same person, two repos. `deloy-griff` (from `deloyGriff2`) is the keeper; `deloy-griffin` is `status: "retired"` + `redirectTo: "deloy-griff"` (301). `deloyGriff2`'s source had a broken empty fax — pulled `(801)-951-5213` from `deloyGriffin`. | Confirmed intended — `deloy-griff` is the live subdomain, fax value stands. |
| **raul-laveiru** | Source `my1003app.com` URL was `.../222043184/register` (9 digits — looks like a typo). Record uses NMLS `2223020` from the profile heading. Name is "Raul Saez Laveiru" (kept full). | Confirmed intended — NMLS `2223020` stands. |
| **phil-willson** | Name in profile is "Phillip Willson" (folder `philWillson`). Phone and fax are **identical** (`801-808-3912`) in the source. Email is `phil@loanforce.net`. | Confirmed intended — `fax` stays as recorded. |
| **eric-poulson** | Long multi-paragraph bio (currently truncated to one line). `sections: ["socialVerse", "introVideo"]` are set but `socialVerse` venue/id and `introVideo.src` are placeholders. `profileBackground: "plain"`. | Confirmed intended — kept as-is for this site. |
| **caleb-adams** | `sections: ["testimonials"]` set, but the quotes array is empty. Distinct Google review link. | Confirmed intended — kept as-is for this site. |
| **jennifer-moore** | Long bio (truncated). Has FB + IG + Calendly. Source filedrop email had a capital `J` (`Jennifer@…`) — normalized to the lowercase `email`. | Confirmed intended — normalized email stands. |
| **eric-shank** | `reviewUrl` is a Zillow lender-profile link (not a Google review). | Confirmed intended. |

## Bio text

Every `bio` field is the **one-line** version from the profile blurb, with HTML
entities decoded and truncated at ~240 chars. The short "Hello! I'm X…" bios are
complete; the longer ones (eric-poulson, jennifer-moore) are cut — replace with
the full paragraph(s) from the source `Profile.js`.

## Per-officer values that genuinely vary (kept, not defaulted)

- **fax** — kept only when it differs from the corporate `(801)-303-7083`
  (kari, kent, deloy, linda, tiffany, ginny, alan, tresa, phil have their own).
- **reviewUrl** — kept only when it differs from the corporate Google review
  link (caleb, eric-poulson, eric-shank, linda).
- **application** — `my1003` (uses NMLS) vs `blink` (uses a per-officer slug):
  both appear across the portfolio.
- **profileBackground** — `plain` for alan-cooper, kari-fitzgerald, eric-poulson,
  jennifer-moore; `particles` for the rest.

## Headshots to optimize

Several copied headshots are large originals — compress before launch:
`james-thompson.jpg` (2.4 MB), `linda-skehan.jpg` (2.6 MB), `phil-willson.jpg`
(1.6 MB), `steve-summers.jpg` (0.9 MB). Target ~800×800, &lt;150 KB, webp/avif.
