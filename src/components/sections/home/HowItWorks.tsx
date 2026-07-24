"use client";

const steps = [
  {
    index: "01",
    title: "Search properties",
    description:
      "Explore premium homes tailored to your lifestyle and budget.",
  },
  {
    index: "02",
    title: "Select your home",
    description:
      "Review choices that align perfectly with your space and preference rules.",
  },
  {
    index: "03",
    title: "Book online",
    description:
      "Secure your property choice using a lightning-fast, simple booking process.",
  },
  {
    index: "04",
    title: "Move in",
    description:
      "Move into your brand-new home with confidence and ease.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-(--background)">
      {/* 
        Standardized container wrapper:
        - max-w-7xl mx-auto keeps maximum readable width centered
        - px-4 sm:px-6 lg:px-8 provides consistent edge gutters across ALL viewports
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-10 md:mb-16">
          <span className="text-eyebrow text-(--accent-rent) font-medium tracking-wide uppercase text-sm">
            How It Works
          </span>
          <h2 className="text-h1 max-w-lg font-serif tracking-tight">
            Your journey starts here
          </h2>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col gap-4 bg-(--surface) rounded-2xl border border-(--border) p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-display text-(--muted-foreground) font-mono text-3xl font-semibold">
                {step.index}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 font-semibold text-(--foreground)">
                  {step.title}
                </h3>
                <p className="text-body text-(--muted-foreground) text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}