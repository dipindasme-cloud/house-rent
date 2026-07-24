"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="M6 13a4 4 0 0 0 8 0" />
      <line x1="6" y1="21" x2="18" y2="21" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

const LOCATIONS = [
  "Mumbai (Bandra/Juhu)",
  "Bangalore (Indiranagar)",
  "Delhi NCR",
  "Pune",
  "Goa",
  "Hyderabad",
];

const PROPERTY_TYPES = [
  "All Types",
  "Luxury Villa",
  "Penthouse",
  "Apartment",
];

const PRICE_RANGES = [
  "Any Price",
  "₹1.5L - ₹3L / mo",
  "₹3L - ₹5L / mo",
  "₹5L+ / mo",
];

const BEDROOMS = ["2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

export function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState<string | null>(null);

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-end overflow-hidden py-16 md:py-24">
      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />

      {/* Background Hero Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero/home.jpg"
          alt="Luxury Real Estate Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Layout Wrapper with Responsive Padding */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={sectionViewport}
          >
            {/* Headline Section */}
            <div className="max-w-2xl">
              <motion.h1
                variants={fadeInUp}
                className="text-display font-serif font-bold tracking-tight drop-shadow-md !text-(--muted)"
              >
                Luxury Long-Term Rentals Tailored to Your Lifestyle
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-body-lg mt-3 max-w-xl font-normal drop-shadow-sm !text-(--primary-foreground)"
              >
                Curated, fully-furnished premium homes with transparent lease terms.
              </motion.p>
            </div>

            {/* Floating Search Widget */}
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-5xl"
            >
              {/* Desktop: Horizontal Bar */}
              <div className="hidden md:block bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-2">
                <div className="flex items-center divide-x divide-(--border)">
                  {/* Location */}
                  <div className="flex items-center gap-3 px-4 py-2 flex-1">
                    <span className="text-(--muted-foreground) shrink-0">
                      <MapPinIcon />
                    </span>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                    >
                      <option value="">Select Location</option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type */}
                  <div className="flex items-center gap-3 px-4 py-2 flex-1">
                    <span className="text-(--muted-foreground) shrink-0">
                      <HomeIcon />
                    </span>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                    >
                      <option value="">Property Type</option>
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center gap-3 px-4 py-2 flex-1">
                    <span className="text-(--muted-foreground) shrink-0">
                      <RupeeIcon />
                    </span>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                    >
                      <option value="">Price Range</option>
                      {PRICE_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div className="flex items-center gap-2 px-4 py-2">
                    <span className="text-(--muted-foreground) shrink-0">
                      <BedIcon />
                    </span>
                    <div className="flex items-center gap-1.5">
                      {BEDROOMS.map((bhk) => (
                        <button
                          key={bhk}
                          type="button"
                          onClick={() => setBedrooms(bhk === bedrooms ? null : bhk)}
                          className={`px-3 py-1.5 rounded-lg text-caption font-medium transition-all duration-200 cursor-pointer ${
                            bedrooms === bhk
                              ? "bg-(--primary) text-(--primary-foreground) shadow-xs"
                              : "bg-(--muted) text-(--muted-foreground) hover:bg-(--surface-hover)"
                          }`}
                        >
                          {bhk}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="pl-2">
                    <button 
                      type="button"
                      className="flex items-center justify-center gap-2 bg-(--primary) !text-(--primary-foreground) px-6 py-3.5 rounded-xl text-body font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer shrink-0"
                    >
                      <SearchIcon />
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile: Stacked Card */}
              <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-4 flex flex-col gap-3">
                {/* Location */}
                <div className="flex items-center gap-3 bg-(--muted) rounded-xl px-3.5 h-11">
                  <span className="text-(--muted-foreground) shrink-0">
                    <MapPinIcon />
                  </span>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                  >
                    <option value="">Select Location</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div className="flex items-center gap-3 bg-(--muted) rounded-xl px-3.5 h-11">
                  <span className="text-(--muted-foreground) shrink-0">
                    <HomeIcon />
                  </span>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                  >
                    <option value="">Property Type</option>
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="flex items-center gap-3 bg-(--muted) rounded-xl px-3.5 h-11">
                  <span className="text-(--muted-foreground) shrink-0">
                    <RupeeIcon />
                  </span>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full bg-transparent text-body outline-none cursor-pointer appearance-none text-(--foreground) font-medium"
                  >
                    <option value="">Price Range</option>
                    {PRICE_RANGES.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="flex items-center gap-2 bg-(--muted) rounded-xl px-3.5 py-2">
                  <span className="text-(--muted-foreground) shrink-0">
                    <BedIcon />
                  </span>
                  <div className="flex items-center gap-1.5 w-full overflow-x-auto no-scrollbar">
                    {BEDROOMS.map((bhk) => (
                      <button
                        key={bhk}
                        type="button"
                        onClick={() => setBedrooms(bhk === bedrooms ? null : bhk)}
                        className={`px-3 py-1.5 rounded-lg text-caption font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                          bedrooms === bhk
                            ? "bg-(--primary) text-(--primary-foreground) shadow-xs"
                            : "bg-white/80 text-(--muted-foreground) hover:bg-white"
                        }`}
                      >
                        {bhk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Button */}
                <button 
                  type="button"
                  className="flex items-center justify-center gap-2 bg-(--primary) !text-(--primary-foreground) h-12 rounded-xl text-body font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer w-full mt-1 shadow-md"
                >
                  <SearchIcon />
                  <span>Search Properties</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}