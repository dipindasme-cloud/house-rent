"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const carouselSlides = [
  {
    src: "/images/properties/sky-penthouse.jpg",
    alt: "Sky Penthouse",
  },
  {
    src: "/images/properties/beach-penthouse.jpg",
    alt: "Beach Penthouse",
  },
  {
    src: "/images/properties/villa-palm-grove.jpg",
    alt: "Villa Palm Grove",
  },
  {
    src: "/images/properties/riverfront-villa.jpg",
    alt: "Riverfront Villa",
  },
  {
    src: "/images/properties/golf-course-apartment.jpg",
    alt: "Golf Course Apartment",
  },
];

const features = [
  {
    title: "On-time duty",
    description:
      "Homes with flexible cancellation make it easy to rethink your booking.",
    icon: (
      <svg
        className="w-[0.875rem] h-[0.75rem]"
        viewBox="0 0 14 12"
        fill="none"
      >
        <path
          d="M1 6l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Available houses",
    description:
      "Booking was stress-free thanks to flexible cancellation.",
    icon: (
      <svg
        className="w-[0.875rem] h-[0.75rem]"
        viewBox="0 0 14 12"
        fill="none"
      >
        <path
          d="M1 6l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Net & cheap pricing",
    description:
      "The flexible cancellation option really helped. I found a better apartment nearby.",
    icon: (
      <svg
        className="w-[0.875rem] h-[0.75rem]"
        viewBox="0 0 14 12"
        fill="none"
      >
        <path
          d="M1 6l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const headingWords = ["We", "bring", "your", "dreams", "comes", "true"];

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      ...defaultTransition,
    },
  }),
};

export function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-[80rem] mx-auto flex flex-col gap-[1rem]"
      >
        <div className="flex flex-col items-start gap-[1rem] text-left">
          <span className="text-[0.8125rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none">
            Why Choose Us?
          </span>

          <motion.h2
            className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em] max-w-[32rem]"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
                {i < headingWords.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="relative w-full overflow-hidden rounded-[1rem] h-[16rem] md:h-[24rem] lg:h-[28rem]"
        >
          <AnimatePresence>
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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

          <div className="absolute inset-x-0 bottom-0 h-[5rem] bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          <div className="absolute bottom-[1.5rem] left-1/2 -translate-x-1/2 flex items-center gap-[0.5rem]">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-[1.5rem] h-[0.5rem] bg-white"
                    : "w-[0.5rem] h-[0.5rem] bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={{
                hidden: (i: number) => ({
                  opacity: 0,
                  x: i === 0 ? -60 : i === 2 ? 60 : 0,
                  y: i === 1 ? 24 : 0,
                  scale: i === 1 ? 0.95 : 1,
                }),
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={defaultTransition}
              className="flex flex-col gap-[1rem] bg-white rounded-[1rem] border border-border p-[1.5rem] md:p-[2rem]"
            >
              <span className="flex items-center justify-center w-[3rem] h-[3rem] bg-brand-600 text-white rounded-[0.375rem] shrink-0">
                {feature.icon}
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[1.125rem] md:text-[1.25rem] text-text-primary font-semibold leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
