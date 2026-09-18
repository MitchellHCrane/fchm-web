import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompanyTenant } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";
import { SmsConsentForm } from "@ui/company/SmsConsentForm";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/sms-consent`;
  return buildPageMetadata({
    url,
    title: "Text Updates Sign Up | First Class Home Mortgage",
    description:
      "Sign up to receive mortgage updates, market resources, and event info via text from First Class Home Mortgage.",
    ogImage: `https://${tenant.host}/company/images/fcLogo.png`,
  });
}

/** Migrated from 1stclassnextjs/src/app/sms-consent/page.js (added 2026-09-17). */
export default async function SmsConsentPage({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-md mx-auto">
        <Link href="/" className="underline">
          Back
        </Link>
        <h1 className="text-3xl font-bold mb-4 mt-2 text-center">Sign Up for Text Updates</h1>
        <p className="mb-6 text-center">
          Enter your information below to opt in to text messages from First Class Home Mortgage. You can opt out at
          any time by replying STOP.
        </p>
        <SmsConsentForm />
      </div>
    </div>
  );
}
