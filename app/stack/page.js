import ProjectCard from "@/components/ui/cards/ProjectCard";
import React from "react";
import data from "../../data/data.json";
import dummy from "../../assets/images/Logo 500x500 px (1).jpeg";

const Stack = () => {
  const skillsLogo = [
    [dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy],
    [dummy, dummy, dummy, dummy],
    [dummy, dummy, dummy, dummy],
  ];

  const imgDIV =
    "bg-my_black_60 bg-opacity-60 border-b border-b-my_black_20 p-6";

  const frontendSkills = data[3][0].map(({ id, title, description }, index) => (
    <li key={id} className="w-80">
      <ProjectCard
        src={skillsLogo[0][index]}
        title={title}
        description={description}
        width={100}
        height={100}
        cardClass={"flex flex-col gap-5 p-0"}
        cardImgClass={"mx-auto"}
        imgDiv={imgDIV}
        textDiv={"px-6 pb-6 pt-2"}
      />
    </li>
  ));
  const backendSkills = data[3][1].map(({ id, title, description }, index) => (
    <li key={id} className="w-80">
      <ProjectCard
        src={skillsLogo[1][index]}
        title={title}
        description={description}
        width={100}
        height={100}
        cardClass={"flex flex-col gap-5 p-0"}
        cardImgClass={"mx-auto"}
        imgDiv={imgDIV}
        textDiv={"px-6 pb-6 pt-2"}
      />
    </li>
  ));
  const databaseSkills = data[3][2].map(({ id, title, description }, index) => (
    <li key={id} className="w-80">
      <ProjectCard
        src={skillsLogo[2][index]}
        title={title}
        description={description}
        width={100}
        height={100}
        cardClass={"flex flex-col gap-5 p-0"}
        cardImgClass={"mx-auto"}
        imgDiv={imgDIV}
        textDiv={"px-6 pb-6 pt-2"}
      />
    </li>
  ));

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl">Skills</h1>
        <p>
          Unleashing Innovation with Cutting-Edge Tools: Exploring the Depths of
          my Tech Stack Expertise
        </p>
      </div>
      <hr />

      <section className="space-y-20">
        {/* Frontend skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Frontend</h2>
            <p>
              Some of the apps & services I use to get work done and keep track
              of my personal life
            </p>
          </div>

          <div>
            <ul className="grid grid-cols-3 gap-5">{frontendSkills}</ul>
          </div>
        </div>

        {/* Backend skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Backend</h2>
            <p>
              Some of the apps & services I use to get work done and keep track
              of my personal life
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-3 gap-5">{backendSkills}</ul>
          </div>
        </div>

        {/* Database skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Database</h2>
            <p>
              Some of the apps & services I use to get work done and keep track
              of my personal life
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-3 gap-5">{databaseSkills}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
