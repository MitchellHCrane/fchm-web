import type { Officer } from "@content/schema";
import { ParticleField } from "@ui/primitives/ParticleField";
import styles from "./Profile.module.css";

/** Ported from troywarner/src/Components/Profile.js (+ the alanCooper "plain" variant) */
export function Profile({ officer }: { officer: Officer }) {
  const intro =
    officer.introOverride ??
    `Hello! I'm ${officer.firstName}, I look forward to helping you along your home buying experience. I've provided a few useful links to get you started.`;

  const showParticles = officer.profileBackground !== "plain";

  return (
    <div className={styles.profileDiv}>
      {showParticles && (
        <div className={styles.particleBg}>
          <ParticleField />
        </div>
      )}
      <div className={styles.profileGrid}>
        <div className={styles.columnPic}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.profilePic}
            src={officer.headshot.src}
            alt={officer.headshot.alt || `${officer.name} ${officer.credentialTitle}`}
            width={officer.headshot.width}
            height={officer.headshot.height}
          />
        </div>
        <div>
          <h1 className={styles.profileName}>{officer.name}</h1>
          <h2 className={styles.nmls}>
            {officer.credentialTitle} (NMLS #{officer.nmls})
          </h2>
          <p className={styles.profileP}>{intro}</p>
          <div className={styles.buttonBlueDiv}>
            <a href="#getStarted" className="button-blue">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
