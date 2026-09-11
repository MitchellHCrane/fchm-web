import { domainKeys, getCompanyTenant } from "@content/company";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return domainKeys.map((domain) => ({ domain }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  const host = tenant?.host ?? "1stclasshomemortgage.com";
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://${host}/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
