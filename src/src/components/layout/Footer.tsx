"use client";

import Link from "next/link";
import RollUpText from "@/components/ui/RollUpText";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-16">
      {/* Footer Container */}
      <Container className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        
        {/* Top Section: CTA & Socials Layout System */}
        <div className="flex flex-col items-center gap-14 md:gap-20 lg:gap-24">
          
          {/* Social Links (Pill Style) */}
          <div className="flex items-center gap-4 md:gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  flex items-center justify-center 
                  w-16 h-16 md:w-20 md:h-20
                  bg-white/[0.05] border border-transparent 
                  hover:border-muted-600 hover:bg-white/[0.08]
                  text-foreground transition-all duration-300 ease-out
                  hover:scale-[1.05] active:scale-[0.95]
                "
              >
                <span className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Large "Let's Talk" CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 md:gap-6 lg:gap-8 border-b-4 border-foreground pb-2 lg:pb-4 transition-all duration-300"
          >
            <RollUpText
              label="Let's Talk"
              height="h-[2.5rem] md:h-[4.25rem] lg:h-[5rem]"
              className="t-display text-foreground"
              hoverClassName="text-foreground"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 fill-foreground transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </Link>
        </div>

        {/* Bottom Section: Info Sub-Grid */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-6 pt-8 border-t border-border">
          {/* Email Context */}
          <a
            href="mailto:dipinmkmr1234@gmail.com"
            className="t-label text-foreground hover:text-muted-400 font-medium transition-colors duration-200"
          >
            dipinmkmr1234@gmail.com
          </a>

          {/* Copyright System */}
          <p className="t-body-sm text-muted-400">
            © {currentYear} Dipindas. All Rights Reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
}

// Inline Social Assets System
const socials = [
  {
  name: "Phone",
  url: "tel:+918138817571",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <path d="M222.4,165.5l-46.1-19.8a16,16,0,0,0-18.5,4.6l-19.2,23.5A139.8,139.8,0,0,1,82.2,117.4l23.5-19.2a16,16,0,0,0,4.6-18.5L90.5,33.6A16,16,0,0,0,75.8,24H40A16,16,0,0,0,24,40c0,105.9,86.1,192,192,192a16,16,0,0,0,16-16V180.2A16,16,0,0,0,222.4,165.5Z"/>
    </svg>
  ),
},
  {
  name: "WhatsApp",
  url: "https://wa.me/8138817571",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <path d="M128,24A104,104,0,0,0,37.6,180L24,232l53.2-13.4A104,104,0,1,0,128,24Zm0,192a87.4,87.4,0,0,1-44.2-12l-5.3-3.2-31.5,7.9,8.1-30.7-3.5-5.5A88,88,0,1,1,128,216Zm48.8-66.2c-2.7-1.4-16-7.9-18.5-8.8s-4.3-1.4-6.1,1.4-7,8.8-8.6,10.6-3.1,2-5.8.7a72.4,72.4,0,0,1-21.3-13.1A79.7,79.7,0,0,1,102,123c-1.5-2.6-.2-4,1.2-5.4s2.7-3.1,4-4.6a17.4,17.4,0,0,0,2.7-4.5,5,5,0,0,0-.2-4.7c-.7-1.4-6.1-14.8-8.4-20.3s-4.5-4.6-6.1-4.7H90c-2,0-5.2.8-7.9,3.8s-10.4,10.2-10.4,24.9,10.7,28.9,12.2,30.9,20.8,31.7,50.3,44.4c7,3,12.5,4.8,16.8,6.1,7.1,2.2,13.6,1.9,18.7,1.2,5.7-.9,17.5-7.1,20-14s2.5-12.7,1.8-14S179.5,151.2,176.8,149.8Z"/>
    </svg>
  ),
},
  {
    name: "Instagram",
    url: "https://www.instagram.com/nandu_das95/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
      </svg>
    ),
  },
];