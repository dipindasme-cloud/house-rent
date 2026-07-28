"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

export function NewsletterSignup() {
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
    <section className="w-full py-[clamp(3rem,_1.5rem_+_4vw,_6rem)]">
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-primary rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="flex flex-col gap-3 flex-1">
              <span className="font-body text-eyebrow text-primary-foreground/70">
                Stay Inspired
              </span>
              <h2 className="font-display text-h2 text-primary-foreground">
                Get the latest stories delivered to your inbox
              </h2>
              <p className="font-body text-body text-primary-foreground/70 max-w-md">
                Weekly insights on luxury living, design trends, and market
                intelligence — curated for the discerning reader.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="shrink-0 text-center md:text-left"
              >
                <p className="font-body text-body font-semibold text-primary-foreground">
                  You&apos;re subscribed!
                </p>
                <p className="font-body text-caption text-primary-foreground/70 mt-1">
                  Thank you for joining.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-stretch gap-2 w-full md:w-auto shrink-0"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  inputSize="sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                  className="min-w-0 md:w-64 bg-surface/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 focus:border-primary-foreground/50"
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="outline"
                  className="shrink-0 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
