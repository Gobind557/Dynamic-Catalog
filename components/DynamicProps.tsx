import { memo } from "react";

import type { ItemProperty } from "@/lib/types";

interface DynamicPropsProps {
  itemprops: ItemProperty[];
}

function DynamicPropsComponent({ itemprops }: DynamicPropsProps) {
  return (
    <dl className="divide-y divide-[var(--color-border)] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)]">
      {itemprops.map((property) => (
        <div
          key={`${property.label}-${property.value}`}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 px-4 py-3 sm:px-5"
        >
          <dt className="text-sm font-medium text-[var(--color-muted)]">{property.label}</dt>
          <dd className="text-right text-sm font-semibold text-[var(--color-ink)]">
            {property.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export const DynamicProps = memo(DynamicPropsComponent);
