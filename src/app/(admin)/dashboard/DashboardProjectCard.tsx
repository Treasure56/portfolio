"use client";
import { deleteProject } from "@/actions/deleteProject";
import { ProjectCardProps } from "@/components/ProjectCard";
import { supabaseImage } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

export type Project = ProjectCardProps & {
  _id: string;
};

export default function DashboardProjectCard({
  _id,
  content,
  img,
  title,
  github,
  live,
}: Project) {
  const [deleted, setDeleted] = useState(false);

  async function delProject() {
    const del = await deleteProject(_id);
    if (!del) alert("failed to delete project");
    setDeleted(del);
  }

  if (!deleted)
    return (
      <tr className="">
        <td>
          <Image
            src={supabaseImage(img)}
            height={100}
            width={100}
            className=" w-20 h-20 rounded object-cover"
            alt=""
          />
        </td>
        <td>
          <div>{title}</div>
        </td>
        <td>
          <div>{github && <a href={github}>Open Github</a>}</div>
        </td>
        <td>
          <div className="flex gap-4">
            <button
              onClick={delProject}
              className=" text-red-500 flex gap-1 items-center"
            >
              <FaRegTrashCan />
              Delete
            </button>
            <Link
              href={`/dashboard/edit?id=${_id}`}
              className="text-secondary flex gap-1 items-center"
            >
              <FaPen />
              Edit
            </Link>
          </div>
        </td>
      </tr>
    );
}
