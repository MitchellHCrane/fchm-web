import { getOfficer, officerSlugs } from "@content/officers";
import { shared } from "@config/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return officerSlugs.map((slug) => ({ slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const officer = getOfficer(slug);
  const base = shared.officerBaseUrl(slug);

  const body = officer?.seo?.noindex
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
