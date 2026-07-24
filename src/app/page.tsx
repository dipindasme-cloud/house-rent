import { Hero } from "@/components/sections/home/Hero";
import { Marquee } from "@/components/sections/home/Marquee";
import { AboutStats } from "@/components/sections/home/AboutStats";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { HomeListings } from "@/components/sections/home/HomeListings";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQ } from "@/components/sections/shared/FAQ";
import { ContactCTA } from "@/components/sections/shared/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <AboutStats />
      <HowItWorks />
      <HomeListings />
      <FAQ />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
