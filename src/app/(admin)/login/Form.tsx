"use client";

import { twMerge } from "tw-merge";
import { login } from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import FormButton from "@/components/FormButton";

export default function LoginForm() {
  const [formState, action] = useFormState(login, {});

  return (
    <form
      action={action}
      className="flex flex-col gap-2 w-full  py-10 px-3 max-w-[500px] bg-slate-300 rounded-md"
    >
      <p>{JSON.stringify(formState)}</p>
      <h1 className="font-bold text-3xl">Login</h1>
      <input
        name="passcode"
        type="number"
        placeholder="passcode"
        className="form-input"
      />
      <FormButton className={twMerge("btn-primary !rounded-md p-4")}>
        submit
      </FormButton>
    </form>
  );
}
