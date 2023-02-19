const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    default: 100,
    min: 100,
    max: 999,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: false,
  },
  rocket: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// Connects launchesSchema with the "launches" collections
module.exports = mongoose.model("Launch", launchesSchema);
