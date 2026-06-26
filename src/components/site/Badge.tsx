import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tone?: "blue" | "white";
  className?: string;
}

export function Badge({ children, tone = "blue", className = "" }: Props) {
  const tones = {
    blue: "bg-[#2148ff] text-white",
    white: "bg-white text-[#2148ff] border border-[#e6ecff]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
