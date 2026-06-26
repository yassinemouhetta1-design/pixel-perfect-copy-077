import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tone?: "white" | "soft" | "blue" | "green";
  hover?: boolean;
  children: ReactNode;
}

const tones = {
  white: "bg-white border border-[#eef1f8] shadow-[var(--shadow-card)]",
  soft: "bg-[#f4f7ff] border border-[#e6ecff]",
  blue: "bg-[#2148ff] text-white border border-[#2148ff] shadow-[0_20px_50px_-20px_rgb(33_72_255/0.5)]",
  green: "bg-[#eefbf3] border border-[#cfeedb]",
};

export function Card({ tone = "white", hover = false, className = "", children, ...rest }: Props) {
  return (
    <div
      className={`rounded-3xl ${tones[tone]} ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
