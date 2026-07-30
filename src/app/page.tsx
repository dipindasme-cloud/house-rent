import { Hero } from "@/sections/home/Hero";
import { HomeListings } from "@/sections/home/Properties";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { AurospaceDifference } from "@/sections/home/AurospaceDifference";
import { Testimonials } from "@/sections/shared/Testimonials";
import { FAQ } from "@/sections/shared/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AurospaceDifference />
      <HomeListings />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
