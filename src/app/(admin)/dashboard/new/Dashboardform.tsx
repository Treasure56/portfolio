"use client";

import { twMerge } from "tw-merge";
import { createProject } from "@/actions/createProject";
import { useFormState, useFormStatus } from "react-dom";
import FormButton from "@/components/FormButton";

export default function DashboardForm() {
  const [formState, action] = useFormState(createProject, {});

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
        className="form-input"
      />
      <input
        placeholder="content"
        name="content"
        type="text"
        className="form-input"
      />
      <input name="live" type="url" className="form-input" placeholder="url" />
      <input
        placeholder="Github Link"
        name="github"
        type="url"
        className="form-input"
      />
      <FormButton className={twMerge("btn-primary !rounded-md p-4")}>
        submit
      </FormButton>
    </form>
  );
}
