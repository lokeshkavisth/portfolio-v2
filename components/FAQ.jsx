"use client";

import { useState } from "react";
import { faq } from "@/data/data";
import { ScrollReveal } from "./creative/ScrollReveal";
import { cn } from "@/utils/cn";
import { HiChevronDown } from "react-icons/hi2";

export function FAQ({ limit }) {
  const items = limit ? faq.slice(0, limit) : faq;
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="space-y-3">
      {items.map(({ id, question, answer }, index) => {
        const isOpen = openId === id;
        return (
          <ScrollReveal key={id} delay={index * 0.05}>
            <li className="glass-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-white_01 text-sm sm:text-base">
                  {question}
                </span>
                <HiChevronDown
                  className={cn(
                    "shrink-0 text-accent-cyan transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-white_02/85 border-t border-white/[0.04] pt-4">
                    {answer}
                  </p>
                </div>
              </div>
            </li>
          </ScrollReveal>
        );
      })}
    </ul>
  );
}
