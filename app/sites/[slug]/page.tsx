import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOfficer, officerSlugs } from "@content/officers";
import { OfficerSite } from "@ui/site/OfficerSite";
import { buildOfficerMetadata } from "@seo/metadata";
import { JsonLd } from "@seo/JsonLd";
import { realEstateAgentSchema, faqPageSchema } from "@seo/schema";

export const dynamic = "error"; // fully static; fail the build on accidental dynamic use
export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return officerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const officer = getOfficer(slug);
  if (!officer) return {};
  return buildOfficerMetadata(officer);
}

export default async function OfficerPage({ params }: { params: Params }) {
  const { slug } = await params;
  const officer = getOfficer(slug);
  if (!officer) notFound();

  return (
    <>
      <JsonLd data={realEstateAgentSchema(officer)} />
      {officer.faq?.length ? <JsonLd data={faqPageSchema(officer.faq)} /> : null}
      <OfficerSite officer={officer} />
    </>
  );
}
