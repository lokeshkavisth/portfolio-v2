"use client";

import Card from "./ui/Card";
import { certificates } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";

export default function Certificate() {
  return (
    <section className="space-y-8">
      <SectionHeader label="Credentials" title="Certificates" />

      <ul className="space-y-6">
        {certificates.map(({ id, title, certificate, ...props }, index) => (
          <ScrollReveal key={id} delay={index * 0.06}>
            <li>
              <Card
                src={certificate}
                title={`${String(index + 1).padStart(2, "0")} · ${title}`}
                {...props}
                cardClass="flex-col lg:flex-row"
                cardImgClass="md:max-w-sm"
              />
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
