"use client";

import { motion } from "framer-motion";

export function SectionHeader({ label, title, description, className = "" }) {
  return (
    <header className={`space-y-4 ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-cyan" aria-hidden />
          <p className="label-mono">{label}</p>
          <span className="font-mono text-accent/40 text-xs hidden sm:inline">{"//"}</span>
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="relative inline-block"
        >
          <span className="relative z-10">{title}</span>
          <span
            className="absolute -bottom-1 left-0 h-3 w-2/3 max-w-xs bg-accent/20 -skew-x-12 -z-0"
            aria-hidden
          />
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-white_02/90"
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
