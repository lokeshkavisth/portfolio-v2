import Image from "next/image";
import React from "react";

const CardOne = ({
  src,
  title,
  description,
  stack,
  cardClass,
  cardImgClass,
  width,
  height,
}) => {
  return (
    <div
      className={`flex gap-6 border border-black_02 rounded-md p-6 bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all  ${cardClass}`}
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={width || 250}
          height={height || 250}
          className={`aspect-square object-cover rounded-md  ${cardImgClass}`}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg capitalize">{title}</h3>
        <p>{description}</p>
        {stack && (
          <ul className="flex items-center flex-wrap gap-2">
            {stack.map((tech, index) => (
              <li
                key={index}
                className="border border-black_02 py-1 px-2 rounded-md bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardOne;
