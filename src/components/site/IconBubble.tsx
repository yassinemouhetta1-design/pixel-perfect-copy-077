import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "blue" | "blue-solid" | "green" | "white";
  className?: string;
}

const sizes = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-16 w-16" };
const tones = {
  blue: "bg-[#e8eeff] text-[#2148ff]",
  "blue-solid": "bg-[#2148ff] text-white shadow-[0_8px_20px_-6px_rgb(33_72_255/0.5)]",
  green: "bg-[#2bb673] text-white shadow-[0_8px_20px_-6px_rgb(43_182_115/0.5)]",
  white: "bg-white text-[#2148ff] shadow-[var(--shadow-soft)]",
};

export function IconBubble({ children, size = "md", tone = "blue", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${sizes[size]} ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
