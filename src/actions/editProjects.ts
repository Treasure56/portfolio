"use server";
import connectDB from "@/server/connection";
import ProjectModel from "@/server/models/projectModel";
import { CreateProjectAction } from "@/types/server";
import { supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createProjectSchema = z.object({
  title: z.string().min(5, "title is too short"),
  content: z.string().min(10, " content is too short"),
});

export async function editProject(
  formState: CreateProjectAction,
  formData: FormData
): Promise<CreateProjectAction> {
  const connected = await connectDB();
  if (connected) {
    const title = formData.get("title");
    const content = formData.get("content");
    const live = formData.get("live");
    const github = formData.get("github");
    const file = formData.get("file");
    const old_img = formData.get("old_img");
    const _id = formData.get("_id");

    const valid = createProjectSchema.safeParse({
      title,
      content,
    });
    if (!valid.success) {
      return {
        error: JSON.stringify(valid.error.flatten().fieldErrors),
      };
    }

    let _data: any;
    const fileName = (file as File).name.split(".");
    console.log(file);

    if (file && (file as File).size > 0) {
      const { data, error } = await supabase.storage
        .from("images")
        .remove([old_img as string]);

      const ext = fileName[fileName.length - 1].toLowerCase();
      if (!["png", "jpg", "jpeg"].includes(ext))
        return {
          error: "invalid image format",
        };

      const filePath = randomUUID() + "." + ext;
      const { data: d, error: _error } = await supabase.storage
        .from("images")
        .upload(filePath, file!, {
          upsert: false,
        });

      if (_error) return { error: "failed to uplad image" };
      _data = d;
    }

    let newProject: any;
    if (_data && _data.path) {
      newProject = await ProjectModel.findByIdAndUpdate(_id, {
        img: _data.path,
        content,
        title,
        live,
        github,
      });
    } else {
      newProject = await ProjectModel.findByIdAndUpdate(_id, {
        content,
        title,
        live,
        github,
      });
    }

    if (newProject) {
      revalidatePath("/dashboard");
      redirect("/dashboard");
    }

    return { error: "something went wrong" };
  } else {
    return { error: "connection error" };
  }
}
