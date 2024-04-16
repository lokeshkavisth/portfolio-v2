import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 text-lg  tracking-normal"
    >
      Lokesh Sharma.
    </Link>
  );
};

export default Logo;
