import React from "react";
import data from "../../data/data.json";
import dummy from "../../assets/images/Logo 500x500 px (1).jpeg";
import Button from "@/components/ui/buttons/Button";
import CardOne from "@/components/ui/cards/CardOne";
// import { HiArrowUpRight } from "react-icons/hi";

const Projects = () => {
  const projectImages = [dummy, dummy, dummy];

  const myProjects = data[2]?.map(
    ({ id, title, description, width, height, path, btn_text }, index) => (
      <li key={id} className="relative">
        <CardOne
          src={projectImages[index]}
          title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
          description={description}
          width={width}
          height={height}
          cardClass={"flex flex-col pb-24 gap-10"}
          cardImgClass={"aspect-video object-cover w-full"}
        />

        <div className="absolute bottom-8 left-6">
          <Button path={path} text={btn_text} />
        </div>
      </li>
    )
  );

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl">Project</h1>
        <p>
          From one page sites to the worlds first mobile sitebuilder, I’ve spent
          years designing and building products of varying sizes. Here’s a small
          selection of some of my recent projects and experiences.
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
