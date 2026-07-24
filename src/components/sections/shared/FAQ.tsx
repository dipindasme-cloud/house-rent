"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  imageSrc: string;
  answer1: string;
  answer2: string;
}

const faqs: FAQItem[] = [
  {
    question: "Will the rent increase next year?",
    imageSrc:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    answer1:
      "This is the most fundamental question to ask when renting a house. It determines whether the property fits within your budget and helps you plan your monthly expenses accordingly.",
    answer2:
      "This is the most basic and essential question to ask when inquiring about a rental property.",
  },
  {
    question: "Is the house furnished or unfurnished?",
    imageSrc:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    answer1:
      "Some homes are fully furnished with furniture, appliances, and basic household items. Others may be partially furnished or completely unfurnished. Each listing clearly mentions the furnishing status in the details section.",
    answer2:
      "Be sure to review the photos and description before booking. If you're unsure, you can always message the host for confirmation.",
  },
  {
    question: "How are maintenance requests managed?",
    imageSrc:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    answer1:
      "Maintenance requests are typically handled by the property owner or manager. If something needs fixing, you can contact them directly through the platform. Most listings provide clear instructions for reporting issues.",
    answer2:
      "Response times may vary, but urgent problems are usually prioritized. Some properties also include 24/7 maintenance support. Check the listing or ask the host for specific details.",
  },
  {
    question: "Any penalty for early lease termination?",
    imageSrc:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    answer1:
      "Penalties for early termination vary by property and lease terms. Some leases may charge a fee or require notice in advance. Others may allow early exit with flexible conditions. Always review the lease agreement carefully before signing.",
    answer2:
      "If unsure, contact the property manager for clarification. Breaking a lease without notice may affect your rental history.",
  },
  {
    question: "Who handles lawn and maintenance work?",
    imageSrc:
      "https://images.unsplash.com/photo-1681949287382-052ea3954a51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    answer1:
      "Typically, lawn care and routine maintenance are managed by the landlord or property manager. In some cases, tenants may be responsible for basic upkeep, especially in single-family homes. The lease agreement will specify who handles these tasks.",
    answer2:
      "If you're unsure, ask the landlord before signing the lease. For urgent repairs, contact the property manager promptly. Clear communication helps ensure a well-maintained home.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path
        d="M12 4v16M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-eyebrow text-(--accent-rent)">
            FAQ & Get Answer
          </span>
          <h2 className="text-h1">
            Get every answer here
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3 w-full max-w-3xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`w-full rounded-xl overflow-hidden ${
                    isOpen ? "bg-(--primary)" : "bg-(--surface) border border-(--border)"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center justify-between w-full text-left p-5 md:p-6 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
                          isOpen ? "bg-(--surface) !text-(--foreground)" : "bg-(--primary) !text-(--primary-foreground)"
                        }`}>
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </span>
                      <h6
                        className={`text-body font-semibold m-0 ${
                          isOpen ? "!text-(--primary-foreground)" : ""
                        }`}
                      >
                        {faq.question}
                      </h6>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[40rem] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-5 p-5 md:p-6 pt-0">
                      <div className="w-full md:w-[18rem] shrink-0 rounded-xl overflow-hidden relative aspect-[4/3]">
                        <Image
                          src={faq.imageSrc}
                          alt={faq.question}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 18rem"
                        />
                      </div>
                      <div className="flex flex-col gap-3 flex-1">
                        <p className="text-body m-0 !text-(--primary-foreground)">
                          {faq.answer1}
                        </p>
                        <p className="text-body m-0 !text-(--primary-foreground)">
                          {faq.answer2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 rounded-3xl">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <p className="text-body m-0 max-w-lg">
                We're here to help! Whether you're curious about house rent,
                costs, or how it works, our team is ready to guide.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 text-body !text-(--primary-foreground) rounded-xl bg-(--primary) transition-all duration-200 hover:opacity-90 shrink-0"
            >
              <svg
                viewBox="0 0 256 256"
                className="w-[1.125rem] h-[1.125rem] shrink-0"
                fill="currentColor"
              >
                <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" />
              </svg>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
}
