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

export function ListingsHero() {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden px-[1.5rem] md:px-[3rem] lg:px-[6rem] pt-[8rem] pb-[4rem]">
      <div className="absolute inset-0 z-10 bg-black/45" />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury properties"
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
            Find your dream home
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            transition={defaultTransition}
            className="text-[1rem] md:text-[1.125rem] text-white/70 leading-relaxed max-w-[32rem]"
          >
            Browse our curated collection of premium properties across India's
            most desirable locations
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
