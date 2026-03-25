"use client";

import { twMerge } from "tailwind-merge";
import { useFormState } from "react-dom";
import FormButton from "@/components/FormButton";
import { ProjectCardProps } from "@/components/ProjectCard";
import { editProject } from "@/actions/editProjects";

export default function EditForm({
  content,
  img,
  title,
  github,
  live,
  _id,
}: ProjectCardProps & {
  _id: string;
}) {
  const [formState, action] = useFormState(editProject, {});

  return (
    <div className="flex justify-center">
      <form
        action={action}
        className="flex flex-col gap-5 w-full max-w-lg bg-white rounded-2xl shadow-md border border-gray-200 p-8"
      >
        <div>
          <h1 className="text-2xl font-bold text-[#101010]">Edit Project</h1>
          <p className="text-sm text-gray-400 mt-1">
            Update the details for <span className="font-medium text-gray-600">{title}</span>.
          </p>
        </div>

        {/* Status feedback */}
        {formState && Object.keys(formState).length > 0 && (
          <div
            className={twMerge(
              "text-sm px-4 py-3 rounded-lg border",
              (formState as any).error
                ? "bg-red-50 text-red-600 border-red-200"
                : "bg-green-50 text-green-700 border-green-200"
            )}
          >
            {(formState as any).error ?? (formState as any).message ?? JSON.stringify(formState)}
          </div>
        )}

        <hr className="border-gray-100" />

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Replace Image
          </label>
          <input name="file" type="file" className="form-input text-sm" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Title
          </label>
          <input
            placeholder="My Awesome Project"
            name="title"
            type="text"
            defaultValue={title}
            className="form-input"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Description
          </label>
          <input
            placeholder="A short description of the project…"
            name="content"
            type="text"
            defaultValue={content}
            className="form-input"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Live URL
          </label>
          <input
            name="live"
            type="url"
            defaultValue={live ?? ""}
            className="form-input"
            placeholder="https://myproject.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            GitHub Link
          </label>
          <input
            placeholder="https://github.com/user/repo"
            name="github"
            type="url"
            defaultValue={github ?? ""}
            className="form-input"
          />
        </div>

        <input type="hidden" value={img} name="old_img" />
        <input type="hidden" value={_id} name="_id" />

        <FormButton
          className={twMerge(
            "btn-primary !rounded-xl p-3.5 text-sm font-semibold mt-2"
          )}
        >
          Save Changes
        </FormButton>
      </form>
    </div>
  );
}

