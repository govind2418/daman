"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question} className="glass overflow-hidden rounded-2xl">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden
                  size={18}
                  className={cn(
                    "shrink-0 text-brand-gold transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-2 inline-flex items-center gap-1.5 px-5 pb-4 text-sm font-semibold text-brand-gold hover:underline"
                  >
                    {item.link.label}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                )}
                {!item.link && <div className="pb-4" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
