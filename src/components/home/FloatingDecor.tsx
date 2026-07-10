import { Coins, Gift, Trophy, Dices, Layers } from "lucide-react";

const items = [
  {
    Icon: Coins,
    className:
      "left-[-8%] top-[8%] h-16 w-16 sm:h-20 sm:w-20 text-brand-gold animate-float",
    iconSize: 30,
  },
  {
    Icon: Layers,
    className:
      "right-[-6%] top-[20%] h-14 w-14 sm:h-16 sm:w-16 text-brand-red animate-float-delay",
    iconSize: 26,
  },
  {
    Icon: Trophy,
    className:
      "left-[-10%] bottom-[26%] h-16 w-16 sm:h-20 sm:w-20 text-brand-orange animate-float-slow",
    iconSize: 30,
  },
  {
    Icon: Gift,
    className:
      "right-[-8%] bottom-[16%] h-14 w-14 sm:h-16 sm:w-16 text-brand-gold animate-float",
    iconSize: 26,
  },
  {
    Icon: Dices,
    className:
      "left-[6%] bottom-[-6%] h-12 w-12 sm:h-14 sm:w-14 text-white animate-float-delay",
    iconSize: 22,
  },
];

const sparks = [
  { left: "12%", delay: "0s" },
  { left: "34%", delay: "0.8s" },
  { left: "58%", delay: "1.6s" },
  { left: "78%", delay: "0.4s" },
  { left: "92%", delay: "1.2s" },
];

export function FloatingDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map(({ Icon, className, iconSize }, i) => (
        <div
          key={i}
          className={`glass absolute flex items-center justify-center rounded-2xl shadow-[0_20px_50px_-15px_rgba(255,106,0,0.45)] ${className}`}
        >
          <Icon size={iconSize} aria-hidden />
        </div>
      ))}

      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-brand-gold/80 animate-spark"
          style={{ left: s.left, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}
