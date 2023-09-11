"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {VscMenu} from 'react-icons/vsc'
import {nav_data} from "@/data/data.json";

const Navbar = () => {
  const currentPath = usePathname();
  const navMenu = nav_data.map(({ id, title, path }) => (
    <li key={id}>
      <Link
        href={path}
        onClick={() => {
          if (window.innerWidth < 768) toggleSidebar()}
        }
        className={`${
          currentPath === path && "bg-black_02 text-white_01"
        } px-4 py-2 font-medium rounded-md hover:bg-black_02 hover:text-white_01`}
      >
        {title}
      </Link>
    </li>
  ));

const toggleSidebar = () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('right-0');
  navbar.classList.toggle('-right-80');
};


  return (
    <header className="border-b-2 border-black_02 backdrop-blur-xl fixed w-full top-0 z-50 text-sm px-4">
      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      <div className="flex items-center justify-between max-w-[110em] mx-auto py-6 px-1">
        <div>
          <Link href={"/"}>Lokesh.</Link>
        </div>
          <div>
            <div>
              <i className="text-xl md:hidden cursor-pointer">
              <VscMenu onClick={toggleSidebar}/>
              </i>
            </div>
            <nav className="absolute top-[72px] -right-80 z-40 h-screen w-full max-w-[200px] bg-white_03 md:static md:w-auto md:max-w-full md:h-auto md:top-auto md:right-auto md:bg-inherit transition-all" id="navbar">
          <ul className="flex flex-col items-center md:gap-1 md:flex-row gap-6 mt-10 md:mt-0">{navMenu}</ul>
        </nav>
          </div>        
      </div>
    </header>
  );
};

export default Navbar;
