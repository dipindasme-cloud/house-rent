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
        className="w-6 h-6"
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
        className="w-6 h-6"
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
        className="w-6 h-6"
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
      className="flex flex-col gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <h3 className="text-h2">
          Get in touch
        </h3>
        <p className="text-body mt-2">
          Have questions? Reach out to us directly or fill the form to schedule
          a visit.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {contactDetails.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            variants={[fadeInLeft, fadeInUp, fadeInRight][index]}
            transition={defaultTransition}
            className="flex items-center gap-4 p-5 bg-(--surface) border border-(--border) rounded-xl transition-all duration-200 hover:border-(--border) no-underline"
          >
            <div className="w-12 h-12 rounded-xl bg-(--muted) text-(--accent-rent) flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-caption uppercase tracking-[0.05em]">
                {item.label}
              </span>
              <span className="text-[0.9375rem] text-(--foreground) font-semibold">
                {item.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={fadeInUp}
        transition={{ ...defaultTransition, delay: 0.3 }}
        className="p-6 bg-(--muted) border border-(--border) rounded-xl"
      >
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-(--accent-rent) shrink-0 mt-[0.125rem]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-caption text-(--foreground) font-semibold">
              Free tour, no commitment
            </span>
            <span className="text-caption text-(--accent-rent)">
              Our agents are available Mon-Sat, 9 AM to 8 PM. Property visits
              are completely free with no obligations.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
