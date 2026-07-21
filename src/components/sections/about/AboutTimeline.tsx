"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const milestones = [
  {
    year: "2018",
    title: "Journey was started",
    description:
      "AuraSpace was founded with a vision to transform the Indian luxury real estate market with transparency and trust.",
  },
  {
    year: "2021",
    title: "Got noticed",
    description:
      "Expanded to 5 major cities with over 200+ premium properties listed. Recognised as one of India's most promising real estate startups.",
  },
  {
    year: "2024",
    title: "10+ Awards earned",
    description:
      "Crossed ₹75 Cr in total property value managed. Featured in top industry publications for innovation in home rental.",
  },
  {
    year: "2025",
    title: "Nationwide presence",
    description:
      "Now operating in 12 cities with 500+ verified properties and a growing community of 10,000+ happy residents.",
  },
];

export function AboutTimeline() {
  return (
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem] bg-surface-secondary">
      <div className="max-w-[80rem] mx-auto flex flex-col gap-[3rem]">
        <motion.div
          className="flex flex-col items-center gap-[1.25rem] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[0.8125rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none"
          >
            Our History
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em]"
          >
            Join our journey
          </motion.h2>
        </motion.div>

        <div className="relative flex flex-col gap-[2rem] md:gap-[3rem]">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-[1.5rem] md:gap-[3rem]"
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={isEven ? fadeInLeft : fadeInRight}
                transition={defaultTransition}
              >
                <div
                  className={`flex flex-col md:w-[45%] ${isEven ? "md:text-right md:items-end" : "md:order-2"}`}
                >
                  <span className="text-[3rem] md:text-[4rem] text-brand-600 font-bold leading-none tracking-[-0.02em]">
                    {milestone.year}
                  </span>
                </div>

                <div className="hidden md:flex items-center justify-center shrink-0">
                  <div className="w-[0.125rem] h-[4rem] bg-brand-200 relative flex items-center justify-center">
                    <div className="absolute w-[0.75rem] h-[0.75rem] bg-brand-600 rounded-full" />
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-[0.5rem] md:w-[45%] ${isEven ? "md:order-2" : ""}`}
                >
                  <h3 className="text-[1.125rem] md:text-[1.25rem] text-text-primary font-bold leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
