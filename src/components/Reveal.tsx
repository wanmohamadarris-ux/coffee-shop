"use client";

import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  as?: "div" | "section" | "span";
};

export default function Reveal({ children, className, delay, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={clsx("reveal", delay && `reveal-delay-${delay}`, className)}
    >
      {children}
    </Tag>
  );
}
