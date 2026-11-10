import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { cta, hero, owner } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="site-container grid items-center gap-14 py-12 md:min-h-[calc(100dvh-68px)] md:grid-cols-12 md:gap-12 md:py-14">
      {/* Photo in a tilted frame with a handwritten note */}
      <Reveal className="order-2 md:order-1 md:col-span-5">
        <div className="relative mx-auto w-full max-w-[400px] md:mx-0">
          <div className="pop -rotate-2 rounded-[1.75rem] bg-paper p-3 pb-14">
            {/* The photo is a cut-out, so this colour is the backdrop behind you. */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-tint">
              <Image
                src={owner.photo}
                alt={`Portrait of ${owner.name}`}
                fill
                priority
                sizes="(min-width: 768px) 400px, 90vw"
                className="object-cover object-bottom"
              />
            </div>
            <p className="note absolute inset-x-0 bottom-3 text-center">{owner.name}</p>
          </div>
          <p className="sticker absolute -right-2 -top-5 max-w-[13.5rem] rotate-3 !rounded-2xl !bg-tint text-left md:-right-10">
            {hero.photoNote}
          </p>
        </div>
      </Reveal>

      <div className="order-1 md:order-2 md:col-span-7">
        <Reveal>
          <p className="text-lg font-semibold text-brand-text">
            {owner.name}, {owner.title}
          </p>
          <h1 className="display mt-4 text-[clamp(2.3rem,4.5vw,3.9rem)]">
            {hero.headline[0]} <span className="mark">{hero.headline[1]}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-soft">{hero.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="What I do">
            {hero.tags.map((tag) => (
              <li key={tag} className="sticker">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-4">
          <Link href="/#Projects" className="btn-brand">
            View my work
            <PiArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href={cta.href} className="btn-outline">
            {cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
