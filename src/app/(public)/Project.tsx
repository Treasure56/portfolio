import ProjectCard from "@/components/ProjectCard";
export default function Project() {
  return (
    <section className="py-20 bg-slate-100">
      <h1 className="text-center text-2xl font-bold"> My Projects</h1>
      <p className="text-center opacity-80">
        inspiring projects i have worked on
      </p>
      <div className="app-container grid md:grid-cols-2 gap-10 py-6 relative">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    img: "/images/ecommerce.png",
    id: "1",
    title: "Electronics Shop",
    github: "https://github.com/electronicsshop.git",
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas
        cupiditate delectus amet dolorem deserunt eligendi, vero atque
        excepturi! Iusto tempore odio perferendis quae facilis, tenetur omnis
        aut veniam illo.`,
  },
  {
    img: "/images/ecommerce.png",
    id: "1",
    title: "Electronics Shop",
    github: "https://github.com/electronicsshop.git",
    live: "https://github.com/electronicsshop.git",
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas
        cupiditate delectus amet dolorem deserunt eligendi, vero atque
        excepturi! Iusto tempore odio perferendis quae facilis, tenetur omnis
        aut veniam illo.`,
  },
];
