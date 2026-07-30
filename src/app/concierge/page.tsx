import type { Metadata } from "next";

import { ConciergeHero } from "@/sections/concierge/ConciergeHero";
import { ConciergeSteps } from "@/sections/concierge/ConciergeSteps";
import { InquiryForm } from "@/sections/concierge/InquiryForm";
import { FAQ } from "@/sections/shared/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Concierge Services",
  description:
    "Bespoke lifestyle management and concierge services — private transport, yacht charters, fine dining, and estate care from AuraSpace.",
};

export default function ConciergePage() {
  return (
    <div className="flex flex-col">
      <ConciergeHero />
      <ConciergeSteps />
      <InquiryForm />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
