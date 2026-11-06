import { referral } from "@content/referral";
import styles from "./StickyCta.module.css";

/** Phone-only bottom bar so the referral form is always one tap away. */
export function StickyCta() {
  return (
    <>
      {/* Reserves room so the fixed bar never covers the end of the footer. */}
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.bar}>
        <a href={referral.formUrl} target="_blank" rel="noreferrer" className={styles.primary}>
          Refer a Loan Officer · Earn $695
        </a>
      </div>
    </>
  );
}
