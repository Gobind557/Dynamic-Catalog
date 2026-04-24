import { loadCatalogItems } from "@/lib/data/data";
import type { CatalogItem } from "@/lib/types/catalog.types";

export async function getItems(): Promise<CatalogItem[]> {
  return loadCatalogItems();
}

export async function getItemById(id: string): Promise<CatalogItem | undefined> {
  const items = await loadCatalogItems();

  return items.find((item) => item.id === id);
}

export async function getCategories(): Promise<string[]> {
  const items = await loadCatalogItems();

  return [...new Set(items.map((item) => item.category))];
}
