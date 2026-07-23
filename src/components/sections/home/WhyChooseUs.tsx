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
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="max-w-7xl mx-auto flex flex-col gap-4"
      >
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="text-eyebrow text-(--accent-rent)">
            Why Choose Us?
          </span>

          <motion.h2
            className="text-h1 max-w-lg"
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
          className="relative w-full overflow-hidden rounded-2xl h-[16rem] md:h-[24rem] lg:h-[28rem]"
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

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--primary)/50 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-6 h-2 bg-(--surface)"
                    : "w-2 h-2 bg-(--surface)/50 hover:bg-(--surface)/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
              className="flex flex-col gap-4 bg-(--surface) rounded-2xl border border-(--border) p-6 md:p-8"
            >
              <span className="flex items-center justify-center w-12 h-12 bg-(--primary) text-(--primary-foreground) rounded-md shrink-0">
                {feature.icon}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-h3">
                  {feature.title}
                </h3>
                <p className="text-body">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
