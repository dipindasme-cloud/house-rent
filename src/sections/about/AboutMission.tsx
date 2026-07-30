"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export function AboutMission() {
  return (
    <section className="py-8 md:py-12 lg:py-14">
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
            transition={defaultTransition}
            className="font-body text-eyebrow"
          >
            About Company
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="font-display text-h1 max-w-xl"
          >
            Carefully selected rentals in top locations, updated weekly
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="relative w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeInUp}
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
            className="flex flex-col gap-8 w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            {missionData.map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: index * 0.15 }}
                className="flex gap-5 items-start"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-light text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-body text-eyebrow">
                    {item.label}
                  </span>
                  <h3 className="text-h3 font-body">
                    {item.title}
                  </h3>
                  <p className="font-body text-caption text-foreground-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
