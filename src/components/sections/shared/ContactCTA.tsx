import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-(--primary) rounded-3xl p-8 md:p-12 lg:p-16 border border-(--border)">
        <div className="flex flex-col gap-5 flex-1">
          <h2 className="text-h2 text-(--primary-foreground)">
            Ready to book a free tour?
          </h2>

          <a
            href="tel:+919999999999"
            className="flex items-center gap-3 text-h3 text-(--primary-foreground) no-underline transition-colors duration-200 hover:text-(--primary-foreground)"
          >
            <svg
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 99999 99999
          </a>
        </div>

        <Button size="lg" className="shrink-0 w-full md:w-auto">
          <svg
            className="w-[1.125rem] h-[1.125rem] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book appointment
        </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
