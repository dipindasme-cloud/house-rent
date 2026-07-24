import type { Metadata } from "next";

import { ListingsHero } from "@/components/sections/listings/ListingsHero";
import { ListingsCards } from "@/components/sections/listings/ListingsCards";


export const metadata: Metadata = {
  title: "Listed Properties",
  description:
    "Browse AuraSpace's curated collection of verified luxury properties across India's top locations.",
};

export default function ListingsPage() {
  return (
    <div className="flex flex-col">
      <ListingsHero />
      <ListingsCards />
    
    </div>
  );
}
