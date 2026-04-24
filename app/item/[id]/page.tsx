import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { DynamicProps } from "@/components/DynamicProps";
import { getItemById } from "@/lib/data";

interface ItemDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const item = getItemById(id);

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

          <section className="grid gap-8 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[0_18px_40px_rgba(76,52,31,0.08)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <Image
                src={item.image}
                alt={item.itemname}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="space-y-3">
                <span className="inline-flex w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {item.category}
                </span>
                <h1 className="font-[family:var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  {item.itemname}
                </h1>
                <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Every specification below is rendered from the item&apos;s `itemprops` array, keeping the detail experience flexible across any catalog category.
                </p>
              </div>

              <DynamicProps itemprops={item.itemprops} />
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
