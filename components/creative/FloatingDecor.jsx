"use client";

import { motion } from "framer-motion";

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.span
        className="absolute top-8 right-4 md:right-12 font-mono text-[10rem] md:text-[12rem] font-bold text-white/[0.02] leading-none select-none"
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{"}
      </motion.span>
      <motion.span
        className="absolute bottom-20 left-0 md:left-8 font-mono text-6xl text-accent/10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ◇
      </motion.span>
      <motion.div
        className="absolute top-1/3 left-[8%] w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden md:block"
        animate={{ scaleY: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.p
        className="absolute top-24 right-[18%] font-mono text-[10px] text-white_02/25 hidden md:block tracking-widest"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        26.91°N · 75.79°E
      </motion.p>
    </div>
  );
}
