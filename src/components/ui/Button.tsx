import { type ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { buttonHoverTap } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 active:opacity-80",
  secondary:
    "bg-muted text-foreground border border-border hover:bg-surface-hover",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "py-2 px-4 text-[0.8125rem] gap-1.5 rounded-lg",
  md: "py-3 px-6 text-[0.9375rem] gap-2 rounded-xl",
  lg: "py-4 px-8 text-[1.0625rem] gap-2.5 rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={buttonHoverTap.whileHover}
      whileTap={buttonHoverTap.whileTap}
      transition={buttonHoverTap.transition}
      className={`inline-flex items-center justify-center font-body font-medium leading-none transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
