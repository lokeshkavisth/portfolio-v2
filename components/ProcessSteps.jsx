"use client";

import { process } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";

export function ProcessSteps({ compact = false }) {
  return (
    <section className={compact ? "space-y-8" : "space-y-10"}>
      {!compact && (
        <SectionHeader
          label="How it works"
          title="Simple, transparent process"
          description="No jargon, no surprises — just a clear path from idea to live website."
        />
      )}

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {process.map(({ id, step, title, description }, index) => (
          <ScrollReveal key={id} delay={index * 0.08}>
            <li className="glass-card p-5 sm:p-6 h-full relative overflow-hidden group">
              <span className="font-mono text-4xl font-bold text-white/[0.04] absolute top-3 right-4 group-hover:text-accent/10 transition-colors">
                {step}
              </span>
              <span className="label-mono block mb-3">{step}</span>
              <h3 className="font-display text-white_01 mb-2">{title}</h3>
              <p className="text-sm text-white_02/80">{description}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
