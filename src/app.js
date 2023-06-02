const express = require("express");
const CORS = require("cors");
const bookingRouter = require("./routes/Booking/booking.router");
const roomsRouter = require("./routes/Rooms/rooms.router");

const app = express();

app.use(
  CORS({
    origin: [
      "http://localhost:5173",
      "https://innkeeper-frontend.vercel.app/",
    ],
  })
);
app.use(express.json());
app.use("/booking", bookingRouter);
app.use("/rooms", roomsRouter);

module.exports = app;
