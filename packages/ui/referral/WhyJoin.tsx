import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { referral } from "@content/referral";
import { LiteYouTube } from "./LiteYouTube";
import styles from "./WhyJoin.module.css";

const ICONS = {
  options: AdjustmentsHorizontalIcon,
  support: UserGroupIcon,
  tech: ComputerDesktopIcon,
  growth: AcademicCapIcon,
  comp: CurrencyDollarIcon,
  trip: SunIcon,
} as const;

/** Join path (#join): recruiting video + what a loan officer gets by joining. */
export function WhyJoin() {
  const w = referral.whyJoin;
  return (
    <section className={styles.section} id="join" aria-labelledby="why-join-heading">
      <p className={styles.eyebrow}>{w.eyebrow}</p>
      <h2 id="why-join-heading" className={styles.heading}>
        {w.heading}
      </h2>
      <div className={styles.video}>
        <LiteYouTube
          id={referral.hero.video.id}
          title={referral.hero.video.title}
          poster={referral.hero.video.poster}
        />
      </div>
      <ul className={styles.grid}>
        {w.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon className={styles.icon} aria-hidden="true" />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
