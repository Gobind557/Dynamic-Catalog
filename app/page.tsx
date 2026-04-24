import { CategorySection } from "@/components/CategorySection";
import { Container } from "@/components/Container";
import { getItems } from "@/lib/data";
import { groupByCategory } from "@/lib/groupByCategory";

export default function Home() {
  const items = getItems();
  const groupedItems = groupByCategory(items);
  const groupedEntries = Object.entries(groupedItems);

  return (
    <main className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="space-y-10 sm:space-y-12">
          <section className="overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-8 shadow-[0_20px_45px_rgba(76,52,31,0.08)] sm:px-8 sm:py-10 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                  Dynamic multi-category catalog
                </p>
                <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                  Explore products through one reusable catalog system
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  Categories and cards are rendered from the same shared data contract, making the experience easy to extend without hardcoded UI branches.
                </p>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-3 lg:max-w-md">
                {[
                  { label: "Items", value: items.length },
                  { label: "Categories", value: groupedEntries.length },
                  {
                    label: "Properties",
                    value: items.reduce(
                      (sum, item) => sum + item.itemprops.length,
                      0,
                    ),
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-[var(--color-border)] bg-white/70 px-4 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-[family:var(--font-heading)] text-3xl font-semibold text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="space-y-10">
            {groupedEntries.map(([category, categoryItems]) => (
              <CategorySection
                key={category}
                title={category}
                items={categoryItems}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
