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

      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-96 shrink-0">
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
