import CardSkeleton from "@/components/ui/skeletons/CardSkeleton";
import React from "react";
import data from "../../data/data.json";

const Loading = () => {
  const loader = data[2].map((e) => <CardSkeleton key={e.id} />);

  return loader;
};

export default Loading;
