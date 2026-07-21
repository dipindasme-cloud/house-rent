import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/listings", label: "Listed Homes" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-[1.5rem] md:px-[3rem] lg:px-[6rem]">
      <div className="flex items-center justify-between max-w-[80rem] mx-auto py-[1rem]">
        <Link
          href="/"
          className="flex items-center gap-[0.5rem] text-text-primary no-underline"
        >
          <span className="flex items-center justify-center w-[2rem] h-[2rem] bg-brand-600 text-white text-[0.8125rem] font-bold rounded-[0.5rem] leading-none">
            A
          </span>
          <span className="text-[1.125rem] font-bold tracking-[-0.02em] leading-none">
            AuraSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-[2rem]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] text-text-secondary font-medium leading-none transition-colors duration-200 hover:text-text-primary no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden sm:inline-flex">
          <Button size="sm">
            <svg
              className="w-[1rem] h-[1rem] shrink-0"
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
            Book a Tour
          </Button>
        </Link>
      </div>
    </header>
  );
}
