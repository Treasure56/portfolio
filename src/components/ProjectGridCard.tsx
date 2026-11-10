import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import type { SiteProject } from "@/server/projects";

/** Compact project card used in the grid on the /projects page. */
export default function ProjectGridCard({ project }: { project: SiteProject }) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="pop-sm relative aspect-[2/1] overflow-hidden rounded-2xl bg-surface transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          src={project.img}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 95vw"
          className="object-cover object-top"
        />
      </div>
      <h2 className="mt-5 flex items-center gap-2 font-display text-2xl">
        {project.name}
        <PiArrowRight
          className="size-5 shrink-0 text-brand-text transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </h2>
      {project.type && <p className="mt-1 font-semibold text-brand-text">{project.type}</p>}
      <p className="mt-2 line-clamp-2 leading-relaxed text-soft">{project.description}</p>
    </Link>
  );
}
