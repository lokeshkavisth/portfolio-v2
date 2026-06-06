"use client";

import { education } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="space-y-8">
      <SectionHeader label="Background" title="Education" />

      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map(({ id, name, time, level }, index) => (
          <ScrollReveal key={id} delay={index * 0.06}>
            <motion.li
              whileHover={{ y: -4 }}
              className="glass-card p-5 sm:p-6 flex flex-col gap-3 h-full border-dashed hover:border-solid"
            >
              <span className="font-mono text-3xl text-white/[0.04] font-bold leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-white_01 font-display -mt-4">{name}</h4>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-white_02/70 mt-auto">
                <span className="px-2 py-0.5 rounded-md bg-accent-muted text-accent border border-accent/20">
                  {level}
                </span>
                <span>{time}</span>
              </div>
            </motion.li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
