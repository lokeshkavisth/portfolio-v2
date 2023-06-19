"use client";
import React from "react";
import data from "../../data/data.json";
import dummy from "../../assets/images/Logo 500x500 px (1).jpeg";
import CardOne from "@/components/ui/cards/CardOne";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

const Stack = () => {
  const skillsLogo = [
    [
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
    [nodejs, express],
    [mysql, mongodb],
  ];

  const frontendSkills = data[3][0].map(({ id, title, description }, index) => (
    <li key={id}>
      <CardOne
        src={skillsLogo[0][index]}
        title={title}
        description={description}
        width={50}
        height={50}
        cardClass={"flex-col"}
        cardImgClass={"border border-black_02 bg-black_04 p-2"}
      />
    </li>
  ));
  const backendSkills = data[3][1].map(({ id, title, description }, index) => (
    <li key={id}>
      <CardOne
        src={skillsLogo[1][index]}
        title={title}
        description={description}
        width={50}
        height={50}
        cardClass={"flex-col"}
        cardImgClass={"border border-black_02 bg-black_04 p-2"}
      />
    </li>
  ));
  const databaseSkills = data[3][2].map(({ id, title, description }, index) => (
    <li key={id}>
      <CardOne
        src={skillsLogo[2][index]}
        title={title}
        description={description}
        width={50}
        height={50}
        cardClass={"flex-col"}
        cardImgClass={"border border-black_02 bg-black_04 p-2"}
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
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {frontendSkills}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
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
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {backendSkills}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
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
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {databaseSkills}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
