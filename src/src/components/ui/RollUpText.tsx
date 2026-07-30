"use client";

import { motion } from "framer-motion";

interface RollUpTextProps {
  label: string;
  /** Custom height for the text mask. Use rem values matching line-height. */
  height?: string;
  /** Tailwinds class for default text state (e.g., color, font-weight) */
  className?: string;
  /** Optional separate class for the hovered text state */
  hoverClassName?: string;
}

export default function RollUpText({
  label,
  height = "h-[1.5rem]",
  className = "text-muted-400",
  hoverClassName = "text-foreground",
}: RollUpTextProps) {
  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className={`relative block overflow-hidden px-[0.25rem] transition-colors duration-300 ${height} ${className} hover:${hoverClassName}`}
    >
      <motion.span
        variants={{
          initial: { y: 0 },
          hover: { y: "-50%" },
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 26,
        }}
        className="flex flex-col"
      >
        {/* State 1: Default Text */}
        <span className={`flex ${height} items-center`}>
          {label}
        </span>

        {/* State 2: Roll-up Text */}
        <span className={`flex ${height} items-center ${hoverClassName}`}>
          {label}
        </span>
      </motion.span>
    </motion.span>
  );
}