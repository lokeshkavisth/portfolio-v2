"use client";

import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { GoArrowRight } from "react-icons/go";
import { projects } from "@/data/data";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./creative/ScrollReveal";

const businessPriority = [
  "Booking / E-commerce",
  "Business tool",
  "SaaS / Career platform",
];

function getFeaturedProjects() {
  return [...projects]
    .sort((a, b) => {
      const aIndex = businessPriority.indexOf(a.clientType);
      const bIndex = businessPriority.indexOf(b.clientType);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    })
    .slice(0, 3);
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const [hero, ...rest] = featured;
  const { title: heroTitle, thumbnail: heroThumb, ...heroRest } = hero;

  return (
    <section className="space-y-10 md:space-y-12">
      <SectionHeader
        label="Selected work"
        title="Projects that deliver results"
        description="Real builds with clear challenges and outcomes — the same approach I bring to client work."
      />

      <ul className="grid gap-6 md:grid-cols-2">
        <ScrollReveal className="md:col-span-2">
          <li>
            <Card
              src={heroThumb}
              title={`01 · ${heroTitle}`}
              {...heroRest}
              cardClass="flex-col lg:flex-row"
              featured
            />
          </li>
        </ScrollReveal>

        {rest.map((project, index) => {
          const { title, thumbnail, ...props } = project;
          return (
            <ScrollReveal key={title} delay={0.1 * (index + 1)}>
              <li className="h-full">
                <Card
                  src={thumbnail}
                  title={`${String(index + 2).padStart(2, "0")} · ${title}`}
                  {...props}
                  cardClass="flex-col h-full"
                  cardImgClass="max-h-48"
                />
              </li>
            </ScrollReveal>
          );
        })}
      </ul>

      <ScrollReveal>
        <Button href="/projects" variant="link">
          All projects
          <GoArrowRight />
        </Button>
      </ScrollReveal>
    </section>
  );
}
