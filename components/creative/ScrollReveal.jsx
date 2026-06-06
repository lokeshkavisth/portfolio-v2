"use client";

import { motion } from "framer-motion";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const offset = direction === "up" ? 28 : direction === "left" ? -28 : 28;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: direction === "up" ? offset : 0, x: direction === "left" ? offset : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
