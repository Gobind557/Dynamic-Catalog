import { memo } from "react";

import { ItemCard } from "@/components/catalog/ItemCard";
import type { CatalogItem } from "@/lib/types/catalog.types";

interface CategorySectionProps {
  title: string;
  items: CatalogItem[];
}

function CategorySectionComponent({ title, items }: CategorySectionProps) {
  return (
    <section className="relative space-y-5 rounded-[34px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,249,242,0.78))] p-5 shadow-[0_14px_32px_rgba(76,52,31,0.05)] sm:p-6">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/45 to-transparent" />
      <div className="flex items-end justify-between gap-4 border-b border-[var(--color-border)]/80 pb-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Category
          </p>
          <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="rounded-full border border-[var(--color-border)] bg-white/75 px-3 py-1 text-sm text-[var(--color-muted)]">
          {items.length} items
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export const CategorySection = memo(CategorySectionComponent);
