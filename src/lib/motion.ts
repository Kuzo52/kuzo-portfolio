export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOut },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};
