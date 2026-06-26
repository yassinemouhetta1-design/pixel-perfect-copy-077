import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "white" | "ghost";
type Size = "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "cta-blue cta-blue-hover",
  white: "bg-white text-[#2148ff] hover:bg-white/95 hover:-translate-y-px shadow-[0_8px_24px_-8px_rgb(33_72_255/0.25)]",
  ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur border border-white/25",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", size = "md", leftIcon, className = "", children, ...rest }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {leftIcon}
      {children}
    </button>
  ),
);
Button.displayName = "Button";
