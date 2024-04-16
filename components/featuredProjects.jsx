import { GoArrowRight } from "react-icons/go";
import Button from "./ui/Button";
import Card from "./ui/Card";
import flashcard from "@/assets/images/flashcard.png";
import todoGo from "@/assets/images/todoGo.png";
import reserve from "@/assets/images/reserve.png";
import piksabe from "@/assets/images/piksabe.png";
import { projects } from "@/data/data.json";

export function FeaturedProjects() {
  const featuredImages = [reserve, flashcard, piksabe, todoGo];
  return (
    <section className="space-y-10">
      <div>
        <h2>Featured Projects</h2>
        <p>A glimpse of key projects showcasing skills and expertise.</p>
      </div>

      <div>
        <ul className="space-y-6">
          {projects?.slice(0, 3)?.map(({ id, title, ...props }, index) => (
            <li key={id}>
              <Card
                src={featuredImages[index]}
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
