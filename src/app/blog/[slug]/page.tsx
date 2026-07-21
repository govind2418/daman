import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${slug}`;
  const publishedDate = new Date(post.date).toISOString();

  return (
    <article className="pb-20 pt-32 sm:pt-40">
      <Container className="max-w-2xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand-gold"
        >
          <ArrowLeft size={15} aria-hidden /> Back to blog
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="text-xs text-muted">
            {post.date} · {post.readTime}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="prose-invert mt-8 space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-white/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <RelatedLinks
        heading="Continue exploring"
        links={[
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "Leaderboard", href: "/leaderboard", description: "See this week's top-ranked players." },
          { label: "Rewards", href: "/rewards", description: "See what each reward tier unlocks." },
          { label: "Blog", href: "/blog", description: "Back to all articles." },
          { label: "About", href: "/about", description: "Our story and what we stand for." },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: publishedDate,
          dateModified: publishedDate,
          url,
          mainEntityOfPage: url,
          articleSection: post.category,
          publisher: {
            "@type": "Organization",
            name: siteConfig.fullName,
            logo: {
              "@type": "ImageObject",
              url: `${siteConfig.url}/icon.svg`,
            },
          },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />
    </article>
  );
}
