import type { Metadata } from "next";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { AboutTimeline } from "@/components/sections/about/AboutTimeline";
import { AboutAwards } from "@/components/sections/about/AboutAwards";


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
      
    </div>
  );
}
