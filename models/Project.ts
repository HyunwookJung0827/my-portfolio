import mongoose, { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  techStack: {
    type: [String],
  },
  link: {
    type: String,
  },
});

const Project = models.Project || model('Project', projectSchema);

export default Project;
