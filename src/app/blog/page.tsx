import type { Metadata } from "next";

import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogList } from "@/components/sections/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and guides to help you find the perfect luxury home and navigate the rental market with AuraSpace.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <BlogList />
    </div>
  );
}
