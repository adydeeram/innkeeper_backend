const {
  createNewRoom,
  getAllRooms,
  getSingleRoom,
} = require("../../models/rooms.model");
const jwt = require("jsonwebtoken");

const httpCreateNewRoom = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const data = req.body;
    createNewRoom(data);
    return res.status(201).json({
      message: "Room has been added successfully",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      data: error.message,
    });
  }
};

const httpGetAllRooms = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const rooms = await getAllRooms();
    return res.status(200).json({
      message: "Success",
      data: rooms,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      data: error.message,
    });
  }
};

const httpGetSigleRoom = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Error",
        message: "No bearer token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    const room = await getSingleRoom(req.params.id);
    return res.status(200).json({
      message: "Success",
      data: room,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      data: error.message,
    });
  }
};

module.exports = { httpCreateNewRoom, httpGetAllRooms, httpGetSigleRoom };
