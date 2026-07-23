"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "ABOUT", href: "/about" },
  { label: "PROPERTIES", href: "/properties" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-(--surface) backdrop-blur-md transition-colors border-b border-(--border)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="text-[1.4375rem] font-medium italic tracking-[-0.04em] text-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/50 rounded-sm"
          aria-label="AuroSpace"
        >
          AuroSpace
        </Link>

        {/* Desktop Navigation & CTA Container */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav aria-label="Main Navigation">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block py-1 text-xs font-semibold tracking-wider text-(--muted-foreground) transition-colors hover:text-(--foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/50 rounded-sm"
                  >
                    {link.label}
                    {/* Hover indicator bar */}
                    <span 
                      aria-hidden="true" 
                      className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-(--primary) transition-transform duration-200 ease-out group-hover:scale-x-100" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTA Button */}
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-md bg-(--primary) px-4 py-2 text-xs font-semibold text-(--primary-foreground) transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/80"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--primary)/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <svg 
            className="h-6 w-6 stroke-current fill-none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-(--border) bg-(--surface) px-4 pt-3 pb-6">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-(--muted-foreground) hover:text-(--foreground)"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-(--primary) px-4 py-2.5 text-xs font-semibold text-(--primary-foreground) transition-all active:scale-[0.98]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
