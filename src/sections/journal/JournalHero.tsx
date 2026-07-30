"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";
import type { JournalArticle } from "@/data/journalData";

interface JournalHeroProps {
  article: JournalArticle;
}

export function JournalHero({ article }: JournalHeroProps) {
  return (
    <section className="w-full pt-[clamp(5rem,_3rem_+_6vw,_8rem)] pb-[clamp(3rem,_1.5rem_+_4vw,_6rem)]">
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-surface rounded-2xl border border-border overflow-hidden"
          >
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[28rem] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-6 md:p-8 lg:p-10 lg:w-1/2">
              <div className="flex items-center gap-3">
                <span className="font-body text-eyebrow">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-border-light" />
                <span className="font-body text-caption text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <h1 className="font-display text-h1 text-foreground">
                {article.title}
              </h1>

              <p className="font-body text-body text-muted-foreground">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <span className="font-body text-caption text-muted-foreground">
                  {article.date}
                </span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-body font-semibold text-accent hover:text-accent-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm"
                >
                  Read Article
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
