import { ApplicationIcon, ReviewIcon, PayoutIcon } from "./StepIcons";
import { referral } from "@content/referral";
import styles from "./HowItWorks.module.css";

const ICONS = {
  application: ApplicationIcon,
  review: ReviewIcon,
  payout: PayoutIcon,
} as const;

/** Ported from troyReferralSite/src/Components/HowItWorks.js */
export function HowItWorks() {
  return (
    <section className={styles.howItWorks} aria-labelledby="howItWorksHeading">
      <h2 id="howItWorksHeading" className={styles.howItWorksH2}>
        How the Referral Program Works
      </h2>
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
