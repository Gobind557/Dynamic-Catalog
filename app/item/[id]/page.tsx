import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DynamicProps } from "@/components/catalog/DynamicProps";
import { Container } from "@/components/ui/Container";
import { getItemById } from "@/lib/services/catalog.service";

interface ItemDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const item = await getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
          >
            Back to catalog
          </Link>

          <section className="grid gap-8 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[0_18px_40px_rgba(76,52,31,0.08)] sm:p-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image
                  src={item.image}
                  alt={item.itemname}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Category", value: item.category },
                  { label: "Properties", value: item.itemprops.length },
                  { label: "Dynamic", value: "100%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-[var(--color-border)] bg-white/75 px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-[family:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {item.category}
                </span>
                <h1 className="font-[family:var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                  {item.itemname}
                </h1>
                <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Every specification below is rendered from the item&apos;s `itemprops` array, so the detail page scales cleanly across any current or future catalog category.
                </p>
              </div>

              <div className="rounded-[28px] border border-[var(--color-border)] bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                  Specification Sheet
                </p>
                <h2 className="mt-2 font-[family:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                  Dynamic properties
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Labels and values are read directly from the data contract without any category-specific display logic.
                </p>
                <div className="mt-5">
                  <DynamicProps itemprops={item.itemprops} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
