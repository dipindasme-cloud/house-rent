import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  imageSrc: string;
  price: number;
  type: string;
  title: string;
  location: string;
  beds: number;
  sqft: number;
  rating: number;
}

export function PropertyCard({
  imageSrc,
  price,
  type,
  title,
  location,
  beds,
  sqft,
  rating,
}: PropertyCardProps) {
  return (
    <div className="group flex flex-col bg-(--surface) rounded-[1rem] overflow-hidden border border-(--border) transition-shadow duration-300 hover:shadow-[0_0.5rem_2rem_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-[0.75rem] left-[0.75rem] bg-(--surface)/90 backdrop-blur-[0.125rem] text-caption py-[0.375rem] px-[0.75rem] rounded-[0.375rem]">
          {type}
        </div>
        <div className="absolute top-[0.75rem] right-[0.75rem] flex items-center gap-[0.25rem] bg-(--surface)/90 backdrop-blur-[0.125rem] text-caption font-semibold py-[0.375rem] px-[0.625rem] rounded-[0.375rem]">
          <span className="text-(--accent-sale) text-[0.6875rem]">&#9733;</span>
          {rating.toFixed(1)}
        </div>
      </div>

      <div className="flex flex-col gap-[0.5rem] p-[1.25rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <span className="text-(--accent-rent) text-h3">
            {formatCurrency(price)}
          </span>
          <h3 className="text-body font-semibold">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-[0.25rem] text-caption">
          <svg
            className="w-[0.875rem] h-[0.875rem] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </div>

        <div className="w-full h-px bg-(--border)" />

        <div className="flex items-center justify-between text-caption">
          <span className="font-medium">
            {beds} BHK
          </span>
          <span className="font-medium">
            {sqft.toLocaleString("en-IN")} sq. ft.
          </span>
        </div>
      </div>
    </div>
  );
}
