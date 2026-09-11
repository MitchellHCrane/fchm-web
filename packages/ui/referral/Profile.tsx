import { LiteYouTube } from "./LiteYouTube";
import { referral } from "@content/referral";
import styles from "./Profile.module.css";

/** Ported from troyReferralSite/src/Components/Profile.js */
export function Profile() {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileGrid}>
        <div className={styles.columnPic} />
        <div className={styles.centerDiv}>
          <h1 className={styles.profileName}>{referral.hero.heading}</h1>
          <p className={styles.profileTagline}>{referral.hero.tagline}</p>
          <p className={styles.profileP}>{referral.hero.body}</p>
          <LiteYouTube id={referral.hero.video.id} title={referral.hero.video.title} />
          <div className={styles.buttonBlueDiv}>
            <a href="#getStarted" className="button-blue">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
