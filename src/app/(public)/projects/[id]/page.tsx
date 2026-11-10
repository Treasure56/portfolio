import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeft, PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { cta } from "@/data/site";
import Reveal from "@/components/Reveal";
import { getProject, getProjects } from "@/server/projects";

export const dynamic = "force-dynamic";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | Treasure Onyenze`,
    description: project.description.slice(0, 155),
    openGraph: { images: [{ url: project.img }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.id);
  if (!project) notFound();

  const { projects } = await getProjects();
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  const facts = [
    { label: "My role", value: project.role },
    { label: "When", value: project.period },
  ].filter((f) => f.value);

  return (
    <article className="site-container py-10 md:py-16">
      <Link href="/projects" className="sticker hover:bg-tint">
        <PiArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <Reveal>
        <header className="mt-10">
          <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)]">
            <span className="mark">{project.name}</span>
          </h1>
          {project.type && <p className="mt-4 font-display text-2xl md:text-3xl">{project.type}</p>}
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="pop mt-10 overflow-hidden rounded-3xl bg-surface">
          {project.video ? (
            <video
              src={project.video}
              poster={project.img}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
            />
          ) : (
            <Image
              src={project.img}
              alt={`Screenshot of ${project.name}`}
              width={1600}
              height={800}
              priority
              sizes="(min-width: 1280px) 1184px, 95vw"
              className="h-auto w-full"
            />
          )}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <h2 className="font-display text-3xl">About the project</h2>
          <p className="mt-5 max-w-[65ch] whitespace-pre-line text-lg leading-relaxed text-soft">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <div className="pop flex flex-col gap-7 rounded-3xl bg-surface p-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <h2 className="text-sm font-bold uppercase tracking-wide text-brand-text">
                  {fact.label}
                </h2>
                <p className="mt-1 text-lg font-semibold">{fact.value}</p>
              </div>
            ))}
            {project.tech.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wide text-brand-text">
                  Tech used
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-sm font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  Live site
                  <PiArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub
                  <PiArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
              {!project.live && !project.github && (
                <p className="text-soft">
                  This is a private client project, so there is no public link.{" "}
                  <Link href={cta.href} className="font-semibold text-brand-text underline">
                    Ask me about it
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {next && (
        <Link
          href={`/projects/${next.id}`}
          className="group mt-20 flex items-center justify-between gap-6 border-t-[1.5px] border-ink pt-8"
        >
          <span>
            <span className="note block">Next project</span>
            <span className="display mt-1 block text-[clamp(1.75rem,4vw,3rem)]">{next.name}</span>
          </span>
          <span className="pop-sm flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-brand-ink transition-transform duration-300 group-hover:translate-x-1">
            <PiArrowRight className="size-6" aria-hidden="true" />
          </span>
        </Link>
      )}
    </article>
  );
}
