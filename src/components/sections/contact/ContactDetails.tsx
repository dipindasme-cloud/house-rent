"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const contactDetails = [
  {
    icon: (
      <svg
        className="w-[1.5rem] h-[1.5rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: (
      <svg
        className="w-[1.5rem] h-[1.5rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "hello@auraspace.in",
    href: "mailto:hello@auraspace.in",
  },
  {
    icon: (
      <svg
        className="w-[1.5rem] h-[1.5rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: "#",
  },
];

export function ContactDetails() {
  return (
    <motion.div
      className="flex flex-col gap-[2rem]"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <h3 className="text-[1.5rem] text-text-primary font-bold leading-snug">
          Get in touch
        </h3>
        <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-[0.5rem]">
          Have questions? Reach out to us directly or fill the form to schedule
          a visit.
        </p>
      </motion.div>

      <div className="flex flex-col gap-[1rem]">
        {contactDetails.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            variants={[fadeInLeft, fadeInUp, fadeInRight][index]}
            transition={defaultTransition}
            className="flex items-center gap-[1rem] p-[1.25rem] bg-surface border border-border rounded-[0.75rem] transition-all duration-200 hover:border-brand-400 hover:shadow-[0_0_0_0.125rem_rgba(79,70,229,0.1)] no-underline"
          >
            <div className="w-[3rem] h-[3rem] rounded-[0.75rem] bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.75rem] text-text-muted font-medium uppercase tracking-[0.05em]">
                {item.label}
              </span>
              <span className="text-[0.9375rem] text-text-primary font-semibold">
                {item.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={fadeInUp}
        transition={{ ...defaultTransition, delay: 0.3 }}
        className="p-[1.5rem] bg-brand-50 border border-brand-100 rounded-[0.75rem]"
      >
        <div className="flex items-start gap-[0.75rem]">
          <svg
            className="w-[1.25rem] h-[1.25rem] text-brand-600 shrink-0 mt-[0.125rem]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div className="flex flex-col gap-[0.25rem]">
            <span className="text-[0.875rem] text-brand-800 font-semibold">
              Free tour, no commitment
            </span>
            <span className="text-[0.8125rem] text-brand-600 leading-relaxed">
              Our agents are available Mon-Sat, 9 AM to 8 PM. Property visits
              are completely free with no obligations.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
