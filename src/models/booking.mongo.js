const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  costumerName: {
    type: String,
    require: true,
  },
  emailAddress: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  numberOfPersons: {
    type: Number,
    require: true,
  },
  assignRoomNo  : {
    type: Number,
    require: true,
  },
  bookingStatus: {
    type: Boolean,
    require: true,
  },
  bookingDate: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
