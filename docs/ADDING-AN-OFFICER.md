# Adding a loan-officer site

1. **Scaffold the record**

   ```
   pnpm new:officer jane-doe "Jane Doe" "Mortgage Banker" 1234567
   ```

   This creates `packages/content/officers/jane-doe.ts` from `_template.ts` and
   wires it into `officers/index.ts`.

2. **Add the headshot** — `public/headshots/jane-doe.jpg` (roughly square,
   ~800×800, optimized). `validate:content` fails if it's missing.

3. **Fill in the record.** Only `application` really varies:
   - `{ kind: "my1003", nmls: "1234567" }` → `firstclasshomemortgage.my1003app.com/1234567/register`
   - `{ kind: "blink", slug: "janedoe" }` → `blink.mortgage/app/signup/p/FirstClassHomeMortgage/janedoe`
   - `{ kind: "custom", href: "…" }`

   Omit `fax` / `address` to inherit the corporate defaults from
   `packages/config/site.ts`. Add `calendlyUrl` to show the "Schedule" card.
   Set `sections: ["whyChoose"]` + `socialVerse` for the video-testimonial block.
   Use `profileBackground: "plain"` to drop the hero background.

4. **Set `status: "live"`** when ready (drafts still build at `/sites/<slug>/`
   but are excluded from `_redirects` and sitemaps).

5. **Open a PR.** CI runs typecheck + lint + `validate:content` + `next build`.
   Preview the Netlify deploy at `/sites/jane-doe/`.

6. **Merge.** One build ships it. `gen-redirects.mjs` adds the host block for
   `jane-doe.1stclasshomemortgage.com` automatically.

7. **DNS** — nothing, if the wildcard `*.1stclasshomemortgage.com` record is in
   place. Otherwise add one `CNAME jane-doe → <site>.netlify.app` and (if not
   using Netlify DNS) add `jane-doe.1stclasshomemortgage.com` as a domain alias
   on the Netlify site.
