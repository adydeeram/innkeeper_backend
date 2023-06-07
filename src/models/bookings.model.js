const Bookings = require("./booking.mongo");
const Room = require("./rooms.mongo");

const addNewBooking = async (booking) => {
  const room = await Room.findOne({ roomNumber: booking.assignRoomNo });

  if (room) {
    room.roomStatus = false;
    await room.save();
  }
  await Bookings.create(booking);
};

const getBookings = async () => {
  const res = await Bookings.find();
  return res;
};

const getBooking = async (id) => {
  let res = {};
  res = await Bookings.findById(id);
  const roomDetails = await Room.findOne({ roomNumber: res.assignRoomNo });
  res.roomRate = roomDetails.perDayCharge;
  return res;
};

const deleteBooking = async (id) => {
  const res = await Bookings.findById(id);
  res.bookingStatus = false;
  res.save()
  return res;
};

module.exports = { addNewBooking, getBookings, getBooking, deleteBooking };
