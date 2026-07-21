"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  index?: number;
}

export function BlogCard({
  image,
  category,
  title,
  excerpt,
  date,
  readTime,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      className="group flex flex-col bg-surface rounded-[1rem] overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_0.5rem_2rem_rgba(0,0,0,0.08)] hover:border-brand-200"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-[0.75rem] left-[0.75rem] bg-brand-600 text-white text-[0.6875rem] font-semibold leading-none py-[0.375rem] px-[0.75rem] rounded-[0.375rem] uppercase tracking-[0.05em]">
          {category}
        </div>
      </div>

      <div className="flex flex-col gap-[0.75rem] p-[1.25rem] md:p-[1.5rem] flex-1">
        <div className="flex items-center gap-[1rem] text-[0.75rem] text-text-muted font-medium">
          <span>{date}</span>
          <span className="w-[0.25rem] h-[0.25rem] rounded-full bg-border" />
          <span>{readTime}</span>
        </div>

        <h3 className="text-[1.0625rem] md:text-[1.125rem] text-text-primary font-bold leading-snug tracking-[-0.01em] transition-colors duration-200 group-hover:text-brand-600">
          {title}
        </h3>

        <p className="text-[0.875rem] text-text-secondary leading-relaxed flex-1 line-clamp-2">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
}
