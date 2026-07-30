"use client";

import { useState, useEffect, useCallback } from "react";
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
    id: "testimonial-1",
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
    id: "testimonial-2",
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
    id: "testimonial-3",
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

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = testimonials[active];

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Optional subtle auto-rotate every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <motion.section
      aria-label="Client Testimonials"
      className="py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
          
          {/* Section Header */}
          <motion.div
            className="flex flex-col gap-3 md:gap-4"
            variants={staggerContainer}
          >
            <motion.span
              className="font-body text-eyebrow tracking-wider uppercase"
              variants={fadeIn}
            >
              Testimonials
            </motion.span>
            <motion.h2
              className="font-display text-h1 max-w-xl text-foreground"
              variants={fadeInUp}
            >
              Our clients&apos; words tell the real story.
            </motion.h2>
          </motion.div>

          {/* Testimonial Card Wrapper */}
          <motion.div
            className="bg-surface rounded-2xl border border-border-light overflow-hidden flex flex-col md:flex-row shadow-sm"
            variants={fadeInUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Column: Image with Overlay Info */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[30rem] overflow-hidden bg-muted">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: LUXURY_EASE }}
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent pointer-events-none" />

              {/* Client Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={defaultTransition}
                  >
                    <p className="font-body text-primary-foreground text-h3 font-medium">
                      {current.name}
                    </p>
                    <p className="font-body text-primary-foreground/80 text-caption mt-1">
                      {current.role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Quote & Interactive Controls */}
            <div className="flex-1 flex flex-col justify-between p-6 md:p-10 gap-8" aria-live="polite">
              
              <div className="flex flex-col gap-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1" aria-label={`Rating: ${current.rating} out of 5 stars`}>
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

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={current.id}
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
                      key={current.id}
                      className="font-body text-body text-foreground-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ ...defaultTransition, delay: 0.05 }}
                    >
                      &ldquo;{current.quote}&rdquo;
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Controls Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-border-light/60">
                {/* Avatar Selectors */}
                <div className="flex items-center gap-3">
                  {testimonials.map((t, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={`View testimonial from ${t.name}`}
                        aria-pressed={isActive}
                        className={`relative w-[2.75rem] h-[2.75rem] rounded-full overflow-hidden border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          isActive
                            ? "border-primary ring-2 ring-primary/20 scale-110"
                            : "border-transparent opacity-50 hover:opacity-100"
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
                    );
                  })}
                </div>

                {/* Arrow Nav Buttons (Adds clear explicit controls) */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-full border border-border-light hover:bg-surface-hover transition-colors text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-full border border-border-light hover:bg-surface-hover transition-colors text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}