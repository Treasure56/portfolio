import { isValidObjectId } from "mongoose";
import connectDB from "@/server/connection";
import ProjectModel from "@/server/models/projectModel";
import { supabaseImage } from "@/utils/supabase";
import { projectCategories, projectDetails, work } from "@/data/site";

export type SiteProject = {
  id: string;
  /** "Haven" from "Haven - Service Provider Marketplace". */
  name: string;
  /** What it is, for example "Service Provider Marketplace". */
  type: string | null;
  description: string;
  /** Full image URL. */
  img: string;
  live: string | null;
  github: string | null;
  role: string | null;
  tech: string[];
  period: string | null;
  video: string | null;
  featured: boolean;
};

type ProjectDoc = {
  _id: { toString(): string };
  title: string;
  content: string;
  img: string;
  live?: string | null;
  github?: string | null;
  category?: string | null;
  tech?: string | null;
  video?: string | null;
  role?: string | null;
  featured?: boolean | null;
};

function toSiteProject(p: ProjectDoc): SiteProject {
  // Titles are stored as "Name - what it is" (dash or double space).
  const [rawName, ...rest] = String(p.title).split(/\s+[-–—]\s+|\s{2,}/);
  const name = rawName.trim();
  const extra = projectDetails[name.toLowerCase()] ?? {};
  const category = projectCategories.find((c) => c.value === p.category)?.label ?? null;
  const tech = String(p.tech ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    id: p._id.toString(),
    name,
    type: rest.join(" ").trim() || extra.type || category,
    description: String(p.content).replace(/[ \t]{2,}/g, " ").trim(),
    img: supabaseImage(p.img),
    live: p.live || null,
    github: p.github || null,
    role: p.role || extra.role || null,
    tech: tech.length > 0 ? tech : extra.tech ?? [],
    period: extra.period ?? null,
    video: p.video || null,
    featured: Boolean(p.featured),
  };
}

/**
 * All projects, newest first.
 * `ok` is false when the database could not be reached, so the page can
 * say so instead of pretending there are no projects.
 */
export async function getProjects(): Promise<{ ok: boolean; projects: SiteProject[] }> {
  try {
    const connected = await connectDB();
    if (!connected) return { ok: false, projects: [] };
    const docs = (await ProjectModel.find().lean()) as unknown as ProjectDoc[];
    return { ok: true, projects: docs.reverse().map(toSiteProject) };
  } catch (error) {
    console.error("Failed to load projects", error);
    return { ok: false, projects: [] };
  }
}

/** Splits projects into the large featured cards and the smaller grid. */
export function splitFeatured(projects: SiteProject[]) {
  let featured = projects.filter((p) => p.featured);
  if (featured.length === 0) {
    featured = work.featuredOrder
      .map((name) => projects.find((p) => p.name.toLowerCase() === name))
      .filter((p): p is SiteProject => Boolean(p));
  }
  if (featured.length === 0) featured = projects.slice(0, 4);
  const ids = new Set(featured.map((p) => p.id));
  return { featured, rest: projects.filter((p) => !ids.has(p.id)) };
}

export async function getProject(id: string): Promise<SiteProject | null> {
  if (!isValidObjectId(id)) return null;
  try {
    const connected = await connectDB();
    if (!connected) return null;
    const doc = (await ProjectModel.findById(id).lean()) as unknown as ProjectDoc | null;
    return doc ? toSiteProject(doc) : null;
  } catch (error) {
    console.error("Failed to load project", error);
    return null;
  }
}
