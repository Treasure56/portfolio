import Image from "next/image";
import { proof } from "@/data/site";
import { proofIcons } from "@/components/icons";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Each card is pinned at a slightly different angle, like notes on a board. */
const tilts = ["lg:-rotate-2", "lg:rotate-1", "lg:-rotate-1", "lg:rotate-2"];
const iconColors = [
  "bg-tint text-ink",
  "bg-brand text-brand-ink",
  "bg-ink text-paper",
  "bg-tint text-ink",
];

export default function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="site-container">
      <Reveal>
        <Heading parts={proof.heading} />
        <span id="proof-heading" className="sr-only">
          {proof.heading.join(" ")}
        </span>
        <p className="mt-4 max-w-[50ch] text-lg text-soft">{proof.subtext}</p>
      </Reveal>

      <ul className="mt-14 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {proof.items.map((item, i) => {
          const Icon = proofIcons[item.icon];
          return (
            <li key={item.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <div
                  className={cn(
                    "pop relative flex h-full flex-col rounded-3xl bg-white p-7 pt-9 transition-transform duration-300 ease-out hover:rotate-0",
                    tilts[i % tilts.length]
                  )}
                >
                  {/* The pin holding the card up. */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 size-6 -translate-x-1/2 rounded-full border-[1.5px] border-ink bg-brand shadow-[2px_2px_0_var(--ink)]"
                  />
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl border-[1.5px] border-ink",
                      iconColors[i % iconColors.length]
                    )}
                  >
                    {Icon && <Icon className="size-7" aria-hidden="true" />}
                  </span>
                  <h3 className="mt-5 font-display text-[1.35rem] leading-snug">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-soft">{item.note}</p>
                  {item.logo && (
                    <div className="mt-auto pt-6">
                      <Image
                        src={item.logo}
                        alt="Aptech"
                        width={110}
                        height={45}
                        unoptimized
                        className="h-9 w-auto"
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
