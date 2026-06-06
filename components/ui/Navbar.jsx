"use client";

import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Logo from "../Logo";
import { VscMenu } from "react-icons/vsc";
import { navMenu } from "@/constants/constent";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  const navigationMenu = navMenu.map(({ id, title, url, icon }) => {
    const isActive = currentPath === url;
    return (
      <li key={id}>
        <Link
          href={url}
          onClick={() => {
            if (window.innerWidth < 768) setIsOpen(false);
          }}
          className={cn(
            "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden",
            isActive
              ? "text-white_01"
              : "text-white_02 hover:text-white_01"
          )}
        >
          {isActive && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 bg-accent/20 border border-accent/30 rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className={cn("relative z-10 text-base", isActive && "text-accent-cyan")}>
            {icon}
          </span>
          <span className="relative z-10">{title}</span>
        </Link>
      </li>
    );
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div className="max-w-5xl mx-auto glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between shadow-card border border-white/[0.06]">
        <Logo />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden z-50 p-2.5 rounded-xl glass text-white_01 hover:border-accent/30 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <GrClose size={20} /> : <VscMenu size={22} />}
        </button>

        <nav
          className={cn(
            "fixed md:static inset-0 md:inset-auto top-0 md:top-auto h-screen md:h-auto w-full md:w-auto bg-black_01/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none flex items-center justify-center md:block transition-all duration-300 z-40",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
          )}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-1 p-8 md:p-0">
            {navigationMenu}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
