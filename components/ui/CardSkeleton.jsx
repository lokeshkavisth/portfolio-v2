import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-black_03 p-6 rounded-md shadow-lg gap-6 select-none flex flex-col md:flex-row mb-4">
      {/* Image */}
      <div className="aspect-video object-cover md:w-full rounded-md bg-black_02 animate-pulse max-h-72"></div>
      <div className="flex flex-col flex-1 gap-5 mt-5">
        {/* Description */}
        <div className="flex flex-col gap-3">
          <div className="bg-black_02 animate-pulse h-10 w-60 rounded-md mb-3"></div>
          <div className="bg-black_02 animate-pulse h-3 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 max-w-sm md:w-60 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 max-w-lg md:w-80 rounded-md"></div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2">
          <div className="bg-black_02 animate-pulse h-10 w-16 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-10 w-16 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-10 w-16 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-10 w-16 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-10 w-16 rounded-md"></div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-3">
          <div className="bg-black_02 w-40 h-10 animate-pulse rounded-full"></div>
          <div className="bg-black_02 w-40 h-10 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
