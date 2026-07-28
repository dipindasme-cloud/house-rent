import type { Metadata } from "next";

import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactDetails } from "@/sections/contact/ContactDetails";
import { FAQ } from "@/sections/shared/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a free property tour with AuraSpace. Get in touch with our experts to find your perfect luxury home.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />

      <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[4rem]">
            <div className="w-full lg:w-[24rem] shrink-0">
              <ContactDetails />
            </div>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
}
