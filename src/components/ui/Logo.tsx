import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center", className)}>
      <Image
        src="/images/daman-game-logo.webp"
        alt="Daman Game"
        width={1241}
        height={284}
        className="block h-9 w-auto"
      />
    </span>
  );
}
