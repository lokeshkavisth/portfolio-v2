"use client";

import { skills } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section className="space-y-8">
      <SectionHeader
        label="Toolkit"
        title="Skills"
        description="Technologies I reach for daily when building products end to end."
      />

      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {skills.map(({ title, id, icon: Icon }, index) => (
          <ScrollReveal key={id} delay={index * 0.03}>
            <li title={title}>
              <motion.div
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 4 : -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="glass-card flex flex-col items-center justify-center gap-2 p-4 aspect-square cursor-default"
              >
                <Icon className="text-2xl sm:text-3xl text-white_01" />
                <span className="font-mono text-[9px] text-white_02/50 text-center leading-tight hidden sm:block truncate w-full">
                  {title}
                </span>
              </motion.div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
