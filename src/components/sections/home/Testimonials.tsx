"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
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
  const current = testimonials[active];

  return (
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
      <div className="max-w-[80rem] mx-auto">
        <motion.div
          className="flex flex-col gap-[1rem] mb-[3rem] md:mb-[4rem]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className="text-[0.8125rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em] max-w-[32rem]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our clients&apos; words tell the real story.
          </motion.h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-[1rem] border border-border overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[28rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40rem"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] md:p-[2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-[1.125rem] font-semibold leading-none">
                    {current.name}
                  </p>
                  <p className="text-white/70 text-[0.875rem] mt-[0.25rem]">
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between p-[1.5rem] md:p-[2.5rem] gap-[1.5rem]">
            <div className="flex items-center gap-[0.25rem]">
              {Array.from({ length: current.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-[1rem] h-[1rem] text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <div className="flex flex-col gap-[0.75rem]">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active}
                  className="text-[1.5rem] md:text-[1.75rem] text-text-primary font-bold leading-snug tracking-[-0.01em]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  {current.headline}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="text-[0.9375rem] text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-[0.75rem]">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`relative w-[2.75rem] h-[2.75rem] rounded-full overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    i === active
                      ? "border-brand-600 ring-2 ring-brand-600/20 scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
