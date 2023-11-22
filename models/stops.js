const mongoose = require("mongoose");

const StopsSchema = new mongoose.Schema({
  stop: {
    type: Number,
    required: [true, "must provide  stop number"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "must provide location"],
    trim: true,
  },
  text: {
    type: String,
    required: [true, "must provide text"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "must provide image"],
    trim: true,
  },
});

module.exports = mongoose.model("Stop", StopsSchema);
