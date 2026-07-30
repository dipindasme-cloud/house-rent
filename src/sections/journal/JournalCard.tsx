"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { JournalArticle } from "@/data/journalData";
import { fadeInUp, defaultTransition, sectionViewport } from "@/lib/animations";

interface JournalCardProps {
  article: JournalArticle;
  index?: number;
}

export function JournalCard({ article, index = 0 }: JournalCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      viewport={sectionViewport}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      className="group flex flex-col bg-surface rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-[0.6875rem] font-semibold leading-none py-1.5 px-3 rounded-md uppercase tracking-[0.05em]">
          {article.category}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
        <div className="flex items-center gap-4 font-body text-caption text-muted-foreground">
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-border-light" />
          <span>{article.readTime}</span>
        </div>

        <h3 className="text-h3 font-body transition-colors duration-200 group-hover:text-accent">
          {article.title}
        </h3>

        <p className="font-body text-caption flex-1 line-clamp-2 text-muted-foreground">
          {article.excerpt}
        </p>

        <Link
          href={`/journal/${article.slug}`}
          className="inline-flex items-center gap-1.5 font-body text-caption font-semibold text-accent mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm"
        >
          Read Article
           <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
