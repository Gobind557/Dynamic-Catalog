# Dynamic Multi-Category Catalog

A production-grade catalog web app built with Next.js App Router, TypeScript, TailwindCSS, and zustand. The application renders multiple item categories from a shared JSON data contract, groups them dynamically, and displays every item property through a reusable renderer with no category-specific UI logic.

## Features

- Dynamic multi-category catalog rendering from local JSON
- Reusable category sections, item cards, and property lists
- Fully dynamic item detail page powered by route params
- Search by item name and category filtering via zustand
- Responsive card grids for mobile, tablet, and desktop
- Loading skeletons, hover states, empty states, and smooth transitions
- Strong TypeScript typing and reusable data utilities

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- TailwindCSS 4
- zustand
- Local JSON data source designed for API-ready evolution

## Architecture Decisions

- `lib/data.ts` is the single access layer for catalog data so route pages share one source of truth.
- `groupByCategory()` is a pure utility based on `reduce()` to keep grouping reusable and easy to test.
- `DynamicProps` renders all `itemprops` entries generically, which keeps the UI extensible across new categories.
- `CatalogShell` owns client-side filtering and memoized grouping while the route page remains lightweight.
- zustand stores only UI filter state, keeping the catalog dataset itself serializable and easy to replace with future API data.

## Folder Structure

```text
app/
  item/[id]/page.tsx
  loading.tsx
  not-found.tsx
  page.tsx
components/
  catalog/
    CatalogShell.tsx
    CategorySection.tsx
    DynamicProps.tsx
    FilterBar.tsx
    ItemCard.tsx
  ui/
    Container.tsx
    EmptyState.tsx
    Skeleton.tsx
lib/
  data/
    catalog.json
    data.ts
  services/
    catalog.service.ts
  types/
    catalog.types.ts
  utils/
    groupByCategory.ts
store/
  catalog-store.ts
styles/
  globals.css
```

## How to Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Future Improvements

- Replace the local JSON loader with real API requests and server caching
- Add sorting controls and URL-synced filters
- Introduce unit tests for utilities and component behavior
- Add pagination or infinite scrolling for larger datasets
- Support CMS-driven content and admin catalog management
