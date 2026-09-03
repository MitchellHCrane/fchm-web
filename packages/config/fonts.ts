import { Source_Sans_3, Open_Sans, Bitter } from "next/font/google";

/** Headings — matches the CRA sites' "Source Sans Pro" 900. */
export const fontHeading = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

/** Body copy. */
export const fontBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

/** Serif accent (used by the troywarner template only). */
export const fontSerif = Bitter({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const fontVariables = [
  fontHeading.variable,
  fontBody.variable,
  fontSerif.variable,
].join(" ");
