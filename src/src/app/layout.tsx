import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AuraSpace",
    default: "AuraSpace — Premium Indian Real Estate",
  },
  description:
    "Discover luxury homes, villas, and apartments across India's top metros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-body focus:font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 scroll-mt-20" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
