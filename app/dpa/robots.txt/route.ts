import { dpa } from "@content/dpa";

export const dynamic = "force-static";

export async function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://${dpa.host}/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
