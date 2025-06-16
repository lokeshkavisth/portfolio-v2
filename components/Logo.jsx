import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import React from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={`text-xl text-white_01 block ${greatVibes.className}`}
      style={{ transform: "rotate(-4deg)" }}
    >
      Lokesh Sharma.
    </Link>
  );
};

export default Logo;
