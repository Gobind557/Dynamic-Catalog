export function CatalogSkeleton() {
  return (
    <div className="animate-pulse space-y-10">
      <div className="h-44 rounded-[32px] bg-white/65" />
      <div className="space-y-5">
        <div className="h-10 w-48 rounded-full bg-white/65" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white/65"
            >
              <div className="aspect-[4/3] bg-white/80" />
              <div className="space-y-3 p-4">
                <div className="h-4 w-20 rounded-full bg-white/80" />
                <div className="h-5 w-3/4 rounded-full bg-white/80" />
                <div className="h-4 w-full rounded-full bg-white/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
