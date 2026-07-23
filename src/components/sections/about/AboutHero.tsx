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

export function AboutHero() {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 z-10 bg-(--primary)/45" />

      <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <Image
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Office space"
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
            <motion.h1
              variants={fadeInUp}
              transition={defaultTransition}
              className="text-(--primary-foreground) text-display"
            >
              About our office
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              transition={defaultTransition}
              className="text-body-lg text-(--primary-foreground) max-w-lg"
            >
              Explore verified homes, compare amenities, and book your perfect
              place—stress-free
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
