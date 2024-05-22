"use server";
import { connect } from "mongoose";

const connection = process.env.MONGO_CONNECTION_STRING ?? "";

export default async function connectDB() {
  try {
    await connect(connection);
    console.log("Db connection successful");
    return true;
  } catch (error) {
    console.error("DB connection failed", error);
    return false;
  }
}
