import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-16 text-center shadow-[0_18px_40px_rgba(76,52,31,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
            404
          </p>
          <h1 className="mt-4 font-[family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
            Item not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            The requested catalog item could not be located. Head back to the catalog to continue browsing.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
          >
            Return home
          </Link>
        </div>
      </Container>
    </main>
  );
}
