import { ApplicationIcon, ReviewIcon, PayoutIcon } from "./StepIcons";
import { referral } from "@content/referral";
import styles from "./HowItWorks.module.css";

const ICONS = {
  application: ApplicationIcon,
  review: ReviewIcon,
  payout: PayoutIcon,
} as const;

/** Refer path (#refer). Ported from troyReferralSite/src/Components/HowItWorks.js */
export function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="refer" aria-labelledby="howItWorksHeading">
      <p className={styles.eyebrow}>Refer &amp; earn</p>
      <h2 id="howItWorksHeading" className={styles.howItWorksH2}>
        Know a loan officer who should join us?
      </h2>
      <p className={styles.intro}>
        Refer them through our Partner/Recruiting Referral Program and get paid when they&apos;re hired.
      </p>
      <dl className={styles.stats}>
        {referral.referStats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <dt className={styles.statLabel}>{s.label}</dt>
            <dd className={styles.statValue}>{s.value}</dd>
          </div>
        ))}
      </dl>
      <h3 className={styles.stepsHeading}>How it works</h3>
      <ol className={styles.howItWorksSteps}>
        {referral.howItWorks.map(({ step, title, body }) => {
          const Icon = ICONS[step as keyof typeof ICONS];
          return (
            <li className={styles.howItWorksStep} key={title}>
              <span className={styles.howItWorksIcon}>
                <Icon />
              </span>
              <h3 className={styles.howItWorksStepTitle}>{title}</h3>
              <p>{body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
