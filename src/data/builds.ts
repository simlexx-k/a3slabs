export type BuildEntry = {
  date: string;
  project: string;
  title: string;
  summary: string;
  accent: string;
  tags: string[];
  commitUrl: string;
  repoUrl: string;
};

export const buildEntries: BuildEntry[] = [
  {
    date: "2026-08-20",
    project: "The Torque",
    title: "Multi-source X ingestion and dealer-thread recovery",
    summary:
      "Expanded the ingestion runtime from one tracked X account to isolated per-source cursors, then taught the adapter to recover same-dealer thread roots so follow-up replies can enrich the original vehicle listing instead of becoming disconnected records.",
    accent: "lime",
    tags: ["X API", "FastAPI", "threading", "ingestion"],
    commitUrl: "https://github.com/simlexx-k/the-torque/commit/631fbcbff4fa0fd180f2ca65c975c73c2288ec38",
    repoUrl: "https://github.com/simlexx-k/the-torque",
  },
  {
    date: "2026-08-20",
    project: "The Torque",
    title: "Removed catalogue ceilings across the product",
    summary:
      "Moved listing retrieval beyond the old fixed first-page limits so inventory, market snapshots, comparisons, watchlists and source signals can follow the complete paginated catalogue.",
    accent: "lime",
    tags: ["pagination", "Next.js", "API", "catalogue"],
    commitUrl: "https://github.com/simlexx-k/the-torque/commit/537a4d74ee985744bd137c2a861374dcc50592c4",
    repoUrl: "https://github.com/simlexx-k/the-torque",
  },
  {
    date: "2026-08-15",
    project: "RotorFrontier",
    title: "Streamed real Nairobi terrain and map tiles",
    summary:
      "Replaced generic theatre geometry with georeferenced Nairobi terrain and streamed map imagery, pushing the browser simulation closer to a real-world flight environment.",
    accent: "amber",
    tags: ["Babylon.js", "terrain", "maps", "simulation"],
    commitUrl: "https://github.com/simlexx-k/rotorfrontier/commit/271712bf382011d163c646edd169217981c30beb",
    repoUrl: "https://github.com/simlexx-k/rotorfrontier",
  },
  {
    date: "2026-08-15",
    project: "RotorFrontier",
    title: "Hardened the production build path",
    summary:
      "Added a native Next.js Vercel build path, CI validation and type-check scope fixes so a real-time browser simulation could move from local iteration into a repeatable deployment workflow.",
    accent: "amber",
    tags: ["Next.js", "Vercel", "CI", "deployment"],
    commitUrl: "https://github.com/simlexx-k/rotorfrontier/commit/1d915bb0ab0f5c2aa43b1363e8e4c640c9b2581c",
    repoUrl: "https://github.com/simlexx-k/rotorfrontier",
  },
  {
    date: "2026-08-11",
    project: "iStatus",
    title: "Split infrastructure telemetry into dedicated operating views",
    summary:
      "Separated telemetry into focused pages after rebuilding the application shell, improving the path from overview metrics to logs, workload operations and deeper infrastructure inspection.",
    accent: "cyan",
    tags: ["observability", "Docker", "Next.js", "UX"],
    commitUrl: "https://github.com/simlexx-k/a3s-labs-stat/commit/e99c2dcc0c709598a891b731d880984bc42ef73b",
    repoUrl: "https://github.com/simlexx-k/a3s-labs-stat",
  },
  {
    date: "2026-08-11",
    project: "iStatus",
    title: "Added user and profile management behind the access boundary",
    summary:
      "Extended Cloudflare-authenticated infrastructure operations with local profile and authorization metadata, role floors, user administration and audit-aware management without storing passwords or OTPs.",
    accent: "cyan",
    tags: ["Cloudflare Access", "RBAC", "audit", "operations"],
    commitUrl: "https://github.com/simlexx-k/a3s-labs-stat/commit/bddfee35d0ee99efb59199d59dcaece544c15ede",
    repoUrl: "https://github.com/simlexx-k/a3s-labs-stat",
  },
  {
    date: "2026-01-11",
    project: "BeeUnity",
    title: "Connected climate features to yield forecasting",
    summary:
      "Refined the climate feature matrix and preferred XGBoost for yield-forecast generation as the research system expanded beyond acoustic queen detection into environmental context and downstream forecasting.",
    accent: "honey",
    tags: ["XGBoost", "climate", "forecasting", "research"],
    commitUrl: "https://github.com/simlexx-k/QueenBeeAcoustics/commit/8ce1c5b0e68a2f2436cb791ce21d8a3c9d36a48a",
    repoUrl: "https://github.com/simlexx-k/QueenBeeAcoustics",
  },
];

export const recentBuilds = buildEntries.slice(0, 4);
