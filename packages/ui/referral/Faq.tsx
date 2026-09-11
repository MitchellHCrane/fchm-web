import { referral } from "@content/referral";
import styles from "./Faq.module.css";

/** Ported from troyReferralSite/src/Components/Faq.js — the visible copy and
 *  the FAQPage JSON-LD (@seo/schema faqPageSchema) both read from
 *  @content/referral, so they can no longer drift apart. */
export function Faq() {
  return (
    <section className={styles.faq} aria-labelledby="faqHeading">
      <h2 id="faqHeading" className={styles.faqH2}>
        Frequently Asked Questions
      </h2>
      <div className={styles.faqList}>
        {referral.faq.map((item) => (
          <details className={styles.faqItem} key={item.q}>
            <summary className={styles.faqQuestion}>{item.q}</summary>
            <p className={styles.faqAnswer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
