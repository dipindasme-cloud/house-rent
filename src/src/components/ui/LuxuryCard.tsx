"use client";

import Link from "next/link";
import NextImage from "next/image";
import type { Project } from "@/data/projects";

interface LuxuryCardProps {
  project: Project;
}

export default function LuxuryCard({ project }: LuxuryCardProps) {
  const { title, subtitle, href, imageSrc, imageAlt } = project;

  return (
    <Link href={href} className="group block w-full focus:outline-none">
      {/* 
        1. Removed internal borders.
        2. Added gap-4 to create the breathing room between the image div and text div.
      */}
      <article className="
        relative 
        w-full 
        flex 
        flex-col 
        gap-4
        bg-background 
        overflow-hidden
      ">
        {/* Media Frame with Ultra-Smooth Luxury Hover Zoom */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-background border border-border transition-colors duration-500 group-hover:border-muted-600 rounded-sm">
          <NextImage
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover 
              object-center 
              will-change-transform
              /* Premium 1.2-second elegant easing zoom */
              transition-transform 
              duration-[1200ms] 
              ease-[0.25,1,0.5,1] 
              group-hover:scale-105 
              group-focus-visible:scale-105
            "
          />
          {/* Soft environmental contrast layer using system theme selection alpha */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 
          Information Panel - Padding and borders completely cleared. 
          The spacing is now driven purely by the parent flex gap-4.
        */}
        <div className="w-full flex flex-col gap-1.5">
          <h3 className="
            t-subheading 
            text-foreground 
            transition-colors 
            duration-300 
            group-hover:text-foreground
          ">
            {title}
          </h3>
          {subtitle && (
            <p className="t-label text-muted font-medium tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}