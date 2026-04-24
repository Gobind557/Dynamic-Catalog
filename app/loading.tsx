import { Skeleton } from "@/components/ui/Skeleton";
import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="space-y-10">
          <Skeleton className="h-52 w-full" />
          <Skeleton className="h-40 w-full" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="aspect-[4/3] w-full" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
