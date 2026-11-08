export const siteConfig = {
  name: "ABCIOUS",
  tagline: "We ship AI products that make ambitious companies look inevitable.",
  description:
    "ABCIOUS is a software and AI agency for founders, product leaders, and growth-minded brands. We design and ship products that feel premium, perform, and convert.",
  url: "https://abcious.com",
  locale: "en_US",
  email: "hello@abcious.com",
  keywords: [
    "AI agency",
    "product design",
    "software development",
    "machine learning",
    "startup product studio",
  ],
  nav: [
    { href: "/#work", label: "Work" },
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://x.com", label: "X" },
    { href: "https://dribbble.com", label: "Dribbble" },
  ],
  cta: {
    label: "Start a project",
    href: "/#contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
