import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-black_03 p-2 sm:p-4 rounded-md shadow-lg gap-5 select-none">
      <div className="h-96 rounded-md bg-black_02 animate-pulse"></div>
      <div className="flex flex-col flex-1 gap-5 mt-5">
        <div className="flex flex-col gap-3">
          <div className="bg-black_02 animate-pulse h-14 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 rounded-md"></div>
          <div className="bg-black_02 animate-pulse h-3 rounded-md"></div>
        </div>
        <div>
          <div className="bg-black_02 w-40 h-10 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
