/**
 * Brand design tokens as plain TS constants — for use in *.module.css-adjacent
 * logic, inline styles, and the OG-image generator. Keep in sync with
 * ./theme.css (the Tailwind v4 `@theme` block).
 */
export const tokens = {
  color: {
    primary: "#2ca4f2",
    primaryDark: "#004e82",
    accentGreen: "#10b981",
    ink: "#000000",
    paper: "#ffffff",
    muted: "#91959d",
  },
  font: {
    heading: "var(--font-heading), 'Source Sans 3', system-ui, sans-serif",
    body: "var(--font-body), 'Open Sans', system-ui, sans-serif",
    serif: "var(--font-serif), 'Bitter', Georgia, serif",
  },
  radius: { sm: "4px", md: "8px", lg: "16px" },
  container: "1200px",
} as const;

export type Tokens = typeof tokens;
