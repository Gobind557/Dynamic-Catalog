interface SkeletonProps {
  className: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-[24px] border border-white/70 bg-white/70 ${className}`}
    />
  );
}
