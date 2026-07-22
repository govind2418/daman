"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass-nav">
        <Container>
          <nav
            className="flex h-18 items-center justify-between py-3.5"
            aria-label="Primary"
          >
            <Link href="/" aria-label={"Daman Game home"}>
              <Logo />
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium tracking-wide transition-colors hover:text-brand-gold",
                        active ? "text-brand-gold" : "text-white/80",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                href={siteConfig.externalAuthUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                Log in
              </Button>
              <Button
                href={siteConfig.externalAuthUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                Register
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="glass-nav border-t border-white/5 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3 border-t border-white/5 pt-4">
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
          </Container>
        </div>
      )}
    </header>
  );
}
