"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  heroImageScale,
  buttonHoverTap,
  sectionViewport,
} from "@/lib/animations";

interface DropdownOption {
  label: string;
  value: string;
}

const LOCATIONS: DropdownOption[] = [
  { label: "Mumbai Metro", value: "mumbai-metro" },
  { label: "Delhi NCR", value: "delhi-ncr" },
  { label: "Bangalore", value: "bangalore" },
  { label: "Hyderabad", value: "hyderabad" },
  { label: "Chennai", value: "chennai" },
  { label: "Pune", value: "pune" },
  { label: "Goa", value: "goa" },
  { label: "Kochi", value: "kochi" },
];

const PROPERTY_TYPES: DropdownOption[] = [
  { label: "Penthouse", value: "penthouse" },
  { label: "Villa", value: "villa" },
  { label: "Luxury Apartment", value: "luxury-apartment" },
];

const RENT_RANGES: DropdownOption[] = [
  { label: "₹1.5L - ₹3L / mo", value: "1.5-3" },
  { label: "₹3L - ₹5L / mo", value: "3-5" },
  { label: "₹5L+ / mo", value: "5-plus" },
];

const MOVE_IN_DATES: DropdownOption[] = [
  { label: "Immediate", value: "immediate" },
  { label: "Next 30 Days", value: "next-30" },
];

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="M6 13a4 4 0 0 0 8 0" />
      <line x1="6" y1="21" x2="18" y2="21" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg className={`h-3 w-3 fill-none stroke-current transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface CustomSelectProps {
  icon: React.ReactNode;
  value: string;
  placeholder: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

function CustomSelect({ icon, value, placeholder, options, onSelect }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center gap-3 bg-transparent px-4 py-3 min-h-[3rem] text-left whitespace-nowrap transition-colors duration-200 hover:bg-surface/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={placeholder}
      >
        <span className="text-primary-foreground/60 transition-colors duration-200 group-hover:text-primary-foreground shrink-0">{icon}</span>
                    <span className={`flex-1 font-body text-body outline-none truncate ${selected ? "font-medium text-primary-foreground" : "text-primary-foreground/50"}`}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="text-primary-foreground/60 transition-colors duration-200 group-hover:text-primary-foreground shrink-0"><ChevronDown open={open} /></span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-1 rounded-lg border border-border bg-surface py-1 shadow-lg max-h-24 overflow-y-auto"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              onClick={() => { onSelect(opt.value); setOpen(false); }}
              className={`flex w-full items-center px-4 py-2.5 text-body transition-colors hover:bg-primary/5 ${
                opt.value === value ? "font-semibold text-foreground" : "text-muted-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [rentRange, setRentRange] = useState("");
  const [moveInDate, setMoveInDate] = useState("");

  return (
    <motion.section
      className="relative min-h-[calc(100dvh-4rem)] flex items-end overflow-hidden py-16 md:py-24"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90 pointer-events-none" />

      <motion.div
        className="absolute inset-0"
        variants={heroImageScale}
        initial="hidden"
        animate="visible"
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

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={sectionViewport}
          >
            <div className="max-w-2xl">
              <motion.h1
                variants={fadeInUp}
                className="font-display text-display drop-shadow-md !text-primary-foreground"
              >
                Curated Luxury Long-Term Rentals
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="font-body text-body-lg mt-3 max-w-xl drop-shadow-sm !text-primary-foreground/80"
              >
                Fully-furnished penthouses, estates, and architectural masterpieces with verified lease agreements.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="w-full max-w-7xl"
            >
              {/* Desktop: Grid Layout */}
              <div className="hidden md:block backdrop-blur-xl bg-surface/20 border border-surface/30 rounded-2xl p-4 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="min-w-0 rounded-xl bg-surface/10">
                    <CustomSelect
                      icon={<MapPinIcon />}
                      value={location}
                      placeholder="Select Location"
                      options={LOCATIONS}
                      onSelect={setLocation}
                    />
                  </div>
                  <div className="min-w-0 rounded-xl bg-surface/10">
                    <CustomSelect
                      icon={<HomeIcon />}
                      value={propertyType}
                      placeholder="Property Type"
                      options={PROPERTY_TYPES}
                      onSelect={setPropertyType}
                    />
                  </div>
                  <div className="min-w-0 rounded-xl bg-surface/10">
                    <CustomSelect
                      icon={<RupeeIcon />}
                      value={rentRange}
                      placeholder="Rent Range"
                      options={RENT_RANGES}
                      onSelect={setRentRange}
                    />
                  </div>
                  <div className="min-w-0 rounded-xl bg-surface/10">
                    <CustomSelect
                      icon={<CalendarIcon />}
                      value={moveInDate}
                      placeholder="Move-in Date"
                      options={MOVE_IN_DATES}
                      onSelect={setMoveInDate}
                    />
                  </div>
                  <div className="flex items-stretch">
                    <motion.button
                      type="button"
                      whileHover={buttonHoverTap.whileHover}
                      whileTap={buttonHoverTap.whileTap}
                      transition={buttonHoverTap.transition}
                      className="flex w-full items-center justify-center gap-2 bg-primary !text-primary-foreground px-6 py-3 rounded-xl text-body font-semibold hover:opacity-90 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      <SearchIcon />
                      <span>Search Estates</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Mobile: Stacked Card */}
              <div className="md:hidden backdrop-blur-xl bg-surface/20 border border-surface/30 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
                <div className="rounded-xl bg-surface/10">
                  <CustomSelect
                    icon={<MapPinIcon />}
                    value={location}
                    placeholder="Select Location"
                    options={LOCATIONS}
                    onSelect={setLocation}
                  />
                </div>
                <div className="rounded-xl bg-surface/10">
                  <CustomSelect
                    icon={<HomeIcon />}
                    value={propertyType}
                    placeholder="Property Type"
                    options={PROPERTY_TYPES}
                    onSelect={setPropertyType}
                  />
                </div>
                <div className="rounded-xl bg-surface/10">
                  <CustomSelect
                    icon={<RupeeIcon />}
                    value={rentRange}
                    placeholder="Rent Range"
                    options={RENT_RANGES}
                    onSelect={setRentRange}
                  />
                </div>
                <div className="rounded-xl bg-surface/10">
                  <CustomSelect
                    icon={<CalendarIcon />}
                    value={moveInDate}
                    placeholder="Move-in Date"
                    options={MOVE_IN_DATES}
                    onSelect={setMoveInDate}
                  />
                </div>
                <motion.button
                  type="button"
                  whileHover={buttonHoverTap.whileHover}
                  whileTap={buttonHoverTap.whileTap}
                  transition={buttonHoverTap.transition}
                  className="flex items-center justify-center gap-2 bg-primary !text-primary-foreground h-12 rounded-xl text-body font-semibold hover:opacity-90 transition-colors duration-200 cursor-pointer w-full mt-1 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <SearchIcon />
                  <span>Search Estates</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
