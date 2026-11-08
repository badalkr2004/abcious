export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  metrics: ProjectMetric[];
  tags: string[];
  /** Placeholder image slot — replace with real assets */
  cover: {
    alt: string;
    /** CSS gradient used until real imagery lands */
    placeholder: string;
  };
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "northline-commerce",
    title: "Northline Commerce OS",
    client: "Northline",
    year: "2025",
    category: "AI Product",
    summary:
      "An AI-native commerce operating system that turned fragmented brand ops into a single decisive workflow.",
    problem:
      "Northline's growth team was drowning in dashboards. Merchandising, support, and ads lived in separate tools with no shared signal — decisions lagged weeks behind demand.",
    approach:
      "We mapped the decision loops that actually moved revenue, then designed a product around those loops: intake, ranking, action, and measurement — with AI copilots at each gate.",
    solution:
      "A modular OS with real-time demand scoring, auto-generated campaign briefs, and an operator console that feels like a trading floor for brand commerce.",
    testimonial: {
      quote:
        "ABCIOUS didn't just ship software — they gave us a new operating rhythm. Our team finally moves at the speed of the market.",
      name: "Priya Menon",
      role: "VP Growth, Northline",
    },
    metrics: [
      { label: "Decision latency", value: "−68%" },
      { label: "Campaign velocity", value: "3.4×" },
      { label: "Paid efficiency", value: "+22%" },
    ],
    tags: ["AI", "Commerce", "Product Design", "Systems"],
    cover: {
      alt: "Northline Commerce OS product interface — image slot",
      placeholder: "linear-gradient(135deg, #0a3d3a 0%, #0f6e6a 45%, #d4f34a 100%)",
    },
    accent: "#0f6e6a",
  },
  {
    slug: "helix-care",
    title: "Helix Care Copilot",
    client: "Helix Health",
    year: "2025",
    category: "Healthcare AI",
    summary:
      "A clinical assistant that surfaces the right patient context at the exact moment of care — without slowing clinicians down.",
    problem:
      "Clinicians spent more time hunting records than talking to patients. Legacy EHR search was slow, noisy, and easy to mistrust.",
    approach:
      "We shadowed rounds, instrumented friction, and built retrieval that respects clinical hierarchy — urgency first, narrative second, audit always on.",
    solution:
      "A quiet, keyboard-first copilot embedded in the care workflow with citation-backed answers and one-tap documentation assist.",
    testimonial: {
      quote:
        "It feels invisible until you need it — which is exactly what clinical software should be.",
      name: "Dr. James Okonkwo",
      role: "Chief Medical Officer, Helix",
    },
    metrics: [
      { label: "Chart find time", value: "−54%" },
      { label: "Doc completion", value: "+31%" },
      { label: "Clinician NPS", value: "72" },
    ],
    tags: ["Healthcare", "LLM", "UX", "Compliance"],
    cover: {
      alt: "Helix Care Copilot interface — image slot",
      placeholder: "linear-gradient(145deg, #141511 0%, #1a3a4a 50%, #3dcfc4 100%)",
    },
    accent: "#3dcfc4",
  },
  {
    slug: "orbit-brand",
    title: "Orbit Brand Platform",
    client: "Orbit Collective",
    year: "2024",
    category: "Brand + Web",
    summary:
      "A premium digital system for a multi-brand collective that needed to look inevitable at every touchpoint.",
    problem:
      "Five brands under one roof shared no visual system. Sites felt rented, not owned — and conversion suffered.",
    approach:
      "We built a brand architecture that scales from house to child brands, then shipped a composable Next.js system with editorial motion.",
    solution:
      "A living brand platform: design tokens, case study templates, and a storefront that adapts by brand while staying unmistakably Orbit.",
    testimonial: {
      quote:
        "Every brand finally feels expensive — and still like one family. The site sells before anyone reads a word.",
      name: "Sofia Alvarez",
      role: "Founder, Orbit Collective",
    },
    metrics: [
      { label: "Site conversion", value: "+41%" },
      { label: "Brand recall", value: "+28%" },
      { label: "Time on site", value: "2.1×" },
    ],
    tags: ["Brand", "Web", "Design System", "Motion"],
    cover: {
      alt: "Orbit Brand Platform — image slot",
      placeholder: "linear-gradient(160deg, #c45a2c 0%, #141511 55%, #d4f34a 100%)",
    },
    accent: "#c45a2c",
  },
  {
    slug: "vector-ops",
    title: "Vector Ops Intelligence",
    client: "Vector Freight",
    year: "2024",
    category: "Data Product",
    summary:
      "Predictive logistics intelligence that turned reactive dispatch into calm, forward-looking operations.",
    problem:
      "Dispatch lived in spreadsheets and gut feel. Delays cascaded before anyone could see them coming.",
    approach:
      "We modeled delay risk as a product surface — maps, queues, and alerts designed for operators under pressure, not analysts at desks.",
    solution:
      "A real-time ops console with forecast lanes, exception playbooks, and AI-ranked interventions for the next four hours.",
    testimonial: {
      quote:
        "We stopped firefighting. Vector Ops gave us the afternoon before the crisis.",
      name: "Marcus Chen",
      role: "COO, Vector Freight",
    },
    metrics: [
      { label: "On-time rate", value: "+18%" },
      { label: "Exception cost", value: "−35%" },
      { label: "Planner hours", value: "−40%" },
    ],
    tags: ["Logistics", "ML", "Dashboard", "Ops"],
    cover: {
      alt: "Vector Ops Intelligence — image slot",
      placeholder: "linear-gradient(120deg, #0c0d0b 0%, #0f6e6a 40%, #e6e0d4 100%)",
    },
    accent: "#0f6e6a",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[0];
  return projects[(i + 1) % projects.length];
}
