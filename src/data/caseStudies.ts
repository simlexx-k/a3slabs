export type CaseStudy = {
  slug: string;
  productSlug: string;
  title: string;
  eyebrow: string;
  accent: string;
  problem: string;
  approach: string;
  architecture: string[];
  decisions: { title: string; detail: string }[];
  evidence: { label: string; detail: string; url: string }[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-torque",
    productSlug: "the-torque",
    title: "Turning public dealer posts into durable vehicle intelligence",
    eyebrow: "Case study / Vehicle intelligence",
    accent: "lime",
    problem:
      "Vehicle listings on social platforms are useful but structurally hostile to comparison: details live in prose, images and follow-up replies; the same vehicle can be reposted; prices change; source accounts need independent retrieval state; and a fixed first page quickly stops representing the market.",
    approach:
      "The Torque keeps source provenance intact while converting public posts into structured vehicle records. The ingestion service tracks dealers independently, recovers same-dealer thread context, sends text and media through multimodal enrichment, persists listings and observations in PostgreSQL, and exposes the result through a narrow FastAPI surface consumed by a Next.js marketplace.",
    architecture: ["X sources", "Source-aware ingestion", "Thread aggregation", "Multimodal enrichment", "PostgreSQL", "Marketplace API", "Next.js UI"],
    decisions: [
      { title: "Preserve provenance", detail: "Listings retain their source post and seller account instead of hiding the public evidence behind an opaque model result." },
      { title: "Isolate source cursors", detail: "Each tracked X account advances independently so one failure or rate-limit event does not corrupt the retrieval state of another dealer." },
      { title: "Aggregate dealer threads conservatively", detail: "Only same-source conversation roots and replies are combined; unrelated replies are not merged into vehicle listings." },
      { title: "Paginate the product, not just the API", detail: "Inventory, market summaries, watchlists, comparisons and operator signals follow the full catalogue rather than silently stopping at historical 100/200-record limits." },
    ],
    evidence: [
      { label: "Multi-source + threads", detail: "Merged the multi-source pagination and thread-recovery implementation on 20 August 2026.", url: "https://github.com/simlexx-k/the-torque/commit/631fbcbff4fa0fd180f2ca65c975c73c2288ec38" },
      { label: "Thread-root recovery", detail: "Added direct recovery for same-dealer thread roots that fall outside the current timeline window.", url: "https://github.com/simlexx-k/the-torque/commit/5d6af8e5c0ce3d658eb471a78bf6c26a8927a672" },
      { label: "Complete catalogue", detail: "Moved frontend catalogue consumers onto all backend pages instead of a fixed first batch.", url: "https://github.com/simlexx-k/the-torque/commit/537a4d74ee985744bd137c2a861374dcc50592c4" },
    ],
    outcome:
      "The result is no longer a feed reader. It is an evolving market dataset with stable listing identities, seller provenance, thread-aware enrichment and retrieval that can grow beyond the first few hundred vehicles.",
  },
  {
    slug: "istatus",
    productSlug: "istatus",
    title: "Operating Docker infrastructure without exposing the control plane",
    eyebrow: "Case study / Infrastructure operations",
    accent: "cyan",
    problem:
      "A useful VPS dashboard needs more than CPU charts. Operators need container telemetry, logs, history, alerts and lifecycle actions, but the Docker socket is effectively root-equivalent and the backend should not become a public administrative API.",
    approach:
      "iStatus separates the public-facing web layer from the privileged telemetry backend. The Next.js server proxies authenticated same-origin requests, the Robyn backend remains bound to the VPS, Cloudflare Access provides the identity boundary, and write actions are additionally role-gated and audited.",
    architecture: ["Browser", "Cloudflare Access", "Next.js proxy", "Robyn API", "Docker Engine", "SQLite history + audit"],
    decisions: [
      { title: "Treat Docker access as privileged", detail: "The design explicitly treats Docker Engine access as root-equivalent and keeps lifecycle operations behind trusted identities." },
      { title: "Keep credentials server-side", detail: "Service tokens and write tokens remain in the server/runtime boundary instead of becoming NEXT_PUBLIC browser configuration." },
      { title: "Separate identity from authorization", detail: "Cloudflare handles sign-in while iStatus stores only local profile, role and status metadata needed for product authorization." },
      { title: "Persist operational context", detail: "Historical telemetry, alerts and audit records survive page refreshes and give operators a timeline rather than only instantaneous gauges." },
    ],
    evidence: [
      { label: "App shell rebuild", detail: "Rebuilt the infrastructure application shell before decomposing deeper operating views.", url: "https://github.com/simlexx-k/a3s-labs-stat/commit/d5fb28d6b65a6339352ac59f2eb704a8f9c8a0a6" },
      { label: "User management", detail: "Added profile and user-management capabilities behind the existing Access boundary.", url: "https://github.com/simlexx-k/a3s-labs-stat/commit/bddfee35d0ee99efb59199d59dcaece544c15ede" },
      { label: "Dedicated telemetry pages", detail: "Split telemetry into dedicated pages as the console grew beyond a single dashboard.", url: "https://github.com/simlexx-k/a3s-labs-stat/commit/e99c2dcc0c709598a891b731d880984bc42ef73b" },
    ],
    outcome:
      "iStatus became an operations surface rather than a stats page: telemetry, logs, history, alerts, users and container actions sit inside one access-controlled workflow while privileged backend exposure stays narrow.",
  },
  {
    slug: "rotorfrontier",
    productSlug: "rotorfrontier",
    title: "Making a real-time helicopter simulation credible in the browser",
    eyebrow: "Case study / Browser simulation",
    accent: "amber",
    problem:
      "A browser flight game quickly fails if the aircraft is only a visual object. Control response, ground constraints, terrain, AI threats, weapon feedback, audio, networking and rendering all compete inside a tight real-time loop.",
    approach:
      "RotorFrontier treats the browser as a simulation runtime: deterministic flight updates drive a Babylon.js world, terrain is georeferenced, input supports keyboard/controller interaction, AI and weapons run as game systems, and WebRTC provides peer-to-peer co-op without moving the entire simulation into a server runtime.",
    architecture: ["Input", "60 Hz flight loop", "World + terrain", "AI + weapons", "Babylon render", "Web Audio", "WebRTC peer"],
    decisions: [
      { title: "Separate simulation from rendering", detail: "Flight state evolves on a deterministic update cadence instead of being tied directly to frame-rate-dependent visual movement." },
      { title: "Use real terrain context", detail: "The Nairobi theatre moved from generic scenery toward georeferenced terrain and streamed map tiles." },
      { title: "Keep multiplayer lightweight", detail: "Peer-to-peer WebRTC is used for co-op state exchange rather than introducing a large authoritative multiplayer backend at the current product stage." },
      { title: "Ship the build path too", detail: "Production deployment and type-check scope were hardened so simulation work remains deployable instead of only running locally." },
    ],
    evidence: [
      { label: "Nairobi terrain", detail: "Streamed real Nairobi terrain and map tiles into the simulation theatre.", url: "https://github.com/simlexx-k/rotorfrontier/commit/271712bf382011d163c646edd169217981c30beb" },
      { label: "CI build validation", detail: "Added Vercel build validation in CI during production hardening.", url: "https://github.com/simlexx-k/rotorfrontier/commit/ef31bc26f754cc1b19f403a71033f5d831be95c6" },
      { label: "Type-check scope", detail: "Closed a production build blocker by correcting the Next.js type-check scope.", url: "https://github.com/simlexx-k/rotorfrontier/commit/1d915bb0ab0f5c2aa43b1363e8e4c640c9b2581c" },
    ],
    outcome:
      "The project now demonstrates a broader systems problem: real-time dynamics, terrain, controls, AI, audio, deployment and networking can coexist in a browser-native product rather than being isolated demos.",
  },
  {
    slug: "beeunity",
    productSlug: "beeunity",
    title: "Combining acoustic and environmental signals for hive intelligence",
    eyebrow: "Case study / Applied ML research",
    accent: "honey",
    problem:
      "Hive condition cannot be reduced to one tabular feature. Queen presence is audible, stress depends on context, and environmental variables such as weather and vegetation affect the interpretation of the acoustic signal.",
    approach:
      "BeeUnity combines a tuned acoustic CNN with weather, NDVI and hive-context features, then explores gradient-boosted and sequence models for contextual stress prediction. Calibrated thresholds and FastAPI serving connect the notebook work to an operational inference surface.",
    architecture: ["Hive audio", "Spectrograms", "Acoustic CNN", "Weather + NDVI", "Context models", "Calibrated verdict", "FastAPI"],
    decisions: [
      { title: "Evaluate the minority condition", detail: "Training and calibration explicitly monitor queen-absent performance rather than accepting headline accuracy that can hide the rarer class." },
      { title: "Add context instead of overloading audio", detail: "Weather, NDVI and hive metadata form a second modelling path rather than expecting the acoustic classifier to explain all hive-health conditions." },
      { title: "Calibrate outputs", detail: "Validation precision-recall behavior is used to derive class thresholds instead of assuming raw argmax probabilities are decision-ready." },
      { title: "Keep a deployment path", detail: "Model artifacts feed a FastAPI predictor and generated report assets, reducing the gap between notebook experimentation and usable software." },
    ],
    evidence: [
      { label: "Climate feature fix", detail: "Corrected the climate feature matrix used by the yield-forecast workflow.", url: "https://github.com/simlexx-k/QueenBeeAcoustics/commit/8ce1c5b0e68a2f2436cb791ce21d8a3c9d36a48a" },
      { label: "Forecast model", detail: "Preferred XGBoost for the climate yield-forecast generation path.", url: "https://github.com/simlexx-k/QueenBeeAcoustics/commit/13082eb210f9e3cafefa01018b687ac136ed3f23" },
      { label: "Application bridge", detail: "Added the BeeUnity application submodule and Kaggle exports to connect research outputs to an application surface.", url: "https://github.com/simlexx-k/QueenBeeAcoustics/commit/ac6ef1ed4195386478f4133bddb29d353503d889" },
    ],
    outcome:
      "The project demonstrates A3S Labs' preferred research pattern: isolate measurable signals, evaluate them explicitly, add contextual models where appropriate, and leave a clear route from experiment to API and product surface.",
  },
];

export const caseStudyFor = (productSlug: string) => caseStudies.find((item) => item.productSlug === productSlug);
