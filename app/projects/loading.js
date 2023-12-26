import React from "react";
import CardSkeleton from "@/components/ui/CardSkeleton";
import data from "@/data/data.json";

const Loading = () => {
  const { projects } = data;
  const loader = projects.map(({ id }) => <CardSkeleton key={id} />);

  return loader;
};

export default Loading;
