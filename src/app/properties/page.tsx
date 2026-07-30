import type { Metadata } from "next";

import { ListingsHero } from "@/sections/properties/ListingsHero";
import { ListingsCards } from "@/sections/properties/ListingsCards";
import { FAQ } from "@/sections/shared/FAQ";
import { ContactCTA } from "@/components/ContactCTA";


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
      <FAQ />
      <ContactCTA />
    </div>
  );
}
