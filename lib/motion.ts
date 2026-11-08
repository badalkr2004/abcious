export const easeSoft = [0.22, 1, 0.36, 1] as const;
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const duration = {
  fast: 0.28,
  base: 0.5,
  slow: 0.9,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeSoft },
  },
};

export const stagger = {
  show: {
    transition: { staggerChildren: 0.09 },
  },
};
