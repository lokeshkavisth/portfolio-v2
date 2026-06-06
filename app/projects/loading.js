import CardSkeleton from "@/components/ui/CardSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6 pt-8">
      <div className="space-y-3 animate-pulse">
        <div className="h-4 w-24 rounded bg-black_02" />
        <div className="h-10 w-48 rounded-lg bg-black_02" />
        <div className="h-4 w-full max-w-md rounded bg-black_02" />
      </div>
      {[0, 1, 2].map((i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
