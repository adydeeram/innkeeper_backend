const express = require("express");

const { httpAddNewBooking, getBookingList, searchBooking, deleteBookingById } = require("./booking.controler");

const bookingRouter = express.Router();

bookingRouter.post("/", httpAddNewBooking);
bookingRouter.get("/", getBookingList);
bookingRouter.get("/:id", searchBooking);
bookingRouter.delete('/:id', deleteBookingById)

module.exports = bookingRouter;
