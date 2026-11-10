import { PiDownloadSimple } from "react-icons/pi";
import { about, owner } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="About" className="scroll-mt-20 border-y-[1.5px] border-ink bg-tint">
      <div className="site-container grid gap-10 py-20 md:grid-cols-12 md:gap-16 md:py-24">
        <Reveal className="md:col-span-4">
          <Heading parts={about.heading} className="[&_.mark]:bg-none [&_.mark]:text-brand-text" />
          <a href={owner.resume} download target="_blank" className="btn-outline mt-8">
            Download resume
            <PiDownloadSimple className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-8">
          <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed">
            {about.paragraphs.map((paragraph, i) => (
              <p key={paragraph.slice(0, 24)} className={i === 0 ? "font-display text-2xl leading-snug" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
