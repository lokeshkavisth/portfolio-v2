import Image from "next/image";
import React from "react";

const CardOne = ({
  src,
  title,
  description,
  cardClass,
  cardImgClass,
  width,
  height,
}) => {
  return (
    <div
      className={`flex gap-6 border border-black_02 rounded-md p-6 bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all ${cardClass}`}
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={!width ? 250 : width}
          height={!height ? 250 : height}
          className={`aspect-square object-cover rounded-md ${cardImgClass}`}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardOne;
