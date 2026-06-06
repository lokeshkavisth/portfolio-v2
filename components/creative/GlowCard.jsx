"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function GlowCard({ children, className, spotlight = true }) {
  return (
    <motion.div
      className={cn("relative group rounded-2xl", className)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {spotlight && (
        <>
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(129,140,248,0.5), rgba(34,211,238,0.35), rgba(167,139,250,0.5))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease infinite",
            }}
            aria-hidden
          />
          <div className="absolute -inset-8 rounded-3xl bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />
        </>
      )}
      <div className="relative rounded-2xl overflow-hidden">{children}</div>
    </motion.div>
  );
}
