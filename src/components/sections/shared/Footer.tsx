import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const quickLinks = [
  { href: "/listings", label: "Listed Homes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-secondary px-[1.5rem] md:px-[3rem] lg:px-[6rem]">
      <div className="max-w-[80rem] mx-auto py-[4rem] md:py-[5rem]">
        <div className="flex flex-col md:flex-row gap-[3rem] md:gap-[4rem]">
          <div className="animate-slide-in-left delay-100 flex flex-col gap-[1.25rem] flex-[2]">
            <Link
              href="/"
              className="flex items-center gap-[0.5rem] text-text-primary no-underline group"
            >
              <span className="flex items-center justify-center w-[2rem] h-[2rem] bg-brand-600 text-white text-[0.8125rem] font-bold rounded-[0.5rem] leading-none transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_1.5rem_rgba(79,70,229,0.4)]">
                A
              </span>
              <span className="text-[1.125rem] font-bold tracking-[-0.02em] leading-none">
                AuraSpace
              </span>
            </Link>

            <p className="text-[0.9375rem] text-text-secondary leading-relaxed max-w-[24rem]">
              India&apos;s premier destination for luxury real estate. We
              connect you with handpicked premium properties across
              Mumbai, Delhi, Bangalore, and beyond.
            </p>

            <p className="text-[0.8125rem] text-text-muted leading-none">
              &copy; {new Date().getFullYear()} AuraSpace. All rights
              reserved.
            </p>
          </div>

          <div className="animate-fade-in delay-200 flex flex-col gap-[1.25rem] flex-1">
            <span className="text-[0.8125rem] text-text-muted font-semibold tracking-[0.125em] uppercase leading-none">
              Quick Links
            </span>
            <nav className="flex flex-col gap-[0.75rem]">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] text-text-secondary font-medium leading-none transition-all duration-200 hover:text-text-primary hover:translate-x-[0.25rem] no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="animate-slide-in-right delay-300 flex flex-col gap-[1.25rem] flex-[1.5]">
            <span className="text-[0.8125rem] text-text-muted font-semibold tracking-[0.125em] uppercase leading-none">
              Newsletter
            </span>
            <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
              Get weekly updates on new listings, market trends, and
              exclusive off-market properties.
            </p>
            <form className="flex items-stretch gap-[0.5rem]">
              <Input
                type="email"
                placeholder="Enter your email"
                inputSize="sm"
                className="min-w-0 transition-shadow duration-200 focus:shadow-[0_0_0_0.125rem_rgba(79,70,229,0.25)]"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="sm"
                variant="primary"
                className="shrink-0 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
