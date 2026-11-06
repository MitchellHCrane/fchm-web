"use client";

import { useState } from "react";
import { ChatBubbleLeftEllipsisIcon, CheckIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { referral } from "@content/referral";
import styles from "./ShareButtons.module.css";

const pageUrl = `https://${referral.host}/`;
const text = `${referral.share.message} ${pageUrl}`;
// `sms:?&body=` is the form both iOS and Android Messages accept.
const smsHref = `sms:?&body=${encodeURIComponent(text)}`;
const mailHref = `mailto:?subject=${encodeURIComponent("You should see this")}&body=${encodeURIComponent(text)}`;

/** Lets a visitor pass the page straight to a loan officer they know. */
export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", pageUrl);
    }
  }

  return (
    <div className={styles.share}>
      <p className={styles.heading}>{referral.share.heading}</p>
      <div className={styles.buttons}>
        <a className={styles.button} href={smsHref}>
          <ChatBubbleLeftEllipsisIcon className={styles.icon} aria-hidden="true" />
          Text a Friend
        </a>
        <a className={styles.button} href={mailHref}>
          <EnvelopeIcon className={styles.icon} aria-hidden="true" />
          Email
        </a>
        <button type="button" className={styles.button} onClick={copy}>
          {copied ? (
            <CheckIcon className={styles.icon} aria-hidden="true" />
          ) : (
            <LinkIcon className={styles.icon} aria-hidden="true" />
          )}
          <span aria-live="polite">{copied ? "Link Copied" : "Copy Link"}</span>
        </button>
      </div>
    </div>
  );
}
