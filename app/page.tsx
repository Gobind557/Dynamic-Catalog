import { CatalogShell } from "@/components/catalog/CatalogShell";
import { getItems } from "@/lib/services/catalog.service";

export default async function Home() {
  const items = await getItems();

  return <CatalogShell items={items} />;
}
