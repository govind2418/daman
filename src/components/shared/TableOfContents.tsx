import { Container } from "@/components/ui/Container";

export type TocItem = { label: string; href: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="Table of contents" className="py-10">
      <Container className="max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 sm:p-8">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            On this page
          </h2>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
