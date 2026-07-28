"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

interface Stat {
  value?: number;
  staticText?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: 100,
    suffix: "%",
    label: "Verified Luxury Inventory",
    description: "Every listing personally inspected",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    staticText: "24/7",
    label: "Dedicated Estate Concierge",
    description: "White-glove service, always on",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    value: 24,
    suffix: " Hours",
    label: "Express Digital Leasing",
    description: "Fully digital, zero wait",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
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
  target?: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * (target ?? 0)));
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);
    return () => {
      clearInterval(timer);
      setCount(0);
    };
  }, [inView, target]);

  if (!inView) return <span className="invisible">0</span>;

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
    <section className="w-full py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 items-start">
          <motion.div
            className="flex flex-col gap-2 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="font-body text-eyebrow"
            >
              The Aurospace Difference
            </motion.span>
            <motion.h2
              className="font-display text-h1"
              variants={fadeInUp}
            >
              White-Glove Rental Management
            </motion.h2>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-1"
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
                className="group relative flex items-center gap-5 p-6 md:p-8 bg-surface border border-border rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-rent/10 text-accent-rent flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent-rent group-hover:text-accent-rent-foreground">
                  {stat.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-h2 font-display text-foreground">
                    {stat.staticText ? (
                      <span>{stat.staticText}</span>
                    ) : (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        inView={statsInView}
                      />
                    )}
                  </span>
                  <span className="font-body text-caption font-semibold text-foreground">
                    {stat.label}
                  </span>
                  <span className="font-body text-caption text-muted-foreground">
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