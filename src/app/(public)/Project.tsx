import Image from "next/image";
import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { work } from "@/data/site";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { splitFeatured, type SiteProject } from "@/server/projects";

export default function Project({ projects, ok }: { projects: SiteProject[]; ok: boolean }) {
  const { featured, rest } = splitFeatured(projects);

  return (
    <section id="Projects" className="site-container scroll-mt-20 py-20 md:py-28">
      <Reveal>
        <Heading parts={work.heading} />
        <p className="mt-4 max-w-[50ch] text-lg text-soft">{work.subtext}</p>
      </Reveal>

      {projects.length === 0 ? (
        <p role="status" className="pop mt-12 rounded-3xl bg-surface p-8 text-soft">
          {ok
            ? "No projects have been added yet."
            : "Projects could not be loaded right now. Please refresh the page in a moment."}
        </p>
      ) : (
        <div className="mt-14 flex flex-col gap-12">
          {featured.map((project, i) => (
            <Reveal key={project.id}>
              <FeaturedCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      )}

      {/* The rest of the projects live on the /projects page. */}
      {rest.length > 0 && (
        <Reveal className="mt-14 flex justify-center">
          <Link href="/projects" className="btn-outline !px-8 !py-4 !text-lg">
            {work.moreLabel}
            <PiArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </Reveal>
      )}
    </section>
  );
}

function FeaturedCard({ project, index }: { project: SiteProject; index: number }) {
  const href = `/projects/${project.id}`;
  return (
    <article className="pop grid items-center gap-10 rounded-3xl bg-surface p-6 md:grid-cols-12 md:gap-12 md:p-10 lg:p-12">
      <div className="md:col-span-5">
        <p className="font-display text-xl text-brand-text" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="display mt-2 text-[clamp(2.25rem,4vw,3.5rem)]">
          <span className="mark">{project.name}</span>
        </h3>
        {project.type && <p className="mt-3 font-display text-xl">{project.type}</p>}
        <p className="mt-5 line-clamp-4 leading-relaxed text-soft">{project.description}</p>

        {project.role && (
          <dl className="mt-6">
            <dt className="text-sm font-bold uppercase tracking-wide text-brand-text">My role</dt>
            <dd className="mt-1 text-lg font-semibold">{project.role}</dd>
          </dl>
        )}

        {project.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-medium"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={href} className="btn-brand" aria-label={`View case study: ${project.name}`}>
            View case study
            <PiArrowRight className="size-4" aria-hidden="true" />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label={`Open ${project.name} live site`}
            >
              Live site
              <PiArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="relative md:col-span-7">
        {project.period && (
          <p className="note absolute -top-9 right-2 rotate-2 md:-top-10" aria-label="Project period">
            {project.period}
          </p>
        )}
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className={cn(
            "pop-sm group block overflow-hidden rounded-2xl bg-paper transition-transform duration-500 ease-out hover:rotate-0",
            index % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"
          )}
        >
          <div className="relative aspect-[2/1]">
            <Image
              src={project.img}
              alt=""
              fill
              sizes="(min-width: 768px) 55vw, 95vw"
              className="object-cover object-top"
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
