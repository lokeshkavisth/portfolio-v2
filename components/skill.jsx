"use client";

import React from "react";
import { skills } from "@/data/data";

export default function Skill() {
  return (
    <div>
      <h2>Skills</h2>
      <ul className={"flex items-center gap-2 flex-wrap w-full"}>
        {skills.map(({ title, id, icon: Icon }) => (
          <li
            title={title}
            key={id}
            className="p-2 rounded-xl text-3xl border border-black_02 bg-black_03 hover:bg-black_02/70 transition-colors"
          >
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  );
}
