"use client";
import React from "react";
import dummy from "../../assets/images/Logo 500x500 px (1).jpeg";
import data from "../../data/data.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardOne from "@/components/ui/cards/CardOne";
import figma from "../../assets/images/7564187_figma_logo_brand_icon.svg";
import github from "../../assets/images/345418_github_icon.svg";
import vscode from "../../assets/images/Visual_Studio_Code_1.35_icon.svg.png";
import sharex from "../../assets/images/ShareX_Logo.png";
import adguard from "../../assets/images/8361145.png";
import telegram from "../../assets/images/4375108_logo_telegram_icon.svg";
import vercel from "../../assets/images/9118365_vercel_fill_icon.svg";
import lighthouse from "../../assets/images/9407181_light_house_sea_building_lighthouse_icon.svg";
import monitor from "../../assets/images/acer-nitro-vs240YS.png";
import keyboard from "../../assets/images/71cngLX2xuL._SX522.png";
import mouse from "../../assets/images/bf9e4d3aa9114601ba1e2ba45107046a_180b39a71dd_image-removebg-preview.png";
import Link from "next/link";

const Tools = () => {
  const toolsLogo = [
    [figma, telegram, adguard, vscode, sharex, github, lighthouse, vercel],
    [monitor, keyboard, mouse],
    [dummy, dummy],
  ];

  const appsAndServices = data[4][0].map(
    ({ id, title, description, path }, index) => (
      <li key={id}>
        <Link href={path}>
          <CardOne
            src={toolsLogo[0][index]}
            title={title}
            description={description}
            width={50}
            height={50}
            cardClass={" flex-col "}
            cardImgClass={"border border-black_02 bg-black_04 p-2"}
          />
        </Link>
      </li>
    )
  );
  const mySetup = data[4][1].map(({ id, title, description, path }, index) => (
    <li key={id}>
      <Link href={path}>
        <CardOne
          src={toolsLogo[1][index]}
          title={title}
          description={description}
          width={100}
          height={100}
          cardClass={" flex-col "}
          // cardImgClass={"border border-black_02 bg-black_04 p-2"}
        />
      </Link>
    </li>
  ));
  const everyDay = data[4][2].map(({ id, title, description, path }, index) => (
    <li key={id}>
      <Link href={path}>
        <CardOne
          src={toolsLogo[2][index]}
          title={title}
          description={description}
          width={50}
          height={50}
          cardClass={" flex-col "}
          cardImgClass={"border border-black_02 bg-black_04 p-2"}
        />
      </Link>
    </li>
  ));

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl">Tools</h1>
        <p>
          Unleashing Innovation with Cutting-Edge Tools: Exploring the Depths of
          my Tech Stack Expertise
        </p>
      </div>
      <hr />

      <section className="space-y-20">
        {/* Apps & services */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Apps & services</h2>
            <p>
              Some of the apps & services I use to get work done and keep track
              of my personal life
            </p>
          </div>

          <div>
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {appsAndServices}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
          </div>
        </div>

        {/* Setup */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Setup</h2>
            <p>My primary setup used to design, code and make awesome stuff</p>
          </div>
          <div>
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {mySetup}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
          </div>
        </div>

        {/* Everyday */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl mb-3">Everyday</h2>
            <p>Things that I keep with me, wherever I go</p>
          </div>
          <div>
            <ul>
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter={"10px"}>
                  {everyDay}
                </Masonry>
              </ResponsiveMasonry>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
