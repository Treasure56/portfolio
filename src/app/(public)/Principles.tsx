import { principles } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";

export default function Principles() {
  return (
    <section className="site-container py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Heading parts={principles.heading} />
          </div>
        </Reveal>

        <ol className="flex flex-col md:col-span-8">
          {principles.items.map((item, i) => (
            <li key={item.title} className="border-t border-line py-7 first:border-t-0 first:pt-0">
              <Reveal>
                <div className="flex gap-6">
                  <span className="font-display text-3xl text-brand-text" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-lg leading-relaxed text-soft">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
