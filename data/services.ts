export type Service = {
  id: string;
  title: string;
  outcome: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "ai-products",
    title: "AI Product Build",
    outcome: "Ship copilots and platforms that operators trust on day one.",
    description:
      "From discovery to production: model selection, retrieval, evals, and interfaces designed for real workflows — not demos.",
    deliverables: ["Product strategy", "LLM architecture", "UI systems", "Launch & eval harness"],
  },
  {
    id: "product-design",
    title: "Product Design",
    outcome: "Make complex software feel inevitable and expensive.",
    description:
      "Interaction design, information architecture, and motion that clarify hierarchy and accelerate decisions.",
    deliverables: ["UX research", "Interface design", "Design systems", "Prototype & test"],
  },
  {
    id: "engineering",
    title: "Full-Stack Engineering",
    outcome: "Production-grade web apps that stay fast as you scale.",
    description:
      "Next.js platforms, APIs, data layers, and observability — built for performance, accessibility, and maintainability.",
    deliverables: ["App architecture", "API & data", "CI/CD", "Performance audits"],
  },
  {
    id: "brand-web",
    title: "Brand & Web Experiences",
    outcome: "Sites that convert because they feel like the product already won.",
    description:
      "Positioning, visual systems, and scroll-led storytelling for launches that need to look premium under pressure.",
    deliverables: ["Brand direction", "Marketing sites", "Case study systems", "Motion design"],
  },
];
