import React from "react";
import data from "@/data/data.json";
import Button from "@/components/ui/Button";
import CardOne from "@/components/ui/CardOne";
import flashcard from "@/assets/images/flashcard.png";
import todoGo from "@/assets/images/todoGo.png";
import reserve from "@/assets/images/reserve.png";
import piksabe from "@/assets/images/piksabe.png";

export const metadata = {
  title: "Lokesh Sharma's Projects",
  description:
    "Witness the power of MERN stack in action! Explore a diverse collection of my most innovative projects, showcasing cutting-edge web applications, scalable back-end systems, and creative problem-solving skills. Dive into the technologies and techniques used to bring these projects to life.",
};

const Projects = () => {
  const projectImages = [reserve, flashcard, piksabe, todoGo];

  const { projects } = data;

  const myProjects = projects?.map(
    ({ id, title, description, stack, path }, index) => (
      <li key={id} className="relative">
        <CardOne
          src={projectImages[index]}
          title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
          description={description}
          stack={stack}
          width={"auto"}
          height={"auto"}
          cardClass={"flex flex-col pb-24 gap-10"}
          cardImgClass={"aspect-video object-cover w-full"}
        />
        <div className="absolute bottom-8 left-6">
          <Button href={path} target={"_blank"} text={"learn more"} />
        </div>
      </li>
    )
  );

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl capitalize">Projects</h1>
        <p>
          As a dedicated MERN stack developer, I&rsquo;ve had the privilege of
          working on a diverse range of projects, from dynamic web applications
          to scalable back-end systems. Below, you&rsquo;ll find a selection of
          some of my recent projects.
        </p>
      </div>
      <hr />

      <div>
        <ul className="space-y-14">{myProjects}</ul>
      </div>
    </div>
  );
};

export default Projects;
