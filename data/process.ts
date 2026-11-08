export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnose",
    summary: "We find the decision that actually moves the business.",
    detail:
      "Workshops, stakeholder interviews, and a ruthless audit of the current stack. We leave with a clear problem frame and success metrics — not a vibe.",
  },
  {
    number: "02",
    title: "Architect",
    summary: "Product, model, and system design as one conversation.",
    detail:
      "We map flows, data, and AI touchpoints together so the interface, infrastructure, and model choices reinforce each other.",
  },
  {
    number: "03",
    title: "Build",
    summary: "Ship in vertical slices with proof at every checkpoint.",
    detail:
      "Weekly demos, instrumented prototypes, and production paths from day one. Design and engineering stay in the same room.",
  },
  {
    number: "04",
    title: "Prove",
    summary: "Measure outcomes, harden, and hand over ownership.",
    detail:
      "Evals, performance budgets, docs, and a clean runway for your team — so the product keeps getting sharper after we leave.",
  },
];
