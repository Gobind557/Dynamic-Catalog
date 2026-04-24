import type { CatalogItem, GroupedCatalogItems } from "@/lib/types";

export function groupByCategory(items: CatalogItem[]): GroupedCatalogItems {
  return items.reduce<GroupedCatalogItems>((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);

    return groups;
  }, {});
}
