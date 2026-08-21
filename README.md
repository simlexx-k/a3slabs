# A3S Labs

The public A3S Labs product, research and engineering site.

This repository is intentionally static-first. Astro presents real products, engineering work, case studies and applied research without turning the corporate site into another application runtime.

## Stack

- Astro 7.2
- TypeScript
- Plain CSS design system
- Static output for Vercel
- Native light/dark theme toggle
- GitHub Actions build validation

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Content model

- Product metadata: `src/data/products.ts`
- Product pages: `src/pages/products/[slug].astro`
- Curated public-work index: `src/data/work.ts` + `src/pages/work.astro`
- Case studies: `src/data/caseStudies.ts` + `src/pages/case-studies/[slug].astro`
- Repository-grounded build log: `src/data/builds.ts` + `src/pages/builds.astro`
- Build-log RSS: `src/pages/builds.xml.ts`
- Research and engineering narratives: `src/pages/research.astro`, `src/pages/engineering.astro`

The flagship portfolio includes The Torque, iStatus, RotorFrontier, ShuleYangu and BeeUnity. `/work` separately curates the broader public repository trail so experiments and focused tools remain visible without being presented as equivalent to production products.

Product pages emit `SoftwareApplication` structured data, case studies emit `TechArticle` metadata, and the public-work index exposes its curated repositories as a `CollectionPage` of source-code entities.

## Deployment policy

Vercel is reserved for **production builds from `master`**. Automatic Preview builds are intentionally disabled in the Vercel project settings and restricted in `vercel.json` to reduce resource consumption.

Branches and pull requests are validated with GitHub Actions instead. See `docs/deployment.md`.

## Ads.txt

`public/ads.txt` must remain available at `https://a3slabs.co.ke/ads.txt` for the configured Google AdSense publisher.
