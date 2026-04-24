"use client";

import { useEffect, useState } from "react";

import { useCatalogStore } from "@/store/catalog-store";

interface FilterBarProps {
  categories: string[];
  totalItems: number;
  filteredCount: number;
  activeFilterCount: number;
}

export function FilterBar({
  categories,
  totalItems,
  filteredCount,
  activeFilterCount,
}: FilterBarProps) {
  const {
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    resetFilters,
  } = useCatalogStore();
  const [draftQuery, setDraftQuery] = useState(searchQuery);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSearchQuery(draftQuery);
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [draftQuery, setSearchQuery]);

  const hasSearch = searchQuery.trim().length > 0;
  const hasCategoryFilter = selectedCategory !== "All";

  return (
    <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[0_14px_30px_rgba(76,52,31,0.07)] backdrop-blur sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(240px,0.8fr)_auto] lg:items-end">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Search items
          </span>
          <div className="relative">
            <input
              value={draftQuery}
              onChange={(event) => setDraftQuery(event.target.value)}
              placeholder="Search by item name"
              className="w-full rounded-2xl border border-[var(--color-border)] bg-white/80 px-4 py-3 pr-12 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
            />
            {draftQuery.trim().length > 0 ? (
              <button
                type="button"
                onClick={() => {
                  setDraftQuery("");
                  setSearchQuery("");
                }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)] transition hover:bg-[var(--color-accent)] hover:text-white"
              >
                ×
              </button>
            ) : null}
          </div>
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
        <span className="h-1 w-1 rounded-full bg-[var(--color-muted)]" />
        <span>{activeFilterCount} active filters</span>
      </div>

      {(hasSearch || hasCategoryFilter) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {hasSearch ? (
            <span className="rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
              Search: {searchQuery}
            </span>
          ) : null}
          {hasCategoryFilter ? (
            <span className="rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
              Category: {selectedCategory}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
