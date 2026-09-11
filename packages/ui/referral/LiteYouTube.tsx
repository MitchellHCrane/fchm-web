"use client";

import { useState } from "react";
import styles from "./LiteYouTube.module.css";

/**
 * Click-to-load YouTube facade, ported from troyReferralSite/src/Components/LiteYouTube.js.
 * Shows only the poster image until clicked, so the YouTube player never loads on first paint.
 */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [activated, setActivated] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <div className={styles.videoContainer}>
      {activated ? (
        <iframe
          title={title}
          src={src}
          width="560"
          height="315"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.liteYouTube}
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          style={{ backgroundImage: `url(${poster})` }}
        >
          <span className={styles.liteYouTubePlay} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
