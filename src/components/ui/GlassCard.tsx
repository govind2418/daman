import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  as?: "div" | "article" | "li";
}

export function GlassCard({
  children,
  className,
  glow = true,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06]",
        glow && "border-glow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
