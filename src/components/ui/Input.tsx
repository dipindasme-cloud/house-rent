import { type InputHTMLAttributes, forwardRef } from "react";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "py-[0.4375rem] px-[0.75rem] text-[0.8125rem] rounded-lg",
  md: "py-[0.6875rem] px-4 text-[0.9375rem] rounded-xl",
  lg: "py-[0.9375rem] px-5 text-[1.0625rem] rounded-2xl",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "md", className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full font-body bg-surface text-foreground placeholder:text-muted-foreground border border-border outline-none transition-colors duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 leading-none ${sizeStyles[inputSize]} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
