"use server";

import connectDB from "@/server/connection";
import ProjectModel from "@/server/models/projectModel";

export async function deleteProject(_id: string) {
  const connected = await connectDB();

  if (!connected) {
    return false;
  }
  const deleted = await ProjectModel.findByIdAndDelete(_id);
  return !!deleted;
}
