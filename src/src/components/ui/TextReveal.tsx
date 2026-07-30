"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface TextRevealProps {
  words: string;
  as?: HeadingTag;
  className?: string;
  animateOnMount?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "3rem",
    rotateX: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TextReveal({ words, as = "h2", className = "", animateOnMount = false }: TextRevealProps) {
  const MotionTag = motion[as];
  const wordArray = words.split(" ");
  return (
    <MotionTag
      className={className}
      style={{ perspective: "1000px" }}
      aria-label={words}
      variants={containerVariants}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" as const }
        : { whileInView: "visible" as const, viewport: { once: true, margin: "-20%" } as const }
      )}
    >
      <span className="flex flex-wrap gap-x-[0.3em] gap-y-[0.25rem] md:gap-y-[0.5rem]" aria-hidden="true">
        {wordArray.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-flex whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`char-${charIndex}`}
                className="inline-block origin-bottom"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </MotionTag>
  );
}

export { TextReveal as TextGenerateEffect };