"use client";

import { motion } from "framer-motion";

interface LoadMoreButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export default function LoadMoreButton({ onClick, isVisible }: LoadMoreButtonProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center w-full pt-4"
    >
      <button
        onClick={onClick}
        className="
          /* Layout Positioning & Sizing */
          inline-flex 
          items-center 
          justify-center 
          px-8 
          py-3.5 
          
          /* Interactive Styling Matching global.css Tokens */
          bg-background 
          border 
          border-border 
          hover:border-muted-600
          rounded-full 
          cursor-pointer
          
          /* Typography System */
          t-label 
          text-foreground 
          font-medium
          tracking-wider
          
          /* Premium Ease-Out Micro-Transitions */
          transition-all 
          duration-300 
          ease-out
          hover:scale-[1.02]
          active:scale-[0.98]
          focus:outline-none 
          focus-visible:ring-1 
          focus-visible:ring-muted-400
        "
      >
        Load More
      </button>
    </motion.div>
  );
}