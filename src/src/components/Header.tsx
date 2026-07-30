"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Concierge Services", href: "/concierge" },
  { label: "About Us", href: "/about" },
  { label: "Journal", href: "/journal" },
];

interface HeaderProps {
  savedCount?: number;
  onCurrencyChange?: (currency: CurrencyOption) => void;
  onSearchOpen?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount = 0,
  onCurrencyChange,
  onSearchOpen,
}) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState<boolean>(false);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyOption>(
    currencies[0]
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

  const desktopCurrencyRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLLIElement>(null);

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
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation & escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
        if (isCurrencyOpen) {
          setIsCurrencyOpen(false);
        }
        if (isMoreOpen) {
          setIsMoreOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, isCurrencyOpen, isMoreOpen]);

  // Robust body scroll lock via data attribute (Issue 16)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.setAttribute("data-scroll-locked", "true");
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Trap focus inside mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const drawer = mobileMenuRef.current;
    if (!drawer) return;

    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleTabKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    drawer.addEventListener("keydown", handleTabKeyDown);
    return () => drawer.removeEventListener("keydown", handleTabKeyDown);
  }, [isMobileMenuOpen]);

  const handleSelectCurrency = (currency: CurrencyOption) => {
    setCurrentCurrency(currency);
    setIsCurrencyOpen(false);
    onCurrencyChange?.(currency); // Issue 6: Trigger currency callback
  };

  // Issue 9: Keyboard navigation for Currency Listbox Pattern
  const handleListboxKeyDown = (e: React.KeyboardEvent) => {
    if (!isCurrencyOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % currencies.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(
        (prev) => (prev - 1 + currencies.length) % currencies.length
      );
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < currencies.length) {
        handleSelectCurrency(currencies[focusedIndex]);
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusedIndex(currencies.length - 1);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const nextState = !prev;
      if (!nextState) {
        mobileToggleRef.current?.focus(); // Issue 4
      }
      return nextState;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface shadow-sm backdrop-blur-md py-3 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          
          {/* Brand / Logo (Issue 1: AuraSpace & Issue 20: Empty alt on decorative logo) */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/hero/logo.png"
              alt="" 
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 object-contain"
              priority
            />
            <span className="font-display text-h3 font-medium tracking-tight text-foreground">
              AuraSpace
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-6 list-none p-0 m-0 xl:gap-8">
                {/* Always visible (lg+): Home, Properties, Concierge */}
                {navLinks.slice(0, 3).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative inline-block rounded-sm py-1 font-body text-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary transition-transform duration-200 ease-out ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}

                {/* LG tier: More ▾ (hidden on XL) */}
                <li className="hidden lg:block xl:hidden relative" ref={moreMenuRef}>
                  <button
                    type="button"
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="group relative inline-flex items-center gap-1 rounded-sm py-1 font-body text-body font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    aria-expanded={isMoreOpen}
                    aria-haspopup="true"
                    aria-label="More navigation"
                  >
                    More
                    <svg className={`h-3 w-3 fill-none stroke-current transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  </button>
                  {isMoreOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-border bg-surface py-1 shadow-lg backdrop-blur-md" role="menu">
                      {navLinks.slice(3).map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            onClick={() => setIsMoreOpen(false)}
                            className={`block px-4 py-2.5 font-body text-body transition-colors hover:bg-primary/5 ${
                              isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>

                {/* XL tier: About Us, Journal (inline on XL, hidden below) */}
                {navLinks.slice(3).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href} className="hidden xl:block">
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative inline-block rounded-sm py-1 font-body text-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary transition-transform duration-200 ease-out ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Utilities */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Issue 11: Header Search Button */}
              {onSearchOpen && (
                <button
                  type="button"
                  onClick={onSearchOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-label="Search properties"
                >
                  <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              )}

              {/* Favorites Button (Issue 7: Only render badge if savedCount > 0) */}
              <Link
                href="/saved"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label={`Saved Properties${savedCount > 0 ? ` (${savedCount})` : ""}`}
              >
                <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {savedCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[0.625rem] font-semibold text-primary-foreground">
                    {savedCount}
                  </span>
                )}
              </Link>

              {/* Currency Selector (Issue 9: ARIA listbox implementation) */}
              <div className="relative" ref={desktopCurrencyRef}>
                <button
                  type="button"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "Enter") {
                      setIsCurrencyOpen(true);
                      setFocusedIndex(0);
                    }
                  }}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-full px-3 text-caption font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-expanded={isCurrencyOpen}
                  aria-haspopup="listbox"
                  aria-label="Select Currency"
                >
                  <span>{currentCurrency.symbol} {currentCurrency.code}</span>
                  <svg className={`h-3.5 w-3.5 fill-none stroke-current transition-transform duration-200 ${isCurrencyOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isCurrencyOpen && (
                  <div
                    ref={listboxRef}
                    role="listbox"
                    aria-label="Currency Selector"
                    tabIndex={0}
                    onKeyDown={handleListboxKeyDown}
                    className="absolute left-1/2 z-50 mt-2 w-36 -translate-x-1/2 rounded-lg border border-border bg-surface py-1 shadow-lg backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    {currencies.map((curr, index) => {
                      const isSelected = curr.code === currentCurrency.code;
                      const isFocused = index === focusedIndex;
                      return (
                        <button
                          key={curr.code}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelectCurrency(curr)}
                          className={`flex w-full items-center justify-between px-3 py-2 text-body font-medium transition-colors ${
                            isFocused ? "bg-primary/10" : "hover:bg-primary/5"
                          } ${
                            isSelected ? "font-semibold text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <span>{curr.symbol} {curr.code}</span>
                          {isSelected && (
                            <svg className="h-4 w-4 fill-none stroke-current text-primary" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Primary Action Button (Issue 8: Reduced motion support) */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : buttonHoverTap.whileHover}
                whileTap={shouldReduceMotion ? undefined : buttonHoverTap.whileTap}
                transition={shouldReduceMotion ? { duration: 0 } : buttonHoverTap.transition}
              >
                <Link
                  href="/schedule-tour"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 font-body text-caption font-semibold text-primary-foreground transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
                >
                  Schedule Tour
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Actions (Issue 12: Consolidated search & single menu) */}
          <div className="flex items-center gap-1 lg:hidden">
            {onSearchOpen && (
              <button
                type="button"
                onClick={onSearchOpen}
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-label="Search properties"
              >
                <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            )}

            <Link
              href="/saved"
              className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Saved Properties"
            >
              <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </Link>

            <button
              type="button"
              ref={mobileToggleRef}
              onClick={toggleMobileMenu}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-surface px-4 py-6 shadow-xl backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {/* Main Links */}
              <ul className="flex flex-col gap-1 list-none p-0 m-0">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-lg px-4 py-3 font-body text-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Issue 12: Integrated Utilities in Mobile Drawer */}
              <div className="flex flex-col gap-4 pt-4 border-t border-border">
                <Link
                  href="/saved"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-2.5 font-body text-body text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Saved Properties
                  </span>
                  {savedCount > 0 && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-caption font-semibold text-primary">
                      {savedCount}
                    </span>
                  )}
                </Link>

                <div className="flex items-center justify-between px-4 py-2">
                  <span className="font-body text-caption font-medium text-muted-foreground">Currency</span>
                  <div className="flex gap-1 bg-surface-secondary p-1 rounded-lg border border-border">
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        type="button"
                        onClick={() => handleSelectCurrency(curr)}
                        className={`px-3 py-1 text-caption font-medium rounded-md transition-colors ${
                          curr.code === currentCurrency.code
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {curr.symbol} {curr.code}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={shouldReduceMotion ? undefined : buttonHoverTap.whileHover}
                  whileTap={shouldReduceMotion ? undefined : buttonHoverTap.whileTap}
                  transition={shouldReduceMotion ? { duration: 0 } : buttonHoverTap.transition}
                >
                  <Link
                    href="/schedule-tour"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-4 font-body text-body font-semibold text-primary-foreground transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Schedule Tour
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;