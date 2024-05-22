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
});

const ProjectModel = connection
  .useDb("portfolio")
  .model("project", projectSchema, "projects");

export default ProjectModel;
