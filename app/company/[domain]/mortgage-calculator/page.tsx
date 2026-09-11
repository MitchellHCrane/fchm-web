import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompanyTenant, companyContent } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";
import { JsonLd } from "@seo/JsonLd";
import { webPageSchema } from "@seo/schema";
import { MortgageCalc } from "@ui/company/MortgageCalc";
import { MainCTA } from "@ui/company/MainCTA";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/mortgage-calculator`;
  return buildPageMetadata({
    url,
    title: "Mortgage Calculator | Estimate Your Monthly Payments",
    description:
      "Use our mortgage calculator to estimate your monthly payments and find the best mortgage solution for your needs.",
    ogImage: `https://${tenant.host}${companyContent.ogImages.mortgageCalculator}`,
  });
}

export default async function MortgageCalculatorPage({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();
  const url = `https://${tenant.host}/mortgage-calculator`;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Mortgage Calculator | Estimate Your Monthly Payments",
          description:
            "Use our mortgage calculator to estimate your monthly payments and find the best mortgage solution for your needs.",
          url,
          image: `https://${tenant.host}${companyContent.ogImages.mortgageCalculator}`,
          withSearchAction: true,
        })}
      />
      <div className="text-center px-8">
        <h2 className="text-4xl text-[#004e82] mt-24">Loan Calculator</h2>
        <p className="mt-8">Get an estimate of your monthly mortgage payments.</p>
        <p className="max-w-2xl mx-auto text-xs text-gray-400">
          * For a more accurate estimate, get in touch with us and we will help you find the best solution for your needs.
        </p>
      </div>
      <MortgageCalc />
      <MainCTA phone={tenant.phone} />
    </>
  );
}
