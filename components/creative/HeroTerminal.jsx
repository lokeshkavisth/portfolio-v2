"use client";

import { motion } from "framer-motion";

const lines = [
  { prompt: "$", text: "whoami", delay: 0 },
  { prompt: ">", text: "lokesh — full-stack developer", delay: 0.4, accent: true },
  { prompt: "$", text: "stack --list", delay: 0.8 },
  { prompt: ">", text: "react · node · mongodb · next", delay: 1.2 },
  { prompt: "$", text: "status", delay: 1.6 },
  { prompt: ">", text: "open_for_freelance ✓", delay: 2, accent: true },
];

export function HeroTerminal() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="hidden lg:block glass rounded-2xl p-5 font-mono text-xs w-full max-w-sm shrink-0 border border-accent/10 shadow-glow"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-white_02/50">~/lokesh.dev</span>
      </div>
      <ul className="space-y-2">
        {lines.map(({ prompt, text, delay, accent }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + delay, duration: 0.35 }}
            className="flex gap-2"
          >
            <span className="text-accent shrink-0">{prompt}</span>
            <span className={accent ? "text-accent-cyan" : "text-white_02/80"}>
              {text}
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-2 h-4 bg-accent-cyan mt-3 ml-4"
        aria-hidden
      />
    </motion.aside>
  );
}
