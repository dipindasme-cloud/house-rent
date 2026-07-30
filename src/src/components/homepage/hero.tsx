"use client";

import NextImage from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 min-h-[calc(100dvh-4.125rem)] md:min-h-[calc(100dvh-4.75rem)] flex items-center">
      <Container className="flex flex-col-reverse gap-10 md:gap-16 lg:gap-20">
        

          {/* Typography & Copy */}
          <div className="flex flex-col gap-4 md:gap-5 flex-1">
            <p className="t-subheading text-foreground font-medium tracking-widest">
              Specialized in UI/UX Design &amp; Frontend Development
            </p>

            <TextReveal
              words="DIPINDAS M"
              as="h1"
              className="t-display-hero text-foreground"
              animateOnMount
            />
          </div>

          {/* Image */}
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0">
            <figure className="w-full overflow-hidden border border-border rounded-sm h-[42dvh] max-h-[24rem] aspect-[4/5] sm:aspect-[16/10] md:h-72 md:max-h-none md:aspect-auto md:max-w-[14rem]">
              <NextImage
                src="/images/profile-hero.jpg"
                alt="Dipindas M portrait artwork"
                width={640}
                height={800}
                priority
                className="block w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </div>

        
      </Container>
    </section>
  );
}
