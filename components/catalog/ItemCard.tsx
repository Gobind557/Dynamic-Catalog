import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import type { CatalogItem } from "@/lib/types/catalog.types";

interface ItemCardProps {
  item: CatalogItem;
}

function ItemCardComponent({ item }: ItemCardProps) {
  return (
    <Link
      href={`/item/${item.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card-strong)] shadow-[0_16px_40px_rgba(76,52,31,0.08)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.itemname}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <span className="w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
          {item.category}
        </span>
        <div className="space-y-2">
          <h3 className="font-[family:var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--color-ink)]">
            {item.itemname}
          </h3>
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            Explore the dynamically rendered specifications for this catalog item.
          </p>
        </div>
      </div>
    </Link>
  );
}

export const ItemCard = memo(ItemCardComponent);
