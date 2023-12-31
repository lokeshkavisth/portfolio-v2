import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <Link
     {...props}
      className="px-4 py-2 rounded-full text-sm md:text-base min-w-max max-w-max border border-black_05 bg-black_04 text-white_01 hover:bg-black_02 transition-all font-medium flex items-center gap-2"
    >
      {props.text}
      {props.icon}
    </Link>
  );
};

export default Button;
