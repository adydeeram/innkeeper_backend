const Rooms = require("./rooms.mongo");

const createNewRoom = async (room) => {
  await Rooms.create(room);
};
const getAllRooms = async () => {
  const res = await Rooms.find()
  return res
}
const getSingleRoom = async (roomNo) => {
  const res  = await Rooms.findOne({roomNumber : roomNo})
  return res
}

module.exports = { createNewRoom, getAllRooms, getSingleRoom };
