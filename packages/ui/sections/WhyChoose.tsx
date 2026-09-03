import type { Officer } from "@content/schema";

/**
 * Ported from troywarner/src/Components/WhyUseUs.js — the SocialVerse / gidget
 * "Why Choose X?" video-testimonial block. Requires officer.socialVerse.
 */
export function WhyChoose({ officer }: { officer: Officer }) {
  if (!officer.socialVerse) return null;
  return (
    <section
      style={{
        display: "block",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1rem",
          color: "var(--color-primary-dark)",
          fontFamily: "var(--font-heading)",
        }}
      >
        Why Choose {officer.firstName}?
      </p>
      <p>
        Watch the video to hear what others have to say about their experiences
        working with {officer.firstName} and First Class Home Mortgage.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        {/* SocialVerse (gidget) web component. Script is loaded in OfficerSite. */}
        {/* @ts-expect-error -- custom element */}
        <gidget-component
          widget-type="block"
          venue-id={officer.socialVerse.venueId}
          heading=""
          socialverse-id={officer.socialVerse.socialverseId}
          show-block-hero-name="false"
        />
      </div>
    </section>
  );
}
