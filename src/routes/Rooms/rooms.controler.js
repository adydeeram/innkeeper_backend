const { createNewRoom, getAllRooms, getSingleRoom } = require("../../models/rooms.model");

const httpCreateNewRoom = (req, res) => {
  try {
    const data = req.body;
    createNewRoom(data);
    res.status(201).json({
      status: "Success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error,
    });
  }
};

const httpGetAllRooms = async (req, res) => {
  try {
    const rooms = await getAllRooms();
    res.status(200).json({
      status: "Success",
      data: rooms,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      data: error,
    });
  }
};

const httpGetSigleRoom = async (req,res) => {
  try {
    const room = await getSingleRoom(req.params.id)
    res.status(200).json({
      status: 'Success',
      data: room
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      data: error,
    });
  }
}

module.exports = { httpCreateNewRoom, httpGetAllRooms,httpGetSigleRoom };
