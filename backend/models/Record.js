const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", recordSchema);
