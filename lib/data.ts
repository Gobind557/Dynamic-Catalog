import catalogItems from "@/data/catalog.json";
import type { CatalogItem } from "@/lib/types";

type CatalogItemRecord = Omit<CatalogItem, "id"> & {
  id?: string;
};

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const items = (catalogItems as CatalogItemRecord[]).map((item, index) => ({
  ...item,
  id:
    item.id ??
    [item.category, item.itemname, String(index + 1)]
      .map(slugify)
      .filter(Boolean)
      .join("-"),
}));

export function getItems(): CatalogItem[] {
  return items;
}

export function getItemById(id: string): CatalogItem | undefined {
  return items.find((item) => item.id === id);
}

export function getCategories(): string[] {
  return [...new Set(items.map((item) => item.category))];
}
