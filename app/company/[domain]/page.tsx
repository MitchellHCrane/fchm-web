import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompanyTenant, companyContent } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";
import { JsonLd } from "@seo/JsonLd";
import { webPageSchema } from "@seo/schema";
import { HeroOne } from "@ui/company/HeroOne";
import { GetStarted } from "@ui/company/GetStarted";
import { Reviews } from "@ui/company/Reviews";
import { MainCTA } from "@ui/company/MainCTA";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/`;
  return buildPageMetadata({
    url,
    title: "First Class Home Mortgage | Hassle-Free Home Buying",
    description:
      "We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you.",
    ogImage: `https://${tenant.host}${companyContent.ogImages.home}`,
  });
}

export default async function CompanyHome({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();
  const url = `https://${tenant.host}/`;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "First Class Home Mortgage | Hassle-Free Home Buying",
          description:
            "We take the hassle out of your home buying experience. Contact us today to find the right mortgage solution for you.",
          url,
          image: `https://${tenant.host}${companyContent.ogImages.home}`,
          withSearchAction: true,
        })}
      />
      <HeroOne phone={tenant.phone} />
      <GetStarted />
      <Reviews />
      <MainCTA phone={tenant.phone} />
    </>
  );
}
