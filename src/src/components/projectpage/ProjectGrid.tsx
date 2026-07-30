"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import LuxuryCard from "@/components/ui/LuxuryCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import Container from "@/components/ui/Container";

export default function ProjectGrid() {
  // Configured with a 4-card baseline expanding into 6
  const [visibleCount, setVisibleCount] = useState<4 | 6>(4);

  const displayedProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount(6);
  };

  return (
    <section className="relative w-full bg-background pb-8 sm:pb-12 lg:pb-16">
      <Container className="flex flex-col gap-12 md:gap-16">
        
        {/* Layout System Grid — Clean Symmetrical 2-Column Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout // Smoothly interpolates elements during grid reflow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1"
            >
              <div className="aspect-[4/3] md:aspect-[16/9]">
                <LuxuryCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Interactive Button System */}
        <AnimatePresence>
          <LoadMoreButton onClick={handleLoadMore} isVisible={hasMore} />
        </AnimatePresence>

      </Container>
    </section>
  );
}