"use client";

import { motion } from "framer-motion";
import RollUpText from "./RollUpText"; // Make sure the path matches your RollUpText location

interface CTAButtonProps {
  label: string;
  href: string;
  /** 'header' for subtle navigation, 'main' for transparent frames, 'mobile' for solid full-width/overlay states */
  variant?: "header" | "main" | "mobile";
  className?: string;
}

export default function CTAButton({
  label,
  href,
  variant = "header",
  className = "",
}: CTAButtonProps) {
  
  // Custom variant configurations tailored for modern minimalist interfaces
  const styleConfig = {
    header: {
      buttonClass: "border-foreground/10 bg-transparent hover:border-foreground/40 text-foreground",
      textDefault: "text-muted-400",
      textHover: "text-foreground",
      iconClass: "text-foreground",
    },
    main: {
      buttonClass: "border-foreground/20 bg-transparent hover:border-foreground text-foreground",
      textDefault: "text-foreground/70",
      textHover: "text-foreground",
      iconClass: "text-foreground",
    },
    mobile: {
      // Solid foreground background, background-colored text, transparent border elements
      buttonClass: "border-transparent bg-foreground text-background",
      textDefault: "text-background",
      textHover: "text-background/90",
      iconClass: "text-background",
    },
  };

  const currentStyles = styleConfig[variant];

  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className={`t-body-sm group inline-flex items-center justify-center gap-[0.75rem] rounded-full border px-[1.25rem] py-[0.5rem] font-medium tracking-tight uppercase transition-colors duration-300 ease-out ${currentStyles.buttonClass} ${className}`}
    >
      {/* Left Area: Dynamic Roll-up Text */}
      <RollUpText
        label={label}
        height="h-[1.25rem]"
        className={`${currentStyles.textDefault} transition-colors duration-300`}
        hoverClassName={currentStyles.textHover}
      />

      {/* Right Area: Fixed Arrow Icon with spring interaction */}
      <motion.div 
        variants={{
          initial: { x: 0 },
          hover: { x: 2 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`flex h-[0.875rem] w-[0.875rem] items-center justify-center flex-shrink-0 ${currentStyles.iconClass}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-full w-full"
          fill="currentColor"
        >
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
        </svg>
      </motion.div>
    </motion.a>
  );
}