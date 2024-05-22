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

export async function createProject(
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

    const valid = createProjectSchema.safeParse({
      title,
      content,
    });
    if (!valid.success) {
      return {
        error: JSON.stringify(valid.error.flatten().fieldErrors),
      };
    }
    const fileName = (file as File).name.split(".");
    const ext = fileName[fileName.length - 1].toLowerCase();
    if (!["png", "jpg", "jpeg"].includes(ext))
      return {
        error: "invalid image format",
      };

    const filePath = randomUUID() + "." + ext;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(filePath, file!, {
        upsert: false,
      });

    if (error) return { error: "failed to uplad image" };

    const newProject = new ProjectModel({
      img: data.path,
      content,
      title,
      live,
      github,
    });

    const saved = await newProject.save();
    if (saved) {
      revalidatePath("/dashboard");
      redirect("/dashboard");
    }

    return { error: "something went wrong" };
  } else {
    return { error: "connection error" };
  }
}
