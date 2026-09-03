import Script from "next/script";
import type { Officer, OfficerSectionId } from "@content/schema";
import { Header } from "@ui/sections/Header";
import { Profile } from "@ui/sections/Profile";
import { GetStarted } from "@ui/sections/GetStarted";
import { LoanCalculator } from "@ui/sections/LoanCalculator";
import { Footer } from "@ui/sections/Footer";
import { WhyChoose } from "@ui/sections/WhyChoose";
import { IntroVideo, Testimonials, Faq } from "@ui/sections/Extras";

const OPTIONAL: Record<
  OfficerSectionId,
  (p: { officer: Officer }) => React.ReactNode
> = {
  whyChoose: WhyChoose,
  socialVerse: WhyChoose, // same widget, different section label
  introVideo: IntroVideo,
  testimonials: Testimonials,
  faq: Faq,
  howItWorks: () => null, // TODO: port from troyReferralSite in phase 4
};

export function OfficerSite({ officer }: { officer: Officer }) {
  const sections = officer.sections ?? [];
  const needsGidget = sections.some(
    (s) => s === "whyChoose" || s === "socialVerse",
  );

  return (
    <div className="App">
      {needsGidget && (
        <Script
          src="https://storage.googleapis.com/gidget-static/v.latest/gidget/gidget.esm.js"
          type="module"
          strategy="afterInteractive"
        />
      )}

      <Header />
      <Profile officer={officer} />

      {sections.map((id, i) => {
        const Cmp = OPTIONAL[id];
        return <Cmp key={`${id}-${i}`} officer={officer} />;
      })}

      <GetStarted officer={officer} />
      <LoanCalculator />
      <Footer officer={officer} />
    </div>
  );
}
