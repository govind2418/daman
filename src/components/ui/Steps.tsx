import type { ReactNode } from "react";

export type Step = { title: string; description: ReactNode };

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-8 space-y-6">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange font-display text-sm font-bold text-white">
            {index + 1}
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-white">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
