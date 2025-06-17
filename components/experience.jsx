"use client";

import React from "react";
import { experiences } from "@/data/data";

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white_01 mb-6">
        My Experience
      </h2>
      <ul className="space-y-2">
        {experiences.map(({ company, role, duration, idx }) => (
          <li
            key={idx}
            className="border border-black_01 hover:border-black_02 rounded-2xl p-5 hover:bg-black_02/70 transition-colors flex flex-col-reverse sm:flex-row sm:items-center justify-between"
          >
            <span className="text-white_02/70 font-semibold mb-2">
              {duration}
            </span>

            <div className="">
              <h3 className="text-lg font-medium text-white_03">{company}</h3>
              <span className="text-sm text-white_02/70 mt-1 sm:mt-0">
                {role}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
