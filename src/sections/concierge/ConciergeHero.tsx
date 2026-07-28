"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  heroImageScale,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

export function ConciergeHero() {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-[clamp(5rem,_3rem_+_6vw,_8rem)] pb-[clamp(3rem,_1.5rem_+_4vw,_6rem)]">
      <div className="absolute inset-0 z-10 bg-primary/50" />

      <motion.div
        className="absolute inset-0"
        variants={heroImageScale}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80"
          alt="Luxury concierge service"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="px-6 md:px-12 lg:px-24 w-full">
        <div className="relative z-20 w-full max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col items-start gap-6 max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={sectionViewport}
          >
            <motion.span
              variants={fadeInUp}
              transition={defaultTransition}
              className="font-body text-eyebrow text-primary-foreground/80"
            >
              Bespoke Hospitality
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              transition={defaultTransition}
              className="font-display text-display text-primary-foreground"
            >
              Tailored Lifestyle Management
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={defaultTransition}
              className="font-body text-body-lg !text-primary-foreground/80 max-w-lg"
            >
              From private transport to estate care — every detail orchestrated
              to perfection by your dedicated concierge.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
