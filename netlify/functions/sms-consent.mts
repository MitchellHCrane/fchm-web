/**
 * Ported from 1stclassnextjs/src/app/api/sms-consent/route.js. That app runs
 * on Next's own server, so a Route Handler worked; fchm-web is `output:
 * "export"` (pure static, no Next server at runtime), so the same logic has
 * to live here as a Netlify Function instead. Wired up via the `/api/*`
 * rewrite in the shared block of scripts/gen-redirects.mjs, which must match
 * ahead of every per-host `/*` catch-all.
 */
import { getStore } from "@netlify/blobs";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const data = await request.json().catch(() => null);
  if (!data) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, phone, email, consent, "bot-field": botField } = data;

  // Honeypot: real users never fill this in.
  if (botField) {
    return Response.json({ success: true });
  }

  if (!name || !phone || !consent) {
    return Response.json({ error: "Name, phone, and consent are required." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const store = getStore("sms-consent");
  const key = `${submittedAt}-${crypto.randomUUID()}`;

  await store.setJSON(key, {
    name,
    phone,
    email: email || null,
    consent: true,
    submittedAt,
  });

  return Response.json({ success: true });
};
