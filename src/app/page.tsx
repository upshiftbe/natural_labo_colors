import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen pt-[72px]">
        {/* Hero content block */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:px-10 md:pt-24">
          <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:gap-12 lg:gap-16">
            {/* Left: headline */}
            <div className="flex flex-col justify-end">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-headline sm:text-5xl md:text-6xl lg:text-7xl">
                NATURAL <span className="text-accent">and</span> DEFINING
                COLORS.
              </h1>
            </div>
            {/* Right: paragraph + CTA */}
            <div className="flex flex-col justify-end gap-6 md:justify-end">
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Awaiting the final note in our digital symphony. Through
                innovative design and storytelling, we bring your brand&apos;s
                narrative to life, creating memorable experiences that resonate
                with your audience.
              </p>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-accent bg-transparent px-5 py-2.5 text-sm font-medium text-headline transition-colors hover:bg-accent hover:text-white"
              >
                Let&apos;s discuss
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Full-width hero image */}
        <div className="relative mt-12 h-[50vh] min-h-[320px] w-full overflow-hidden sm:mt-16 md:mt-24 md:h-[55vh] lg:h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
            alt="Modern interior — bright living space with contemporary furniture and art"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </main>
    </>
  );
}
