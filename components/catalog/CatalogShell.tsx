"use client";

import { useMemo } from "react";

import { CategorySection } from "@/components/catalog/CategorySection";
import { FilterBar } from "@/components/catalog/FilterBar";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { groupByCategory } from "@/lib/utils/groupByCategory";
import type { CatalogItem } from "@/lib/types/catalog.types";
import { useCatalogStore } from "@/store/catalog-store";

interface CatalogShellProps {
  items: CatalogItem[];
}

export function CatalogShell({ items }: CatalogShellProps) {
  const { searchQuery, selectedCategory } = useCatalogStore();

  const categories = useMemo(
    () => [...new Set(items.map((item) => item.category))],
    [items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.itemname.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [items, searchQuery, selectedCategory]);

  const groupedEntries = useMemo(
    () => Object.entries(groupByCategory(filteredItems)),
    [filteredItems],
  );

  const activeFilterCount = useMemo(() => {
    let count = 0;

    if (searchQuery.trim().length > 0) {
      count += 1;
    }

    if (selectedCategory !== "All") {
      count += 1;
    }

    return count;
  }, [searchQuery, selectedCategory]);

  const totalProperties = useMemo(
    () => items.reduce((sum, item) => sum + item.itemprops.length, 0),
    [items],
  );

  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="space-y-10 sm:space-y-12">
          <section className="relative overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-8 shadow-[0_20px_45px_rgba(76,52,31,0.08)] sm:px-8 sm:py-10 lg:px-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                  Dynamic multi-category catalog
                </p>
                <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                  Explore products through one reusable catalog system
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  Categories, cards, and specifications are all rendered from the same shared data contract, making the experience easy to extend without hardcoded UI branches.
                </p>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:max-w-lg lg:grid-cols-4">
                {[
                  { label: "Items", value: items.length },
                  { label: "Categories", value: categories.length },
                  { label: "Properties", value: totalProperties },
                  { label: "Active", value: activeFilterCount },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-[var(--color-border)] bg-white/70 px-4 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-[family:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FilterBar
            categories={categories}
            totalItems={items.length}
            filteredCount={filteredItems.length}
            activeFilterCount={activeFilterCount}
          />

          {filteredItems.length === 0 ? (
            <EmptyState
              eyebrow="No results"
              title="Nothing matched the current filters"
              description="Try a different search term or switch back to all categories to explore the full catalog."
            />
          ) : (
            <div className="space-y-12">
              {groupedEntries.map(([category, categoryItems]) => (
                <CategorySection
                  key={category}
                  title={category}
                  items={categoryItems}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
