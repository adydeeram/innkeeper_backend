const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  loginStatus: {
    type: Boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("Users", usersSchema);
