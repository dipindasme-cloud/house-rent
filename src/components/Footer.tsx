"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
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

// Issue 15: Social Media Links
const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); // Issue 18: Email validation
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim() || !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    // Issue 17: Adjusted mobile padding to pb-12
    <footer className="border-t border-border bg-surface-secondary pt-12 pb-12 md:pt-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={sectionViewport}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            transition={shouldReduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.1 }}
            className="flex flex-col gap-5 md:col-span-5 lg:col-span-5"
          >
            {/* Issue 1: "AuraSpace" + Issue 13: Image logo consistency */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 text-foreground no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md w-fit"
            >
              <Image
                src="/images/hero/logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="font-display text-h3 tracking-tight font-medium">
                AuraSpace
              </span>
            </Link>

            <p className="max-w-sm font-body text-body text-foreground-secondary leading-relaxed">
              India&apos;s premier destination for luxury real estate. We
              connect you with handpicked premium properties across Mumbai,
              Delhi, Bangalore, and beyond.
            </p>

            {/* Issue 15: Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-hover text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Issue 19: Replaced text-disabled with text-muted-foreground for accessibility contrast */}
            <p className="font-body text-caption text-muted-foreground mt-auto pt-2">
              &copy; {new Date().getFullYear()} AuraSpace. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            transition={shouldReduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.2 }}
            className="flex flex-col gap-4 md:col-span-3 lg:col-span-3"
          >
            {/* Issue 2: Semantic Heading */}
            <h2 className="font-body text-eyebrow uppercase tracking-wider text-muted-foreground font-semibold">
              Quick Links
            </h2>
            <nav aria-label="Footer quick links">
              <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 font-body text-body text-muted-foreground no-underline transition-all duration-200 hover:translate-x-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            transition={shouldReduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.3 }}
            className="flex flex-col gap-4 md:col-span-4 lg:col-span-4"
          >
            {/* Issue 2: Semantic Heading */}
            <h2 className="font-body text-eyebrow uppercase tracking-wider text-muted-foreground font-semibold">
              Newsletter
            </h2>
            <p className="font-body text-body text-muted-foreground leading-relaxed">
              Get weekly updates on new listings, market trends, and exclusive
              off-market properties.
            </p>

            {/* Issue 3: Live region for submission announcement */}
            <div aria-live="polite" className="mt-1">
              {submitted ? (
                <div className="rounded-lg bg-surface-hover p-3 border border-border">
                  <p className="font-body text-body font-semibold text-foreground">
                    You&apos;re subscribed!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex items-stretch gap-2">
                    <label htmlFor="footer-email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="footer-email"
                      type="email"
                      placeholder="Enter your email"
                      inputSize="sm"
                      className={`min-w-0 flex-1 ${emailError ? "border-danger focus-visible:ring-danger" : ""}`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      required
                      disabled={loading}
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "newsletter-email-error" : undefined}
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
                  </div>

                  {/* Issue 18: Inline Email Validation Error */}
                  {emailError && (
                    <p id="newsletter-email-error" className="text-caption text-danger">
                      {emailError}
                    </p>
                  )}

                  {/* Issue 14: Privacy Policy Link */}
                  <p className="text-caption text-muted-foreground">
                    By subscribing, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-foreground">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}