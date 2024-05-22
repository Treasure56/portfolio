"use server";

import connectDB from "@/server/connection";
import { cookies } from "next/headers";

export async function logout() {
  const connected = await connectDB();
  if (!connected) return false;
  cookies().delete("access_token");
  return true;
}
