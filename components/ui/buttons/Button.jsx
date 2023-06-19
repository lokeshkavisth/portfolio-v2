import Link from "next/link";
import React from "react";

const Button = ({ path, text, title, icon }) => {
  return (
    <Link
      href={path}
      title={title}
      target="_blank"
      className="px-4 py-2 rounded-full text-base min-w-max max-w-max border border-black_05 bg-black_04 text-white_01 hover:bg-black_02 transition-all font-medium flex items-center gap-2"
    >
      {text}
      {icon}
    </Link>
  );
};

export default Button;
