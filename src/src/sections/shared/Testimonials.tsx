"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LUXURY_EASE,
  fadeIn,
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const testimonials = [
  {
    name: "Almond D. Dowson",
    role: "Homeowner",
    headline: "Smoothest rental experience ever!",
    quote:
      "Smoothest rental experience ever! I found my dream apartment in just three days.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    name: "Priya S. Nair",
    role: "First-time Buyer",
    headline: "The perfect home, no wasted time",
    quote:
      "The team understood exactly what I was looking for. No wasted time, no unnecessary showings — just the perfect home.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1633354990288-2bfe9967da76?w=800&q=80",
  },
  {
    name: "Rahul K. Mehta",
    role: "Luxury Property Investor",
    headline: "Transparent pricing & genuine guidance",
    quote:
      "Transparent pricing and genuine guidance throughout the purchase. I wouldn't trust anyone else for luxury real estate.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
];

export function Testimonials({ heading }: { heading?: string }) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.div
          className="flex flex-col gap-4"
          variants={staggerContainer}
        >
          <motion.span
            className="font-body text-eyebrow"
            variants={fadeIn}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="font-display text-h1 max-w-lg"
            variants={fadeInUp}
          >
            {heading ?? "Our clients&apos; words tell the real story."}
          </motion.h2>
        </motion.div>

        <motion.div
          className="bg-surface rounded-2xl border border-border-light overflow-hidden flex flex-col md:flex-row"
          variants={fadeInUp}
        >
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[28rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40rem"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={defaultTransition}
                >
                  <p className="font-body text-primary-foreground text-h3">
                    {current.name}
                  </p>
                  <p className="font-body text-primary-foreground text-caption mt-1">
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between p-6 md:p-8 gap-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-accent-sale"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active}
                  className="font-display text-h2 text-foreground"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={defaultTransition}
                >
                  {current.headline}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="font-body text-body text-foreground-secondary"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ ...defaultTransition, delay: 0.05 }}
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`relative w-[2.75rem] h-[2.75rem] rounded-full overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    i === active
                      ? "border-primary ring-2 ring-primary/20 scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="2.75rem"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
}
