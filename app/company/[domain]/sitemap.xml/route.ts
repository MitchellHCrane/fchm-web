import { domainKeys, getCompanyTenant } from "@content/company";

export const dynamic = "force-static";
export const dynamicParams = false;

const ROUTES = ["", "/testimonials", "/careers", "/privacy-policy", "/terms", "/mortgage-calculator", "/sms-consent"];

export function generateStaticParams() {
  return domainKeys.map((domain) => ({ domain }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  const host = tenant?.host ?? "1stclasshomemortgage.com";

  const urls = ROUTES.map(
    (path) =>
      `  <url><loc>https://${host}${path}/</loc><changefreq>monthly</changefreq><priority>${path === "" ? "1.0" : "0.6"}</priority></url>`,
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
