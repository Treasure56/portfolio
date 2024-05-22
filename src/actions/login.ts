"use server";
import connectDB from "@/server/connection";
import AdminModel from "@/server/models/adminModel";
import { LoginAction } from "@/types/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  formState: LoginAction,
  formData: FormData
): Promise<LoginAction> {
  const connected = await connectDB();
  if (connected) {
    const passcode = formData.get("passcode");
    if (!passcode || passcode.toString().trim() == "")
      return { error: "passcode is required" };
    let proceed = false;
    try {
      const admin = await AdminModel.findOne({ passcode });
      if (!admin) return { error: "invalid passcode entered" };
      cookies().set("access_token", admin._id.toString());
      proceed = true;
    } catch (e) {
      return { error: "connection error" };
    }
    if (proceed) {
      redirect("/dashboard");
    }
    return {};
  } else {
    return { error: "connection error" };
  }
}
