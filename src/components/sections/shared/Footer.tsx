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
    <footer className="border-t border-(--border) bg-(--muted) py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="animate-slide-in-left delay-100 flex flex-col gap-5 flex-[2]">
            <Link
              href="/"
              className="flex items-center gap-2 text-(--foreground) no-underline group"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-(--primary) text-(--primary-foreground) text-caption font-bold rounded-lg leading-none transition-transform duration-300 group-hover:scale-110">
                A
              </span>
              <span className="text-h3">
                AuraSpace
              </span>
            </Link>

            <p className="text-body max-w-sm">
              India&apos;s premier destination for luxury real estate. We
              connect you with handpicked premium properties across
              Mumbai, Delhi, Bangalore, and beyond.
            </p>

            <p className="text-caption">
              &copy; {new Date().getFullYear()} AuraSpace. All rights
              reserved.
            </p>
          </div>

          <div className="animate-fade-in delay-200 flex flex-col gap-5 flex-1">
            <span className="text-eyebrow text-(--muted-foreground)">
              Quick Links
            </span>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body hover:text-(--foreground) hover:translate-x-[0.25rem] no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="animate-slide-in-right delay-300 flex flex-col gap-5 flex-[1.5]">
            <span className="text-eyebrow text-(--muted-foreground)">
              Newsletter
            </span>
            <p className="text-body">
              Get weekly updates on new listings, market trends, and
              exclusive off-market properties.
            </p>
            <form className="flex items-stretch gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                inputSize="sm"
                className="min-w-0 transition-shadow duration-200 focus:shadow-[0_0_0_0.125rem_(--primary)]"
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
      </div>
    </footer>
  );
}
