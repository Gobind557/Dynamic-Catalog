interface EmptyStateProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function EmptyState({
  eyebrow,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-[32px] border border-dashed border-[var(--color-border)] bg-[var(--color-card)] px-6 py-12 text-center shadow-[0_10px_24px_rgba(76,52,31,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
