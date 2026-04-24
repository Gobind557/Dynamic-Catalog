import { CatalogSkeleton } from "@/components/CatalogSkeleton";
import { Container } from "@/components/Container";

export default function Loading() {
  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <CatalogSkeleton />
      </Container>
    </main>
  );
}
