import { memo } from "react";

import type { ItemProperty } from "@/lib/types/catalog.types";

interface DynamicPropsProps {
  itemprops: ItemProperty[];
}

function DynamicPropsComponent({ itemprops }: DynamicPropsProps) {
  return (
    <dl className="grid gap-3">
      {itemprops.map((property, index) => (
        <div
          key={`${property.label}-${property.value}-${index}`}
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-[var(--color-border)] px-4 py-3 shadow-[0_8px_18px_rgba(76,52,31,0.04)] ${
            index % 2 === 0 ? "bg-white/80" : "bg-[var(--color-card)]"
          }`}
        >
          <dt className="text-sm font-medium text-[var(--color-muted)]">
            {property.label}
          </dt>
          <dd className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-right text-sm font-semibold text-[var(--color-accent-strong)]">
            {property.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export const DynamicProps = memo(DynamicPropsComponent);
