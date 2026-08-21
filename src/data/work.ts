export type WorkKind = "product" | "research" | "tool" | "experiment";

export type WorkEntry = {
  name: string;
  repo: string;
  url: string;
  kind: WorkKind;
  area: string;
  summary: string;
  stack: string[];
  featured?: boolean;
};

export const workEntries: WorkEntry[] = [
  {
    name: "The Torque",
    repo: "the-torque",
    url: "https://github.com/simlexx-k/the-torque",
    kind: "product",
    area: "Vehicle intelligence",
    summary: "Public X vehicle signals become provenance-aware, searchable listings with multimodal enrichment, listing history and market context.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini", "Docker"],
    featured: true,
  },
  {
    name: "iStatus",
    repo: "a3s-labs-stat",
    url: "https://github.com/simlexx-k/a3s-labs-stat",
    kind: "product",
    area: "Infrastructure operations",
    summary: "Private VPS and Docker operations tooling spanning telemetry, logs, alerts, historical metrics, audit trails and role-gated lifecycle control.",
    stack: ["Next.js", "Robyn", "Docker", "SQLite", "Cloudflare Access"],
    featured: true,
  },
  {
    name: "RotorFrontier",
    repo: "rotorfrontier",
    url: "https://github.com/simlexx-k/rotorfrontier",
    kind: "product",
    area: "Real-time simulation",
    summary: "Browser-native tactical helicopter simulation with a fixed-step flight model, real Nairobi terrain, autonomous threats, weapons and WebRTC co-op.",
    stack: ["React", "TypeScript", "Babylon.js", "WebRTC", "Web Audio"],
    featured: true,
  },
  {
    name: "BeeUnity / QueenBeeAcoustics",
    repo: "QueenBeeAcoustics",
    url: "https://github.com/simlexx-k/QueenBeeAcoustics",
    kind: "research",
    area: "Applied machine learning",
    summary: "Bee-health research combining acoustic queen detection with weather, NDVI, contextual modelling, calibration and API-serving experiments.",
    stack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "FastAPI"],
    featured: true,
  },
  {
    name: "AidLens",
    repo: "AidLens",
    url: "https://github.com/simlexx-k/AidLens",
    kind: "research",
    area: "Development evidence intelligence",
    summary: "A provenance-first evidence layer for development-program evaluations, with lexical retrieval as a measurable baseline before domain embeddings, reranking and evidence graphs.",
    stack: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "Alembic"],
    featured: true,
  },
  {
    name: "Vesuvius Surface Detection",
    repo: "vesuvius-surface-detection",
    url: "https://github.com/simlexx-k/vesuvius-surface-detection",
    kind: "research",
    area: "3D computer vision",
    summary: "Topology-aware 3D papyrus-surface segmentation work for virtual unwrapping, evaluated with Surface Dice, TopoScore and VOI rather than overlap alone.",
    stack: ["Python", "3D segmentation", "Kaggle", "CT volumes"],
  },
  {
    name: "KCSE Results Capture Tool",
    repo: "kcse-tool",
    url: "https://github.com/simlexx-k/kcse-tool",
    kind: "tool",
    area: "Education data",
    summary: "FastAPI + Astro tooling for single and batch KCSE result retrieval, nominal-roll PDF parsing, prefix search, filtering and export without retaining fetched result data server-side.",
    stack: ["FastAPI", "Astro", "PDF parsing", "CSV", "HTTPX"],
  },
  {
    name: "KJSEA Results",
    repo: "kjsea-results",
    url: "https://github.com/simlexx-k/kjsea-results",
    kind: "tool",
    area: "Education analytics",
    summary: "Bulk KJSEA assessment retrieval and analysis with pathway scores, sortable results, dashboard summaries and print/CSV reporting.",
    stack: ["Next.js", "TypeScript", "TanStack Table", "CSV", "Reporting"],
  },
  {
    name: "Modish Mix Backend",
    repo: "modish-backend",
    url: "https://github.com/simlexx-k/modish-backend",
    kind: "product",
    area: "Commerce infrastructure",
    summary: "Async FastAPI commerce backend with catalog, cart and order APIs, M-Pesa STK payments and reconciliation, WorkOS authentication, admin operations and production migrations.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "M-Pesa", "WorkOS", "Alembic"],
  },
  {
    name: "LittleX",
    repo: "littleX",
    url: "https://github.com/simlexx-k/littleX",
    kind: "experiment",
    area: "AI application architecture",
    summary: "A Jaseci-stack social-platform prototype exploring graph-oriented application logic, semantic search, summarization, containerized services and cloud execution.",
    stack: ["Jaseci", "Jac", "SentenceTransformers", "MongoDB", "Docker"],
  },
];

export const workKinds: Array<{ value: "all" | WorkKind; label: string }> = [
  { value: "all", label: "All work" },
  { value: "product", label: "Products" },
  { value: "research", label: "Research" },
  { value: "tool", label: "Tools" },
  { value: "experiment", label: "Experiments" },
];
