"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const tags = [
  { label: "Family home", icon: "home" },
  { label: "Office room", icon: "office" },
  { label: "Sublet house", icon: "sublet" },
  { label: "Co-live house", icon: "colive" },
  { label: "Luxury villa", icon: "villa" },
];

function TagIcon({ type }: { type: string }) {
  switch (type) {
    case "home":
      return (
        <svg width="14" height="13" viewBox="0 0 14 13" fill="currentColor">
          <path d="M7 0L0 5.2V13h5.2V8.4h3.6V13H14V5.2L7 0z" />
        </svg>
      );
    case "office":
      return (
        <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor">
          <path d="M0 15V0h13v15H8V9H5v6H0z" />
        </svg>
      );
    case "sublet":
      return (
        <svg width="14" height="13" viewBox="0 0 14 13" fill="currentColor">
          <path d="M7 0L0 5.2V13h5.2V8.4h3.6V13H14V5.2L7 0z" />
        </svg>
      );
    case "colive":
      return (
        <svg width="15" height="13" viewBox="0 0 15 13" fill="currentColor">
          <path d="M7.5 0L0 5.5V13h3.5V8.5h8V13H15V5.5L7.5 0z" />
        </svg>
      );
    case "villa":
      return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="currentColor">
          <path d="M7.5 0L0 6v8h5v-5h5v5h5V6L7.5 0z" />
        </svg>
      );
  }
}

export function Marquee() {
  const containerRef = useRef<HTMLUListElement>(null);

  useAnimationFrame((_time, delta) => {
    if (!containerRef.current) return;
    const current = parseFloat(
      containerRef.current.style.transform.replace("translateX(", "").replace("px)", "") || "0",
    );
    const speed = 0.05;
    let next = current - speed * delta;
    const itemWidth = 200;
    const totalWidth = tags.length * itemWidth;
    if (next <= -totalWidth) {
      next = 0;
    }
    containerRef.current.style.transform = `translateX(${next}px)`;
  });

  return (
    <section className="w-full overflow-hidden py-[4rem] bg-surface-secondary border-y border-border">
      <div className="max-w-[80rem] mx-auto">
        <div className="relative overflow-hidden">
          <ul
            ref={containerRef}
            className="flex items-center gap-[3.125rem] list-none m-0 p-0"
            style={{ willChange: "transform" }}
          >
            {[...Array(3)].flatMap((_, groupIdx) =>
              tags.map((tag, tagIdx) => (
                <li
                  key={`${groupIdx}-${tagIdx}`}
                  className="flex items-center gap-[0.625rem] shrink-0 border border-border rounded-[0.625rem] px-[1.125rem] py-[0.625rem] bg-surface"
                >
                  <span className="text-text-primary shrink-0">
                    <TagIcon type={tag.icon} />
                  </span>
                  <span className="text-[0.9375rem] md:text-[1rem] font-semibold text-text-primary leading-none whitespace-nowrap">
                    {tag.label}
                  </span>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
