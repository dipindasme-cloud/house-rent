import type { Metadata } from "next";

import { AboutHero } from "@/sections/about/AboutHero";
import { AboutMission } from "@/sections/about/AboutMission";
import { AboutTimeline } from "@/sections/about/AboutTimeline";
import { AboutAwards } from "@/sections/about/AboutAwards";
import { ContactCTA } from "@/sections/shared/ContactCTA";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover AuraSpace — India's premier luxury real estate platform. Handpicked homes, verified listings, and a trusted rental experience.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutMission />
      <AboutTimeline />
      <AboutAwards />
      <ContactCTA />
    </div>
  );
}
