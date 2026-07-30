import { type TextareaHTMLAttributes, forwardRef } from "react";

type TextareaSize = "sm" | "md" | "lg";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: TextareaSize;
}

const sizeStyles: Record<TextareaSize, string> = {
  sm: "py-[0.4375rem] px-[0.75rem] text-caption rounded-lg",
  md: "py-[0.6875rem] px-4 text-body rounded-xl",
  lg: "py-[0.9375rem] px-5 text-body-lg rounded-2xl",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ inputSize = "md", className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full font-body bg-surface text-foreground placeholder:text-muted-foreground border border-border-light outline-none transition-colors duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 leading-relaxed resize-none ${sizeStyles[inputSize]} ${className}`}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
