const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomStatus: {
    type: Boolean,
    required: true,
  },
  roomDescription: {
    type: String,
    required: true,
  },
  perDayCharge: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Room", roomSchema);
