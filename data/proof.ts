export type Metric = {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Logo = {
  id: string;
  name: string;
};

export const metrics: Metric[] = [
  { id: "projects", value: 48, suffix: "+", label: "Products shipped" },
  { id: "retention", value: 94, suffix: "%", label: "Client retention" },
  { id: "lift", value: 2.6, suffix: "×", label: "Avg. conversion lift" },
  { id: "weeks", value: 12, suffix: "w", label: "Typical first release" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "ABCIOUS operates like a senior product team embedded in ours. The work looks expensive because the thinking is expensive.",
    name: "Elena Voss",
    role: "CEO",
    company: "Brightline",
  },
  {
    id: "t2",
    quote:
      "They translated ambiguous AI ambition into a shippable roadmap — then actually shipped it without the usual theater.",
    name: "Rohan Kapoor",
    role: "Head of Product",
    company: "Stackfield",
  },
  {
    id: "t3",
    quote:
      "Our site and product finally feel like the same company. That consistency alone paid for the engagement.",
    name: "Amelia Wright",
    role: "CMO",
    company: "Lumen Goods",
  },
];

export const logos: Logo[] = [
  { id: "l1", name: "Northline" },
  { id: "l2", name: "Helix Health" },
  { id: "l3", name: "Orbit Collective" },
  { id: "l4", name: "Vector Freight" },
  { id: "l5", name: "Brightline" },
  { id: "l6", name: "Stackfield" },
  { id: "l7", name: "Lumen Goods" },
  { id: "l8", name: "Parcel & Co" },
];

export const tickerItems = [
  "−68% decision latency · Northline",
  "+41% conversion · Orbit",
  "3.4× campaign velocity · Northline",
  "−54% chart find time · Helix",
  "+18% on-time rate · Vector",
  "94% client retention · ABCIOUS",
];
