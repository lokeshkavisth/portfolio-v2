"use client";
import React from "react";
import { projects_data } from "@/data/data";
import Button from "@/components/ui/buttons/Button";
import CardOne from "@/components/ui/cards/CardOne";
import flashcard from "@/assets/images/flashcard.png";
import todo from "@/assets/images/todo.png";
import bendy_border from "@/assets/images/bendy_border.png";
import resume_builder from "@/assets/images/resume_builder.png";

export const metadata = {
  title: "Lokesh Sharma - Projects Page",
  description: "",
};

const Projects = () => {
  const projectImages = [flashcard, resume_builder, todo, bendy_border];

  const myProjects = projects_data?.map(
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
