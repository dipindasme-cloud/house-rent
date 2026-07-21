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
    <section className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-[4rem] md:py-[6rem]">
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col gap-[1rem] mb-[3rem] md:mb-[4rem]">
        <span className="text-[0.8125rem] text-brand-600 font-semibold tracking-[0.125em] uppercase leading-none">
          How It Works
        </span>
        <h2 className="text-[2rem] md:text-[2.5rem] text-text-primary font-bold leading-[1.15] tracking-[-0.02em] max-w-[32rem]">
          Your journey starts here
        </h2>
      </div>

        <div className="flex flex-col lg:flex-row gap-[1.5rem]">
          {steps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col gap-[1rem] flex-1 bg-surface rounded-[1rem] border border-border p-[1.5rem] md:p-[2rem]"
            >
              <span className="text-[2.5rem] md:text-[3rem] text-luxury-300 font-bold leading-none tracking-[-0.03em]">
                {step.index}
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[1.125rem] md:text-[1.25rem] text-text-primary font-semibold leading-snug">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
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
