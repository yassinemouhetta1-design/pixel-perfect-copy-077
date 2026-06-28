import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
}

export function Section({ children, className = "", container = true, ...rest }: Props) {
  return (
    <section className={className} {...rest}>
      {container ? (
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
