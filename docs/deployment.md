# Deployment policy

A3S Labs is deployed as a static Astro site on Vercel.

## Production

- Production branch: `master`
- Production output: `dist`
- Vercel should build **production only**.
- Preview branch tracking/builds are intentionally disabled in the Vercel project settings to reduce unnecessary build usage.
- Do not re-enable automatic preview deployments without an explicit reason.

A merge or push to `master` is the only Git event that should create a Vercel deployment.

## Branch and pull-request validation

Feature branches and pull requests are validated by GitHub Actions instead of Vercel previews. `.github/workflows/site-ci.yml` installs dependencies and runs the Astro production build.

This separation keeps review-time validation available without consuming Vercel preview-build resources.

## Runtime assumptions

- Node.js: read from `.nvmrc`
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`

The root `vercel.json` pins those build settings so the project cannot fall back to its former Next.js configuration.

## Required public files

The production deployment must continue to expose:

- `/ads.txt`
- `/robots.txt`
- `/sitemap.xml`

`public/ads.txt` contains the Google publisher declaration for the A3S Labs domain.
