const CardSkeleton = () => {
  return (
    <div className="glass-card p-6 gap-6 flex flex-col lg:flex-row mb-6 animate-pulse">
      <div className="aspect-video lg:w-72 rounded-xl bg-black_02" />
      <div className="flex flex-col flex-1 gap-4">
        <div className="h-8 w-2/3 rounded-lg bg-black_02" />
        <div className="space-y-2">
          <div className="h-3 rounded bg-black_02" />
          <div className="h-3 w-4/5 rounded bg-black_02" />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-7 w-16 rounded-md bg-black_02" />
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-10 w-24 rounded-full bg-black_02" />
          <div className="h-10 w-24 rounded-full bg-black_02" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
