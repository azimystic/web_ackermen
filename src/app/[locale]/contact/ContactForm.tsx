"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import type { Dict } from "@/lib/i18n/dictionaries/en";

type FormLabels = Dict["contact"]["form"];

/**
 * Mailto-composing contact form behind a single submit seam - swap
 * `submitContact` for a server action later without touching the UI.
 */
function submitContact(email: string, subject: string, body: string) {
  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export default function ContactForm({
  labels,
  toEmail,
}: {
  labels: FormLabels;
  toEmail: string;
}) {
  const [busy, setBusy] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const type = String(data.get("projectType") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const subject = `${type} · ${name}`;
    const body = [
      message,
      "",
      "--",
      `${labels.name}: ${name}`,
      `${labels.email}: ${email}`,
      company && `${labels.company}: ${company}`,
      `${labels.projectType}: ${type}`,
      budget && `${labels.budget}: ${budget}`,
    ]
      .filter(Boolean)
      .join("\n");

    setBusy(true);
    submitContact(toEmail, subject, body);
    setTimeout(() => setBusy(false), 1200);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          {labels.name}
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          {labels.email}
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        {labels.company}
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <div className="form__row">
        <label>
          {labels.projectType}
          <select name="projectType" defaultValue={labels.projectOptions[0]}>
            {labels.projectOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label>
          {labels.budget}
          <select name="budget" defaultValue={labels.budgetOptions[0]}>
            {labels.budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        {labels.message}
        <textarea name="message" required placeholder={labels.messagePlaceholder} />
      </label>
      <button className="btn btn--accent" type="submit" disabled={busy}>
        <PaperPlaneTilt size={16} weight="bold" className="icon-flip" />
        {labels.submit}
      </button>
      <p className="form__note">{labels.note}</p>
    </form>
  );
}
