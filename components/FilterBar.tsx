"use client";

import { useCatalogStore } from "@/store/catalog-store";

interface FilterBarProps {
  categories: string[];
  totalItems: number;
  filteredCount: number;
}

export function FilterBar({
  categories,
  totalItems,
  filteredCount,
}: FilterBarProps) {
  const {
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    resetFilters,
  } = useCatalogStore();

  return (
    <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[0_14px_30px_rgba(76,52,31,0.07)] backdrop-blur sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(240px,0.8fr)_auto] lg:items-end">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Search items
          </span>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by item name"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Filter category
          </span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={resetFilters}
          className="h-fit rounded-2xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <span>{filteredCount} visible</span>
        <span className="h-1 w-1 rounded-full bg-[var(--color-muted)]" />
        <span>{totalItems} total</span>
      </div>
    </div>
  );
}
