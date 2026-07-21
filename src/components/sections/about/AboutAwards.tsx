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
      <div className="absolute inset-0 bg-[#1e1b4b]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
        <div className="max-w-[80rem] mx-auto flex flex-col gap-[4rem]">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-[2rem] md:gap-[3rem]"
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
                className="flex flex-col items-center gap-[0.5rem] text-center"
              >
                <span className="text-[2.5rem] md:text-[3.25rem] text-white font-bold leading-none tracking-[-0.02em]">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={statsInView}
                  />
                </span>
                <span className="text-[0.875rem] text-indigo-200 font-medium leading-snug max-w-[10rem]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="w-full h-[1px] bg-indigo-400/20" />

          <motion.div
            className="flex flex-col gap-[2.5rem]"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              transition={defaultTransition}
              className="flex flex-col items-center gap-[1.25rem] text-center"
            >
              <span className="text-[0.8125rem] text-indigo-300 font-semibold tracking-[0.125em] uppercase leading-none">
                Recognition
              </span>
              <h2 className="text-[2rem] md:text-[2.5rem] text-white font-bold leading-[1.15] tracking-[-0.02em]">
                Awards & achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  variants={[fadeInLeft, fadeInUp, fadeInRight][index]}
                  transition={{ ...defaultTransition, delay: index * 0.1 }}
                  className="group relative flex flex-col gap-[1rem] p-[1.5rem] md:p-[2rem] bg-indigo-500/10 backdrop-blur-[0.5rem] rounded-[1.25rem] border border-indigo-400/20 hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-[4rem] h-[4rem] bg-indigo-400/20 rounded-bl-[1.25rem] rounded-tr-[1.25rem] flex items-center justify-center">
                    <svg className="w-[1.5rem] h-[1.5rem] text-indigo-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <span className="text-[0.75rem] text-indigo-300 font-semibold tracking-[0.125em] uppercase leading-none">
                    {award.year}
                  </span>
                  <h3 className="text-[1.125rem] md:text-[1.25rem] text-white font-bold leading-snug pr-[3rem]">
                    {award.title}
                  </h3>
                  <p className="text-[0.875rem] text-indigo-200/60 leading-relaxed m-0">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
