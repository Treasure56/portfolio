import ProjectModel from "@/server/models/projectModel";
import DashboardProjectCard from "./DashboardProjectCard";
import connectDB from "@/server/connection";

export default async function Page() {
  await connectDB();
  const projects = await ProjectModel.find().lean();
  if (!projects) {
    return <div>an error occured</div>;
  }
  // console.log(projects);

  return (
    <div className="app-container py-6">
      <table className=" [&_div]:p-2">
        <thead>
          <tr className="font-bold">
            <td>
              <div>photo</div>
            </td>
            <td>
              <div>Title</div>
            </td>
            <td>
              <div>Github Link</div>
            </td>
            <td>
              <div>Action</div>
            </td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <DashboardProjectCard
              key={project._id.toString()}
              {...project}
              _id={project._id.toString()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
