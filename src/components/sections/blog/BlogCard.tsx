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
      className="group flex flex-col bg-(--surface) rounded-2xl overflow-hidden border border-(--border) transition-all duration-300 hover:shadow-[0_0.5rem_2rem_rgba(0,0,0,0.08)] hover:border-(--border)"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-(--primary) text-(--primary-foreground) text-[0.6875rem] font-semibold leading-none py-[0.375rem] px-3 rounded-md uppercase tracking-[0.05em]">
          {category}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
        <div className="flex items-center gap-4 text-caption">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-(--border)" />
          <span>{readTime}</span>
        </div>

        <h3 className="text-h3 transition-colors duration-200 group-hover:text-(--primary)">
          {title}
        </h3>

        <p className="text-caption flex-1 line-clamp-2">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
}
