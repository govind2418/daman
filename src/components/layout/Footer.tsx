import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerLinks, siteConfig } from "@/lib/site";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Platform", links: [...footerLinks.platform] },
  { title: "Company", links: [...footerLinks.company] },
  { title: "Support", links: [...footerLinks.support] },
  { title: "Legal", links: [...footerLinks.legal] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface/60 pb-28 pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            Independent information guide only. This website does not operate games, process accounts, or provide an app download. Check local rules, provider terms, age eligibility, and play responsibly.
          </p>
        </div>
      </Container>
    </footer>
  );
}
