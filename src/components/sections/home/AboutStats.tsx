"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const stats = [
  {
    value: 75,
    prefix: "\u20B9",
    suffix: " Cr+",
    label: "Total Value Managed",
    description: "Properties under our management",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    value: 120,
    prefix: "",
    suffix: "+",
    label: "Verified Properties",
    description: "Handpicked premium homes",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: 230,
    prefix: "",
    suffix: "+",
    label: "Happy Families",
    description: "Successfully moved in",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function AnimatedCounter({
  target,
  suffix,
  prefix,
  inView,
}: {
  target: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function AboutStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <motion.div
          className="flex flex-col gap-6 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-eyebrow text-(--accent-rent)"
          >
            About Company
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-h1"
          >
            Helping clients secure higher returns on every property
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-body-lg max-w-lg"
          >
            We combine deep market intelligence with a personal touch to
            match you with properties that fit your lifestyle and
            investment goals. Every recommendation is curated, every
            transaction transparent.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-(--accent-rent) font-semibold leading-none no-underline transition-all duration-200 hover:gap-3"
            >
              Learn more about us
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:w-auto flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="group relative flex items-center gap-5 p-6 bg-(--surface) border border-(--border) rounded-2xl transition-all duration-300 hover:border-(--border)"
            >
              <div className="w-14 h-14 rounded-xl bg-(--muted) text-(--primary) flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-(--primary) group-hover:text-(--primary-foreground)">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-h2 text-(--foreground)">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={statsInView}
                  />
                </span>
                <span className="text-caption text-(--foreground) font-semibold">
                  {stat.label}
                </span>
                <span className="text-caption">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
