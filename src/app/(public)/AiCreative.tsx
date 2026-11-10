import Image from "next/image";
import { aiCreative } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";

/** AI adverts, visuals and videos. Hidden until samples are added in site.ts. */
export default function AiCreative() {
  if (aiCreative.samples.length === 0) return null;

  return (
    <section id="AI" className="site-container scroll-mt-20 py-20 md:py-28">
      <Reveal>
        <Heading parts={aiCreative.heading} />
        <p className="mt-4 max-w-[52ch] text-lg text-soft">{aiCreative.subtext}</p>
      </Reveal>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aiCreative.samples.map((sample, i) => (
          <li key={sample.src}>
            <Reveal delay={(i % 3) * 0.06}>
              <figure>
                <div className="pop-sm relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                  {sample.kind === "video" ? (
                    <video
                      src={sample.src}
                      poster={sample.poster}
                      controls
                      playsInline
                      preload="none"
                      className="size-full object-cover"
                    />
                  ) : (
                    <Image
                      src={sample.src}
                      alt={sample.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 95vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <figcaption className="mt-4 font-display text-xl">{sample.title}</figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
