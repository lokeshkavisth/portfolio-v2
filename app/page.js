import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/featuredProjects";
import { FeaturedBlogs } from "@/components/featuredBlogs";

export default function Home() {
  return (
    <section className="space-y-8 ">
      <Hero />

      <hr />

      <FeaturedProjects />

      <hr />

      <FeaturedBlogs />
    </section>
  );
}
