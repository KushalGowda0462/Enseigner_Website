"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Could not send your message.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="mx-auto mt-10 max-w-xl border border-[var(--site-divider)] bg-[var(--site-card)] p-8 text-center [box-shadow:0_0_18px_-4px_var(--site-divider-glow)]">
        <p className="text-xl font-black uppercase text-[var(--site-gold)]">Message sent</p>
        <p className="mt-3 text-[15px] leading-7 text-[var(--site-muted)]">
          Thank you — your enquiry has reached our team. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[var(--site-divider)] bg-[var(--site-card)] px-4 py-3 text-[15px] text-[var(--site-text)] outline-none transition placeholder:text-[var(--site-muted)] focus:border-[var(--site-gold)]";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl space-y-4 text-left">
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" maxLength={120} className={inputClass} />
        <input
          name="email"
          type="email"
          required
          placeholder="Work Email"
          maxLength={160}
          className={inputClass}
        />
      </div>
      <input name="company" placeholder="Company" maxLength={160} className={inputClass} />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="How can we help?"
        maxLength={5000}
        className={`${inputClass} resize-y`}
      />

      {status === "error" && (
        <p className="text-[14px] text-[#d4604a]">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 bg-[var(--site-gold)] px-10 py-4 text-base font-black uppercase tracking-[0.1em] text-[var(--site-bg)] transition hover:bg-[var(--site-gold-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowRight size={18} />}
      </button>
    </form>
  );
}
