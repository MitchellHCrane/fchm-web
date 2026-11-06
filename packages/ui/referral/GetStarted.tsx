import { CheckBadgeIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { referral } from "@content/referral";
import styles from "./GetStarted.module.css";

/** Ported from troyReferralSite/src/Components/GetStarted.js */
export function GetStarted() {
  const details = [
    { title: "Incentives", Icon: CurrencyDollarIcon, lines: referral.incentives },
    { title: "Eligibility", Icon: CheckBadgeIcon, lines: [referral.eligibility] },
    { title: "Rules", Icon: ClipboardDocumentListIcon, lines: referral.rules },
  ];

  return (
    <div className={styles.getStartedDiv}>
      <div className={styles.getStartedBackground}>
        <h2 className={styles.getStartedH2}>Who We Are</h2>
        <p className={styles.getStartedP}>{referral.who}</p>
        <dl className={styles.whoStats}>
          {referral.whoStats.map((s) => (
            <div key={s.label} className={styles.whoStat}>
              <dt className={styles.whoStatLabel}>{s.label}</dt>
              <dd className={styles.whoStatValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.incentivesEligibility} id="getStarted">
        <h2 className={styles.detailsHeading}>Program Details</h2>
        <div className={styles.detailsGrid}>
          {details.map(({ title, Icon, lines }) => (
            <div key={title} className={styles.detailCard}>
              <div className={styles.programDetailsDiv}>
                <span className={styles.heroIconSpan}>
                  <Icon className={styles.heroIcon} aria-hidden="true" />
                </span>
                <h3 className={styles.programDetailsH3}>{title}</h3>
              </div>
              <ul className={styles.detailList}>
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.contact}>
          Questions? <a href={`tel:${referral.ceo.tel}`}>Call CEO {referral.ceo.name} at {referral.ceo.phone}</a>
        </p>
        <div className={styles.formDiv}>
          <a href={referral.formUrl} target="_blank" rel="noreferrer" className="button-blue">
            Make a Referral
          </a>
        </div>
      </div>
    </div>
  );
}
