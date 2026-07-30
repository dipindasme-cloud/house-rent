"use client";

import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";

const values = [
  {
    title: "Curated Excellence",
    description:
      "Every property is hand-selected, not just listed. Our team personally visits and verifies each home to ensure it meets our standards before it ever reaches your screen.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        <path d="M12 2v15.77" />
      </svg>
    ),
  },
  {
    title: "White-Glove Service",
    description:
      "From first inquiry to move-in day, you're paired with a dedicated concierge who handles every detail — paperwork, inspections, utilities, and beyond.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Design-First Living",
    description:
      "We believe a home should inspire. Every listing is evaluated for its architectural integrity, natural light, spatial flow, and material quality.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function AboutValues() {
  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start gap-4 text-left"
          >
            <motion.span
              variants={fadeIn}
              className="font-body text-eyebrow"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-h1 max-w-xl"
            >
              Values that shape every experience
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="flex flex-col gap-4 bg-surface rounded-2xl border border-border p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl"
              >
                <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl shrink-0">
                  {value.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3 font-body">{value.title}</h3>
                  <p className="font-body text-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
