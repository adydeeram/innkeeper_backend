const express = require("express");
const { httpCreateNewRoom, httpGetAllRooms, httpGetSigleRoom } = require("./rooms.controler");

const roomsRouter = express.Router();

roomsRouter.post("/", httpCreateNewRoom);
roomsRouter.get("/", httpGetAllRooms);
roomsRouter.get("/room-no/:id", httpGetSigleRoom);

module.exports = roomsRouter;
