import { ChatBubbleLeftRightIcon, CheckCircleIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { referral } from "@content/referral";
import styles from "./LoanOfficers.module.css";

const subject = encodeURIComponent("Confidential conversation about joining First Class");

/** Direct pitch for a loan officer who lands here themselves (Recruiting 2027). */
export function LoanOfficers() {
  const lo = referral.loanOfficers;
  const { ceo } = referral;
  return (
    <section className={styles.section} id="loan-officers" aria-labelledby="lo-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{lo.eyebrow}</p>
          <h2 id="lo-heading" className={styles.heading}>
            {lo.heading}
          </h2>
          <p className={styles.question}>{lo.question}</p>
          {lo.body.map((p) => (
            <p key={p} className={styles.body}>
              {p}
            </p>
          ))}
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>{lo.lookingForHeading}</h3>
          <ul className={styles.list}>
            {lo.lookingFor.map((item) => (
              <li key={item}>
                <CheckCircleIcon className={styles.check} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.cta}>{lo.cta}</p>
          <div className={styles.buttons}>
            <a className={styles.primary} href={`tel:${ceo.tel}`}>
              <PhoneIcon className={styles.icon} aria-hidden="true" />
              Call {ceo.phone}
            </a>
            <a className={styles.secondary} href={`sms:${ceo.tel}`}>
              <ChatBubbleLeftRightIcon className={styles.icon} aria-hidden="true" />
              Text Troy
            </a>
            <a className={styles.secondary} href={`mailto:${ceo.email}?subject=${subject}`}>
              <EnvelopeIcon className={styles.icon} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
