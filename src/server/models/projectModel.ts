import { Schema, connection } from "mongoose";

const projectSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  live: {
    type: String,
  },
  github: {
    type: String,
  },
  // Optional extras shown on the public site. Existing projects work without them.
  category: {
    type: String,
    enum: ["web", "mobile", "ai", "ai-video"],
  },
  tech: {
    type: String,
  },
  video: {
    type: String,
  },
  role: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const ProjectModel = connection
  .useDb("portfolio")
  .model("project", projectSchema, "projects");

export default ProjectModel;
