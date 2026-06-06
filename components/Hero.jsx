"use client";

import { Button } from "./ui/Button";
import Link from "next/link";
import { socialHome } from "@/constants/constent";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { HeroTerminal } from "./creative/HeroTerminal";
import { FloatingDecor } from "./creative/FloatingDecor";
import { projects } from "@/data/data";

const stats = [
  { label: "Projects delivered", value: `${projects.length}+` },
  { label: "Typical turnaround", value: "2–4 wks" },
  { label: "Response time", value: "< 24 hrs" },
];

export function Hero() {
  return (
    <section className="relative space-y-10 md:space-y-12">
      <FloatingDecor />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 relative z-10"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-xs text-accent-cyan border border-accent-cyan/20">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
          Available for freelance projects
        </span>
        <span className="font-mono text-xs text-white_02/50 px-2 py-1 rounded-md bg-black_02/50">
          Small business websites · Remote worldwide
        </span>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-start relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="max-w-4xl">
              <span className="block text-white_02/70 text-xl sm:text-2xl md:text-3xl font-normal mb-3 font-sans">
                Hey, I&apos;m Lokesh —
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] text-white_01">
                I help small businesses get a website that{" "}
                <span className="text-gradient">looks pro and brings customers</span>
                .
              </span>
            </h1>

            <p className="max-w-xl text-lg text-white_02/90 border-l-2 border-accent/50 pl-5">
              Freelance web developer specializing in business websites, landing
              pages, and redesigns — built fast, mobile-first, and ready to convert.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-3 gap-3 max-w-md"
          >
            {stats.map(({ label, value }) => (
              <li
                key={label}
                className="glass rounded-xl p-3 text-center hover:border-accent/30 transition-colors"
              >
                <p className="font-display text-lg sm:text-xl text-white_01">{value}</p>
                <p className="font-mono text-[10px] text-white_02/50 mt-1 uppercase tracking-wide">
                  {label}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" title="Start a freelance project" analyticsEvent="contact_cta_click" analyticsProps={{ location: "hero" }}>
              Start a project
              <HiArrowUpRight />
            </Button>
            <Button href="/projects" variant="secondary">
              See my work
            </Button>
          </motion.div>

          <ul className="flex flex-wrap items-center gap-2">
            {socialHome.map(({ id, title, icon, path }) => (
              <li key={id}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${path}lokeshkavisth`}
                  title={title}
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-lg text-white_02 hover:text-accent-cyan hover:border-accent/40 transition-all duration-300"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}
