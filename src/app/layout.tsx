import type { Metadata } from "next";

import "@/app/globals.css";

import { Header } from "@/components/sections/shared/Header";
import { Footer } from "@/components/sections/shared/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Home Website",
    default: "Home Website",
  },
  description: "Personal home website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
