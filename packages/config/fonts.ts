import localFont from "next/font/local";

/*
 * Self-hosted (packages/config/fonts/*.woff2) instead of next/font/google, so
 * builds never depend on fetching from Google Fonts. A flaky/odd Google
 * response broke a Netlify deploy ("An error occurred in `next/font`.
 * TypeError: Cannot read properties of null (reading '1')").
 *
 * Files are Google's variable-weight "latin" subsets (Source Sans 3 v20,
 * Open Sans v44, Bitter v42), so one file covers every weight in its range.
 */

/** Headings — matches the CRA sites' "Source Sans Pro" 900. */
export const fontHeading = localFont({
  src: [{ path: "./fonts/source-sans-3-latin.woff2", weight: "400 900", style: "normal" }],
  variable: "--font-heading",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

/** Body copy. */
export const fontBody = localFont({
  src: [
    { path: "./fonts/open-sans-latin.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/open-sans-italic-latin.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

/** Serif accent (used by the troywarner template only). */
export const fontSerif = localFont({
  src: [
    { path: "./fonts/bitter-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/bitter-italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const fontVariables = [
  fontHeading.variable,
  fontBody.variable,
  fontSerif.variable,
].join(" ");
