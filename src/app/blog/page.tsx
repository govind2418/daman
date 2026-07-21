import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "News, product updates, and insights from the Daman Game team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="News & insights from Daman Game"
        description="Product updates, matchmaking deep-dives, and tournament recaps."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard as="article">
                  <div className="flex items-center gap-3">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-muted">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold">
                    Read article <ArrowRight size={15} aria-hidden />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "About", href: "/about", description: "Our story and what we stand for." },
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "Press", href: "/press", description: "Media resources and recent coverage." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.fullName} Blog`,
          url: `${siteConfig.url}/blog`,
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `${siteConfig.url}/blog/${post.slug}`,
            datePublished: new Date(post.date).toISOString(),
          })),
        }}
      />
    </>
  );
}
