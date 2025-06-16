import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { GoArrowRight } from "react-icons/go";
import { projects } from "@/data/data.json";

export function FeaturedProjects() {
  return (
    <section className="space-y-10">
      <div>
        <h2>Featured Projects</h2>
        <p>A glimpse of key projects showcasing skills and expertise.</p>
      </div>

      <div>
        <ul className="space-y-6">
          {projects
            ?.slice(0, 3)
            ?.map(({ id, title, thumbnail, ...props }, index) => (
              <li key={id}>
                <Card
                  src={thumbnail}
                  title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
                  {...props}
                  cardClass={"flex-col md:flex-row"}
                />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <Button href="/projects" variant={"link"}>
          View All Projects <GoArrowRight />
        </Button>
      </div>
    </section>
  );
}
