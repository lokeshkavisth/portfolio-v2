"use client";

import Card from "@/components/ui/Card";
import { projects } from "@/data/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/creative/ScrollReveal";
import { Marquee } from "@/components/creative/Marquee";

export function ProjectsContent() {
  return (
    <div className="space-y-12 md:space-y-16">
      <SectionHeader
        label="Portfolio"
        title="Projects"
        description="From AI-powered platforms to browser extensions — each project reflects problem-solving, clean architecture, and attention to detail."
      />

      <Marquee />

      <ul className="space-y-6">
        {projects.map((project, index) => {
          const { title, thumbnail, ...props } = project;
          return (
            <ScrollReveal key={title} delay={index * 0.05}>
              <li>
                <Card
                  src={thumbnail}
                  title={`${String(index + 1).padStart(2, "0")} · ${title}`}
                  {...props}
                  cardClass="flex-col lg:flex-row"
                  cardImgClass="md:max-w-sm"
                  featured={index === 0}
                />
              </li>
            </ScrollReveal>
          );
        })}
      </ul>
    </div>
  );
}
