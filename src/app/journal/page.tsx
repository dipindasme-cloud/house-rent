import type { Metadata } from "next";

import { JournalHero } from "@/sections/journal/JournalHero";
import { JournalList } from "@/sections/journal/JournalList";
import { NewsletterSignup } from "@/sections/journal/NewsletterSignup";
import { JOURNAL_ARTICLES } from "@/data/journalData";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Explore AuraSpace's journal — market insights, interior design inspiration, and luxury lifestyle stories from India's premier real estate platform.",
};

const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured) ?? JOURNAL_ARTICLES[0];

export default function JournalPage() {
  return (
    <div className="flex flex-col">
      <JournalHero article={featuredArticle} />
      <JournalList />
      <NewsletterSignup />
    </div>
  );
}
