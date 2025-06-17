"use client";

import React from "react";
import { education } from "@/data/data";

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <ul className="space-y-2">
        {education.map(({ id, name, time, level }) => (
          <li
            key={id}
            className="flex flex-col md:flex-row md:items-center justify-between border border-black_02 rounded-2xl p-4 bg-black_03 hover:bg-black_02/70 transition-colors"
          >
            <h4 className="text-my_white">{name}</h4>
            <div className="flex flex-wrap items-center gap-3 opacity-60 capitalize">
              <p>{level}</p>
              <span>({time})</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
