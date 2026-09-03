import type { Officer } from "@content/schema";
import { shared } from "@config/site";
import styles from "./Footer.module.css";

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, "")}`;

/** Ported from troywarner/src/Components/Footer.js — now data-driven. */
export function Footer({ officer }: { officer: Officer }) {
  const address = officer.address ?? shared.company.address;
  const fax = officer.fax ?? shared.company.fax;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>Contact</h3>
          <p className={styles.footerP}>
            Phone: <a href={telHref(officer.phone)}>{officer.phone}</a>
          </p>
          {fax && <p className={styles.footerP}>Fax: {fax}</p>}
          <p className={styles.footerP}>
            Email: <a href={`mailto:${officer.email}`}>{officer.email}</a>
          </p>
          {officer.social && (
            <p className={styles.footerP}>
              {officer.social.facebook && (
                <a href={officer.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              )}
              {officer.social.instagram && (
                <>
                  {officer.social.facebook ? " · " : ""}
                  <a
                    href={officer.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </>
              )}
            </p>
          )}
        </div>

        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>License Info</h3>
          <p className={styles.footerP}>
            {officer.name} (NMLS #{officer.nmls})
          </p>
          <p className={styles.footerP}>{shared.company.stateDisclosure}</p>
        </div>

        <div className={styles.footerGridItem}>
          <h3 className={styles.footerH3}>Address</h3>
          <p className={styles.footerP}>{shared.company.legalName}</p>
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
