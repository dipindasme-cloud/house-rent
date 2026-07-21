import type { Metadata } from "next";

import { FaqsHero } from "@/components/sections/faqs/FaqsHero";
import { FAQ } from "@/components/sections/shared/FAQ";
import { ContactCTA } from "@/components/sections/shared/ContactCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to commonly asked questions about AuraSpace's rental services, property listings, and verification process.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqsHero />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
