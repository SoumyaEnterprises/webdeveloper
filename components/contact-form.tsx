"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const projectTypes = [
  "Business Website",
  "Ecommerce Store",
  "Exporter Website",
  "Website Redesign",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState(projectTypes[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.02] p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan">
          <Check className="h-6 w-6 text-bg" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold">Thanks — we&apos;ve got it.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          We&apos;ll review your details and get back to you shortly to set
          up your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required placeholder="Your name" className="form-input" />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@company.com" className="form-input" />
        </Field>
        <Field label="Company name" htmlFor="company">
          <input id="company" name="company" type="text" placeholder="Your business" className="form-input" />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="Optional" className="form-input" />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-ink">What are you looking for?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                projectType === type
                  ? "border-white/20 bg-white/[0.08] text-ink"
                  : "border-white/[0.08] text-ink-muted hover:border-white/20 hover:text-ink"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </fieldset>

      <Field label="Tell us about your project" htmlFor="message" className="mt-6">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What does your business do, and what would you like your website to achieve?"
          className="form-input resize-none"
        />
      </Field>

      <button
        type="submit"
        className="btn-glow group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-transform duration-300 hover:scale-[1.01] sm:w-auto"
      >
        Send Message
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
