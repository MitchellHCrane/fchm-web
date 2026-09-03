# Officer data extraction — review notes

All 26 officer records in `packages/content/officers/*.ts` were auto-extracted
from the old CRA repos with best-effort regex. **Every record is `status: "draft"`
except `troy-warner`.** Verify each against its source repo before flipping to
`"live"`. Headshots were copied from each repo's `src/images/` (originals kept in
the old repos + `troyAssets/`).

## Needs a decision / correction before going live

| slug | issue |
|---|---|
| **andrew-adams** | Title is "Realtor®, Owner and Principal Broker", not a loan-officer title. Regex only found the **corporate** NMLS #1843. The repo's application link was still the un-edited template (`blink/troywarner`). **Is this a loan-officer site at all, or a Realtor referral partner?** `application` + `nmls` are placeholders. |
| **deloy-griffin / deloy-griff** | Same person, two repos. `deloy-griff` (from `deloyGriff2`) is the keeper; `deloy-griffin` is `status: "retired"` + `redirectTo: "deloy-griff"` (301). `deloyGriff2`'s source had a broken empty fax — pulled `(801)-951-5213` from `deloyGriffin`. Confirm which subdomain is actually live today. |
| **raul-laveiru** | Source `my1003app.com` URL was `.../222043184/register` (9 digits — looks like a typo). Record uses NMLS `2223020` from the profile heading. Verify the real my1003 link. Name is "Raul Saez Laveiru" (kept full). |
| **phil-willson** | Name in profile is "Phillip Willson" (folder `philWillson`). Phone and fax are **identical** (`801-808-3912`) in the source — likely a copy error; the `fax` field was kept, verify or drop it. Email is `phil@loanforce.net`. |
| **eric-poulson** | `status`-worthy outlier. Long multi-paragraph bio (currently truncated to one line — copy the full text from `ericPoulson/src/Components/Profile.js`). `sections: ["socialVerse", "introVideo"]` are set but **`socialVerse` venue/id and `introVideo.src` still need to be pulled** from `ericPoulson/src/Components/SocialVerseWidget.js` + `IntroVideo.js`. `profileBackground: "plain"`. |
| **caleb-adams** | `sections: ["testimonials"]` set, but the **quotes aren't populated** — copy them from `calebAdams/src/Components/Testimonials.js` into a `testimonials: [{ quote, author }]` array. Distinct Google review link. |
| **jennifer-moore** | Long bio (truncated — copy full from repo). Has FB + IG + Calendly. Source filedrop email had a capital `J` (`Jennifer@…`) — normalized to the lowercase `email`; confirm DocumentGuardian isn't case-sensitive or set `filedropUrl` explicitly. |
| **eric-shank** | `reviewUrl` is a Zillow lender-profile link (not a Google review). Kept as-is; confirm that's intended. |

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
