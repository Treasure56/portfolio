import { Schema, connection } from "mongoose";

const adminSchema = new Schema({
  passcode: {
    type: String,
    required: true,
  },
});

const AdminModel = connection
  .useDb("portfolio")
  .model("admin", adminSchema, "admins");

export default AdminModel;
