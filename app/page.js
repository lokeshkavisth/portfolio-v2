import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/featuredProjects";
import { Marquee } from "@/components/creative/Marquee";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <Marquee />
      <div className="section-divider" role="separator" />
      <ServicesPreview />
      <div className="section-divider" role="separator" />
      <ProcessSteps compact />
      <div className="section-divider" role="separator" />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
}
