const {
  addNewBooking,
  getBookings,
  getBooking,
  deleteBooking,
} = require("../../models/bookings.model");

const httpAddNewBooking = (req, res) => {
  try {
    const data = req.body;
    addNewBooking(data);
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getBookingList = async (req, res) => {
  try {
    const bookings = await getBookings();
    res.status(200).json({
      status: "Success",
      data: bookings,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

const searchBooking = async (req, res) => {
  try {
    const booking = await getBooking(req.params.id);
    res.status(200).json({
      status: "Success",
      data: booking,
    });
  } catch (error) {
    console.log('error');
    res.status(404).json({
      status: "Error",
      message: error,
    });
  }
};

const deleteBookingById = async (req, res) => {
  try {
    const booking = await deleteBooking(req.params.id);
    if (!booking) {
      res.status(404).json({
        status: "Error",
        message: "Booking not found",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Booking deleted successfully",
        data: booking,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

module.exports = { httpAddNewBooking, getBookingList, searchBooking, deleteBookingById };
