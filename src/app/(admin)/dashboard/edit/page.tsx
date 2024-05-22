import connectDB from "@/server/connection";
import ProjectModel from "@/server/models/projectModel";
import { notFound } from "next/navigation";
import EditForm from "./EditForm";

export type PageProps = {
  searchParams: { id: string };
};
export default async function Page({ searchParams }: PageProps) {
  await connectDB();
  const project = await ProjectModel.findById(searchParams.id).lean();
  if (!project) notFound();
  return (
    <div className="flex  justify-center w-full py-6">
      <EditForm {...project} _id={project._id.toString()} />;
    </div>
  );
}
