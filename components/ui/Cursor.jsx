"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const smallBall = document.querySelector(".cursor__ball--small");
    const hoverables = document.querySelectorAll(".hoverable");

    const onMouseMove = (e) => {
      gsap.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      gsap.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const onMouseHover = () => {
      gsap.to(bigBall, 0.3, {
        scale: 1.5,
        backgroundColor: "hotpink",
      });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBall, 0.3, {
        scale: 1,
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor pointer-events-none hidden md:block">
      <div className="cursor__ball cursor__ball--big  top-0 left-0 z-50 mix-blend-difference absolute">
        <svg>
          <circle
            cx="17"
            cy="17"
            r="13"
            strokeWidth="0"
            fill="#eaeaea"
          ></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small  top-0 left-0 z-50 mix-blend-difference absolute">
        <svg>
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#b1b1b1"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
