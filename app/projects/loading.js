import React from "react";
import CardSkeleton from "@/components/ui/skeletons/CardSkeleton";
import data from "@/data/data.json";

const Loading = () => {
  const { projects_data } = data;
  const loader = projects_data.map((e) => <CardSkeleton key={e.id} />);

  return loader;
};

export default Loading;
