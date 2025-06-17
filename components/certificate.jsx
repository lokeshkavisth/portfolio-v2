"use client";

import Card from "./ui/Card";
import React from "react";
import { certificates } from "@/data/data";

export default function Certificate() {
  return (
    <div>
      <h2>Certificates</h2>
      <ul className="space-y-2">
        {certificates?.map(({ id, title, certificate, ...props }, index) => (
          <li key={id}>
            <Card
              src={certificate}
              title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
              {...props}
              cardClass={"flex-col md:flex-row"}
              cardImgClass={"aspect-video object-cover md:max-w-md"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
