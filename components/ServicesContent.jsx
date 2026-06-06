"use client";

import { services } from "@/data/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/creative/ScrollReveal";
import { HiArrowUpRight } from "react-icons/hi2";

export function ServicesContent() {
  return (
    <div className="space-y-16 md:space-y-24">
      <SectionHeader
        label="Services"
        title="Web development for small businesses"
        description="Clear packages, upfront pricing, and a process designed for owners who want results — not tech jargon."
      />

      <ul className="grid md:grid-cols-2 gap-6">
        {services.map(
          ({ id, title, description, idealFor, startingAt, timeline, includes }, index) => (
            <ScrollReveal key={id} delay={index * 0.06}>
              <li className="glass-card p-6 sm:p-8 h-full flex flex-col">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h3 className="font-display text-xl text-white_01">{title}</h3>
                  <span className="font-mono text-xs text-accent-cyan px-2 py-1 rounded bg-accent-muted">
                    {startingAt}
                  </span>
                </div>
                <p className="text-white_02/85 text-sm mb-3">{description}</p>
                <p className="font-mono text-xs text-white_02/50 mb-4">
                  Ideal for: {idealFor}
                </p>
                <p className="font-mono text-xs text-accent/80 mb-4">
                  Timeline: {timeline}
                </p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-white/[0.04]">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white_02/80"
                    >
                      <span className="text-accent-cyan shrink-0 mt-0.5">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ScrollReveal>
          )
        )}
      </ul>

      <ScrollReveal>
        <div className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-white_01 text-lg mb-1">
              Not sure which service you need?
            </h3>
            <p className="text-sm text-white_02/80">
              Describe your project and I&apos;ll recommend the best approach.
            </p>
          </div>
          <Button href="/contact" analyticsEvent="contact_cta_click" analyticsProps={{ location: "services_page" }}>
            Get a free quote
            <HiArrowUpRight />
          </Button>
        </div>
      </ScrollReveal>

      <div className="section-divider" role="separator" />
      <ProcessSteps />
      <div className="section-divider" role="separator" />
      <Testimonials />
      <div className="section-divider" role="separator" />

      <section className="space-y-8">
        <SectionHeader label="FAQ" title="Common questions" />
        <FAQ />
      </section>
    </div>
  );
}
