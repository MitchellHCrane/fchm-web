import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompanyTenant, companyContent, formatPhone } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";
import { JsonLd } from "@seo/JsonLd";
import { webPageSchema } from "@seo/schema";
import { TwoBtnCTA } from "@ui/company/TwoBtnCTA";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/careers`;
  return buildPageMetadata({
    url,
    title: "Careers at First Class Home Mortgage | Empower Your Future",
    description:
      "Join First Class Home Mortgage and thrive as a loan officer with industry-best compensation, powerful technology, and unbeatable support.",
    ogImage: `https://${tenant.host}${companyContent.ogImages.careers}`,
  });
}

export default async function CareersPage({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();
  const url = `https://${tenant.host}/careers`;
  const formattedPhone = formatPhone(tenant.phone);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-20">
      <JsonLd
        data={webPageSchema({
          name: "Careers at First Class Home Mortgage | Empower Your Future",
          description:
            "Join First Class Home Mortgage and thrive as a loan officer with industry-best compensation, powerful technology, and unbeatable support.",
          url,
          image: `https://${tenant.host}${companyContent.ogImages.careers}`,
          withSearchAction: true,
        })}
      />
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#004e82]">Build Your Future with First Class Home Mortgage</h1>

        <p className="text-lg md:text-xl">
          At <strong>First Class Home Mortgage</strong>, we empower loan officers to thrive with industry-best compensation,
          powerful technology, and unbeatable support — all backed by the most competitive mortgage rates available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">Mentorship That Drives Success</h2>
            <p className="mt-2 text-lg text-gray-700">
              Learn from the best — work directly with our CEO, <strong>Troy Warner</strong>, an award-winning loan officer.
              Discover proven strategies to close more deals, more efficiently.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">Maximize Your Earnings</h2>
            <p className="mt-2 text-lg text-gray-700">
              Our flat-fee commission model means you keep more of what you earn — paired with industry-leading tools and a
              constantly growing network of lenders and products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">Total Support, Total Confidence</h2>
            <p className="mt-2 text-lg text-gray-700">
              From 24/7 operations support to unique loan products and a dedicated corporate team, you&apos;ll have everything
              you need to take your borrowers from application to closing — fast.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md">
            <h2 className="text-2xl font-semibold text-[#2ca4f2]">Build Your Network. Grow Your Business.</h2>
            <p className="mt-2 text-lg text-gray-700">
              Join an engaged, high-performing community of loan originators and elevate your career with powerful
              connections, continuous learning, and shared success.
            </p>
          </div>
        </div>
      </div>
      <TwoBtnCTA
        title="We are Hiring Experienced Loan Officers"
        subtitle="Join our South Jordan office and thrive with a winning team, or make a referral and get rewarded – it's that easy!"
        primaryButton={{ label: `Call ${formattedPhone}`, href: `tel:${tenant.phone}` }}
        secondaryButton={{ label: "Make a Referral", href: companyContent.referralUrl, target: "_blank" }}
      />
    </div>
  );
}
