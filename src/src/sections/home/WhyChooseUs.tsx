"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  defaultTransition,
  sectionViewport,
  LUXURY_EASE,
} from "@/lib/animations";

const carouselSlides = [
  {
    src: "/images/properties/sky-penthouse.jpg",
    alt: "Sky Penthouse",
    title: "Sky Penthouse",
    location: "Worli, Mumbai",
    price: "₹8.5 Cr",
  },
  {
    src: "/images/properties/beach-penthouse.jpg",
    alt: "Beach Penthouse",
    title: "Beach Penthouse",
    location: "Goa",
    price: "₹6.2 Cr",
  },
  {
    src: "/images/properties/villa-palm-grove.jpg",
    alt: "Villa Palm Grove",
    title: "Villa Palm Grove",
    location: "Lonavala",
    price: "₹4.8 Cr",
  },
  {
    src: "/images/properties/riverfront-villa.jpg",
    alt: "Riverfront Villa",
    title: "Riverfront Villa",
    location: "Pune",
    price: "₹3.5 Cr",
  },
  {
    src: "/images/properties/golf-course-apartment.jpg",
    alt: "Golf Course Apartment",
    title: "Golf Course Apartment",
    location: "Bangalore",
    price: "₹2.9 Cr",
  },
];

const features = [
  {
    title: "Verified Properties",
    description:
      "Every property is personally vetted before it's listed. No surprises, no shortcuts — just verified excellence.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Prime Locations",
    description:
      "Mumbai's best addresses. Bangalore's finest enclaves. Goa's hidden gems. We curate, you choose.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. Zero hidden fees, no negotiation games — just honest pricing from day one.",
    icon: (
      <svg
        className="w-[1.25rem] h-[1.25rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: LUXURY_EASE },
  },
};

export function WhyChooseUs() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="max-w-7xl mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col items-start gap-4 text-left">
            <motion.span className="font-body text-eyebrow" variants={fadeIn}>
              WHY CHOOSE US?
            </motion.span>

            <motion.h2
              className="font-display text-h1 max-w-lg"
              variants={fadeInUp}
            >
              Where trust meets every address
            </motion.h2>
          </div>

          {/* Carousel */}
          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-2xl h-[16rem] md:h-[24rem] lg:h-[28rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured properties"
          >
            <div aria-live="polite" className="absolute inset-0">
              <AnimatePresence>
              <motion.div
                key={current}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: LUXURY_EASE }}
              >
                <Image
                  src={carouselSlides[current].src}
                  alt={carouselSlides[current].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80rem"
                />
              </motion.div>
            </AnimatePresence>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-surface/90 text-foreground shadow-md backdrop-blur-md transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {paused ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </button>

            <div className="absolute inset-x-4 bottom-12 z-10 flex items-end justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="font-body text-caption font-bold tracking-wider text-primary-foreground/95 uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {carouselSlides[current].location}
                </span>
                <span className="text-2xl font-black text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {carouselSlides[current].price}
                </span>
              </div>
              <span className="inline-flex items-center rounded-full bg-surface/95 px-3 py-1.5 text-caption font-bold text-foreground shadow-md backdrop-blur-md">
                {carouselSlides[current].title}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1" role="tablist" aria-label="Slides">
              {carouselSlides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className="flex items-center justify-center w-6 h-6 cursor-pointer"
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2 bg-surface"
                        : "w-2 h-2 bg-surface/50 hover:bg-surface/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
<motion.div
  variants={staggerContainerFast}
  initial="hidden"
  whileInView="visible"
  viewport={sectionViewport}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {features.map((feature) => (
    <motion.div
      key={feature.title}
      variants={cardVariants}
      className="flex flex-col gap-4 bg-surface rounded-2xl border border-border p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl"
    >
      <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl shrink-0">
        {feature.icon}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-h3 font-body">{feature.title}</h3>
        <p className="font-body text-body text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}