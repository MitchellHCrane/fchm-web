import { LiteYouTube } from "./LiteYouTube";
import { referral } from "@content/referral";
import styles from "./Profile.module.css";

/** Ported from troyReferralSite/src/Components/Profile.js */
export function Profile() {
  const { hero } = referral;
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileGrid}>
        <div className={styles.columnPic} />
        <div className={styles.centerDiv}>
          <h1 className={styles.profileName}>{hero.heading}</h1>
          <p className={styles.profileTagline}>{hero.tagline}</p>

          <dl className={styles.stats}>
            {hero.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statValue}>{s.value}</dd>
              </div>
            ))}
          </dl>

          <LiteYouTube id={hero.video.id} title={hero.video.title} poster={hero.video.poster} />
          <div className={styles.buttonBlueDiv}>
            <a href={referral.formUrl} target="_blank" rel="noreferrer" className="button-blue">
              Refer a Loan Officer
            </a>
          </div>
          <p className={styles.secondaryLink}>
            <a href="#getStarted">See program details</a>
            <span className={styles.linkSep} aria-hidden="true">·</span>
            <a href="#loan-officers">Are you a loan officer? Let&apos;s talk</a>
          </p>
        </div>
      </div>
    </div>
  );
}
