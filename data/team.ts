export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Placeholder portrait slot */
  placeholder: string;
};

export const philosophy = {
  eyebrow: "About",
  title: "Quiet confidence. Loud outcomes.",
  body: "ABCIOUS is a small senior team that builds AI-native products and brand experiences for companies that refuse to look provisional. We care about craft, clarity, and the commercial result — in that order only when they conflict.",
};

export const team: TeamMember[] = [
  {
    id: "m1",
    name: "Alex Rivera",
    role: "Founder · Product",
    bio: "Ex-product lead for AI platforms. Obsessed with decision surfaces.",
    placeholder: "linear-gradient(160deg, #0f6e6a, #141511)",
  },
  {
    id: "m2",
    name: "Jordan Blake",
    role: "Design Director",
    bio: "Editorial systems, motion, and interfaces that earn trust fast.",
    placeholder: "linear-gradient(160deg, #c45a2c, #0c0d0b)",
  },
  {
    id: "m3",
    name: "Sam Okada",
    role: "Engineering Lead",
    bio: "Full-stack and ML ops. Ships the boring reliability others skip.",
    placeholder: "linear-gradient(160deg, #3dcfc4, #0a3d3a)",
  },
];
