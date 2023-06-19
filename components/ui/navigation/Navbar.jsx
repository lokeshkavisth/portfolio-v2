"use client";
import React from "react";
import data from "../../../data/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const navMenu = data[0].map(({ id, title, path }) => (
    <li key={id}>
      <Link
        href={path}
        className={`${
          currentPath === path && "bg-black_02 text-white_01"
        } px-4 py-2 font-medium rounded-md hover:bg-black_02 hover:text-white_01`}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <nav className="border-b-2 border-black_02 backdrop-blur-xl sticky top-0 z-50 text-sm">
      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      <div className="flex items-center justify-between max-w-[110em] mx-auto py-6 px-1">
        <div>
          <Link href={"/"}>Lokesh.</Link>
        </div>
        <div>
          <ul className="flex items-center gap-1">{navMenu}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
