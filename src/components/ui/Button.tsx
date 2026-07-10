import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-red to-brand-orange text-white shadow-[0_8px_30px_-8px_rgba(255,59,48,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(255,106,0,0.75)] hover:-translate-y-0.5",
  secondary:
    "glass text-white hover:bg-white/10 hover:-translate-y-0.5",
  outline:
    "border border-white/20 text-white hover:border-brand-orange/70 hover:text-brand-gold hover:-translate-y-0.5",
  ghost: "text-muted hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps<T extends ElementType> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>;

export function Button<T extends ElementType = "button">({
  variant = "primary",
  size = "md",
  href,
  icon,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
