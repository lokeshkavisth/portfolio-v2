"use client";

import { experiences } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="space-y-8">
      <SectionHeader
        label="Career"
        title="Experience"
        description="Internships and hands-on roles where I shipped real features and learned fast."
      />

      <ul className="relative space-y-0">
        {experiences.map(({ id, company, role, duration }, index) => (
          <ScrollReveal key={id} delay={index * 0.08}>
            <li
              className={`relative pl-8 pb-10 last:pb-0 ${
                index % 2 === 1 ? "md:ml-8" : ""
              }`}
            >
              {index < experiences.length - 1 && (
                <span
                  className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent"
                  aria-hidden
                />
              )}
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-accent/50 bg-black_01 flex items-center justify-center z-10"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              </motion.span>

              <div className="glass-card p-5 sm:p-6 group hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[10px] text-accent/50 mb-2 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-display text-white_01 group-hover:text-accent-cyan transition-colors">
                    {company}
                  </h3>
                  <span className="font-mono text-xs text-accent-cyan shrink-0 px-2 py-0.5 rounded bg-accent-muted">
                    {duration}
                  </span>
                </div>
                <p className="text-white_02/80 text-sm">{role}</p>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
