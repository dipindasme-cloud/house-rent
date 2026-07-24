"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { RENTAL_PROPERTIES, type Property } from "@/data/HouseData";

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse"] as const;

export function HomeListings() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? RENTAL_PROPERTIES
      : RENTAL_PROPERTIES.filter((item) => item.type === activeCategory);

  return (
    <section className="py-16">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-eyebrow text-(--accent-rent)">
              Featured Properties
            </span>
            <h2 className="text-h2">
              Handpicked Luxury<br className="hidden sm:block" />
              <span className="text-(--accent-rent)"> Estates</span>
            </h2>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
          {filtered.map((item) => (
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
                priceSuffix=" / mo"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
