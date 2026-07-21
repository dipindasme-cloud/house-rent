"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const missionData = [
  {
    label: "Our Mission",
    title: "Handpicked homes for every lifestyle",
    description:
      "Spacious and sunlit apartments featuring modern interiors, ideally located in the heart of the city. We curate every listing to ensure quality and comfort.",
    icon: (
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Our Vision",
    title: "A trusted platform for renters and owners",
    description:
      "Reach thousands of verified renters every month. Our platform makes it easy to list, manage, and grow your rental business with transparency and ease.",
    icon: (
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: "Our Values",
    title: "Transparency and trust at our core",
    description:
      "Every property goes through our rigorous verification process. We believe in honest dealings and building lasting relationships with our community.",
    icon: (
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export function AboutMission() {
  return (
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
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
            About Company
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em] max-w-[36rem]"
          >
            Carefully selected rentals in top locations, updated weekly
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-[3rem] items-center">
          <motion.div
            className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[1.25rem] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Our office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-[2rem] w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            {missionData.map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInRight}
                transition={{ ...defaultTransition, delay: index * 0.15 }}
                className="flex gap-[1.25rem] items-start"
              >
                <div className="shrink-0 w-[3rem] h-[3rem] rounded-[0.75rem] bg-brand-50 text-brand-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-[0.375rem]">
                  <span className="text-[0.75rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none">
                    {item.label}
                  </span>
                  <h3 className="text-[1.125rem] md:text-[1.25rem] text-text-primary font-bold leading-snug tracking-[-0.015em]">
                    {item.title}
                  </h3>
                  <p className="text-[0.875rem] text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
