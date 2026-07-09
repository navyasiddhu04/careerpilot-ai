const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    education: [
      {
        college: String,
        degree: String,
        branch: String,
        cgpa: String,
        year: String,
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        technologies: String,
        github: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

    certifications: [
      {
        title: String,
        issuer: String,
        year: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);