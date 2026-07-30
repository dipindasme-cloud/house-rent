"use client";

import Container from "@/components/ui/Container";

export default function ExpressToolkit() {
  const designTools = [
    "Figma",
    "Stitch",
    "Photopea",
  ];

  const codeTools = [
    "VS Code",
    "Antigravity",
    "Opencode",
  ];

  return (
    <section className="w-full bg-background py-8 sm:py-12 lg:py-16">
      <Container>
        
        {/* Section Heading */}
        <h2 id="toolkit-title" className="t-display text-foreground mb-12 md:mb-16 uppercase">
          Toolkit
        </h2>

        {/* List Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* AI Design Tools Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6 uppercase">
Design Tools
            </h3>
            <div className="flex flex-col">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  className="t-heading text-foreground py-4 md:py-6 border-t border-border last:border-b"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* AI Code Tools Column */}
          <div className="flex-1">
            <h3 className="t-label text-muted mb-4 md:mb-6 uppercase">
              AI Code Tools
            </h3>
            <div className="flex flex-col">
              {codeTools.map((tool, index) => (
                <div
                  key={index}
                  className="t-heading text-foreground py-4 md:py-6 border-t border-border last:border-b"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}