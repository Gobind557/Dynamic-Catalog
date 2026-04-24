"use client";

import { create } from "zustand";

interface CatalogStore {
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (value: string) => void;
  setSelectedCategory: (value: string) => void;
  resetFilters: () => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  searchQuery: "",
  selectedCategory: "All",
  setSearchQuery: (value) => set({ searchQuery: value }),
  setSelectedCategory: (value) => set({ selectedCategory: value }),
  resetFilters: () => set({ searchQuery: "", selectedCategory: "All" }),
}));
