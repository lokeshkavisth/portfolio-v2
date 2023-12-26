import React from "react";
import CardSkeleton from "@/components/ui/CardSkeleton";
import data from "@/data/data.json";

const Loading = () => {
  const { certificates } = data;
  const loader = certificates.map(({ id }) => <CardSkeleton key={id} />);

  return loader;
};

export default Loading;
