import { CheckBadgeIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { referral } from "@content/referral";
import styles from "./GetStarted.module.css";

/** Ported from troyReferralSite/src/Components/GetStarted.js */
export function GetStarted() {
  return (
    <div className={styles.getStartedDiv}>
      <div className={styles.getStartedBackground}>
        <h2 className={styles.getStartedH2}>Who We Are</h2>
        <p className={styles.getStartedP}>{referral.who}</p>
      </div>
      <div className={styles.incentivesEligibility} id="getStarted">
        <div className={styles.programDetails}>
          <div className={styles.programDetailsDiv}>
            <span className={styles.heroIconSpan}>
              <CurrencyDollarIcon className={styles.heroIcon} />
            </span>
            <h2 className={styles.programDetailsH2}>Incentives</h2>
          </div>
          {referral.incentives.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className={`${styles.programDetails} ${styles.topSpacing}`}>
          <div className={styles.programDetailsDiv}>
            <span className={styles.heroIconSpan}>
              <CheckBadgeIcon className={styles.heroIcon} />
            </span>
            <h2 className={styles.programDetailsH2}>Eligibility</h2>
          </div>
          <p>{referral.eligibility}</p>
        </div>
        <div className={`${styles.programDetails} ${styles.topSpacing}`}>
          <div className={styles.programDetailsDiv}>
            <span className={styles.heroIconClipBoardSpan}>
              <ClipboardDocumentListIcon className={styles.heroIconClipBoard} />
            </span>
            <h2 className={styles.programDetailsH2}>Rules</h2>
          </div>
          {referral.rules.map((r) => (
            <p key={r}>{r}</p>
          ))}
          <p>
            <span className={styles.dollarReward}>
              <a href={`tel:${referral.ceo.tel}`}>Contact CEO {referral.ceo.name} for more details: {referral.ceo.phone}</a>
            </span>
          </p>
        </div>
        <div className={styles.formDiv}>
          <a href={referral.formUrl} target="_blank" rel="noreferrer" className="button-blue">
            Make a Referral
          </a>
        </div>
      </div>
    </div>
  );
}
