import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import CTAButton from "@/components/ui/CTAButton"; 
import ProjectDetailsHeader from "@/components/layout/ProjectDetailsHeader";
import Footer from "@/components/layout/Footer";
import { TextGenerateEffect } from "@/components/ui/TextReveal";
import Container from "@/components/ui/Container";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const images = project.secondaryImages ?? {};
  const hasMiddleRow = !!(images.middleLeft || images.middleRight);

  return (
    <>
      {/* 1. Dynamic Responsive Header Wrapper Component */}
      <ProjectDetailsHeader />

        <main>
          
          {/* 2. Animated Headline with Hero Image */}
<section className="w-full pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-16">
  <Container className="flex flex-col gap-6 md:gap-8 lg:gap-12"> 
    <TextGenerateEffect words={project.title} as="h1" className="t-display-hero text-foreground" />
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md border border-border bg-foreground/[0.02]">
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        priority
        className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
      />
    </div>
  </Container>
</section>

         {/* 4. Project Overview and Details */}
<section className="relative w-full bg-background">
  <Container>
    <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
    
    {/* Core Description */}
    <p className="t-body-lg leading-relaxed text-foreground max-w-[44rem] w-full">
      {project.overview}
    </p>

    {/* Meta Info */}
    <div className="flex flex-col justify-between gap-6 w-full md:max-w-[22rem] shrink-0">
      <div className="flex flex-col gap-4">
         <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <span className="t-label text-muted">Category</span>
          <span className="t-body font-medium text-foreground">{project.category}</span>
        </div>

      <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <span className="t-label text-muted">Tools</span>
          <span className="t-body font-medium text-foreground">{project.Tools || "Internal"}</span>
        </div>

      <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <span className="t-label text-muted">Year</span>
          <span className="t-body font-medium text-foreground">{project.year}</span>
        </div>
      </div>

      {project.liveUrl && (
        <div className="flex items-center justify-between pt-1">
          <span className="t-label text-muted">Live Project</span>
          <CTAButton 
            label="View Live" 
            href={project.liveUrl} 
            variant="main"
            className="px-4 py-1.5" 
          />
        </div>
      )}
    </div>

  </div>
  </Container>
</section>

          {/* 5. Secondary Showcase Media Grid */}
<section 
      className="relative w-full bg-background py-8 md:py-12 lg:py-16" 
      aria-label="Project Layout Secondary Media"
    >
      <Container className="flex flex-col gap-4 md:gap-8">
      
        {/* Image 1: Top Big Frame */}
        {images.topBig && (
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md border border-border bg-foreground/[0.02]">
            <Image
              src={images.topBig}
              alt={project.imageAlt || "Project showcase presentation top"}
              fill
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Middle Images Wrapper Container */}
        {hasMiddleRow && (
          <div className="flex w-full gap-4 md:gap-8">
            
            {/* Image 2: Middle Left Small Frame */}
            {images.middleLeft && (
              <div className="relative flex-1 overflow-hidden rounded-md border border-border bg-foreground/[0.02] aspect-[2/3] md:aspect-[8/9]">
                <Image
                  src={images.middleLeft}
                  alt={project.imageAlt || "Project showcase detail left"}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
            
            {/* Image 3: Middle Right Small Frame */}
            {images.middleRight && (
              <div className="relative flex-1 overflow-hidden rounded-md border border-border bg-foreground/[0.02] aspect-[2/3] md:aspect-[8/9]">
                <Image
                  src={images.middleRight}
                  alt={project.imageAlt || "Project showcase detail right"}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        )}

        {/* Image 4: Bottom Big Frame */}
        {images.bottomBig && (
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md border border-border bg-foreground/[0.02]">
            <Image
              src={images.bottomBig}
              alt={project.imageAlt || "Project showcase presentation bottom"}
              fill
              className="object-cover object-center"
            />
          </div>
        )}
        
      </Container>
    </section>
        </main>

        {/* 6. Global Footer */}
        <Footer />
    </>
  );
}