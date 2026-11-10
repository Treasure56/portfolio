import type { Metadata } from "next";
import Link from "next/link";
import { PiArrowLeft } from "react-icons/pi";
import { work } from "@/data/site";
import Heading from "@/components/Heading";
import ProjectGridCard from "@/components/ProjectGridCard";
import Reveal from "@/components/Reveal";
import { getProjects, splitFeatured } from "@/server/projects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | Treasure Onyenze",
  description: "Web apps, mobile apps and AI products built by Treasure Onyenze.",
};

export default async function ProjectsPage() {
  const { ok, projects } = await getProjects();
  // Featured projects first, then everything else.
  const { featured, rest } = splitFeatured(projects);
  const all = [...featured, ...rest];

  return (
    <section className="site-container py-10 md:py-16">
      <Link href="/#Projects" className="sticker hover:bg-tint">
        <PiArrowLeft className="size-4" aria-hidden="true" />
        Back home
      </Link>

      <Reveal>
        <Heading as="h1" parts={work.allHeading} className="mt-10" />
        <p className="mt-4 max-w-[50ch] text-lg text-soft">{work.allSubtext}</p>
      </Reveal>

      {all.length === 0 ? (
        <p role="status" className="pop mt-12 rounded-3xl bg-surface p-8 text-soft">
          {ok
            ? "No projects have been added yet."
            : "Projects could not be loaded right now. Please refresh the page in a moment."}
        </p>
      ) : (
        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={(i % 3) * 0.06}>
                <ProjectGridCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
