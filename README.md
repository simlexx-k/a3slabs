# A3S Labs

The public A3S Labs product and research site.

This repository is intentionally static-first. It uses Astro to present real products, engineering work and applied research without turning the corporate site into another application runtime.

## Stack

- Astro 7.2
- TypeScript
- Plain CSS design system
- Static output for Vercel
- Native light/dark theme toggle

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

Product metadata lives in `src/data/products.ts`. Individual product pages are generated from that source through `src/pages/products/[slug].astro`.

The current public portfolio includes The Torque, iStatus, RotorFrontier, ShuleYangu and BeeUnity.

## Ads.txt

`public/ads.txt` must remain available at `https://a3slabs.co.ke/ads.txt` for the configured Google AdSense publisher.
