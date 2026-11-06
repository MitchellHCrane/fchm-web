import { referral } from "@content/referral";
import styles from "./Profile.module.css";

/**
 * Two-path hero. Troy sends this one link to loan officers he wants to hire
 * AND to people who might know one, so the first screen says plainly which
 * is which and jumps each visitor to their section (#join / #refer).
 */
export function Profile() {
  const { hero } = referral;
  const paths = [
    { ...hero.join, variant: styles.join },
    { ...hero.refer, variant: styles.refer },
  ];

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.intro}>
        <h1 id="hero-heading" className={styles.heading}>
          {hero.heading}
        </h1>
        <p className={styles.subhead}>{hero.subhead}</p>
      </div>

      <div className={styles.paths}>
        {paths.map((p) => (
          <div key={p.href} className={`${styles.card} ${p.variant}`}>
            <p className={styles.eyebrow}>{p.eyebrow}</p>
            <h2 className={styles.cardTitle}>{p.title}</h2>
            <p className={styles.cardBody}>{p.body}</p>
            <a href={p.href} className={styles.cta}>
              {p.cta}
              <span aria-hidden="true"> ↓</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
