"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
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
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      className="relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 py-8 md:py-12 lg:py-14">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-5 text-center"
            >
              <span className="font-body text-eyebrow text-primary-foreground/70">
                Recognition
              </span>
              <h2 className="font-display text-h1 text-primary-foreground">
                Awards & achievements
              </h2>
            </motion.div>

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
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span className="font-display text-h2 font-bold tracking-tight text-primary-foreground">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      inView={statsInView}
                    />
                  </span>
                  <span className="font-body text-caption text-primary-foreground/80 max-w-40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {awards.map((award) => (
                <motion.div
                  key={award.title}
                  variants={fadeInUp}
                  className="group flex flex-col gap-4 p-6 md:p-8 bg-surface backdrop-blur rounded-3xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="font-body text-eyebrow text-foreground">
                        {award.year}
                      </span>
                      <h3 className="text-h3 font-body">
                        {award.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-body text-body text-muted-foreground">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
