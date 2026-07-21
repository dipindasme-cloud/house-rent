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
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
      <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row gap-[3rem] lg:gap-[6rem] items-center">
        <motion.div
          className="flex flex-col gap-[1.5rem] flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[0.8125rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none"
          >
            About Company
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em]"
          >
            Helping clients secure higher returns on every property
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[1rem] md:text-[1.0625rem] text-text-secondary leading-relaxed max-w-[32rem]"
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
              className="inline-flex items-center gap-[0.5rem] text-[0.9375rem] text-brand-600 font-semibold leading-none no-underline transition-all duration-200 hover:gap-[0.75rem]"
            >
              Learn more about us
              <svg
                className="w-[1rem] h-[1rem] transition-transform duration-200 group-hover:translate-x-[0.25rem]"
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
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-[1.5rem] w-full lg:w-auto flex-1"
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
              className="group relative flex items-center gap-[1.25rem] p-[1.5rem] bg-surface border border-border rounded-[1rem] transition-all duration-300 hover:border-brand-200 hover:shadow-[0_0.5rem_2rem_rgba(79,70,229,0.08)]"
            >
              <div className="w-[3.5rem] h-[3.5rem] rounded-[0.875rem] bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_0.25rem_1rem_rgba(79,70,229,0.3)]">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1.75rem] md:text-[2rem] text-text-primary font-bold leading-none tracking-[-0.02em]">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={statsInView}
                  />
                </span>
                <span className="text-[0.875rem] text-text-primary font-semibold leading-none">
                  {stat.label}
                </span>
                <span className="text-[0.75rem] text-text-muted leading-none">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
