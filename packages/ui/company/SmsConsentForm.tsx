"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

/** Ported from 1stclassnextjs/src/app/components/SmsConsentForm.js (added 2026-09-17). */
export function SmsConsentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue | boolean> = Object.fromEntries(formData.entries());
    payload.consent = formData.get("consent") === "agreed";

    try {
      const response = await fetch("/api/sms-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-green-700 font-medium">
        Thanks! You&apos;re opted in to receive text updates from First Class Home Mortgage.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input id="name" name="name" type="text" required className="w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Mobile Phone Number
        </label>
        <input id="phone" name="phone" type="tel" required className="w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email (optional)
        </label>
        <input id="email" name="email" type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>

      <div className="flex items-start gap-2">
        <input id="consent" name="consent" type="checkbox" value="agreed" required className="mt-1" />
        <label htmlFor="consent" className="text-sm text-gray-700">
          I agree to receive informational and marketing SMS text messages from First Class Home Mortgage, including
          mortgage updates, market resources, events, and follow-up communications. Message frequency varies. Message
          and data rates may apply. Reply STOP to cancel, HELP for help. I agree to the{" "}
          <Link href="/terms" className="underline">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-[#f5bb54] hover:bg-[#f5bb54]/85 px-4 py-2 font-semibold text-white shadow-sm disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Sign Up for Text Updates"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong submitting the form. Please try again, or call/text us directly.
        </p>
      )}
    </form>
  );
}
