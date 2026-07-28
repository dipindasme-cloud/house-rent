import { Hero } from "@/sections/home/Hero";
import { HomeListings } from "@/sections/home/Properties";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { AboutStats } from "@/sections/home/AboutStats";
import { Testimonials } from "@/sections/home/Testimonials";
import { FAQ } from "@/sections/shared/FAQ";
import { ContactCTA } from "@/sections/shared/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeListings />
      <WhyChooseUs />
      <AboutStats />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
