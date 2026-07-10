import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { Newsletter } from "@/components/home/Newsletter";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <StatsSection />
      <Testimonials />
      <FaqPreview />
      <Newsletter />
      <CtaBand />
    </>
  );
}
