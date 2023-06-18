import Link from "next/link";
import React from "react";

const Button = ({ path, text, title, icon }) => {
  return (
    <Link
      href={path}
      title={title}
      target="_blank"
      className="px-4 py-2 rounded-full border-my_black_40 text-base min-w-max max-w-max border bg-my_black_60 hover:bg-my_black_20 text-my_white transition-all font-medium flex items-center gap-2"
    >
      {text}
      {icon}
    </Link>
  );
};

export default Button;
