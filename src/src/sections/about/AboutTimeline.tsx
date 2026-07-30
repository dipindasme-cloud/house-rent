"use client";

import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
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
    <section className="py-8 md:py-12 lg:py-14 bg-surface-secondary">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.div
          className="flex flex-col items-start gap-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeIn}
            className="font-body text-eyebrow"
          >
            Our History
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1"
          >
            Join our journey
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative flex flex-col gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                variants={fadeInUp}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
              >
                <div
                  className={`flex flex-col md:w-[45%] ${isEven ? "md:text-right md:items-end" : "md:order-2"}`}
                >
                  <span className="font-display text-display text-accent-rent">
                    {milestone.year}
                  </span>
                </div>

                <div className="hidden md:flex items-center justify-center shrink-0">
                  <div className="w-0.5 h-16 bg-border relative flex items-center justify-center">
                    <div className="absolute w-3 h-3 bg-accent-rent rounded-full" />
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-2 md:w-[45%] ${isEven ? "md:order-2" : ""}`}
                >
                  <h3 className="text-h3 font-body">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-body text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
