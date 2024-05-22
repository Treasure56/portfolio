import connectDB from "@/server/connection";
import AdminModel from "@/server/models/adminModel";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import LogOutButton from "./LogOutButton";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connectDB();
  const _id = cookies().get("access_token");
  const admin = await AdminModel.findById(_id!.value);
  if (!admin) redirect("/login");
  return (
    <section>
      <nav className="flex gap-3 py-6 app-container justify-between items-center">
        <div className="flex gap-4">
          <Link href="/dashboard">My Project</Link>
          <Link href="/dashboard/new">New Project</Link>
        </div>
        <LogOutButton />
      </nav>
      {children}
    </section>
  );
}
