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
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
        <span className="text-eyebrow text-(--accent-rent)">
          How It Works
        </span>
        <h2 className="text-h1 max-w-lg">
          Your journey starts here
        </h2>
      </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {steps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col gap-4 flex-1 bg-(--surface) rounded-2xl border border-(--border) p-6 md:p-8"
            >
              <span className="text-display text-(--muted-foreground)">
                {step.index}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-h3">
                  {step.title}
                </h3>
                <p className="text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
