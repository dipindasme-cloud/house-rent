"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonHoverTap } from "@/lib/animations";

interface NavLink {
  label: string;
  href: string;
}

export type Currency = "INR" | "USD";

interface CurrencyOption {
  code: Currency;
  label: string;
  symbol: string;
}

const currencies: CurrencyOption[] = [
  { code: "INR", label: "INR", symbol: "₹" },
  { code: "USD", label: "USD", symbol: "$" },
];

const navLinks: NavLink[] = [
  { label: "Properties", href: "/properties" },
  { label: "Concierge Services", href: "/concierge" },
  { label: "About Us", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isUtilityOpen, setIsUtilityOpen] = useState<boolean>(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState<boolean>(false);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyOption>(currencies[0]);
  const savedCount = 0;

  const desktopCurrencyRef = useRef<HTMLDivElement>(null);
  const mobileUtilityRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopCurrencyRef.current &&
        !desktopCurrencyRef.current.contains(event.target as Node)
      ) {
        setIsCurrencyOpen(false);
      }
      if (
        mobileUtilityRef.current &&
        !mobileUtilityRef.current.contains(event.target as Node)
      ) {
        setIsUtilityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close open menus on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCurrencyOpen(false);
        setIsUtilityOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleSelectCurrency = (currency: CurrencyOption) => {
    setCurrentCurrency(currency);
    setIsCurrencyOpen(false);
    setIsUtilityOpen(false);
  };

  // State toggles designed to guarantee single menu open at a time
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setIsUtilityOpen(false);
        setIsCurrencyOpen(false);
      }
      return nextState;
    });
  };

  const toggleUtilityMenu = () => {
    setIsUtilityOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setIsMobileMenuOpen(false);
        setIsCurrencyOpen(false);
      }
      return nextState;
    });
  };

  const toggleDesktopCurrency = () => {
    setIsCurrencyOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setIsMobileMenuOpen(false);
        setIsUtilityOpen(false);
      }
      return nextState;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface backdrop-blur-md transition-colors py-3">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* Brand / Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="AuroSpace Homepage"
          >
            <Image
              src="/images/hero/logo.png"
              alt="AuroSpace"
              width={32}
              height={32}
              className="h-8 w-auto shrink-0"
            />
            <span className="font-display text-[1.4375rem] font-medium italic tracking-[-0.04em] text-primary">
              AuroSpace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block rounded-sm py-1 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 font-body"
                    >
                      {link.label}
                      <span 
                        aria-hidden="true" 
                        className="absolute -bottom-0.5 left-0 h-px w-full scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Right Utilities */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Favorites Button */}
              <Link
                href="/saved"
                className="relative flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label={`Saved Properties (${savedCount})`}
              >
                <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[0.625rem] font-semibold text-primary-foreground">
                  {savedCount}
                </span>
              </Link>

              {/* Currency Dropdown */}
              <div className="relative" ref={desktopCurrencyRef}>
                <button
                  type="button"
                  onClick={toggleDesktopCurrency}
                  className="flex min-w-[4.75rem] items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-expanded={isCurrencyOpen}
                  aria-haspopup="listbox"
                  aria-label="Select Currency"
                >
                  <span>{currentCurrency.symbol} {currentCurrency.code}</span>
                  <svg className={`h-3 w-3 fill-none stroke-current transition-transform duration-200 ${isCurrencyOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isCurrencyOpen && (
                  <div 
                    role="listbox" 
                    aria-label="Currency Selector"
                    className="absolute left-1/2 z-50 mt-2 w-36 -translate-x-1/2 rounded-lg border border-border bg-surface py-1 shadow-lg backdrop-blur-md"
                  >
                    {currencies.map((curr) => {
                      const isSelected = curr.code === currentCurrency.code;
                      return (
                        <button
                          key={curr.code}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelectCurrency(curr)}
                          className={`flex w-full items-center justify-between px-3 py-2 text-[0.875rem] font-medium transition-colors hover:bg-primary/5 ${
                            isSelected ? "font-semibold text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <span>{curr.symbol} {curr.code}</span>
                          {isSelected && (
                            <svg className="h-4 w-4 fill-none stroke-current text-primary" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Primary Action Button */}
              <motion.span whileHover={buttonHoverTap.whileHover} whileTap={buttonHoverTap.whileTap} transition={buttonHoverTap.transition}>
                <Link
                  href="/schedule-tour"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-[0.8125rem] font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
                >
                  Schedule Tour
                </Link>
              </motion.span>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Secondary Utilities Dropdown */}
            <div className="relative" ref={mobileUtilityRef}>
              <button
                type="button"
                onClick={toggleUtilityMenu}
                className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-expanded={isUtilityOpen}
                aria-label="More options"
              >
                <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>

              {isUtilityOpen && (
                <div className="absolute right-0 z-50 mt-2 w-auto min-w-48 rounded-lg border border-border bg-surface py-1 shadow-lg">
                  <Link
                    href="/saved"
                    onClick={() => setIsUtilityOpen(false)}
                    className="flex w-full items-center gap-3 px-3.5 py-2.5 text-[0.875rem] whitespace-nowrap text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                  >
                    <svg className="h-4 w-4 shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Saved Properties ({savedCount})
                  </Link>

                  <div className="my-1 border-t border-border" />
                  <div className="px-3.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground">
                    Select Currency
                  </div>

                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      type="button"
                      role="option"
                      aria-selected={curr.code === currentCurrency.code}
                      onClick={() => handleSelectCurrency(curr)}
                      className={`flex w-full items-center justify-between whitespace-nowrap px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-primary/5 ${
                        curr.code === currentCurrency.code ? "font-semibold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span>{curr.symbol} {curr.code}</span>
                      {curr.code === currentCurrency.code && (
                        <svg className="h-4 w-4 fill-none stroke-current text-primary" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Main Mobile Menu Toggle */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Main Menu"
            >
              <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-surface px-4 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-[1rem] font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-1">
              <motion.span whileHover={buttonHoverTap.whileHover} whileTap={buttonHoverTap.whileTap} transition={buttonHoverTap.transition} className="block">
                <Link
                  href="/schedule-tour"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-[0.9375rem] font-semibold text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Schedule Tour
                </Link>
              </motion.span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;