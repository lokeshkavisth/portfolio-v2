"use client";

import React from "react";
import { languages } from "../../data/data.json";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import javascript from "../../assets/images/javascript.png";
import mui from "../../assets/images/mui.png";
import react from "../../assets/images/react.svg";
import tailwind from "../../assets/images/Tailwind.png";
import bootstrap from "../../assets/images/Bootstrap.png";
import sass from "../../assets/images/sass.svg";
import less from "../../assets/images/less.svg";
import redux from "../../assets/images/redux.png";
import nodejs from "../../assets/images/nodeJs.svg";
import mysql from "../../assets/images/mysql.svg";
import mongodb from "../../assets/images/mongodb.png";
import jquery from "../../assets/images/jquery.png";
import express from "../../assets/images/express.png";
import Image from "next/image";

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
  };

  const imgClass =
    "border border-black_02 bg-black_04 p-2 rounded-md hover:bg-black_02 hover:bg-opacity-50 transition-all aspect-square object-cover";
  const containerClass = "flex items-center gap-2 flex-wrap w-full";

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
            <ul className={containerClass}>{frontendSkills}</ul>
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
            <ul className={containerClass}>{backendSkills}</ul>
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
            <ul className={containerClass}>{databaseSkills}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
