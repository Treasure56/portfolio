import { stack } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";

export default function Stack() {
  return (
    <section id="Stack" className="scroll-mt-20 border-y-[1.5px] border-ink bg-surface">
      <div className="site-container py-20 md:py-24">
        <Reveal>
          <Heading parts={stack.heading} />
          <p className="mt-4 max-w-[52ch] text-lg text-soft">{stack.subtext}</p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {stack.groups.map((group, i) => (
            <Reveal key={group.group} delay={(i % 2) * 0.08}>
              <h3 className="font-display text-2xl">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="sticker">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
