"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";

interface ListingItem {
  id: string;
  imageSrc: string;
  price: number;
  type: "Villa" | "Apartment" | "Penthouse";
  title: string;
  location: string;
  beds: number;
  sqft: number;
  rating: number;
}

const LISTINGS: ListingItem[] = [
  {
    id: "aur-001",
    imageSrc: "/images/properties/villa-palm-grove.jpg",
    price: 47500000,
    type: "Villa",
    title: "Palm Grove Estate",
    location: "Juhu, Mumbai",
    beds: 5,
    sqft: 4500,
    rating: 4.9,
  },
  {
    id: "aur-002",
    imageSrc: "/images/properties/sky-penthouse.jpg",
    price: 32000000,
    type: "Penthouse",
    title: "The Sky Residence",
    location: "Bandra West, Mumbai",
    beds: 4,
    sqft: 3200,
    rating: 4.8,
  },
  {
    id: "aur-003",
    imageSrc: "/images/properties/green-acres.jpg",
    price: 18500000,
    type: "Apartment",
    title: "Green Acres Towers",
    location: "Whitefield, Bangalore",
    beds: 3,
    sqft: 2150,
    rating: 4.7,
  },
  {
    id: "aur-004",
    imageSrc: "/images/properties/riverfront-villa.jpg",
    price: 68000000,
    type: "Villa",
    title: "Riverfront Haven",
    location: "Pimpri-Chinchwad, Pune",
    beds: 6,
    sqft: 5800,
    rating: 5.0,
  },
  {
    id: "aur-005",
    imageSrc: "/images/properties/golf-course-apartment.jpg",
    price: 24500000,
    type: "Apartment",
    title: "Golf Course Residency",
    location: "Sector 54, Gurugram",
    beds: 3,
    sqft: 2680,
    rating: 4.6,
  },
  {
    id: "aur-006",
    imageSrc: "/images/properties/beach-penthouse.jpg",
    price: 55000000,
    type: "Penthouse",
    title: "Bayview Penthouse",
    location: "Calangute, Goa",
    beds: 4,
    sqft: 3600,
    rating: 4.9,
  },
];

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse"] as const;

export function HomeListings() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? LISTINGS
      : LISTINGS.filter((item) => item.type === activeCategory);

  return (
    <section className="py-[4rem] px-[1.5rem] md:px-[3rem] lg:px-[6rem]">
      <div className="max-w-[80rem] mx-auto flex flex-col gap-[2.5rem]">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-[1.25rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-brand-600 text-[0.8125rem] font-semibold tracking-[0.125em] uppercase leading-none">
              Featured Properties
            </span>
            <h2 className="text-text-primary text-[1.75rem] md:text-[2.25rem] font-bold leading-tight">
              Handpicked Luxury<br className="hidden sm:block" />
              <span className="text-luxury-500"> Estates</span>
            </h2>
          </div>

          <div className="flex items-center gap-[0.375rem] flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  `text-[0.8125rem] font-medium leading-none py-[0.5rem] px-[1rem] rounded-[0.5rem] transition-all duration-200 cursor-pointer ` +
                  (activeCategory === cat
                    ? "bg-brand-600 text-white"
                    : "bg-surface-secondary text-text-secondary border border-border hover:bg-luxury-100")
                }
              >
                {cat === "All" ? "All" : cat}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-wrap gap-[1.5rem]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <PropertyCard
                imageSrc={item.imageSrc}
                price={item.price}
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
      </div>
    </section>
  );
}
