import { referral } from "@content/referral";

export const dynamic = "force-static";

export async function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://${referral.host}/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
