"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SALE_PROPERTIES, type Property } from "@/data/HouseData";

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
    <section className="py-16">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-eyebrow text-(--accent-rent)">
              All Properties
            </span>
            <h2 className="text-h2">
              Explore our listings
            </h2>
          </div>

          <div className="flex items-center gap-[0.375rem] flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={
                  `text-caption py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer ` +
                  (activeCategory === cat
                    ? "bg-(--primary) text-(--primary-foreground)"
                    : "bg-(--muted) text-(--muted-foreground) border border-(--border) hover:bg-(--surface-hover)")
                }
              >
                {cat === "All" ? "All" : cat}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-wrap gap-6">
          {displayed.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <PropertyCard
                imageSrc={item.imageSrc}
                price={item.price}
                priceUnit={item.priceUnit}
                type={item.type}
                title={item.title}
                location={item.location}
                beds={item.beds}
                sqft={item.sqft}
                rating={item.rating}
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              className="text-caption font-medium py-3 px-8 rounded-lg bg-(--primary) text-(--primary-foreground) hover:opacity-90 transition-all duration-200 cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
