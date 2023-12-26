import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css.svg";
import javascript from "@/assets/images/javascript.png";
import mui from "@/assets/images/mui.png";
import react from "@/assets/images/react.svg";
import tailwind from "@/assets/images/Tailwind.png";
import bootstrap from "@/assets/images/Bootstrap.png";
import sass from "@/assets/images/sass.svg";
import less from "@/assets/images/less.svg";
import redux from "@/assets/images/redux.png";
import nodejs from "@/assets/images/nodeJs.svg";
import mysql from "@/assets/images/mysql.svg";
import mongodb from "@/assets/images/mongodb.png";
import jquery from "@/assets/images/jquery.png";
import express from "@/assets/images/express.png";
import git from "@/assets/images/git.png";
import npm from "@/assets/images/npm.png";
import yarn from "@/assets/images/yarn.png";

export const metadata = {
  title: "Lokesh Sharma's Tech Stack",
  description:
    "Delve into my arsenal of web development tools and technologies. Discover my expert-level proficiency in MERN stack, alongside a diverse range of skills in other languages and frameworks. Explore my passion for continuous learning and innovation within the web development landscape.",
};

const Stack = () => {
  const skillsLogo = {
    frontend: [
      html,
      css,
      javascript,
      mui,
      tailwind,
      bootstrap,
      sass,
      less,
      react,
      redux,
      jquery,
    ],
    backend: [nodejs, express],
    database: [mysql, mongodb],
    devlopment: [git, npm, yarn],
  };

  const imgClass =
    "border border-black_02 bg-black_04 p-2 rounded-md hover:bg-black_02 hover:bg-opacity-50 transition-all aspect-square object-cover";
  const containerClass = "flex items-center gap-2 flex-wrap w-full";

  const { languages } = data;

  const frontendSkills = languages.frontend.map(({ id, title }, index) => (
    <li key={id} className="">
      <Image
        src={skillsLogo.frontend[index]}
        alt={title}
        width={50}
        height={50}
        className={imgClass}
      />
    </li>
  ));

  const backendSkills = languages.backend.map(({ id, title }, index) => (
    <li key={id}>
      <Image
        src={skillsLogo.backend[index]}
        alt={title}
        width={50}
        height={50}
        className={imgClass}
      />
    </li>
  ));
  const databaseSkills = languages.database.map(({ id, title }, index) => (
    <li key={id}>
      <Image
        src={skillsLogo.database[index]}
        alt={title}
        width={50}
        height={50}
        className={imgClass}
      />
    </li>
  ));

  const developmentSkills = languages.development_tools.map(
    ({ id, title }, index) => (
      <li key={id}>
        <Image
          src={skillsLogo.devlopment[index]}
          alt={title}
          width={50}
          height={50}
          className={imgClass}
        />
      </li>
    )
  );

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl">Skills</h1>
        <p>
          Unleashing Innovation with Cutting-Edge Tools: Exploring the Depths of
          my Tech Stack Expertise.
        </p>
      </div>
      <hr />

      <section className="space-y-20">
        {/* Frontend skills */}

        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Frontend</h2>
            <p>
              I leverage a diverse array of frontend technologies to craft and
              develop my frontend projects.
            </p>
          </div>

          <div>
            <ul className={containerClass}>{frontendSkills}</ul>
          </div>
        </div>

        {/* Backend skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Backend</h2>
            <p>
              I harness a wide range of backend technologies to architect and
              build my backend projects.
            </p>
          </div>
          <div>
            <ul className={containerClass}>{backendSkills}</ul>
          </div>
        </div>

        {/* Database skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Database</h2>
            <p>
              I employ a diverse set of database technologies to design and
              manage the databases for my projects.
            </p>
          </div>
          <div>
            <ul className={containerClass}>{databaseSkills}</ul>
          </div>
        </div>

        {/* Devlopment skills */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Development Tools</h2>
            <p>
              I utilize a comprehensive suite of development tools to streamline
              and enhance the development process for my projects.
            </p>
          </div>
          <div>
            <ul className={containerClass}>{developmentSkills}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
