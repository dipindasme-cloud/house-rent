"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/sections/blog/BlogCard";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

interface BlogPost {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-10-luxury-amenities",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Luxury Living",
    title: "Top 10 luxury amenities to look for in a premium rental",
    excerpt:
      "From infinity pools to private elevators, discover the must-have amenities that define modern luxury living in India's top cities.",
    date: "Jun 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "renting-in-mumbai-guide",
    image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "City Guide",
    title: "Complete guide to renting a luxury apartment in Mumbai",
    excerpt:
      "Navigate Mumbai's premium real estate market with our expert tips on locations, pricing, and what to expect from high-end rentals.",
    date: "Jun 22, 2026",
    readTime: "7 min read",
  },
  {
    slug: "smart-home-essentials",
    image: "https://images.unsplash.com/photo-1728931710024-c015ea8f4414?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    category: "Technology",
    title: "Smart home features every modern renter should know",
    excerpt:
      "Explore the latest smart home technologies transforming rental properties, from automated lighting to AI-powered security systems.",
    date: "Jun 15, 2026",
    readTime: "4 min read",
  },
  {
    slug: "bangalore-real-estate-trends",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Market Trends",
    title: "Bangalore real estate trends: What to expect in 2026",
    excerpt:
      "An in-depth analysis of Bangalore's evolving rental market, emerging neighborhoods, and investment opportunities for tenants.",
    date: "Jun 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "sustainable-living-spaces",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    category: "Sustainability",
    title: "Sustainable living: Eco-friendly homes on the rise",
    excerpt:
      "How green buildings and sustainable practices are reshaping the luxury rental market across India's major metropolitan areas.",
    date: "Jun 5, 2026",
    readTime: "5 min read",
  },
  {
    slug: "first-time-renter-tips",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    category: "Tips & Advice",
    title: "Essential tips for first-time luxury renters",
    excerpt:
      "Moving into your first premium rental? Here's everything you need to know about leases, inspections, and making the most of your new home.",
    date: "May 28, 2026",
    readTime: "4 min read",
  },
  {
    slug: "penthouse-living-guide",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    category: "Luxury Living",
    title: "The ultimate guide to penthouse living in India",
    excerpt:
      "Discover what makes penthouse living unique, from panoramic views to exclusive amenities and the neighborhoods that offer the best options.",
    date: "May 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "goa-rental-market",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    category: "City Guide",
    title: "Goa's booming luxury rental market: A complete overview",
    excerpt:
      "From beachfront villas to hillside retreats, explore why Goa has become the hotspot for premium rentals and vacation homes.",
    date: "May 14, 2026",
    readTime: "5 min read",
  },
  {
    slug: "interior-design-trends",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    category: "Design",
    title: "Interior design trends dominating luxury rentals in 2026",
    excerpt:
      "From minimalist Japanese aesthetics to bold maximalist statements, see what design styles are trending in premium rental properties.",
    date: "May 8, 2026",
    readTime: "4 min read",
  },
];

const CATEGORIES = [
  "All",
  "Luxury Living",
  "City Guide",
  "Technology",
  "Market Trends",
  "Sustainability",
  "Tips & Advice",
  "Design",
] as const;

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const isFiltered = activeCategory !== "All";
  const displayed = isFiltered ? filtered : filtered.slice(0, visibleCount);
  const hasMore = !isFiltered && visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section className="py-16">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-eyebrow text-(--accent-rent)"
          >
            Our Blog
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-h1"
          >
            Latest insights & updates
          </motion.h2>
        </motion.div>

        <div className="flex items-center justify-center gap-[0.375rem] flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={
                 `text-caption py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer ` +
                (activeCategory === cat
                  ? "bg-(--primary) text-(--primary-foreground)"
                  : "bg-(--muted) text-(--muted-foreground) border border-(--border) hover:bg-(--muted)")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((post, index) => (
            <BlogCard key={post.title} {...post} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              className="text-caption font-medium py-3 px-8 rounded-lg bg-(--primary) text-(--primary-foreground) hover:opacity-90 transition-all duration-200 cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
