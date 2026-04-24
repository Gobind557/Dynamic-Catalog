export interface ItemProperty {
  label: string;
  value: string;
}

export interface CatalogItem {
  id: string;
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProperty[];
}

export type GroupedCatalogItems = Record<string, CatalogItem[]>;
