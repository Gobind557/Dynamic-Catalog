# Dynamic Multi-Category Catalog

A production-grade catalog web app built with Next.js App Router, TypeScript, TailwindCSS, and zustand. The application renders multiple categories from a shared JSON contract, groups items dynamically, and displays every specification through reusable components without category-specific UI logic.

## Overview

This project is designed as a scalable catalog foundation rather than a one-off assignment build. The data layer is intentionally shaped so local JSON can later be replaced by an API with minimal UI changes, while the component structure keeps domain-specific catalog pieces separate from reusable UI primitives.

## Features

- Dynamic category grouping using a reusable `groupByCategory()` utility
- Fully dynamic `itemprops` rendering with no hardcoded property assumptions
- Responsive catalog grids: 2 columns on mobile, 3 on tablet, 4 on desktop
- Dynamic item detail pages powered by route params
- Search and category filters managed with zustand
- Debounced search input, clear action, active filter chips, and empty states
- Reusable skeleton loading states for list and detail routes
- Service-layer abstraction for API-ready data access
- Strong TypeScript typing across data, services, and UI

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- TailwindCSS 4
- zustand
- Local JSON data source

## Architecture

### Server and Client Boundary

- Server components handle data fetching through `lib/services/catalog.service.ts`
- Client components are limited to interactive UI concerns such as filters and local UI state
- zustand stores only filter state, not the catalog dataset itself

### Data Flow

1. `lib/data/catalog.json` stores the raw catalog contract
2. `lib/data/data.ts` normalizes and loads catalog items
3. `lib/services/catalog.service.ts` provides an API-ready access layer
4. Route pages fetch data from the service layer
5. Client catalog UI applies filtering and grouping for rendering

### Design Decisions

- `components/catalog/` contains domain-specific catalog UI
- `components/ui/` contains reusable layout and presentation primitives
- `DynamicProps` renders every property generically from the `itemprops` array
- `groupByCategory()` stays pure and reusable for easy testing and future reuse
- IDs are normalized in the data layer so routing and list keys stay stable even if raw JSON entries omit IDs

## Folder Structure

```text
app/
  layout.tsx
  loading.tsx
  not-found.tsx
  page.tsx
  item/
    [id]/
      loading.tsx
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

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Quality Notes

- No category-specific conditional rendering
- Dynamic property rendering comes only from `itemprops`
- Shared service and utility layers avoid duplicated route logic
- Responsive behavior is handled with Tailwind grid and spacing utilities
- The codebase is organized to scale by feature and responsibility

## Future Improvements

- Move filters into URL search params for shareable catalog state
- Add sorting and richer faceted filtering
- Add unit tests for the data utilities and service layer
- Add component and route-level tests for key user flows
- Replace local JSON with API calls plus caching/revalidation
- Add CMS or admin tooling for catalog management
