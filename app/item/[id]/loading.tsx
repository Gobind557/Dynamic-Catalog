import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="space-y-8">
          <Skeleton className="h-10 w-32" />
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-4">
              <Skeleton className="aspect-[4/3] w-full" />
              <div className="grid gap-3 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-24 w-full" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
