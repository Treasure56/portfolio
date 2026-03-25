import ProjectModel from "@/server/models/projectModel";
import DashboardProjectCard from "./DashboardProjectCard";
import connectDB from "@/server/connection";
import Link from "next/link";

export default async function Page() {
  await connectDB();
  const projects = await ProjectModel.find().lean();
  if (!projects) {
    return (
      <div className="text-red-500 bg-red-50 border border-red-200 rounded-lg p-4">
        An error occurred while loading projects.
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#101010]">Projects</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {projects.length} project{projects.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <Link
          href="/dashboard/new"
          className="inline-flex items-center gap-2 bg-[#970846] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#7a0638] transition-colors duration-200 shadow-sm"
        >
          + New Project
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
              <th className="text-left px-4 py-3 font-semibold w-24">Photo</th>
              <th className="text-left px-4 py-3 font-semibold">Title</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">
                Github
              </th>
              <th className="text-right px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-gray-400">
                  No projects yet.{" "}
                  <Link href="/dashboard/new" className="text-[#970846] underline">
                    Add your first one.
                  </Link>
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <DashboardProjectCard
                  key={project._id.toString()}
                  {...project}
                  _id={project._id.toString()}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
