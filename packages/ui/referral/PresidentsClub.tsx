import { referral } from "@content/referral";
import { ShareButtons } from "./ShareButtons";
import styles from "./PresidentsClub.module.css";

const base = "/referral/presidents-club";

/** President's Club trips: the main reason a referred LO will want to join. */
export function PresidentsClub() {
  const pc = referral.presidentsClub;
  return (
    <section className={styles.section} id="presidents-club" aria-labelledby="pc-heading">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{pc.eyebrow}</p>
        <h2 id="pc-heading" className={styles.heading}>
          {pc.heading}
        </h2>
        <p className={styles.body}>{pc.body}</p>
        <ul className={styles.destinations}>
          {pc.destinations.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className={styles.gallery}>
        {pc.photos.map((p, i) => (
          /* eslint-disable-next-line @next/next/no-img-element -- static export, images pre-optimized */
          <img
            key={p.slug}
            className={styles.photo}
            src={`${base}/${p.slug}-800.webp`}
            srcSet={`${base}/${p.slug}-800.webp 800w, ${base}/${p.slug}-1600.webp 1600w`}
            sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            width={p.w}
            height={p.h}
            alt={p.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      <div className={styles.cta}>
        <a href={referral.hero.join.href} className={styles.ctaJoin}>
          {referral.hero.join.cta}
        </a>
        <a href={referral.hero.refer.href} className={styles.ctaRefer}>
          {referral.hero.refer.cta}
        </a>
      </div>

      <ShareButtons />
    </section>
  );
}
