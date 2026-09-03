import type { Officer } from "@content/schema";

/** Lightweight optional sections. Port richer markup/CSS from the source repos
 *  (calebAdams = testimonials, ericPoulson = introVideo/socialVerse,
 *  troyReferralSite = faq/howItWorks) in a later pass. */

export function IntroVideo({ officer }: { officer: Officer }) {
  if (!officer.introVideo) return null;
  return (
    <section style={{ margin: "64px 8%", textAlign: "center" }}>
      <video
        controls
        preload="none"
        poster={officer.introVideo.poster}
        style={{ width: "100%", maxWidth: 720, borderRadius: "var(--radius-md)" }}
      >
        <source src={officer.introVideo.src} />
      </video>
    </section>
  );
}

export function Testimonials({ officer }: { officer: Officer }) {
  if (!officer.testimonials?.length) return null;
  return (
    <section style={{ margin: "64px 8%" }}>
      <h2 style={{ textAlign: "center", fontSize: 36 }}>What clients say</h2>
      <div
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          marginTop: 32,
        }}
      >
        {officer.testimonials.map((t, i) => (
          <blockquote
            key={i}
            style={{
              background: "#fff",
              borderRadius: "var(--radius-md)",
              padding: 24,
              boxShadow: "0 8px 16px rgba(145,149,157,0.3)",
            }}
          >
            <p style={{ marginTop: 0 }}>“{t.quote}”</p>
            <footer style={{ marginTop: 16, fontWeight: 900 }}>
              — {t.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function Faq({ officer }: { officer: Officer }) {
  if (!officer.faq?.length) return null;
  return (
    <section style={{ margin: "64px 8%" }}>
      <h2 style={{ textAlign: "center", fontSize: 36 }}>
        Frequently asked questions
      </h2>
      <div style={{ marginTop: 32 }}>
        {officer.faq.map((item, i) => (
          <details key={i} style={{ marginBottom: 16 }}>
            <summary style={{ fontWeight: 900, cursor: "pointer" }}>
              {item.q}
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
