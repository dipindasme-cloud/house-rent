"use client";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextReveal";
import Container from "@/components/ui/Container";

export default function AboutMeSection() {
  return (
    <section className="w-full bg-background pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <Container>
        
        {/* Section Title */}
        <TextGenerateEffect words="ABOUT ME" className="t-display-hero text-foreground mb-5 md:mb-10" />

        {/* 
          Content Wrapper:
          - Mobile: Inverted column layout (Image top, Text bottom)
          - Desktop: Side-by-side layout via Grid
        */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          
          {/* Left Column - RichTextContainer */}
          <div className="flex flex-col gap-6 w-full max-w-[36rem] mr-auto justify-self-start text-left">
            <p className="t-body-lg text-muted leading-relaxed">
             I’m a UI/UX Designer and Frontend Developer passionate about building functional, high-end digital experiences. I specialize in {" "}
              <strong className="text-foreground font-semibold">
               web design, mobile app interfaces, and turning design systems into clean, responsive layouts
              </strong>
              . 
            </p>

            <p className="t-body-lg text-muted leading-relaxed">
              With a strong eye for typography, spatial hierarchy, and interaction design, I bridge the gap between Figma and functional code—ensuring products not only look great, but work seamlessly for real users.
            </p>
          </div>

          {/* Right Column - Image Container with adaptive scaling constraints */}
          <div className="flex justify-start md:justify-end w-full">
            <figure className="
              relative 
              w-full 
              max-w-[24rem] 
              overflow-hidden 
              bg-muted/10 
              border 
              border-border
              rounded-sm
              /* Mobile constraints to prevent vertical viewport explosion */
              h-[38dvh]
              max-h-[22rem]
              aspect-[3/4]
              sm:aspect-[4/3]
              /* Desktop breakpoints override to restore standard layout */
              md:h-auto
              md:max-h-none
              md:aspect-[3/4]
            ">
              <Image
                src="/images/profile-hero.jpg"
                alt="Clear Image of Dipindas"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectPosition: "50% 36.1%" }}
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </figure>
          </div>

        </div>
      </Container>
    </section>
  );
}