import styles from "./GetStartedItem.module.css";
import type { ResourceCardId } from "@content/schema";

const ICON_SRC: Record<ResourceCardId, string> = {
  application: "/icons/application.svg",
  creditSmart: "/icons/loan-education.svg",
  upload: "/icons/upload-documents.svg",
  dpa: "/icons/money-icon.svg",
  review: "/icons/review.svg",
  schedule: "/icons/strategyBoard.svg",
  swag: "/icons/peaceHand.svg",
};

export interface GetStartedItemProps {
  title: string;
  description: string;
  url: string;
  icon: ResourceCardId;
  btnText: string;
}

/** Ported from troywarner/src/Components/GetStartedItem.js */
export function GetStartedItem({
  title,
  description,
  url,
  icon,
  btnText,
}: GetStartedItemProps) {
  return (
    <div className={styles.gridItem}>
      <div>
        <div className={styles.getStartedIcon}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ICON_SRC[icon]} alt="" aria-hidden />
        </div>
        <h3 className={styles.getStartedCard}>{title}</h3>
        <p className={styles.getStartedCardP}>{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.cardLink}
      >
        {btnText}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/arrow-right.svg" alt="" aria-hidden />
      </a>
    </div>
  );
}
