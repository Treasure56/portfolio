"use client";

import { twMerge } from "tw-merge";
import { createProject } from "@/actions/createProject";
import { useFormState, useFormStatus } from "react-dom";
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
    <form
      action={action}
      className="flex flex-col gap-2 w-full  py-10 px-3 max-w-[500px] bg-slate-300 rounded-md"
    >
      <p>{JSON.stringify(formState)}</p>
      <h1 className="font-bold text-3xl">New portfolio</h1>
      <input name="file" type="file" className="form-input" />
      <input
        placeholder="title"
        name="title"
        type="text"
        defaultValue={title}
        className="form-input"
      />
      <input
        placeholder="content"
        name="content"
        type="text"
        defaultValue={content}
        className="form-input"
      />
      <input
        name="live"
        type="url"
        defaultValue={live ?? ""}
        className="form-input"
        placeholder="url"
      />
      <input
        placeholder="Github Link"
        name="github"
        type="url"
        defaultValue={github ?? ""}
        className="form-input"
      />
      <input type="hidden" value={img} name="old_img" />
      <input type="hidden" value={_id} name="_id" />
      <FormButton className={twMerge("btn-primary !rounded-md p-4")}>
        submit
      </FormButton>
    </form>
  );
}
