"use client";

import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a personal discovery session to understand your lifestyle, preferences, and expectations. Every detail is noted.",
  },
  {
    number: "02",
    title: "Curation",
    description:
      "Our team assembles a beshortlist of options — properties, services, or experiences — each vetted and tailored precisely to you.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "From booking to move-in and beyond, we manage every touchpoint so you enjoy a seamless, white-glove experience.",
  },
];

export function ConciergeSteps() {
  return (
    <motion.section
      className="w-full py-[clamp(3rem,_1.5rem_+_4vw,_6rem)] bg-muted"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-col gap-3 max-w-lg"
          >
            <motion.span className="font-body text-eyebrow" variants={fadeIn}>
              How It Works
            </motion.span>
            <motion.h2 className="font-display text-h1" variants={fadeInUp}>
              Three steps to effortless living
            </motion.h2>
          </motion.div>

          <div className="relative flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  <div
                    className={`flex flex-col md:w-[45%] ${isEven ? "md:text-right md:items-end" : "md:order-2"}`}
                  >
                    <span className="font-display text-display text-accent">
                      {step.number}
                    </span>
                  </div>

                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-0.5 h-16 bg-border relative flex items-center justify-center">
                      <div className="absolute w-3 h-3 bg-accent rounded-full" />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col gap-2 md:w-[45%] ${isEven ? "md:order-2" : ""}`}
                  >
                    <h3 className="text-h3 font-body">
                      {step.title}
                    </h3>
                    <p className="font-body text-body text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
