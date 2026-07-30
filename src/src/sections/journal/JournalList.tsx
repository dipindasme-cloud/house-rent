"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { JournalCard } from "@/sections/journal/JournalCard";
import { JOURNAL_ARTICLES } from "@/data/journalData";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

const CATEGORIES = ["All", "Market Insights", "Interior Design", "Lifestyle"] as const;

export function JournalList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const nonFeatured = JOURNAL_ARTICLES.filter((a) => !a.featured);

  const filtered =
    activeCategory === "All"
      ? nonFeatured
      : nonFeatured.filter((a) => a.category === activeCategory);

  return (
    <section className="w-full py-8 md:py-12 lg:py-14">
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-col gap-3 max-w-lg"
          >
            <span className="font-body text-eyebrow">
              Latest Stories
            </span>
            <h2 className="font-display text-h2">
              Explore our journal
            </h2>
          </motion.div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  `font-body text-caption py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ` +
                  (activeCategory === cat
                    ? "bg-accent !text-accent-foreground shadow-sm"
                    : "bg-surface-secondary text-muted-foreground border border-border-light hover:bg-surface-hover")
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, index) => (
                <JournalCard
                  key={article.slug}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="font-body text-body text-muted-foreground text-center py-12">
              No articles found for this category.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
