"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const quickLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/concierge", label: "Concierge" },
  { href: "/about", label: "About Us" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <motion.footer
      className="border-t border-border bg-muted pt-12 pb-20 md:pt-16 md:pb-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="flex flex-col gap-5 flex-[2]"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground no-underline group"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground text-caption font-bold rounded-lg leading-none transition-transform duration-300 group-hover:scale-110">
                A
              </span>
              <span className="text-h3 font-display">
                AuraSpace
              </span>
            </Link>

            <p className="font-body text-body max-w-sm text-muted-foreground">
              India&apos;s premier destination for luxury real estate. We
              connect you with handpicked premium properties across
              Mumbai, Delhi, Bangalore, and beyond.
            </p>

            <p className="font-body text-caption text-muted-foreground">
              &copy; {new Date().getFullYear()} AuraSpace. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="flex flex-col gap-5 flex-1"
          >
            <motion.span className="font-body text-eyebrow text-muted-foreground" variants={fadeIn}>
              Quick Links
            </motion.span>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-body text-muted-foreground hover:text-foreground hover:translate-x-[0.25rem] no-underline transition-all duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="flex flex-col gap-5 flex-[1.5]"
          >
            <motion.span className="font-body text-eyebrow text-muted-foreground" variants={fadeIn}>
              Newsletter
            </motion.span>
            <p className="font-body text-body text-muted-foreground">
              Get weekly updates on new listings, market trends, and
              exclusive off-market properties.
            </p>
            {submitted ? (
              <p className="font-body text-body font-semibold text-foreground">
                You&apos;re subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  inputSize="sm"
                  className="min-w-0"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="primary"
                  className="shrink-0"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
