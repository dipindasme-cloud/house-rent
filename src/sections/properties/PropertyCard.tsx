import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceUnit } from "@/data/HouseData";
import { fadeInUp } from "@/lib/animations";

interface PropertyCardProps {
  imageSrc: string;
  price: number;
  priceUnit: PriceUnit;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  rating: number;
  deposit: string;
  furnishing: string;
  availableFrom: string;
  tags: string[];
  verified: boolean;
  priceSuffix?: string;
}

function HeartIcon() {
  return (
    <svg
      className="h-5 w-5 text-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
      <path d="M10 8v9" />
      <path d="M14 8v9" />
      <path d="M18 8v9" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
      <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25" />
      <path d="M4 21l1-1.5" />
      <path d="M20 21l-1-1.5" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4v16h20V4H2z" />
      <path d="M2 8h20" />
      <path d="M7 8v4" />
      <path d="M12 8v4" />
      <path d="M17 8v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 stroke-[3] text-primary-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-accent-rent"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.75l2.69 5.45 6.01.87-4.35 4.24 1.03 5.99L12 16.47 6.62 19.3l1.03-5.99L3.3 9.07l6.01-.87L12 2.75z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function PropertyCard({
  imageSrc,
  price,
  priceUnit,
  title,
  location,
  beds,
  baths,
  sqft,
  rating,
  deposit,
  furnishing,
  availableFrom,
  tags,
  verified,
  priceSuffix,
}: PropertyCardProps) {
  const availabilityLabel =
    availableFrom === "Immediately"
      ? "Move-in Ready"
      : `Available ${availableFrom}`;

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-surface shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Property Image & Overlay Content */}
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />

        {/* Top Floating Badges */}
        <div className="absolute left-3 top-3 right-3 z-10 flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-surface/95 px-3 py-1 text-caption font-semibold text-foreground shadow-md backdrop-blur-md">
              {furnishing}
            </span>

            {verified && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-sale px-3 py-1 text-caption font-bold text-accent-sale-foreground shadow-md backdrop-blur-md">
                <CheckIcon />
                <span>Verified</span>
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label="Add to favourites"
            onClick={(e) => e.stopPropagation()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 bg-surface/90 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-surface hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <HeartIcon />
          </button>
        </div>

        {/* Bottom Overlay Text (Location & Price) */}
        <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-caption font-bold tracking-wider text-primary-foreground/95 uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {location}
            </span>

            <div className="flex items-baseline gap-1.5 text-primary-foreground">
              <span className="text-2xl font-black text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                ₹{price}
              </span>
              <span className="text-body font-bold text-primary-foreground/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                {priceUnit}
                {priceSuffix ? ` ${priceSuffix}` : ""}
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-surface/95 px-3 py-1.5 text-caption font-bold text-foreground shadow-md backdrop-blur-md">
            <StarIcon />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-h3 text-foreground">{title}</h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-caption">
            <span className="inline-flex items-center gap-1.5">
              <BedIcon />
              {beds} Beds
            </span>
            <span className="text-border-strong" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5">
              <BathIcon />
              {baths} Baths
            </span>
            <span className="text-border-strong" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5">
              <RulerIcon />
              {sqft.toLocaleString("en-IN")} sqft
            </span>
          </div>
        </div>

        <div className="inline-flex items-start gap-1.5 text-caption">
          <LocationIcon />
          <span>{location}</span>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-caption">
              Deposit:
              <span className="ml-1 font-bold text-foreground">{deposit}</span>
            </span>

            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-caption font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}

            {tags.length > 2 && (
              <span className="text-caption font-medium text-border-strong">
                +{tags.length - 2}
              </span>
            )}
          </div>

          <span className="text-caption font-bold text-accent-sale">
            {availabilityLabel}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-caption text-border-strong">Curated listing</span>

          <span className="inline-flex items-center gap-1 text-caption font-bold text-foreground transition-all duration-300 group-hover:text-accent">
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
