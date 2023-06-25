"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectDetails = () => {
  const pathname = usePathname();
  return <div>ProjectDetails:---- {pathname}</div>;
};

export default ProjectDetails;
