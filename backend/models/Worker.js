const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], // array of skills
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Worker", workerSchema);