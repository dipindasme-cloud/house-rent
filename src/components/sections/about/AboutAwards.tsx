"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const stats = [
  { value: 4.95, suffix: "", label: "User ratings out of 5.0", prefix: "" },
  { value: 500, suffix: "+", label: "Verified Properties", prefix: "" },
  { value: 10, suffix: "K+", label: "Happy Residents", prefix: "" },
  { value: 75, suffix: " Cr+", label: "Total Value Managed", prefix: "\u20B9" },
];

const awards = [
  {
    year: "2020",
    title: "Mintos Award 2020",
    description:
      "Known for providing reliable and high-quality home rental services across metropolitan cities.",
  },
  {
    year: "2023",
    title: "Best Rental Company 2023",
    description:
      "Recognised for better & good quality home rental service and customer satisfaction.",
  },
  {
    year: "2024",
    title: "Top #01 House Rental",
    description:
      "Trusted for delivering excellent service and comfortable rental experiences nationwide.",
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
        setCount(Math.floor(start * 100) / 100);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target)
    ? Math.floor(count).toString()
    : count.toFixed(2);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function AboutAwards() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-(--primary)" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-[4rem]">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={defaultTransition}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="text-display text-(--primary-foreground)">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={statsInView}
                  />
                </span>
                <span className="text-caption max-w-[10rem]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="w-full h-px bg-(--border)" />

          <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              transition={defaultTransition}
              className="flex flex-col items-center gap-5 text-center"
            >
              <span className="text-eyebrow text-(--muted-foreground)">
                Recognition
              </span>
              <h2 className="text-h1 text-(--primary-foreground)">
                Awards & achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  variants={[fadeInLeft, fadeInUp, fadeInRight][index]}
                  transition={{ ...defaultTransition, delay: index * 0.1 }}
                  className="group relative flex flex-col gap-4 p-6 md:p-8 bg-(--muted) backdrop-blur-[0.5rem] rounded-3xl border border-(--border) hover:bg-(--surface-hover) hover:border-(--border) transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-(--muted) rounded-bl-[1.25rem] rounded-tr-[1.25rem] flex items-center justify-center">
                    <svg className="w-6 h-6 text-(--muted-foreground)" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <span className="text-eyebrow">
                    {award.year}
                  </span>
                  <h3 className="text-h3 text-(--primary-foreground) pr-12">
                    {award.title}
                  </h3>
                  <p className="text-caption text-(--primary-foreground) leading-relaxed m-0">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
