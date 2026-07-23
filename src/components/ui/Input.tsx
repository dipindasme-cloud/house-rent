import { type InputHTMLAttributes, forwardRef } from "react";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "py-[0.4375rem] px-[0.75rem] text-[0.8125rem] rounded-[0.5rem]",
  md: "py-[0.6875rem] px-[1rem] text-[0.9375rem] rounded-[0.75rem]",
  lg: "py-[0.9375rem] px-[1.25rem] text-[1.0625rem] rounded-[1rem]",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "md", className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full bg-(--surface) text-(--foreground) placeholder:text-(--muted-foreground) border border-(--border) outline-none transition-colors duration-200 focus:border-(--primary) focus:ring-[0.125rem] focus:ring-(--primary)/20 leading-none ${sizeStyles[inputSize]} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
