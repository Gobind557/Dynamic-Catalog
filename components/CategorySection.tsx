import { memo } from "react";

import { ItemCard } from "@/components/ItemCard";
import type { CatalogItem } from "@/lib/types";

interface CategorySectionProps {
  title: string;
  items: CatalogItem[];
}

function CategorySectionComponent({ title, items }: CategorySectionProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Category
          </p>
          <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-muted)]">
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
