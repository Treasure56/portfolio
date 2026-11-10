import { experience } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="Experience" className="site-container scroll-mt-20 pb-20 md:pb-28">
      <Reveal>
        <Heading parts={experience.heading} />
      </Reveal>

      <ol className="mt-12 flex flex-col">
        {experience.items.map((job) => (
          <li key={job.company} className="border-t-[1.5px] border-ink py-8 last:border-b-[1.5px]">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl">{job.company}</h3>
                  {job.period && <p className="note mt-1">{job.period}</p>}
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg font-semibold text-brand-text">{job.role}</p>
                  <ul className="mt-3 flex max-w-[65ch] list-disc flex-col gap-2 pl-5 leading-relaxed text-soft marker:text-brand-text">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
