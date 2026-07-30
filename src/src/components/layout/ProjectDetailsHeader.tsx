"use client";

import Link from "next/link";
import RollUpText from "@/components/ui/RollUpText";
import CTAButton from "../ui/CTAButton";
import Container from "../ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function ProjectDetailsHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background py-4 sm:py-5 lg:py-6">
      
      {/* 1. Desktop Layout System (Visible at >= 768px) */}
      <div className="hidden md:block w-full">
        <Container className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link
            href="/"
            className="t-subheading font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            Dipindas M
          </Link>

          {/* Cleaned Up Desktop Navigation */}
          <nav className="flex items-center gap-[1.5rem]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <RollUpText label={link.label} />
              </Link>
            ))}
          </nav>

          {/* CTA Button in Navbar Header */}
          <div>
            <CTAButton 
              label="Let's Talk" 
              href="/contact" 
              variant="header" 
            />
          </div>
        </Container>
      </div>

      {/* 2. Mobile Clean Layout System (Visible at < 768px) */}
      <div className="block md:hidden w-full">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center justify-center p-[0.5rem] text-foreground hover:text-muted transition-colors"
            aria-label="Back to home"
          >
            {/* Minimalist Premium Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="h-[1.5rem] w-[1.5rem]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
        </div>
      </div>

    </header>
  );
}
