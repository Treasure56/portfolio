import { supabaseImage } from "@/utils/supabase";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { LuArrowUpRight, LuLink } from "react-icons/lu";

export type ProjectCardProps = {
  img: string;
  title: string;
  content: string;
  live?: string | null;
  github?: string | null;
};
export default function ProjectCard({
  img,
  title,
  content,
  live,
  github,
}: ProjectCardProps) {
  return (
    <div className="   group animate-all rounded-lg overflow-hidden shadow-sm ">
      <Image
        src={supabaseImage(img)}
        alt=""
        width={700}
        height={600}
        className=" col-span-8 w-full object-cover overflow-hidden"
      />
      <div className=" col-span-3 bg-[#ffffffbb]  p-4">
        <p className="font-bold text-xl">{title}</p>
        <p className="opacity-80">{content}</p>
        <div className="flex gap-1 mt-2">
          {live && (
            <Link
              href={live}
              className="text-sm inline-flex items-center gap-1 text-black border border-primary px-3 py-1 rounded-3xl"
              target="_blank"
              aria-label={`view ${title} live`}
            >
              Preview
              <LuLink />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              className="text-sm  inline-flex items-center gap-1 px-3 py-1 rounded-3xl border bg-primary text-white"
              target="_blank"
              aria-label={`view ${title} on github`}
            >
              github
              <LuArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
