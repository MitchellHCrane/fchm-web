import { getOfficer, officerSlugs } from "@content/officers";
import { shared } from "@config/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return officerSlugs.map((slug) => ({ slug }));
}

// Each officer site is a single page ("/"), so its sitemap has one URL.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const officer = getOfficer(slug);
  const base = shared.officerBaseUrl(slug);
  const noindex = officer?.seo?.noindex;

  const body = noindex
    ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`
    : `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
