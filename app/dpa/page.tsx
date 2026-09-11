import type { Metadata } from "next";
import { Header } from "@ui/sections/Header";
import { Footer } from "@ui/dpa/Footer";
import { Accordion } from "@ui/dpa/Accordion";
import { dpa } from "@content/dpa";
import { buildPageMetadata } from "@seo/pageMetadata";

export const dynamic = "error";

const url = `https://${dpa.host}/`;

export const metadata: Metadata = buildPageMetadata({
  url,
  title: dpa.title,
  description: dpa.description,
  ogImage: "https://1stclasshomemortgage.com/company/images/fcLogo.png",
});

/** Migrated from dpa-1stclass. */
export default function DpaPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-black mt-8 mb-10">Down Payment Assistance Programs</h1>
        <div className="text-center">
          <a
            href={dpa.guidePdf}
            download="DownPaymentAssistancePrograms.pdf"
            className="bg-[#2ca4f2] hover:bg-[#004e82] text-white font-bold py-2 px-4 rounded"
          >
            Download The Ultimate Guide
          </a>
        </div>
        <Accordion programs={dpa.programs} />
      </div>
      <Footer />
    </>
  );
}
