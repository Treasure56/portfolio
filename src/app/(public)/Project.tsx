import ProjectCard from "@/components/ProjectCard";
import connectDB from "@/server/connection";
import ProjectModel from "@/server/models/projectModel";
export default async function Project() {
  await connectDB();
  const projects = await ProjectModel.find().lean();
  if (!projects) {
    return <div>an error occured</div>;
  }
  console.log(projects);
  return (
    <section className="py-20 bg-slate-100" id="Projects">
      <h1 className="text-center text-2xl font-bold"> My Projects</h1>
      <p className="text-center opacity-80">
        inspiring projects i have worked on
      </p>
      <div className="app-container grid md:grid-cols-2 gap-10 py-6 relative">
        {projects.map((project) => (
          <ProjectCard key={project._id.toString()} {...project} />
        ))}
      </div>
    </section>
  );
}
