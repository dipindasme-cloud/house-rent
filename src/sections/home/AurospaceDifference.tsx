"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";

const stats = [
  {
    value: "100%",
    title: "Client Satisfaction Rate",
    description: "From first inquiry to move-in, every interaction is handled with precision and care.",
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "24/7",
    title: "Dedicated Estate Concierge",
    description: "White-glove personal support available whenever you need assistance.",
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
    value: "<24h",
    title: "Express Digital Leasing",
    description: "Fully digital approval process with zero unnecessary wait times.",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function AurospaceDifference() {
  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
            variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-4 text-left">
            <motion.span className="font-body text-eyebrow" variants={fadeInUp}>
              THE AUROSPACE DIFFERENCE
            </motion.span>

            <motion.h2 className="font-display text-h1 max-w-xl" variants={fadeInUp}>
              Service that moves at your pace
            </motion.h2>
          </div>

          {/* Borderless Stat Highlight Bar */}
          <motion.div
      variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 border-y border-border py-8 md:py-12 gap-8 md:gap-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={fadeInUp}
                className={`flex flex-col gap-3 md:px-8 first:md:pl-0 last:md:pr-0 ${
                  index > 0 ? "md:border-l md:border-border border-t border-border/40 md:border-t-0 pt-6 md:pt-0" : ""
                }`}
              >
                {/* Metric Number & Icon Header */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground shrink-0">
                    {stat.icon}
                  </span>
                  {/* Standardized Numeral Typography */}
                  <span className="font-display text-h2 font-bold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                </div>

                {/* Metric Content */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <h3 className="font-body text-h3 text-foreground font-semibold">
                    {stat.title}
                  </h3>
                  <p className="font-body text-body text-muted-foreground leading-relaxed max-w-xs">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Next Step / CTA Section */}
          <motion.div 
            variants={fadeInUp} 
            className="flex items-center justify-start md:justify-end pt-2"
          >
            <Link
              href="/contact"
              aria-label="Learn more about our white-glove rental process"
              className="group inline-flex items-center gap-2 font-body text-body font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">Learn more about our white-glove process</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}