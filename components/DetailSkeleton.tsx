export function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-8 w-28 rounded-full bg-white/70" />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="aspect-[4/3] rounded-[32px] bg-white/70" />
        <div className="space-y-4">
          <div className="h-4 w-24 rounded-full bg-white/70" />
          <div className="h-10 w-3/4 rounded-full bg-white/70" />
          <div className="h-28 rounded-[28px] bg-white/70" />
          <div className="h-28 rounded-[28px] bg-white/70" />
        </div>
      </div>
    </div>
  );
}
