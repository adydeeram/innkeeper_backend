const express = require("express");
const { httpCreateNewUser, httpLoginUser } = require("./user.controler");

const createNewUserRouter = express.Router();
const signInUserRouter = express.Router();

createNewUserRouter.post("/", httpCreateNewUser);
signInUserRouter.post("/", httpLoginUser);

module.exports = { createNewUserRouter, signInUserRouter };
