import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, product updates, and insights from the Daman Game team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="News & insights from Daman Game"
        description="Product updates, matchmaking deep-dives, and tournament recaps."
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
    </>
  );
}
