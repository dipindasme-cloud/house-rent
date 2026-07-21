"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden px-[1.5rem] md:px-[3rem] lg:px-[6rem] pt-[8rem] pb-[4rem]">
      <div className="absolute inset-0 z-10 bg-black/50" />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
          alt="Modern home entrance"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-20 w-full max-w-[80rem] mx-auto">
        <motion.div
          className="flex flex-col items-start gap-[1.5rem] max-w-[40rem]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={sectionViewport}
        >
          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-white text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Book your free tour
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            transition={defaultTransition}
            className="text-[1rem] md:text-[1.125rem] text-white/70 leading-relaxed max-w-[32rem]"
          >
            Schedule a visit to your dream home. Our experts will guide you
            through every step
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
