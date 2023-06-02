const { createNewUser, userSignIn } = require("../../models/user.models");

const httpCreateNewUser = async (req, res) => {
  try {
    const data = req.body;
    await createNewUser(data);
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

const httpLoginUser = async (req, res) => {
  try {
    const data = req.body;
    const userData = await userSignIn(data);
    if (userData) {
      res.status(201).json({
        status: "Successfully logged in",
        data: userData,
      });
    } else {
      res.status(400).json({
        status: "User not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error,
    });
  }
};



module.exports = { httpCreateNewUser, httpLoginUser };
