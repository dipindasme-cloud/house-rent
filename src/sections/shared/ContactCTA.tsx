"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  sectionViewport,
} from "@/lib/animations";

export function ContactCTA() {
  return (
    <motion.section
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row bg-primary rounded-3xl overflow-hidden">
            <motion.div
              variants={fadeIn}
              className="relative w-full md:w-[45%] h-[350px] md:h-[400px] lg:h-[600px] shrink-0"
            >
              <Image
                src="https://images.unsplash.com/photo-ISg6IeBqHlo?w=800&q=80&fit=crop"
                alt="Modern apartment building surrounded by greenery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </motion.div>

            <motion.div
              variants={staggerContainerFast}
              className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col gap-5 justify-center"
            >
              <motion.span
                variants={fadeInUp}
                className="font-body text-eyebrow text-primary-foreground/70"
              >
                Get Started
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="font-display text-h2 text-primary-foreground max-w-lg"
              >
                Start your journey to the perfect home
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="font-body text-body text-primary-foreground/70 max-w-md"
              >
                From penthouses to private villas, find a space that reflects
                your lifestyle with our curated collection of luxury rentals.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <svg
                    className="w-[1.125rem] h-[1.125rem] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Browse Properties
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
