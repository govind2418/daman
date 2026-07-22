"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function MobileStickyCta() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className="glass-nav fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-white/10 px-4 py-3 lg:hidden">
      <Button
        href={siteConfig.externalAuthUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="sm"
        className="flex-1"
      >
        Log in
      </Button>
      <Button
        href={siteConfig.externalAuthUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="sm"
        className="flex-1"
      >
        Register
      </Button>
    </div>
  );
}
