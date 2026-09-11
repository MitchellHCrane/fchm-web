import { shared } from "@config/site";
import { referral } from "@content/referral";
import styles from "./Footer.module.css";

/** Ported from troyReferralSite/src/Components/Footer.js */
export function Footer() {
  const address = shared.company.address;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>Contact</h3>
          <p className={styles.footerP}>
            Phone: <a href={`tel:${referral.ceo.tel}`}>{referral.ceo.phone}</a>
          </p>
          <p className={styles.footerP}>
            Email: <a href={`mailto:${referral.ceo.email}`}>{referral.ceo.email}</a>
          </p>
        </div>
        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>License Info</h3>
          <p className={styles.footerP}>
            {referral.ceo.name} (NMLS #{referral.ceo.nmls})
          </p>
          <p className={styles.footerP}>{shared.company.stateDisclosure}</p>
        </div>
        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>Address</h3>
          <p className={styles.footerP}>
            <a href="https://1stclasshomemortgage.com" target="_blank" rel="noreferrer">
              First Class Home Mortgage
            </a>
          </p>
          <p className={styles.footerP}>
            <a href={address.mapsUrl} target="_blank" rel="noreferrer">
              {address.line1}
              <br />
              {address.line2}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
