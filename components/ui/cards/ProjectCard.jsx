import Image from "next/image";
import React from "react";

const ProjectCard = ({
  src,
  title,
  description,
  width,
  height,
  cardClass,
  cardImgClass,
}) => {
  return (
    <div
      className={`flex gap-10 bg-my_black_80 border border-my_black_60 p-6 rounded-md hover:bg-my_black_20 hover:bg-opacity-40 transition-all ${cardClass}`}
    >
      <div className="min-w-max">
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          className={`rounded-xl ${cardImgClass}`}
        />
      </div>
      <div>
        <h3 className="text-md pb-2">{title}</h3>
        <p className="text-sm leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
