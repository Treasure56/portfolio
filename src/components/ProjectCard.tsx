import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

export type ProjectCardProps = {
  img: string;
  title: string;
  content: string;
  live?: string;
  github?: string;
};
export default function ProjectCard({
  img,
  title,
  content,
  live,
  github,
}: ProjectCardProps) {
  return (
    <div className="relative md:pb-20 md:pr-10 group animate-all">
      <Image
        src={img}
        alt=""
        width={350}
        height={350}
        className=" col-span-8 relative w-full md:w-10/12 h-60 object-cover rounded-lg shadow md:group-hover:shadow-lg md:group-hover:z-10"
      />
      <div className="border col-span-3 bg-[#ffffffbb] backdrop-blur-sm md:absolute shadow z-10 bottom-0 right-0 md:w-8/12 rounded p-4 group-hover:z-0">
        <p className="font-bold text-xl">{title}</p>
        <p className="opacity-80">{content}</p>
      </div>
      <div className="flex gap-4 p-3 md:absolute left-0 bottom-5 md:w-3/12">
        {live && (
          <a
            href={live}
            className="text-3xl text-black border"
            target="_blank"
            aria-label={`view ${title} live`}
          >
            <FaLink />
          </a>
        )}
        {github && (
          <a
            href={github}
            className="text-3xl text-black"
            target="_blank"
            aria-label={`view ${title} on github`}
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
}
