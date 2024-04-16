"use client";
import React, { useEffect, useRef, useState } from "react";

const TruncatedPara = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [showReadMore, setShowReadMore] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const p = pRef.current;
    const innerHeight = p.scrollHeight - p.clientHeight;
    setIsTruncated(innerHeight > 0);
  }, []);

  const handleReadMore = () => setShowReadMore(!showReadMore);

  return (
    <div>
      <p
        ref={pRef}
        className={`line-clamp-2 ${showReadMore && "line-clamp-none"}`}
      >
        {text}
      </p>
      {isTruncated && (
        <button
          className="text-white_01 border-b border-white_01 my-1"
          onClick={handleReadMore}
        >
          {showReadMore ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default TruncatedPara;
