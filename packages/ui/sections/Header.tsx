import { shared } from "@config/site";
import styles from "./Header.module.css";

/** Ported from troywarner/src/Components/Header.js */
export function Header() {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shared.brand.logo.src}
        alt={shared.brand.logo.alt}
        className={styles.topLogo}
      />
    </header>
  );
}
