import rawCatalogItems from "@/lib/data/catalog.json";
import type { CatalogItem } from "@/lib/types/catalog.types";

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

const catalogItems = (rawCatalogItems as CatalogItemRecord[]).map(
  (item, index) => ({
    ...item,
    id:
      item.id ??
      [item.category, item.itemname, String(index + 1)]
        .map(slugify)
        .filter(Boolean)
        .join("-"),
  }),
);

export async function loadCatalogItems(): Promise<CatalogItem[]> {
  return catalogItems;
}
