const mongoose = require("mongoose");
const validator = require("validator");

const ProblemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.split(" ").length <= 50;
        },
        message: "Title must not exceed 20 words.",
      },
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 2000,
    },
    category: {
      type: String,
      enum: [
        "Education",
        "Healthcare",
        "Infrastructure",
        "Environment",
        "Technology",
        "Others",
      ],
      required: true,
    },
    images: {
      type: [String],
    },
    videos: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((url) =>
            url.startsWith("https://storage.googleapis.com/")
          );
        },
        message: "All videos must be valid Google Cloud Storage URLs.",
      },
    },

    documents: {
      type: [String],
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    verified: { type: Boolean, default: false },
    verificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    assignedExperts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    votes: { type: Number, default: 0, min: 0 },
    upvotedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", ProblemSchema);
