"use client";

import { useState } from "react";
import {
  budgetRanges,
  projectTypes,
  timelineOptions,
} from "@/data/data";
import { trackEvent } from "@/utils/analytics";
import { Button, buttonvariants } from "./ui/Button";
import { cn } from "@/utils/cn";
import { IoMail, IoCheckmarkCircle } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

const inputClass =
  "w-full px-4 py-3 rounded-xl glass bg-black_02/50 text-white_01 placeholder:text-white_02/40 border border-white/[0.06] focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors text-sm";

const labelClass = "block font-mono text-xs text-white_02/70 mb-1.5 uppercase tracking-wide";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    projectType: projectTypes[0],
    budget: budgetRanges[4],
    timeline: timelineOptions[2],
    message: "",
  });

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      trackEvent("contact_form_submit", {
        projectType: form.projectType,
        budget: form.budget,
      });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-8 sm:p-10 text-center space-y-6">
        <IoCheckmarkCircle className="text-5xl text-accent-cyan mx-auto" />
        <div className="space-y-2">
          <h3 className="font-display text-2xl text-white_01">Message sent!</h3>
          <p className="text-white_02/80 max-w-md mx-auto">
            Thanks for reaching out. I&apos;ll review your project details and
            reply within 24 hours.
          </p>
        </div>
        {calendlyUrl && (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonvariants({ variant: "secondary" })}
          >
            Book a free 15-min call
            <HiArrowUpRight />
          </a>
        )}
        <Link href="/" className={buttonvariants({ variant: "link" })}>
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@business.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className={labelClass}>
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          value={form.business}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your company or brand"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={cn(inputClass, "cursor-pointer")}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-black_02">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={cn(inputClass, "cursor-pointer")}
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-black_02">
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={cn(inputClass, "cursor-pointer")}
          >
            {timelineOptions.map((option) => (
              <option key={option} value={option} className="bg-black_02">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={cn(inputClass, "resize-y min-h-[120px]")}
          placeholder="Tell me about your business, what you need, and any inspiration or examples you like..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 font-mono" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            buttonvariants({ variant: "primary" }),
            status === "loading" && "opacity-70 pointer-events-none"
          )}
        >
          {status === "loading" ? "Sending..." : "Send inquiry"}
        </button>
        <a
          href="mailto:lokeshkavisth.dev@gmail.com"
          className={buttonvariants({ variant: "ghost" })}
        >
          <IoMail />
          Email instead
        </a>
      </div>
    </form>
  );
}
