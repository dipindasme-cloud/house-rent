"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/sections/properties/PropertyCard";
import { RENTAL_PROPERTIES } from "@/data/HouseData";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  buttonHoverTap,
  sectionViewport,
} from "@/lib/animations";

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse"] as const;

export function HomeListings() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? RENTAL_PROPERTIES
      : RENTAL_PROPERTIES.filter((item) => item.type === activeCategory);

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <motion.header
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5"
        >
          <div className="flex flex-col gap-2">
            <motion.span className="font-body text-eyebrow" variants={fadeIn}>
              Featured Properties
            </motion.span>
            <motion.h2 className="font-display text-h1" variants={fadeInUp}>
              Handpicked Luxury<br className="hidden sm:block" />
              <span className="text-accent-rent"> Estates</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
             <motion.button
  key={cat}
  onClick={() => setActiveCategory(cat)}
  whileHover={buttonHoverTap.whileHover}
  whileTap={buttonHoverTap.whileTap}
  transition={buttonHoverTap.transition}
  className={
    `font-body text-caption py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ` +
    (activeCategory === cat
      ? "bg-accent-rent text-accent-rent-foreground shadow-sm"
      : "bg-surface-secondary text-muted-foreground border border-border-light hover:bg-surface-hover")
  }
>
  {cat}
</motion.button>
            ))}
          </div>
        </motion.header>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainerFast}>
          {filtered.map((item) => (
            <PropertyCard
              key={item.id}
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
              priceSuffix=" / mo"
            />
          ))}
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
}
