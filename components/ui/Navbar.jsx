"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscMenu } from "react-icons/vsc";
import Logo from "../Logo";
import { navMenu } from "@/constants/constent";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const navigationMenu = navMenu.map(({ id, title, url, icon }) => (
    <li key={id} className="w-full">
      <Link
        href={url}
        onClick={() => {
          if (window.innerWidth < 768) setIsOpen(false);
        }}
        className={`${
          currentPath === url && "bg-black_02 text-white_01"
        } px-4 py-4 md:py-2 font-medium rounded-md hover:bg-black_02 hover:text-white_01 flex items-center gap-2`}
      >
        {icon}
        {title}
      </Link>
    </li>
  ));

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="border-b-2 border-black_02 backdrop-blur-xl fixed w-full top-0 z-40 text-sm px-4">
      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      <div className="flex items-center justify-between max-w-[110em] mx-auto py-6 px-1">
        <div>
          <Logo />
        </div>
        <div>
          <div>
            <button
              onClick={toggleSidebar}
              className="text-xl md:hidden z-50 relative cursor-pointer p-4 bg-black_02 rounded-full"
            >
              {isOpen ? <GrClose /> : <VscMenu />}
            </button>
          </div>
          <nav
            className={`absolute  z-40 h-screen w-full  bg-black_03 md:static md:w-auto md:max-w-full md:h-auto md:top-auto md:right-auto md:bg-inherit transition-all  top-0 pt-20 md:pt-0 ${
              isOpen ? "right-0" : "-right-full"
            }`}
            id="navbar"
          >
            <ul className="flex w-full flex-col items-center md:gap-1 md:flex-row gap-6   p-6 md:p-0">
              {navigationMenu}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
