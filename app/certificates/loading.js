import React from "react";
import CardSkeleton from "@/components/ui/CardSkeleton";

const Loading = () => {
  const loader = Array(2)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);

  return loader;
};

export default Loading;
