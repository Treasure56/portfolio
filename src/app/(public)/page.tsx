import { getProjects } from "@/server/projects";
import Hero from "./Hero";
import Companies from "./Companies";
import Project from "./Project";
import Proof from "./Proof";
import Services from "./Services";
import Experience from "./Experience";
import Stack from "./Stack";
import AiCreative from "./AiCreative";
import Principles from "./Principles";
import About from "./About";
import Contact from "./Contact";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { ok, projects } = await getProjects();

  return (
    <>
      <Hero />
      <Companies />
      <Project projects={projects} ok={ok} />
      <Proof />
      <Services />
      <Experience />
      <Stack />
      <AiCreative />
      <Principles />
      <About />
      <Contact />
    </>
  );
}
