import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  scope: {
    type: String,
    required: true,
  },

  features: [{
    type: String
  }],

  timeline: [{
    phase: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  }],

  cost: {
    minimum: {
      type: Number,
      required: true
    },
    maximum: {
      type: Number,
      required: true
    }
  },

  techStack: [{
    type: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export const Project = mongoose.model("Project", projectSchema);