import { Button } from "./ui/Button";
import { ScrollReveal } from "./creative/ScrollReveal";
import { HiArrowUpRight } from "react-icons/hi2";

export function ContactCTA() {
  return (
    <ScrollReveal>
      <section className="relative glass-card p-8 sm:p-12 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-cyan/10 pointer-events-none"
          aria-hidden
        />
        <div className="relative space-y-6 max-w-2xl mx-auto">
          <p className="label-mono">Ready to start?</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white_01">
            Let&apos;s grow your business online
          </h2>
          <p className="text-white_02/85">
            Tell me about your project and I&apos;ll reply within 24 hours with
            next steps — no commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" analyticsEvent="contact_cta_click" analyticsProps={{ location: "contact_cta_section" }}>
              Start a project
              <HiArrowUpRight />
            </Button>
            <Button href="/projects" variant="secondary">
              See my work
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
