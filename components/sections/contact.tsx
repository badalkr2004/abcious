"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { budgetRanges } from "@/lib/validations/contact";
import { track } from "@/lib/analytics";

type FieldErrors = Partial<Record<"name" | "email" | "budget" | "brief", string[]>>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setMessage("");

    // Capture before await — React nulls event.currentTarget after the handler yields
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      budget: String(form.get("budget") ?? ""),
      brief: String(form.get("brief") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
        setMessage(data.message ?? "Please check the form and try again.");
        return;
      }

      track("form_submit", { form: "contact" });
      formEl.reset();
      setStatus("success");
      setMessage("Thanks — we’ll reply within two business days.");
    } catch {
      setStatus("error");
      setMessage("Network error. Email us directly instead.");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-36">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-signal">Contact</span>
          <h2 className="display mt-5 text-[clamp(2.6rem,6vw,4.5rem)]">
            Start a
            <br />
            <span className="text-signal">project.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
            Tell us about the product, the constraint, and the outcome you need. Prefer email?
            Write us at{" "}
            <a className="link-u text-ink" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-7">
          {status === "success" ? (
            <div
              className="rounded-[var(--radius-lg)] border border-signal/30 bg-canvas-2 p-8"
              role="status"
            >
              <p className="display text-3xl text-signal">Inquiry received.</p>
              <p className="mt-3 text-ink-soft">{message}</p>
              <button
                type="button"
                className="link-u mt-6 text-sm font-medium"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors.name?.[0]}>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="field"
                    placeholder="Alex Rivera"
                  />
                </Field>
                <Field label="Email" name="email" error={errors.email?.[0]}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>

              <Field label="Budget range" name="budget" error={errors.budget?.[0]}>
                <select id="budget" name="budget" required className="field" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Project brief" name="brief" error={errors.brief?.[0]}>
                <textarea
                  id="brief"
                  name="brief"
                  required
                  rows={5}
                  className="field resize-y"
                  placeholder="What are you building, for whom, and by when?"
                />
              </Field>

              {status === "error" && message ? (
                <p className="text-sm text-ember" role="alert">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-ink disabled:opacity-60"
                onClick={() => track("cta_click", { location: "contact_form" })}
              >
                {status === "loading" ? "Sending…" : "Send inquiry"}
                <svg className="arrow h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block" htmlFor={name}>
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-sm text-ember" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
