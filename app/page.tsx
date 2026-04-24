export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] px-8 py-14 text-center shadow-[0_18px_40px_rgba(76,52,31,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
          Dynamic Catalog
        </p>
        <h1 className="mt-5 font-[family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          A scalable Next.js foundation for a multi-category catalog
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
          The application scaffold, baseline styling, and production-ready configuration are now in place for the catalog experience.
        </p>
      </div>
    </main>
  );
}
