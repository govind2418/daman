"use client";

import { useEffect, useRef, useState } from "react";

const EASE_OUT_DURATION = 1400;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame: number;
    let hasAnimated = false;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / EASE_OUT_DURATION, 1);
        setDisplay(Math.round(value * easeOutExpo(progress)));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animate();
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div className="text-center">
      <p
        ref={ref}
        className="font-display text-4xl font-extrabold text-gradient-fire sm:text-5xl"
      >
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-muted">
        {label}
      </p>
    </div>
  );
}
