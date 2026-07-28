export interface JournalArticle {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "future-of-luxury-real-estate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    category: "Market Insights",
    title: "The future of luxury real estate in India",
    excerpt:
      "As India's ultra-high-net-worth population grows, the luxury real estate market is undergoing a profound transformation. From智能化 homes to wellness-focused communities, we explore the trends shaping premium living.",
    date: "Jul 14, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "biophilic-design-trends",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    category: "Interior Design",
    title: "Biophilic design: bringing nature into luxury homes",
    excerpt:
      "The integration of natural elements into interior spaces is redefining luxury living. Discover how top designers are using organic materials, living walls, and natural light to create serene sanctuaries.",
    date: "Jul 8, 2026",
    readTime: "6 min read",
  },
  {
    slug: "wellness-focused-amenities",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    category: "Lifestyle",
    title: "Wellness amenities that define modern luxury",
    excerpt:
      "Private spas, cryotherapy chambers, and meditation gardens — today's luxury residences go far beyond a simple gym. Here are the wellness features that set premier properties apart.",
    date: "Jul 2, 2026",
    readTime: "5 min read",
  },
  {
    slug: "mumbai-penthouse-market",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    category: "Market Insights",
    title: "Mumbai's penthouse market reaches new heights",
    excerpt:
      "With record-breaking transactions and a surge in ultra-luxury developments, Mumbai's penthouse segment is experiencing unprecedented demand from global buyers.",
    date: "Jun 25, 2026",
    readTime: "7 min read",
  },
  {
    slug: "art-collecting-guide",
    image: "https://images.unsplash.com/photo-1531913764164-f85c3e6bb655?w=800&q=80",
    category: "Lifestyle",
    title: "Curating art for your luxury residence",
    excerpt:
      "A guide to selecting, placing, and caring for fine art in your home. From emerging Indian artists to international masters, make your space a gallery.",
    date: "Jun 18, 2026",
    readTime: "6 min read",
  },
  {
    slug: "sustainable-luxury-materials",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Interior Design",
    title: "Sustainable luxury: the rise of eco-conscious materials",
    excerpt:
      "Luxury and sustainability are no longer opposites. Explore how reclaimed wood, recycled metals, and low-carbon concrete are being used in India's finest residences.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
  },
];
