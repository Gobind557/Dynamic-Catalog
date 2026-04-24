import catalogItems from "@/data/catalog.json";
import type { CatalogItem } from "@/lib/types";

const items = catalogItems as CatalogItem[];

export function getItems(): CatalogItem[] {
  return items;
}

export function getItemById(id: string): CatalogItem | undefined {
  return items.find((item) => item.id === id);
}

export function getCategories(): string[] {
  return [...new Set(items.map((item) => item.category))];
}
