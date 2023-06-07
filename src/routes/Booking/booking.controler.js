const {
  addNewBooking,
  getBookings,
  getBooking,
  deleteBooking,
} = require("../../models/bookings.model");
const jwt = require("jsonwebtoken");

const httpAddNewBooking = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const data = req.body;
    await addNewBooking(data);
    return res.status(201).json({ data: data });
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getBookingList = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const bookings = await getBookings();
    return res.status(200).json({
      status: "Success",
      data: bookings,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

const searchBooking = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const booking = await getBooking(req.params.id);
    return res.status(200).json({
      status: "Success",
      data: booking,
    });
  } catch (error) {
    console.log("error");
    return res.status(404).json({
      status: "Error",
      message: error.message,
    })
  }
};

const deleteBookingById = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const booking = await deleteBooking(req.params.id);
    if (!booking) {
      return res.status(404).json({
        status: "Error",
        message: "Booking not found",
      });
    } else {
      return res.status(200).json({
        status: "Success",
        message: "Booking deleted successfully",
        data: booking,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = {
  httpAddNewBooking,
  getBookingList,
  searchBooking,
  deleteBookingById,
};
