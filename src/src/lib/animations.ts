import { type Variants, type Transition, type ViewportOptions } from "framer-motion";

export const LUXURY_EASE = [0.25, 0.1, 0.25, 1] as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: LUXURY_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: LUXURY_EASE },
  },
};

export const heroImageScale: Variants = {
  hidden: { scale: 1.08 },
  visible: {
    scale: 1,
    transition: { duration: 1.2, ease: LUXURY_EASE },
  },
};

export const buttonHoverTap = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { ease: LUXURY_EASE, duration: 0.2 },
};

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: LUXURY_EASE,
};

export const sectionViewport: ViewportOptions = {
  once: true,
  amount: 0.2,
};