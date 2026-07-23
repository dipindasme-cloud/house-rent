"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden px-6 md:px-12 lg:px-24 pt-24 pb-12">
      <div className="absolute inset-0 z-10 bg-(--primary)/50" />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero/home.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={sectionViewport}
        >
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeInUp}
              className="text-(--primary-foreground) text-display"
            >
              Luxury Long-Term Rentals Tailored to Your Lifestyle
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-(--primary-foreground) text-body-lg mt-4 max-w-xl"
            >
              Curated, fully-furnished premium homes with transparent lease
              terms.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="w-full max-w-4xl"
          >
            <div className="bg-(--surface)/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex gap-8 border-b border-(--border)">
                <button className="text-(--accent-rent) font-semibold text-sm pb-3 border-b-2 border-(--accent-rent) -mb-px">
                  Rent
                </button>
                <button className="text-(--muted-foreground) font-medium text-sm pb-3">
                  Buy
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-caption">
                    Location
                  </label>
                  <Input placeholder="Mumbai, Bangalore" inputSize="md" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-caption">
                    Property Type
                  </label>
                  <Input placeholder="Apartment, Villa..." inputSize="md" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-caption">
                    Price Range
                  </label>
                  <Input placeholder="Min - Max" inputSize="md" />
                </div>
                <div className="flex items-end">
                  <Button variant="primary" size="lg" className="w-full">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
