"use client";
import { deleteProject } from "@/actions/deleteProject";
import { ProjectCardProps } from "@/components/ProjectCard";
import { supabaseImage } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

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
  const [deleting, setDeleting] = useState(false);

  async function delProject() {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return;
    setDeleting(true);
    const del = await deleteProject(_id);
    if (!del) {
      alert("Failed to delete project. Please try again.");
      setDeleting(false);
      return;
    }
    setDeleted(del);
  }

  if (deleted) return null;

  return (
    <tr className="group hover:bg-[#970846]/5 transition-colors duration-150">
      {/* Thumbnail */}
      <td className="px-4 py-3">
        <Image
          src={supabaseImage(img)}
          height={56}
          width={56}
          className="w-14 h-14 rounded-lg object-cover border border-gray-200 shadow-sm"
          alt={title}
        />
      </td>

      {/* Title + Description */}
      <td className="px-4 py-3">
        <p className="font-semibold text-[#101010] leading-snug">{title}</p>
        {content && (
          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 max-w-xs">
            {content}
          </p>
        )}
      </td>

      {/* GitHub link */}
      <td className="px-4 py-3 hidden md:table-cell">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#51a8ff] hover:underline text-xs font-medium"
          >
            <FiExternalLink className="shrink-0" />
            GitHub
          </a>
        ) : (
          <span className="text-gray-300 text-xs">—</span>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-2">
          <Link
            href={`/dashboard/edit?id=${_id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#970846] border border-[#970846]/30 hover:bg-[#970846] hover:text-white transition-all duration-200"
          >
            <FaPen className="text-[10px]" />
            Edit
          </Link>
          <button
            onClick={delProject}
            disabled={deleting}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-red-500 border border-red-200 hover:bg-red-500 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaRegTrashCan className="text-[10px]" />
            {deleting ? "Deleting…" : "Delete"}
          </button>
        </div>
      </td>
    </tr>
  );
}
