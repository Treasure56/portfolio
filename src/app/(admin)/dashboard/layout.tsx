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
    <section className="min-h-screen bg-[#f4f6f9]">
      <nav className="bg-[#101010] border-b border-white/10 sticky top-0 z-50">
        <div className="app-container flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <span className="text-[#970846] font-extrabold text-lg tracking-tight mr-4">
              Admin
            </span>
            <Link
              href="/dashboard"
              className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="/dashboard/new"
              className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
            >
              + New Project
            </Link>
          </div>
          <LogOutButton />
        </div>
      </nav>
      <main className="app-container py-8">{children}</main>
    </section>
  );
}
