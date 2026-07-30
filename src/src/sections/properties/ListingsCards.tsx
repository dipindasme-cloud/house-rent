"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/sections/properties/PropertyCard";
import { Button } from "@/components/Button";
import { SALE_PROPERTIES } from "@/data/HouseData";
import {
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse"] as const;
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export function ListingsCards() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered =
    activeCategory === "All"
      ? SALE_PROPERTIES
      : SALE_PROPERTIES.filter((item) => item.type === activeCategory);

  const isFiltered = activeCategory !== "All";
  const displayed = isFiltered ? filtered : filtered.slice(0, visibleCount);
  const hasMore = !isFiltered && visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.header
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5"
        >
          <div className="flex flex-col gap-2">
            <span className="font-body text-eyebrow">
              All Properties
            </span>
            <h2 className="font-display text-h2">
              Explore our listings
            </h2>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={
                  `font-body text-caption py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ` +
                  (activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface-secondary text-muted-foreground border border-border-light hover:bg-surface-hover")
                }
              >
                {cat === "All" ? "All" : cat}
              </button>
            ))}
          </div>
        </motion.header>

        <motion.div className="flex flex-wrap gap-6" variants={staggerContainer}>
          {displayed.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <PropertyCard
                imageSrc={item.imageSrc}
                price={item.price}
                priceUnit={item.priceUnit}
                title={item.title}
                location={item.location}
                beds={item.beds}
                baths={item.baths}
                sqft={item.sqft}
                rating={item.rating}
                deposit={item.deposit}
                furnishing={item.furnishing}
                availableFrom={item.availableFrom}
                tags={item.tags}
                verified={item.verified}
              />
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              size="md"
              className="px-8"
            >
              Load More
            </Button>
          </div>
        )}
        </div>
      </div>
    </motion.section>
  );
}
