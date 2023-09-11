import React from "react";
import CardSkeleton from "@/components/ui/skeletons/CardSkeleton";
import { projects_data } from "@/data/data";

const Loading = () => {
  const loader = projects_data.map((e) => <CardSkeleton key={e.id} />);

  return loader;
};

export default Loading;
