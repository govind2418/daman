import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="damanGradient" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#FF3B30" />
            <stop offset="55%" stopColor="#FF6A00" />
            <stop offset="100%" stopColor="#FFC857" />
          </linearGradient>
        </defs>
        <path
          d="M16 1c8.284 0 15 6.716 15 15s-6.716 15-15 15c-4.5 0-8.53-1.98-11.29-5.12 3.06 1.9 6.86 2.4 10.5 1.14 5.7-1.97 9.2-7.66 8.27-13.53-.77-4.9-4.63-8.85-9.5-9.72-5.55-.99-10.9 2.24-12.7 7.4C0.99 6.99 7.7 1 16 1Z"
          fill="url(#damanGradient)"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-white">
        Daman Game
      </span>
    </span>
  );
}
