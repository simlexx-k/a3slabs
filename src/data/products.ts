export type ProductReadout = {
  label: string;
  value: string;
};

export type ProductMedia = {
  src: string;
  alt: string;
  caption: string;
  sourceUrl: string;
  kind: "product-mark" | "brand-artwork" | "research-figure";
  fit?: "contain" | "cover";
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  accent: string;
  liveUrl?: string;
  repoUrl?: string;
  capabilities: string[];
  stack: string[];
  previewLabel: string;
  runtime: string;
  flow: string[];
  readout: ProductReadout[];
  media?: ProductMedia[];
};

export const products: Product[] = [
  {
    slug: "the-torque",
    name: "The Torque",
    eyebrow: "Vehicle intelligence",
    summary: "Public vehicle signals turned into structured, searchable market intelligence.",
    description:
      "An AI-assisted vehicle listing platform that ingests public X posts and media, preserves source provenance, extracts structured vehicle details, and layers in listing history, search, comparison and market context.",
    status: "Live product",
    accent: "lime",
    liveUrl: "https://torque.a3slabs.co.ke",
    repoUrl: "https://github.com/simlexx-k/the-torque",
    capabilities: [
      "Official X API ingestion and source tracking",
      "Multimodal structured enrichment",
      "Listing history and market signals",
      "Watchlists, comparison and search",
      "VPS + PostgreSQL + FastAPI backend",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini", "Docker", "Cloudflare"],
    previewLabel: "Signal → listing pipeline",
    runtime: "Vercel frontend · VPS backend",
    flow: ["Public signals", "Enrichment", "Vehicle records", "Marketplace"],
    readout: [
      { label: "Source", value: "X API" },
      { label: "Enrichment", value: "Multimodal" },
      { label: "Persistence", value: "PostgreSQL" },
      { label: "Delivery", value: "Web" },
    ],
    media: [
      {
        src: "https://raw.githubusercontent.com/simlexx-k/the-torque/main/frontend/public/icons/icon-192.jpg",
        alt: "The Torque current product icon",
        caption: "Current product mark committed with The Torque frontend.",
        sourceUrl: "https://github.com/simlexx-k/the-torque/blob/main/frontend/public/icons/icon-192.jpg",
        kind: "product-mark",
        fit: "contain",
      },
    ],
  },
  {
    slug: "istatus",
    name: "iStatus",
    eyebrow: "Infrastructure operations",
    summary: "A private operations console for VPS, Docker workloads, alerts, logs and lifecycle control.",
    description:
      "A3S Labs' infrastructure observability surface combines host telemetry, Docker metrics, searchable logs, historical trends, alerting, audit trails and role-gated container controls behind Cloudflare Access.",
    status: "Operational tooling",
    accent: "cyan",
    repoUrl: "https://github.com/simlexx-k/a3s-labs-stat",
    capabilities: [
      "Host and container telemetry",
      "Container logs and live Docker events",
      "Persistent metrics history and alerts",
      "Role-gated lifecycle operations",
      "Cloudflare Access authentication boundary",
    ],
    stack: ["Next.js", "Robyn", "Docker", "SQLite", "Cloudflare Access", "Vercel"],
    previewLabel: "Operations control plane",
    runtime: "Private infrastructure console",
    flow: ["Host", "Telemetry", "Alerts + logs", "Operations"],
    readout: [
      { label: "Scope", value: "Host + Docker" },
      { label: "History", value: "Persistent" },
      { label: "Access", value: "Cloudflare" },
      { label: "Control", value: "Role-gated" },
    ],
    media: [
      {
        src: "https://raw.githubusercontent.com/simlexx-k/a3s-labs-stat/main/web-app/public/brand/a3s-labs-platform-hero-banner.png",
        alt: "A3S Labs infrastructure platform artwork used by iStatus",
        caption: "Infrastructure platform artwork committed with the iStatus web application.",
        sourceUrl: "https://github.com/simlexx-k/a3s-labs-stat/blob/main/web-app/public/brand/a3s-labs-platform-hero-banner.png",
        kind: "brand-artwork",
        fit: "cover",
      },
    ],
  },
  {
    slug: "rotorfrontier",
    name: "RotorFrontier",
    eyebrow: "Simulation",
    summary: "A browser-native tactical helicopter flight and combat simulator.",
    description:
      "A real-time simulation experiment with custom helicopter dynamics, georeferenced terrain, autonomous threats, weapons, mission progression, controller support and two-player WebRTC co-op running directly in modern browsers.",
    status: "Production alpha",
    accent: "amber",
    liveUrl: "https://rotorfrontier.kiptookosgeisimon.chatgpt.site",
    repoUrl: "https://github.com/simlexx-k/rotorfrontier",
    capabilities: [
      "60 Hz deterministic helicopter dynamics",
      "Georeferenced terrain and streamed map imagery",
      "Autonomous air and ground threats",
      "Weapons, sensors and target tracking",
      "WebRTC peer-to-peer co-op",
    ],
    stack: ["React", "TypeScript", "Babylon.js", "WebRTC", "Web Audio", "IndexedDB"],
    previewLabel: "Real-time simulation loop",
    runtime: "Modern desktop browser",
    flow: ["Input", "Flight model", "World + AI", "Render + audio"],
    readout: [
      { label: "Simulation", value: "60 Hz" },
      { label: "Terrain", value: "Georeferenced" },
      { label: "Multiplayer", value: "WebRTC" },
      { label: "Runtime", value: "Browser" },
    ],
  },
  {
    slug: "shuleyangu",
    name: "ShuleYangu",
    eyebrow: "Education systems",
    summary: "A growing family of school operations, learning and student-facing tools.",
    description:
      "A multi-surface education platform spanning school management, mobile experiences, finance workflows, STEM learning and subject-specific tools. The work is intentionally split into focused applications rather than one monolith.",
    status: "Active development",
    accent: "blue",
    repoUrl: "https://github.com/simlexx-k/shuleyangu-math",
    capabilities: [
      "School administration workflows",
      "Student and parent experiences",
      "Mobile-first learning surfaces",
      "Finance and operational tooling",
      "STEM and subject-specific applications",
    ],
    stack: ["FastAPI", "Android", "Vue", "TypeScript", "PostgreSQL", "Docker"],
    previewLabel: "Education platform surfaces",
    runtime: "Web + mobile applications",
    flow: ["School data", "Operations", "Learning tools", "User surfaces"],
    readout: [
      { label: "Users", value: "School ecosystem" },
      { label: "Surfaces", value: "Web + mobile" },
      { label: "Structure", value: "Multi-app" },
      { label: "Focus", value: "Education ops" },
    ],
  },
  {
    slug: "beeunity",
    name: "BeeUnity",
    eyebrow: "Applied ML research",
    summary: "Multimodal bee-health intelligence from acoustics, climate and environmental signals.",
    description:
      "An applied research system combining queen-presence acoustic classification with weather, NDVI and hive-context modelling to explore queen vitality, hive stress and occupancy risk.",
    status: "Research system",
    accent: "honey",
    repoUrl: "https://github.com/simlexx-k/QueenBeeAcoustics",
    capabilities: [
      "Acoustic CNN classification",
      "Calibrated class thresholds",
      "Weather and NDVI feature pipelines",
      "Gradient-boosted contextual modelling",
      "FastAPI inference surface",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "FastAPI", "Kaggle"],
    previewLabel: "Multimodal research pipeline",
    runtime: "Research workflow + FastAPI",
    flow: ["Hive audio", "Climate + NDVI", "Models", "Health signal"],
    readout: [
      { label: "Primary signal", value: "Audio" },
      { label: "Context", value: "Weather + NDVI" },
      { label: "Models", value: "CNN + boosted" },
      { label: "Serving", value: "FastAPI" },
    ],
    media: [
      {
        src: "https://raw.githubusercontent.com/simlexx-k/QueenBeeAcoustics/main/artifacts/figures/acoustic_confusion_matrix.png",
        alt: "BeeUnity acoustic classifier confusion matrix",
        caption: "Acoustic classifier confusion matrix committed as a research artifact.",
        sourceUrl: "https://github.com/simlexx-k/QueenBeeAcoustics/blob/main/artifacts/figures/acoustic_confusion_matrix.png",
        kind: "research-figure",
        fit: "contain",
      },
      {
        src: "https://raw.githubusercontent.com/simlexx-k/QueenBeeAcoustics/main/artifacts/figures/sequence_cnn_pr_roc.png",
        alt: "BeeUnity sequence CNN precision-recall and ROC evaluation figure",
        caption: "Sequence CNN precision-recall and ROC evaluation committed with the model artifacts.",
        sourceUrl: "https://github.com/simlexx-k/QueenBeeAcoustics/blob/main/artifacts/figures/sequence_cnn_pr_roc.png",
        kind: "research-figure",
        fit: "contain",
      },
    ],
  },
];

export const featuredProducts = products.slice(0, 5);
