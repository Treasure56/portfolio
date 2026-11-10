import Link from "next/link";
import { PiArrowRight, PiCheck } from "react-icons/pi";
import { cta, services } from "@/data/site";
import { serviceIcons } from "@/components/icons";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Card colours, in order: dark, raspberry, pink. */
const cardStyles = [
  { card: "bg-ink text-paper", check: "text-tint", button: "bg-tint text-ink" },
  { card: "bg-brand text-brand-ink", check: "text-tint", button: "bg-paper text-ink" },
  { card: "bg-tint text-ink", check: "text-brand-text", button: "bg-brand text-brand-ink" },
];

export default function Services() {
  return (
    <section id="Services" className="site-container scroll-mt-20 py-20 md:py-28">
      <Reveal>
        <Heading parts={services.heading} />
        <p className="mt-4 max-w-[52ch] text-lg text-soft">{services.subtext}</p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {services.cards.map((card, i) => {
          const style = cardStyles[i % cardStyles.length];
          const Icon = serviceIcons[i % serviceIcons.length];
          return (
            <Reveal key={card.title} delay={i * 0.08} className="h-full">
              <article className={cn("pop flex h-full flex-col rounded-3xl p-8", style.card)}>
                <Icon className="size-10" aria-hidden="true" />
                <h3 className="mt-5 font-display text-3xl">{card.title}</h3>
                <p className="mt-3 leading-relaxed opacity-85">{card.summary}</p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 font-medium leading-snug">
                      <PiCheck className={cn("mt-0.5 size-5 shrink-0", style.check)} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-9">
                  <Link
                    href={cta.href}
                    className={cn("btn", style.button)}
                    aria-label={`${cta.label}: ${card.title}`}
                  >
                    {cta.label}
                    <PiArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-col gap-6 rounded-3xl border-[1.5px] border-dashed border-ink bg-paper p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="font-display text-3xl">{services.unsure.heading}</h3>
            <p className="mt-2 text-lg text-soft">{services.unsure.text}</p>
          </div>
          <Link href={cta.href} className="btn-brand shrink-0">
            {cta.label}
            <PiArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
