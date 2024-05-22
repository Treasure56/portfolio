"use client";

import { HTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

export type FotrmButtonProps = HTMLAttributes<HTMLButtonElement> & {};

export default function FormButton({ children, ...props }: FotrmButtonProps) {
  const { pending } = useFormStatus();
  return <button {...props}>{pending ? "...." : children}</button>;
}
