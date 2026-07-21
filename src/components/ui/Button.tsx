import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-[0_0.125rem_0.5rem_rgba(99,102,241,0.25)]",
  secondary:
    "bg-surface-secondary text-text-primary border border-border hover:bg-luxury-100 active:bg-luxury-200",
  outline:
    "bg-transparent text-brand-600 border border-brand-600 hover:bg-brand-50 active:bg-brand-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "py-[0.5rem] px-[1rem] text-[0.8125rem] gap-[0.375rem] rounded-[0.5rem]",
  md: "py-[0.75rem] px-[1.5rem] text-[0.9375rem] gap-[0.5rem] rounded-[0.75rem]",
  lg: "py-[1rem] px-[2rem] text-[1.0625rem] gap-[0.625rem] rounded-[1rem]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium leading-none transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
