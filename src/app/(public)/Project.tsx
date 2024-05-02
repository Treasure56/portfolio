import ProjectCard from "@/components/ProjectCard";
export default function Project() {
  return (
    <section className="py-20 bg-slate-100" id="Projects">
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
    content: `Explore our online electronics store for cutting-edge gadgets, from smartphones to smart home devices. Discover convenience and innovation today!`,
  },
  {
    img: "/images/ecommerce.png",
    id: "1",
    title: "Restaurant",
    github: "https://github.com/electronicsshop.git",
    live: "https://github.com/electronicsshop.git",
    content: `Order delicious meals online! Explore our wide menu of mouthwatering dishes and enjoy convenient delivery straight to your doorstep.`,
  },
];
