import { Container } from "@/components/Container";
import { DetailSkeleton } from "@/components/DetailSkeleton";

export default function Loading() {
  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <DetailSkeleton />
      </Container>
    </main>
  );
}
