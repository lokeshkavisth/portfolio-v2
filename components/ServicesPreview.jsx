import { services } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./ui/Button";
import { GoArrowRight } from "react-icons/go";
import { ScrollReveal } from "./creative/ScrollReveal";

export function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="space-y-10">
      <SectionHeader
        label="Services"
        title="Websites built for small businesses"
        description="Whether you need a full site, a landing page, or ongoing support — I offer clear packages with upfront pricing."
      />

      <ul className="grid md:grid-cols-3 gap-5">
        {preview.map(({ id, title, description, startingAt, timeline }, index) => (
          <ScrollReveal key={id} delay={index * 0.08}>
            <li className="glass-card p-6 flex flex-col h-full hover:border-accent/30 transition-colors">
              <h3 className="font-display text-white_01 mb-2">{title}</h3>
              <p className="text-sm text-white_02/80 flex-1 mb-4">{description}</p>
              <div className="flex items-center justify-between font-mono text-xs pt-4 border-t border-white/[0.04]">
                <span className="text-accent-cyan">{startingAt}</span>
                <span className="text-white_02/50">{timeline}</span>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>

      <Button href="/services" variant="link">
        View all services
        <GoArrowRight />
      </Button>
    </section>
  );
}
