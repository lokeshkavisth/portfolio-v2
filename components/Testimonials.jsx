"use client";

import { testimonials } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";

export function Testimonials() {
  return (
    <section className="space-y-10">
      <SectionHeader
        label="Social proof"
        title="What people say"
        description="Feedback from teams and collaborators I've worked with."
      />

      <ul className="grid md:grid-cols-3 gap-5">
        {testimonials.map(({ id, name, business, role, quote, projectType }, index) => (
          <ScrollReveal key={id} delay={index * 0.08}>
            <li className="glass-card p-6 flex flex-col h-full">
              <p className="text-white_02/90 text-sm flex-1 mb-6 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="border-t border-white/[0.04] pt-4">
                <p className="font-display text-white_01 text-sm">{name}</p>
                <p className="font-mono text-xs text-white_02/60 mt-1">
                  {role} · {business}
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] px-2 py-0.5 rounded bg-accent-muted text-accent">
                  {projectType}
                </span>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
