import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const screenshotCount = 21;
const screenshots = Array.from({ length: screenshotCount }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/screenshots/daman-game-screenshot-${number}.png`,
    alt: `Daman Game platform screenshot ${index + 1}`,
  };
});

export function ScreenshotGallery() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Preview"
          title="See the platform"
          description="A look at the Daman Game interface across login, gameplay, and account screens."
        />
      </Container>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.src}
            className="relative aspect-[1290/2796] w-[220px] flex-none snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:w-[260px]"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 640px) 260px, 220px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
