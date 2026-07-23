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
    imageSrc: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
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
    imageSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
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
    imageSrc: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
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
    imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
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
    imageSrc: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
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
    imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    price: 55000000,
    type: "Penthouse",
    title: "Bayview Penthouse",
    location: "Calangute, Goa",
    beds: 4,
    sqft: 3600,
    rating: 4.9,
  },
  {
    id: "aur-007",
    imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: 72000000,
    type: "Villa",
    title: "Lake View Manor",
    location: "Koramangala, Bangalore",
    beds: 5,
    sqft: 5200,
    rating: 4.8,
  },
  {
    id: "aur-008",
    imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    price: 15000000,
    type: "Apartment",
    title: "Urban Nest Apartments",
    location: "Andheri West, Mumbai",
    beds: 2,
    sqft: 1400,
    rating: 4.5,
  },
  {
    id: "aur-009",
    imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: 62000000,
    type: "Penthouse",
    title: "Coastal Breeze Penthouse",
    location: "Baga, Goa",
    beds: 4,
    sqft: 3800,
    rating: 4.9,
  },
  {
    id: "aur-010",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: 85000000,
    type: "Villa",
    title: "Hillside Retreat",
    location: "Lonavala, Maharashtra",
    beds: 6,
    sqft: 6500,
    rating: 5.0,
  },
  {
    id: "aur-011",
    imageSrc: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    price: 22000000,
    type: "Apartment",
    title: "Downtown Heights",
    location: "MG Road, Gurugram",
    beds: 3,
    sqft: 1900,
    rating: 4.7,
  },
  {
    id: "aur-012",
    imageSrc: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: 48000000,
    type: "Penthouse",
    title: "Seaside Luxe Penthouse",
    location: "Juhu, Mumbai",
    beds: 3,
    sqft: 2800,
    rating: 4.8,
  },
];

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse"] as const;
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export function ListingsCards() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered =
    activeCategory === "All"
      ? LISTINGS
      : LISTINGS.filter((item) => item.type === activeCategory);

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
