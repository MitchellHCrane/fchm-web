import type { Metadata } from "next";
import { Header } from "@ui/sections/Header";
import { Profile } from "@ui/referral/Profile";
import { HowItWorks } from "@ui/referral/HowItWorks";
import { GetStarted } from "@ui/referral/GetStarted";
import { Faq } from "@ui/referral/Faq";
import { Footer } from "@ui/referral/Footer";
import { referral } from "@content/referral";
import { buildPageMetadata } from "@seo/pageMetadata";
import { JsonLd } from "@seo/JsonLd";
import { referralLocalBusinessSchema, faqPageSchema, jobPostingSchema } from "@seo/schema";

export const dynamic = "error";

const url = `https://${referral.host}/`;

export const metadata: Metadata = buildPageMetadata({
  url,
  title: referral.title,
  description: referral.description,
  ogImage: `https://${referral.host}${referral.ogImage}`,
});

/**
 * Migrated from troyReferralSite. Its canonical/OG/JSON-LD used to say
 * "troy.1stclasshomemortgage.com" — updated here to "referral." to match the
 * live subdomain (packages/content/subdomains.txt), since "troy." is reserved
 * for the officer/portfolio site once its subdomain is decided.
 */
export default function ReferralPage() {
  return (
    <div className="App">
      <JsonLd data={referralLocalBusinessSchema()} />
      <JsonLd data={faqPageSchema(referral.faq)} />
      <JsonLd
        data={jobPostingSchema({
          ...referral.jobPosting,
          areasServed: referral.areasServed,
        })}
      />
      <Header />
      <Profile />
      <HowItWorks />
      <GetStarted />
      <Faq />
      <Footer />
    </div>
  );
}
