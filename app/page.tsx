import { CatalogShell } from "@/components/CatalogShell";
import { getItems } from "@/lib/data";

export default function Home() {
  const items = getItems();

  return <CatalogShell items={items} />;
}
