import type { Metadata } from "next";

import { AboutHero } from "@/sections/about/AboutHero";
import { AboutMission } from "@/sections/about/AboutMission";
import { AboutValues } from "@/sections/about/AboutValues";
import { AboutTimeline } from "@/sections/about/AboutTimeline";
import { AboutTeam } from "@/sections/about/AboutTeam";
import { AboutAwards } from "@/sections/about/AboutAwards";
import { Testimonials } from "@/sections/shared/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover AuraSpace — India's premier luxury real estate platform. Handpicked homes, verified listings, and a trusted rental experience.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
      <AboutAwards />
      <Testimonials heading="Hear from our community" />
      <ContactCTA />
    </main>
  );
}
