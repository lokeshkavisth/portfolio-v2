"use client";

import { useEffect, useRef, useState } from "react";

const TruncatedPara = ({ text }) => {
  const [showReadMore, setShowReadMore] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const p = pRef.current;
    if (!p) return;
    setIsTruncated(p.scrollHeight > p.clientHeight);
  }, [text]);

  return (
    <div>
      <p
        ref={pRef}
        className={`text-sm text-white_02/85 ${showReadMore ? "" : "line-clamp-2"}`}
      >
        {text}
      </p>
      {isTruncated && (
        <button
          type="button"
          className="mt-2 font-mono text-xs text-accent-cyan hover:text-white_01 transition-colors"
          onClick={() => setShowReadMore((prev) => !prev)}
        >
          {showReadMore ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default TruncatedPara;
